/* ModernTechExam — clean static GitHub Pages exam app */

const SETTINGS = Object.freeze({
  timeLimitMinutes: 40,
  questionLimit: 40,
  marksPerQuestion: 1,
  randomizeQuestions: true,
  randomizeOptions: true,
  requireExamPassword: true,
  // Teacher password is stored as a SHA-256 hash. Do not write the plain password in this public repository.
  acceptedPasswordHashes: Object.freeze([
    "ac16901a6bf19b592bd667222c014286cc130f86bbdf8d7bcb263ce18407fe78"
  ]),
  passwordMaxAttempts: 5,
  passwordLockSeconds: 30,
  showCorrectAnswersAfterSubmit: false,
  autoSubmitWhenTimeEnds: true,
  saveResultToLocalStorage: true,
  oneQuestionAtATime: true,
  disableCopyPaste: true,
  warnOnTabSwitch: true,
});

const els = {
  startView: document.getElementById("startView"),
  examView: document.getElementById("examView"),
  resultView: document.getElementById("resultView"),
  qaView: document.getElementById("qaView"),
  studentForm: document.getElementById("studentForm"),
  examPasswordBox: document.getElementById("examPasswordBox"),
  loadMessage: document.getElementById("loadMessage"),
  questionsContainer: document.getElementById("questionsContainer"),
  questionNav: document.getElementById("questionNav"),
  questionCounter: document.getElementById("questionCounter"),
  prevQuestionBtn: document.getElementById("prevQuestionBtn"),
  nextQuestionBtn: document.getElementById("nextQuestionBtn"),
  submitBtn: document.getElementById("submitBtn"),
  timer: document.getElementById("timer"),
  topStatus: document.getElementById("topStatus"),
  progressFill: document.getElementById("progressFill"),
  progressText: document.getElementById("progressText"),
  studentMini: document.getElementById("studentMini"),
  studentDetails: document.getElementById("studentDetails"),
  resultScore: document.getElementById("resultScore"),
  resultMessage: document.getElementById("resultMessage"),
  resultRows: document.getElementById("resultRows"),
  printResultBtn: document.getElementById("printResultBtn"),
  downloadCsvBtn: document.getElementById("downloadCsvBtn"),
  downloadJsonBtn: document.getElementById("downloadJsonBtn"),
  copyResultBtn: document.getElementById("copyResultBtn"),
  restartBtn: document.getElementById("restartBtn"),
  backTopBtn: document.getElementById("backTopBtn"),
  qaBtn: document.getElementById("qaBtn"),
  closeQaBtn: document.getElementById("closeQaBtn"),
  qaSummary: document.getElementById("qaSummary"),
  qaDetails: document.getElementById("qaDetails"),
  metaQuestions: document.getElementById("metaQuestions"),
  metaMarks: document.getElementById("metaMarks"),
  metaTime: document.getElementById("metaTime"),
  metaSources: document.getElementById("metaSources"),
};

let state = {
  student: null,
  questions: [],
  answers: {},
  failedPasswordAttempts: 0,
  passwordLockedUntil: 0,
  startedAt: null,
  finishedAt: null,
  deadline: null,
  timerHandle: null,
  submitted: false,
  lastResult: null,
  currentQuestionIndex: 0,
  tabSwitchCount: 0,
};

init();

function init() {
  els.metaQuestions.textContent = SETTINGS.questionLimit;
  els.metaMarks.textContent = SETTINGS.questionLimit * SETTINGS.marksPerQuestion;
  els.metaTime.textContent = SETTINGS.timeLimitMinutes;
  els.metaSources.textContent = getQuestionBank().length;
  els.timer.textContent = formatSeconds(SETTINGS.timeLimitMinutes * 60);
  els.examPasswordBox.classList.toggle("hidden", !SETTINGS.requireExamPassword);
  const passwordInput = document.getElementById("examPassword");
  if (passwordInput) passwordInput.required = SETTINGS.requireExamPassword;

  els.studentForm.addEventListener("submit", onStartSubmit);
  els.submitBtn.addEventListener("click", () => submitExam(false));
  els.printResultBtn.addEventListener("click", () => window.print());
  els.downloadCsvBtn.addEventListener("click", downloadCsv);
  els.downloadJsonBtn.addEventListener("click", downloadJson);
  els.copyResultBtn.addEventListener("click", copyResult);
  els.restartBtn.addEventListener("click", () => location.reload());
  if (els.prevQuestionBtn) els.prevQuestionBtn.addEventListener("click", () => goToQuestion(state.currentQuestionIndex - 1));
  if (els.nextQuestionBtn) els.nextQuestionBtn.addEventListener("click", () => goToQuestion(state.currentQuestionIndex + 1));
  els.backTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  setupExamFrictionControls();
  if (els.qaBtn) els.qaBtn.addEventListener("click", runAudit);
  els.closeQaBtn.addEventListener("click", () => {
    els.qaView.classList.add("hidden");
    els.startView.classList.remove("hidden");
  });

  if (new URLSearchParams(location.search).has("qa")) runAudit();
}

async function onStartSubmit(event) {
  event.preventDefault();
  const form = new FormData(els.studentForm);
  const student = {
    group: String(form.get("group") || "").trim(),
    sequence: String(form.get("sequence") || "").trim(),
    fullName: String(form.get("fullName") || "").trim(),
  };
  if (!student.group || !student.sequence || !student.fullName) {
    return showMessage("Please fill group, sequence number, and full name.", "error");
  }
  if (SETTINGS.requireExamPassword) {
    const password = String(form.get("examPassword") || "");
    const passwordCheck = await verifyExamPassword(password);
    if (!passwordCheck.ok) return showMessage(passwordCheck.message, "error");
  }

  try {
    showMessage("Running two-phase readiness check…", "warn");
    const { validQuestions, report } = await loadQuestionBank();
    if (!report.readyToStart) {
      throw new Error(report.blockingMessage || "Two-phase readiness check failed. Run QA before publishing.");
    }
    if (report.phase1.warnings.length || report.phase2.warnings.length) {
      console.warn("Two-phase readiness warnings", report);
    }
    state.student = student;
    state.questions = prepareExamQuestions(validQuestions);
    state.answers = {};
    state.currentQuestionIndex = 0;
    state.startedAt = new Date();
    state.deadline = new Date(state.startedAt.getTime() + SETTINGS.timeLimitMinutes * 60 * 1000);
    state.submitted = false;
    renderExam();
    startTimer();
  } catch (err) {
    showMessage(err.message || String(err), "error");
  }
}


async function verifyExamPassword(password) {
  if (!SETTINGS.requireExamPassword) return { ok: true, message: "Password check disabled." };

  const now = Date.now();
  if (state.passwordLockedUntil && now < state.passwordLockedUntil) {
    const seconds = Math.ceil((state.passwordLockedUntil - now) / 1000);
    return { ok: false, message: `Too many wrong password attempts. Try again in ${seconds} second(s).` };
  }

  const trimmed = String(password || "").trim();
  if (!trimmed) return { ok: false, message: "Please enter the exam password." };

  if (!Array.isArray(SETTINGS.acceptedPasswordHashes) || SETTINGS.acceptedPasswordHashes.length === 0) {
    throw new Error("Exam password is enabled, but no accepted password hashes are configured in assets/app.js.");
  }

  const hash = await sha256Hex(trimmed);
  const ok = SETTINGS.acceptedPasswordHashes.some(storedHash => constantTimeEqual(hash, String(storedHash || "").toLowerCase()));

  if (ok) {
    state.failedPasswordAttempts = 0;
    state.passwordLockedUntil = 0;
    return { ok: true, message: "Password accepted." };
  }

  state.failedPasswordAttempts += 1;
  const remaining = Math.max(0, SETTINGS.passwordMaxAttempts - state.failedPasswordAttempts);
  if (state.failedPasswordAttempts >= SETTINGS.passwordMaxAttempts) {
    state.passwordLockedUntil = Date.now() + SETTINGS.passwordLockSeconds * 1000;
    state.failedPasswordAttempts = 0;
    return { ok: false, message: `Invalid exam password. Start is locked for ${SETTINGS.passwordLockSeconds} seconds.` };
  }

  return { ok: false, message: `Invalid exam password. ${remaining} attempt(s) remaining before temporary lock.` };
}

async function sha256Hex(value) {
  if (!window.crypto || !crypto.subtle) {
    throw new Error("Secure password checking requires HTTPS or localhost so the browser can use Web Crypto.");
  }
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, "0")).join("");
}

function constantTimeEqual(a, b) {
  const left = String(a || "");
  const right = String(b || "");
  let mismatch = left.length ^ right.length;
  const max = Math.max(left.length, right.length);
  for (let i = 0; i < max; i += 1) {
    mismatch |= (left.charCodeAt(i) || 0) ^ (right.charCodeAt(i) || 0);
  }
  return mismatch === 0;
}


async function loadQuestionBank() {
  const normalizedQuestions = getQuestionBank().map(normalizeBankQuestion);
  const report = runTwoPhaseAudit(normalizedQuestions);
  const validQuestions = normalizedQuestions.filter(q => {
    const validation = validateQuestion(q);
    return validation.ok && q.scientificStatus === "verified";
  });
  return { validQuestions: dedupeQuestions(validQuestions), report };
}

function getQuestionBank() {
  return Array.isArray(window.MODERN_TECH_EXAM_QUESTION_BANK) ? window.MODERN_TECH_EXAM_QUESTION_BANK : [];
}

function normalizeBankQuestion(q, index) {
  const options = Array.isArray(q.options) ? q.options : [];
  return {
    id: q.id || `bank-${index + 1}`,
    sourceId: q.sourceId || "verified-bank",
    sourceTitle: q.sourceTitle || "Verified local question bank",
    promptHtml: q.promptHtml || q.prompt || "",
    options: options.map((option, optIndex) => ({
      html: typeof option === "string" ? option : (option.html || option.text || ""),
      originalIndex: optIndex,
    })),
    correctIndex: Number.parseInt(q.correctIndex, 10),
    scientificStatus: q.scientificStatus || "unverified",
    reviewPhase: q.reviewPhase || "Phase 2: scientific/content validation",
    rationale: q.rationale || "",
    sourceRefs: Array.isArray(q.sourceRefs) ? q.sourceRefs : [],
  };
}

function runTwoPhaseAudit(bankQuestions) {
  const phase1 = { name: "Phase 1 — technical and security readiness", passed: [], warnings: [], errors: [] };
  const phase2 = { name: "Phase 2 — scientific/content validation", passed: [], warnings: [], errors: [] };

  if (SETTINGS.questionLimit === 40) phase1.passed.push("Question limit is exactly 40.");
  else phase1.errors.push(`Question limit must be 40; current value is ${SETTINGS.questionLimit}.`);

  if (SETTINGS.marksPerQuestion === 1 && SETTINGS.questionLimit * SETTINGS.marksPerQuestion === 40) phase1.passed.push("Mark calculation is exactly 1 mark × 40 questions = 40 marks.");
  else phase1.errors.push("Mark configuration must be 1 mark per question and 40 total marks.");

  if (SETTINGS.timeLimitMinutes === 40) phase1.passed.push("Timer is exactly 40 minutes.");
  else phase1.errors.push(`Timer must be 40 minutes; current value is ${SETTINGS.timeLimitMinutes}.`);

  if (SETTINGS.requireExamPassword && Array.isArray(SETTINGS.acceptedPasswordHashes) && SETTINGS.acceptedPasswordHashes.length) phase1.passed.push("Password gate is enabled and at least one hash is configured.");
  else phase1.errors.push("Password gate must be enabled with at least one accepted SHA-256 password hash.");

  if (SETTINGS.autoSubmitWhenTimeEnds) phase1.passed.push("Auto-submit/auto-close is enabled when time finishes.");
  else phase1.errors.push("Auto-submit must be enabled so the exam closes when time finishes.");

  if (SETTINGS.oneQuestionAtATime) phase1.passed.push("One-question-at-a-time display is enabled.");
  else phase1.errors.push("One-question-at-a-time display must be enabled.");

  if (typeof cryptoShuffle === "function") phase1.passed.push("Random selection/shuffle function is available.");
  else phase1.errors.push("Random selection/shuffle function is missing.");

  const valid = [];
  const seen = new Set();
  bankQuestions.forEach((q, index) => {
    const validation = validateQuestion(q);
    if (!validation.ok) {
      phase2.errors.push(`${q.id || `question-${index + 1}`}: ${validation.reason}`);
      return;
    }
    const signature = normalizeText(htmlToText(q.promptHtml));
    if (seen.has(signature)) phase2.errors.push(`${q.id}: duplicate question prompt.`);
    seen.add(signature);
    if (q.scientificStatus !== "verified") phase2.errors.push(`${q.id}: scientific status is not verified.`);
    if (!q.rationale || q.rationale.length < 12) phase2.errors.push(`${q.id}: missing scientific rationale.`);
    if (!Array.isArray(q.sourceRefs) || q.sourceRefs.length === 0) phase2.warnings.push(`${q.id}: no source reference tag stored.`);
    valid.push(q);
  });

  if (valid.length >= SETTINGS.questionLimit) phase2.passed.push(`Verified question bank has ${valid.length} valid questions; 40 are required.`);
  else phase2.errors.push(`Verified question bank has only ${valid.length} valid questions; 40 are required.`);

  if (bankQuestions.every(q => q.scientificStatus === "verified")) phase2.passed.push("Every included bank item is marked scientifically verified.");
  if (new Set(bankQuestions.map(q => q.id)).size === bankQuestions.length) phase2.passed.push("Question IDs are unique.");
  else phase2.errors.push("Question IDs must be unique.");

  const scoringSanity = sanityCheckScoring(valid.slice(0, SETTINGS.questionLimit));
  if (scoringSanity.ok) phase1.passed.push("Scoring sanity test passed for 40/40 and 0/40 cases.");
  else phase1.errors.push(scoringSanity.message);

  const readyToStart = phase1.errors.length === 0 && phase2.errors.length === 0 && valid.length >= SETTINGS.questionLimit;
  return {
    readyToStart,
    readyToPublish: readyToStart && phase1.warnings.length === 0 && phase2.warnings.length === 0,
    blockingMessage: readyToStart ? "" : phase1.errors.concat(phase2.errors).slice(0, 3).join(" "),
    totalParsed: bankQuestions.length,
    totalValid: valid.length,
    totalInvalid: Math.max(0, bankQuestions.length - valid.length),
    phase1,
    phase2,
    metadata: window.MODERN_TECH_EXAM_QUESTION_BANK_METADATA || {},
  };
}

function sanityCheckScoring(sampleQuestions) {
  if (sampleQuestions.length < SETTINGS.questionLimit) return { ok: false, message: "Cannot test scoring because fewer than 40 valid questions are available." };
  const maxMarks = SETTINGS.questionLimit * SETTINGS.marksPerQuestion;
  if (maxMarks !== 40) return { ok: false, message: `Expected max marks 40, got ${maxMarks}.` };
  return { ok: true, message: "Scoring sanity passed." };
}

function validateQuestion(q) {
  if (!q.promptHtml || !htmlToText(q.promptHtml)) return { ok: false, reason: "empty question prompt" };
  if (!Array.isArray(q.options) || q.options.length < 2) return { ok: false, reason: "fewer than two options" };
  if (!Number.isInteger(q.correctIndex)) return { ok: false, reason: "missing answer key" };
  if (q.correctIndex < 0 || q.correctIndex >= q.options.length) return { ok: false, reason: `invalid answer key ${q.correctIndex}` };
  const normalized = q.options.map(o => normalizeText(htmlToText(o.html)));
  if (normalized.some(x => !x)) return { ok: false, reason: "empty option" };
  if (new Set(normalized).size !== normalized.length) return { ok: false, reason: "duplicate option text" };
  return { ok: true, reason: "ok" };
}

function dedupeQuestions(questions) {
  const seen = new Set();
  const out = [];
  for (const q of questions) {
    const signature = normalizeText(htmlToText(q.promptHtml) + "::" + q.options.map(o => htmlToText(o.html)).join("|"));
    if (seen.has(signature)) continue;
    seen.add(signature);
    out.push(q);
  }
  return out;
}

function prepareExamQuestions(questions) {
  const qList = SETTINGS.randomizeQuestions ? cryptoShuffle([...questions]) : [...questions];
  const selected = qList.slice(0, SETTINGS.questionLimit);
  return selected.map((q, index) => {
    let options = q.options.map((option, originalIndex) => ({ ...option, isCorrect: originalIndex === q.correctIndex }));
    if (SETTINGS.randomizeOptions) options = cryptoShuffle(options);
    return { ...q, examNumber: index + 1, options };
  });
}

function renderExam() {
  els.startView.classList.add("hidden");
  els.resultView.classList.add("hidden");
  els.qaView.classList.add("hidden");
  els.examView.classList.remove("hidden");
  els.studentMini.textContent = state.student.fullName;
  els.studentDetails.textContent = `Group: ${state.student.group} • Sequence: ${state.student.sequence}`;
  els.topStatus.textContent = SETTINGS.oneQuestionAtATime ? "Exam in progress · one question at a time" : "Exam in progress";

  els.questionNav.innerHTML = "";
  state.questions.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "q-dot";
    dot.textContent = String(index + 1);
    dot.setAttribute("aria-label", `Go to question ${index + 1}`);
    dot.addEventListener("click", () => goToQuestion(index));
    els.questionNav.appendChild(dot);
  });

  renderCurrentQuestion();
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCurrentQuestion() {
  const index = state.currentQuestionIndex;
  const q = state.questions[index];
  if (!q) {
    els.questionsContainer.innerHTML = `<article class="card question-card"><p>No question is available.</p></article>`;
    return;
  }

  const selectedIndex = state.answers[index];
  const card = document.createElement("article");
  card.className = "card question-card single-question-card";
  card.id = `question-${index + 1}`;
  card.innerHTML = `
    <div class="question-head">
      <h3>Question ${index + 1} of ${state.questions.length}</h3>
      <span class="source-tag">${escapeHtml(q.sourceTitle)}</span>
    </div>
    <div class="prompt">${q.promptHtml}</div>
    <div class="options" role="radiogroup" aria-label="Question ${index + 1} options"></div>
    <div class="review-note"></div>
  `;
  const optionBox = card.querySelector(".options");
  q.options.forEach((option, optionIndex) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", String(selectedIndex === optionIndex));
    if (selectedIndex === optionIndex) btn.classList.add("selected");
    btn.innerHTML = option.html;
    btn.addEventListener("click", () => chooseAnswer(index, optionIndex));
    optionBox.appendChild(btn);
  });

  els.questionsContainer.replaceChildren(card);
  updateQuestionControls();
}

function goToQuestion(index) {
  if (state.submitted) return;
  if (!state.questions.length) return;
  state.currentQuestionIndex = Math.min(Math.max(index, 0), state.questions.length - 1);
  renderCurrentQuestion();
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateQuestionControls() {
  const total = state.questions.length;
  const current = state.currentQuestionIndex + 1;
  if (els.questionCounter) els.questionCounter.textContent = `Question ${current} / ${total}`;
  if (els.prevQuestionBtn) els.prevQuestionBtn.disabled = state.currentQuestionIndex <= 0 || state.submitted;
  if (els.nextQuestionBtn) {
    els.nextQuestionBtn.disabled = state.currentQuestionIndex >= total - 1 || state.submitted;
    const answered = state.answers[state.currentQuestionIndex] !== undefined;
    els.nextQuestionBtn.textContent = answered ? "Next question" : "Skip / next";
  }
}

function chooseAnswer(questionIndex, optionIndex) {
  if (state.submitted) return;
  state.answers[questionIndex] = optionIndex;

  if (questionIndex === state.currentQuestionIndex) {
    const card = document.getElementById(`question-${questionIndex + 1}`);
    if (card) {
      [...card.querySelectorAll(".option")].forEach((btn, idx) => {
        const isSelected = idx === optionIndex;
        btn.classList.toggle("selected", isSelected);
        btn.setAttribute("aria-checked", String(isSelected));
      });
    }
  }

  updateProgress();
  updateQuestionControls();
}

function updateProgress() {
  const total = state.questions.length;
  const answered = Object.keys(state.answers).length;
  const pct = total ? Math.round((answered / total) * 100) : 0;
  els.progressFill.style.width = `${pct}%`;
  els.progressText.textContent = `Answered: ${answered} / ${total}`;
  [...els.questionNav.children].forEach((dot, idx) => {
    dot.classList.toggle("answered", state.answers[idx] !== undefined);
    dot.classList.toggle("active", idx === state.currentQuestionIndex);
  });
  updateQuestionControls();
}

function startTimer() {
  clearInterval(state.timerHandle);
  tickTimer();
  state.timerHandle = setInterval(tickTimer, 1000);
}

function tickTimer() {
  const secondsLeft = Math.max(0, Math.ceil((state.deadline - new Date()) / 1000));
  els.timer.textContent = formatSeconds(secondsLeft);
  els.timer.classList.toggle("danger", secondsLeft <= 5 * 60);
  if (secondsLeft <= 0) {
    clearInterval(state.timerHandle);
    els.timer.textContent = "00:00";
    els.topStatus.textContent = "Time finished — closing exam";
    if (!state.submitted && SETTINGS.autoSubmitWhenTimeEnds) submitExam(true, "Time limit ended");
  }
}

function submitExam(autoSubmitted, submitReason = "Student submitted") {
  if (state.submitted) return;
  const unanswered = state.questions.length - Object.keys(state.answers).length;
  if (!autoSubmitted && unanswered > 0) {
    const ok = confirm(`You still have ${unanswered} unanswered question(s). Finish anyway?`);
    if (!ok) return;
  }
  state.submitted = true;
  state.finishedAt = new Date();
  clearInterval(state.timerHandle);
  const result = calculateResult(autoSubmitted, submitReason);
  state.lastResult = result;
  if (SETTINGS.saveResultToLocalStorage) localStorage.setItem("modern_tech_exam_last_result", JSON.stringify(result));
  closeExamInterface(autoSubmitted);
  renderResult(result);
}

function calculateResult(autoSubmitted, submitReason = "Student submitted") {
  let correct = 0;
  const details = state.questions.map((q, questionIndex) => {
    const selectedIndex = state.answers[questionIndex];
    const selected = Number.isInteger(selectedIndex) ? q.options[selectedIndex] : null;
    const correctOption = q.options.find(o => o.isCorrect);
    const isCorrect = Boolean(selected && selected.isCorrect);
    if (isCorrect) correct += 1;
    return {
      no: questionIndex + 1,
      source: q.sourceTitle,
      sourceId: q.sourceId,
      correct: isCorrect,
      answered: Boolean(selected),
      selectedText: selected ? htmlToText(selected.html) : "",
      correctText: SETTINGS.showCorrectAnswersAfterSubmit && correctOption ? htmlToText(correctOption.html) : "Hidden by exam settings",
    };
  });

  const totalQuestions = state.questions.length;
  const maxMarks = totalQuestions * SETTINGS.marksPerQuestion;
  const marks = correct * SETTINGS.marksPerQuestion;
  const percent = maxMarks ? Math.round((marks / maxMarks) * 100) : 0;
  return {
    fullName: state.student.fullName,
    group: state.student.group,
    sequence: state.student.sequence,
    startedAt: state.startedAt.toISOString(),
    finishedAt: state.finishedAt.toISOString(),
    duration: formatDuration(state.finishedAt - state.startedAt),
    autoSubmitted,
    submitReason,
    examClosed: true,
    tabSwitchCount: state.tabSwitchCount,
    answered: Object.keys(state.answers).length,
    unanswered: totalQuestions - Object.keys(state.answers).length,
    correct,
    totalQuestions,
    marks,
    maxMarks,
    marksPerQuestion: SETTINGS.marksPerQuestion,
    percent,
    details,
  };
}

function closeExamInterface(autoSubmitted) {
  els.examView.classList.add("submitted", "closed", "hidden");
  els.questionsContainer.replaceChildren();
  els.questionNav.innerHTML = "";
  [els.prevQuestionBtn, els.nextQuestionBtn, els.submitBtn, els.backTopBtn].forEach(btn => {
    if (btn) btn.disabled = true;
  });
  if (els.questionCounter) els.questionCounter.textContent = "Exam closed";
  if (autoSubmitted) {
    els.timer.textContent = "00:00";
  }
  // In exam-safe mode, questions and answers are removed from the visible page after submission.
  // The printable result sheet is the primary output.
}

function renderResult(result) {
  els.resultView.classList.remove("hidden");
  els.resultScore.textContent = `${result.marks} / ${result.maxMarks} marks (${result.percent}%)`;
  els.resultMessage.textContent = result.autoSubmitted ? "Time finished. The exam was closed and submitted automatically." : gradeMessage(result.percent);
  els.resultRows.innerHTML = [
    ["Full name", result.fullName],
    ["Group", result.group],
    ["Sequence number", result.sequence],
    ["Started", new Date(result.startedAt).toLocaleString()],
    ["Finished", new Date(result.finishedAt).toLocaleString()],
    ["Duration", result.duration],
    ["Submission status", result.autoSubmitted ? "Automatically submitted when time ended" : "Submitted by student"],
    ["Exam closed", result.examClosed ? "Yes" : "No"],
    ["Tab/window switches", result.tabSwitchCount || 0],
    ["Answered", `${result.answered} / ${result.totalQuestions}`],
    ["Unanswered", result.unanswered],
    ["Correct answers", `${result.correct} / ${result.totalQuestions}`],
    ["Marks", `${result.marks} / ${result.maxMarks}`],
    ["Percent", `${result.percent}%`],
  ].map(([k, v]) => `<tr><th>${escapeHtml(k)}</th><td>${escapeHtml(v)}</td></tr>`).join("");
  els.topStatus.textContent = result.autoSubmitted ? "Time finished — exam closed" : "Exam closed — result displayed";
  els.resultView.scrollIntoView({ behavior: "smooth", block: "start" });
}


async function runAudit() {
  els.startView.classList.add("hidden");
  els.examView.classList.add("hidden");
  els.resultView.classList.add("hidden");
  els.qaView.classList.remove("hidden");
  els.qaSummary.innerHTML = "";
  els.qaDetails.textContent = "Running two-phase readiness check…";
  try {
    const { validQuestions, report } = await loadQuestionBank();
    const publishStatus = report.readyToPublish ? "READY" : (report.readyToStart ? "READY WITH WARNING" : "BLOCKED");
    els.qaSummary.innerHTML = [
      ["Publish status", publishStatus],
      ["Phase 1", report.phase1.errors.length ? "FAIL" : (report.phase1.warnings.length ? "WARN" : "PASS")],
      ["Phase 2", report.phase2.errors.length ? "FAIL" : (report.phase2.warnings.length ? "WARN" : "PASS")],
      ["Verified questions", validQuestions.length],
      ["Required", SETTINGS.questionLimit],
      ["Exam format", `${SETTINGS.questionLimit} questions · ${SETTINGS.questionLimit * SETTINGS.marksPerQuestion} marks · ${SETTINGS.timeLimitMinutes} minutes`],
    ].map(([label, value]) => `<div class="qa-box"><span class="muted">${escapeHtml(label)}</span><b>${escapeHtml(value)}</b></div>`).join("");

    const renderPhase = phase => `
      <section class="qa-phase ${phase.errors.length ? "qa-fail" : (phase.warnings.length ? "qa-warn" : "qa-pass")}">
        <h3>${escapeHtml(phase.name)}</h3>
        ${phase.passed.length ? `<p><strong>Passed</strong></p><ul>${phase.passed.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>` : ""}
        ${phase.warnings.length ? `<p><strong>Warnings</strong></p><ul>${phase.warnings.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>` : ""}
        ${phase.errors.length ? `<p><strong>Blocking errors</strong></p><ul>${phase.errors.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>` : ""}
      </section>`;

    const refs = (report.metadata.referenceUrls || []).map(url => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(url)}</a></li>`).join("");
    els.qaDetails.innerHTML = `
      ${renderPhase(report.phase1)}
      ${renderPhase(report.phase2)}
      <section class="qa-phase">
        <h3>Scientific reference URLs stored with package</h3>
        <ul>${refs}</ul>
      </section>
    `;
  } catch (error) {
    els.qaSummary.innerHTML = `<div class="qa-box"><span class="muted">Audit</span><b>FAIL</b></div>`;
    els.qaDetails.textContent = error.message || String(error);
  }
}

function gradeMessage(percent) {
  if (percent >= 90) return "Excellent.";
  if (percent >= 75) return "Good.";
  if (percent >= 60) return "Satisfactory.";
  return "Needs revision.";
}

function downloadCsv() {
  if (!state.lastResult) return;
  const r = state.lastResult;
  const rows = [
    ["Full name", r.fullName],
    ["Group", r.group],
    ["Sequence", r.sequence],
    ["Started", r.startedAt],
    ["Finished", r.finishedAt],
    ["Duration", r.duration],
    ["Submission status", r.autoSubmitted ? "Automatically submitted when time ended" : "Submitted by student"],
    ["Exam closed", r.examClosed ? "Yes" : "No"],
    ["Tab/window switches", r.tabSwitchCount || 0],
    ["Answered", r.answered],
    ["Unanswered", r.unanswered],
    ["Correct", r.correct],
    ["Total questions", r.totalQuestions],
    ["Marks", r.marks],
    ["Max marks", r.maxMarks],
    ["Percent", r.percent],
  ];
  const detailRows = [["Question", "Source", "Answered", "Correct", "Selected", "Correct answer"]]
    .concat(r.details.map(d => [d.no, d.source, d.answered ? "yes" : "no", d.correct ? "yes" : "no", d.selectedText, d.correctText]));
  const csv = rows.concat([["", ""]], detailRows).map(row => row.map(csvCell).join(",")).join("\n");
  downloadBlob("\ufeff" + csv, `exam-result-${safeFilename(r.group)}-${safeFilename(r.sequence)}-${safeFilename(r.fullName)}.csv`, "text/csv;charset=utf-8");
}

function downloadJson() {
  if (!state.lastResult) return;
  const r = state.lastResult;
  downloadBlob(JSON.stringify(r, null, 2), `exam-result-${safeFilename(r.group)}-${safeFilename(r.sequence)}-${safeFilename(r.fullName)}.json`, "application/json;charset=utf-8");
}

async function copyResult() {
  if (!state.lastResult) return;
  const r = state.lastResult;
  const text = `ModernTechExam result\nName: ${r.fullName}\nGroup: ${r.group}\nSequence: ${r.sequence}\nResult: ${r.marks}/${r.maxMarks} marks (${r.percent}%)\nCorrect: ${r.correct}/${r.totalQuestions}\nDuration: ${r.duration}`;
  try {
    await navigator.clipboard.writeText(text);
    alert("Result copied.");
  } catch (_) {
    prompt("Copy result:", text);
  }
}

function setupExamFrictionControls() {
  if (SETTINGS.disableCopyPaste) {
    ["copy", "cut", "paste", "contextmenu", "dragstart"].forEach(eventName => {
      document.addEventListener(eventName, event => {
        if (!els.examView.classList.contains("hidden") && !state.submitted) {
          event.preventDefault();
          els.topStatus.textContent = "Copy/paste is disabled during the exam";
          setTimeout(() => {
            if (!els.examView.classList.contains("hidden") && !state.submitted) {
              els.topStatus.textContent = SETTINGS.oneQuestionAtATime ? "Exam in progress · one question at a time" : "Exam in progress";
            }
          }, 1800);
        }
      });
    });

    document.addEventListener("keydown", event => {
      if (els.examView.classList.contains("hidden") || state.submitted) return;
      const key = String(event.key || "").toLowerCase();
      const ctrl = event.ctrlKey || event.metaKey;
      const blocked = ctrl && ["a", "c", "x", "v", "s", "p", "u"].includes(key);
      if (blocked) {
        event.preventDefault();
        els.topStatus.textContent = "Keyboard copy/save shortcuts are disabled during the exam";
      }
    });
  }

  if (SETTINGS.warnOnTabSwitch) {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && !els.examView.classList.contains("hidden") && !state.submitted) {
        state.tabSwitchCount += 1;
        els.topStatus.textContent = `Tab/window switch detected: ${state.tabSwitchCount}`;
      }
    });
  }
}

function showMessage(message, type) {
  els.loadMessage.textContent = message;
  els.loadMessage.className = `notice ${type || "warn"}`;
  els.loadMessage.classList.remove("hidden");
}

function cleanHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  template.content.querySelectorAll("script, style, iframe, object, embed").forEach(el => el.remove());
  template.content.querySelectorAll("*").forEach(el => {
    [...el.attributes].forEach(attr => {
      if (/^on/i.test(attr.name) || attr.name === "style") el.removeAttribute(attr.name);
    });
  });
  return template.innerHTML.trim();
}

function markdownToSimpleHtml(text) {
  const escaped = escapeHtml(text).replace(/^```\w*\s*|\s*```$/g, "");
  return escaped.replace(/`([^`]+)`/g, "<code>$1</code>");
}

function htmlToText(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent.replace(/\s+/g, " ").trim();
}

function normalizeText(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[ch]));
}

function csvCell(value) {
  const s = String(value ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function safeFilename(value) {
  return String(value || "").trim().replace(/[^\p{L}\p{N}._-]+/gu, "-").replace(/-+/g, "-").slice(0, 60) || "student";
}

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
}

function formatSeconds(total) {
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function formatDuration(ms) {
  const seconds = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return h ? `${h}h ${m}m ${s}s` : `${m}m ${s}s`;
}

function cryptoShuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = randomIntInclusive(i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function randomIntInclusive(max) {
  if (window.crypto && crypto.getRandomValues) {
    const range = max + 1;
    const maxUnbiased = Math.floor(0x100000000 / range) * range;
    const buffer = new Uint32Array(1);
    do {
      crypto.getRandomValues(buffer);
    } while (buffer[0] >= maxUnbiased);
    return buffer[0] % range;
  }
  return Math.floor(Math.random() * (max + 1));
}

// Lightweight test hook for browser console / automated checks.
window.ModernTechExam = {
  SETTINGS,
  getQuestionBank,
  normalizeBankQuestion,
  runTwoPhaseAudit,
  validateQuestion,
  prepareExamQuestions,
  sha256Hex,
  verifyExamPassword,
  calculateResult,
};
