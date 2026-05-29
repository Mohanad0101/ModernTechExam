const SETTINGS = Object.freeze({
  timeLimitMinutes: 40,
  questionLimit: 60,
  totalMarks: 40,
  randomizeQuestions: true,
  randomizeOptions: true,
  acceptedPasswordHashes: Object.freeze([
    "ac16901a6bf19b592bd667222c014286cc130f86bbdf8d7bcb263ce18407fe78"
  ]),
  passwordMaxAttempts: 5,
  passwordLockSeconds: 30,
  autoSubmitWhenTimeEnds: true,
  disableCopyPaste: true,
  warnOnTabSwitch: true,
});

const els = {
  startView: document.getElementById("startView"),
  examView: document.getElementById("examView"),
  resultView: document.getElementById("resultView"),
  studentForm: document.getElementById("studentForm"),
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
  resultStudentName: document.getElementById("resultStudentName"),
  resultStudentMeta: document.getElementById("resultStudentMeta"),
  resultScore: document.getElementById("resultScore"),
  resultPercent: document.getElementById("resultPercent"),
  resultMessage: document.getElementById("resultMessage"),
  resultCorrect: document.getElementById("resultCorrect"),
  resultAnswered: document.getElementById("resultAnswered"),
  resultDuration: document.getElementById("resultDuration"),
  resultStatus: document.getElementById("resultStatus"),
  resultRows: document.getElementById("resultRows"),
  printResultBtn: document.getElementById("printResultBtn"),
  downloadCsvBtn: document.getElementById("downloadCsvBtn"),
  copyResultBtn: document.getElementById("copyResultBtn"),
  restartBtn: document.getElementById("restartBtn"),
  metaQuestions: document.getElementById("metaQuestions"),
  metaMarks: document.getElementById("metaMarks"),
  metaTime: document.getElementById("metaTime"),
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
  els.metaMarks.textContent = SETTINGS.totalMarks;
  els.metaTime.textContent = SETTINGS.timeLimitMinutes;
  els.timer.textContent = formatSeconds(SETTINGS.timeLimitMinutes * 60);

  els.studentForm.addEventListener("submit", onStartSubmit);
  els.submitBtn.addEventListener("click", () => submitExam(false));
  els.printResultBtn.addEventListener("click", () => window.print());
  els.downloadCsvBtn.addEventListener("click", downloadCsv);
  els.copyResultBtn.addEventListener("click", copyResult);
  els.restartBtn.addEventListener("click", () => location.reload());
  els.prevQuestionBtn.addEventListener("click", () => goToQuestion(state.currentQuestionIndex - 1));
  els.nextQuestionBtn.addEventListener("click", () => goToQuestion(state.currentQuestionIndex + 1));

  setupExamFrictionControls();
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
    showMessage("Введите группу, порядковый номер и полное имя.", "error");
    return;
  }

  const passwordCheck = await verifyExamPassword(String(form.get("examPassword") || ""));
  if (!passwordCheck.ok) {
    showMessage(passwordCheck.message, "error");
    return;
  }

  const questions = loadValidQuestions();
  if (questions.length < SETTINGS.questionLimit) {
    showMessage("Экзамен сейчас недоступен. Обратитесь к преподавателю.", "error");
    return;
  }

  state.student = student;
  state.questions = prepareExamQuestions(questions);
  state.answers = {};
  state.currentQuestionIndex = 0;
  state.startedAt = new Date();
  state.deadline = new Date(state.startedAt.getTime() + SETTINGS.timeLimitMinutes * 60 * 1000);
  state.submitted = false;

  hideMessage();
  renderExam();
  startTimer();
}

async function verifyExamPassword(password) {
  const now = Date.now();
  if (state.passwordLockedUntil && now < state.passwordLockedUntil) {
    const seconds = Math.ceil((state.passwordLockedUntil - now) / 1000);
    return { ok: false, message: `Слишком много неверных попыток. Повторите через ${seconds} сек.` };
  }

  const trimmed = String(password || "").trim();
  if (!trimmed) return { ok: false, message: "Введите пароль экзамена." };

  if (!window.crypto || !crypto.subtle) {
    return { ok: false, message: "Откройте страницу через защищённое соединение HTTPS." };
  }

  const hash = await sha256Hex(trimmed);
  const ok = SETTINGS.acceptedPasswordHashes.some(storedHash => constantTimeEqual(hash, String(storedHash || "").toLowerCase()));

  if (ok) {
    state.failedPasswordAttempts = 0;
    state.passwordLockedUntil = 0;
    return { ok: true, message: "" };
  }

  state.failedPasswordAttempts += 1;
  const remaining = Math.max(0, SETTINGS.passwordMaxAttempts - state.failedPasswordAttempts);
  if (state.failedPasswordAttempts >= SETTINGS.passwordMaxAttempts) {
    state.passwordLockedUntil = Date.now() + SETTINGS.passwordLockSeconds * 1000;
    state.failedPasswordAttempts = 0;
    return { ok: false, message: `Пароль неверный. Повторите через ${SETTINGS.passwordLockSeconds} сек.` };
  }

  return { ok: false, message: `Пароль неверный. Осталось попыток: ${remaining}.` };
}

async function sha256Hex(value) {
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

function loadValidQuestions() {
  const bank = Array.isArray(window.MODERN_TECH_EXAM_QUESTION_BANK) ? window.MODERN_TECH_EXAM_QUESTION_BANK : [];
  const normalized = bank.map(normalizeQuestion).filter(validateQuestion);
  return dedupeQuestions(normalized);
}

function normalizeQuestion(q, index) {
  const options = Array.isArray(q.options) ? q.options : [];
  return {
    id: q.id || `q-${index + 1}`,
    sourceId: q.sourceId || "course",
    promptHtml: cleanHtml(q.promptHtml || q.prompt || ""),
    options: options.map((option, optIndex) => ({
      html: cleanHtml(typeof option === "string" ? option : (option.html || option.text || "")),
      originalIndex: optIndex,
    })),
    correctIndex: Number.parseInt(q.correctIndex, 10),
  };
}

function validateQuestion(q) {
  if (!q.promptHtml || !htmlToText(q.promptHtml)) return false;
  if (!Array.isArray(q.options) || q.options.length < 2) return false;
  if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex >= q.options.length) return false;
  const normalized = q.options.map(o => normalizeText(htmlToText(o.html)));
  if (normalized.some(x => !x)) return false;
  if (new Set(normalized).size !== normalized.length) return false;
  return true;
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
  const selected = selectBalancedQuestions(questions, SETTINGS.questionLimit);
  return selected.map((q, index) => {
    let options = q.options.map((option, originalIndex) => ({ ...option, isCorrect: originalIndex === q.correctIndex }));
    if (SETTINGS.randomizeOptions) options = cryptoShuffle(options);
    return { ...q, examNumber: index + 1, options };
  });
}

function selectBalancedQuestions(questions, limit) {
  const shuffled = SETTINGS.randomizeQuestions ? cryptoShuffle([...questions]) : [...questions];
  const groups = new Map();
  for (const q of shuffled) {
    const key = q.sourceId || "course";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(q);
  }

  const groupKeys = [...groups.keys()].sort();
  const selected = [];
  const baseQuota = Math.floor(limit / Math.max(groupKeys.length, 1));

  for (const key of groupKeys) {
    const group = groups.get(key);
    const take = Math.min(baseQuota, group.length, limit - selected.length);
    selected.push(...group.splice(0, take));
  }

  const rest = groupKeys.flatMap(key => groups.get(key));
  const leftovers = SETTINGS.randomizeQuestions ? cryptoShuffle(rest) : rest;
  for (const q of leftovers) {
    if (selected.length >= limit) break;
    selected.push(q);
  }

  return SETTINGS.randomizeQuestions ? cryptoShuffle(selected).slice(0, limit) : selected.slice(0, limit);
}

function renderExam() {
  els.startView.classList.add("hidden");
  els.resultView.classList.add("hidden");
  els.examView.classList.remove("hidden");
  els.studentMini.textContent = state.student.fullName;
  els.studentDetails.textContent = `Группа: ${state.student.group} • Номер: ${state.student.sequence}`;
  els.topStatus.textContent = "Экзамен идёт";

  els.questionNav.innerHTML = "";
  state.questions.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "q-dot";
    dot.textContent = String(index + 1);
    dot.setAttribute("aria-label", `Перейти к вопросу ${index + 1}`);
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
  if (!q) return;

  const selectedIndex = state.answers[index];
  const card = document.createElement("article");
  card.className = "card question-card";
  card.id = `question-${index + 1}`;
  card.innerHTML = `
    <h3>Вопрос ${index + 1} из ${state.questions.length}</h3>
    <div class="prompt">${q.promptHtml}</div>
    <div class="options" role="radiogroup" aria-label="Варианты ответа"></div>
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
  if (state.submitted || !state.questions.length) return;
  state.currentQuestionIndex = Math.min(Math.max(index, 0), state.questions.length - 1);
  renderCurrentQuestion();
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
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
  els.progressText.textContent = `Ответов: ${answered} / ${total}`;
  [...els.questionNav.children].forEach((dot, idx) => {
    dot.classList.toggle("answered", state.answers[idx] !== undefined);
    dot.classList.toggle("active", idx === state.currentQuestionIndex);
  });
  updateQuestionControls();
}

function updateQuestionControls() {
  const total = state.questions.length;
  const current = state.currentQuestionIndex + 1;
  els.questionCounter.textContent = `Вопрос ${current} / ${total}`;
  els.prevQuestionBtn.disabled = state.currentQuestionIndex <= 0 || state.submitted;
  els.nextQuestionBtn.disabled = state.currentQuestionIndex >= total - 1 || state.submitted;
  const answered = state.answers[state.currentQuestionIndex] !== undefined;
  els.nextQuestionBtn.textContent = answered ? "Следующий вопрос" : "Пропустить / далее";
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
    if (!state.submitted && SETTINGS.autoSubmitWhenTimeEnds) submitExam(true, "Время истекло");
  }
}

function submitExam(autoSubmitted, submitReason = "Отправлено студентом") {
  if (state.submitted) return;
  const unanswered = state.questions.length - Object.keys(state.answers).length;
  if (!autoSubmitted && unanswered > 0) {
    const ok = confirm(`Осталось вопросов без ответа: ${unanswered}. Завершить экзамен?`);
    if (!ok) return;
  }

  state.submitted = true;
  state.finishedAt = new Date();
  clearInterval(state.timerHandle);
  const result = calculateResult(autoSubmitted, submitReason);
  state.lastResult = result;
  closeExamInterface(autoSubmitted);
  renderResult(result);
}

function calculateResult(autoSubmitted, submitReason) {
  let correct = 0;
  state.questions.forEach((q, questionIndex) => {
    const selectedIndex = state.answers[questionIndex];
    const selected = Number.isInteger(selectedIndex) ? q.options[selectedIndex] : null;
    if (selected && selected.isCorrect) correct += 1;
  });

  const totalQuestions = state.questions.length;
  const maxMarks = SETTINGS.totalMarks;
  const marks = totalQuestions ? roundTo((correct * maxMarks) / totalQuestions, 2) : 0;
  const percent = totalQuestions ? Math.round((correct / totalQuestions) * 100) : 0;

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
    percent,
  };
}

function closeExamInterface(autoSubmitted) {
  els.examView.classList.add("submitted", "hidden");
  els.questionsContainer.replaceChildren();
  els.questionNav.innerHTML = "";
  els.prevQuestionBtn.disabled = true;
  els.nextQuestionBtn.disabled = true;
  els.submitBtn.disabled = true;
  els.questionCounter.textContent = "Экзамен завершён";
  if (autoSubmitted) els.timer.textContent = "00:00";
}

function renderResult(result) {
  const statusText = result.autoSubmitted ? "Автоматически" : "Завершён";
  const started = new Date(result.startedAt).toLocaleString("ru-RU");
  const finished = new Date(result.finishedAt).toLocaleString("ru-RU");

  els.resultView.classList.remove("hidden");
  els.resultStudentName.textContent = result.fullName;
  els.resultStudentMeta.textContent = `Группа: ${result.group} · Порядковый номер: ${result.sequence}`;
  els.resultScore.textContent = `${formatNumber(result.marks)} / ${result.maxMarks}`;
  els.resultPercent.textContent = `${result.percent}%`;
  els.resultMessage.textContent = result.autoSubmitted
    ? "Время закончилось. Экзамен был отправлен автоматически."
    : gradeMessage(result.percent);
  els.resultCorrect.textContent = `${result.correct} / ${result.totalQuestions}`;
  els.resultAnswered.textContent = `${result.answered} / ${result.totalQuestions}`;
  els.resultDuration.textContent = result.duration;
  els.resultStatus.textContent = statusText;
  els.resultRows.innerHTML = [
    ["Полное имя", result.fullName],
    ["Группа", result.group],
    ["Порядковый номер", result.sequence],
    ["Начало", started],
    ["Завершение", finished],
    ["Без ответа", result.unanswered],
    ["Переключений окна", result.tabSwitchCount || 0],
    ["Формула оценки", `${result.correct} × ${result.maxMarks} / ${result.totalQuestions} = ${formatNumber(result.marks)}`],
  ].map(([k, v]) => `<tr><th>${escapeHtml(k)}</th><td>${escapeHtml(v)}</td></tr>`).join("");
  els.topStatus.textContent = "Экзамен завершён";
  els.resultView.scrollIntoView({ behavior: "smooth", block: "start" });
}

function gradeMessage(percent) {
  if (percent >= 90) return "Отлично.";
  if (percent >= 75) return "Хорошо.";
  if (percent >= 60) return "Удовлетворительно.";
  return "Требуется повторение материала.";
}

function downloadCsv() {
  if (!state.lastResult) return;
  const r = state.lastResult;
  const rows = [
    ["Полное имя", r.fullName],
    ["Группа", r.group],
    ["Порядковый номер", r.sequence],
    ["Начало", r.startedAt],
    ["Завершение", r.finishedAt],
    ["Длительность", r.duration],
    ["Статус", r.autoSubmitted ? "Отправлено автоматически" : "Отправлено студентом"],
    ["Переключений окна", r.tabSwitchCount || 0],
    ["Отвечено", r.answered],
    ["Без ответа", r.unanswered],
    ["Правильные ответы", r.correct],
    ["Количество вопросов", r.totalQuestions],
    ["Баллы", r.marks],
    ["Максимальный балл", r.maxMarks],
    ["Процент", r.percent],
  ];
  const csv = rows.map(row => row.map(csvCell).join(",")).join("\n");
  downloadBlob("\ufeff" + csv, `exam-result-${safeFilename(r.group)}-${safeFilename(r.sequence)}-${safeFilename(r.fullName)}.csv`, "text/csv;charset=utf-8");
}

async function copyResult() {
  if (!state.lastResult) return;
  const r = state.lastResult;
  const text = `Результат экзамена\nИмя: ${r.fullName}\nГруппа: ${r.group}\nПорядковый номер: ${r.sequence}\nРезультат: ${formatNumber(r.marks)}/${r.maxMarks} баллов (${r.percent}%)\nПравильные ответы: ${r.correct}/${r.totalQuestions}\nДлительность: ${r.duration}`;
  try {
    await navigator.clipboard.writeText(text);
    alert("Результат скопирован.");
  } catch (_) {
    prompt("Скопируйте результат:", text);
  }
}

function setupExamFrictionControls() {
  if (SETTINGS.disableCopyPaste) {
    ["copy", "cut", "paste", "contextmenu", "dragstart"].forEach(eventName => {
      document.addEventListener(eventName, event => {
        if (!els.examView.classList.contains("hidden") && !state.submitted) {
          event.preventDefault();
          showShortStatus("Это действие недоступно во время экзамена.");
        }
      });
    });

    document.addEventListener("keydown", event => {
      if (els.examView.classList.contains("hidden") || state.submitted) return;
      const key = String(event.key || "").toLowerCase();
      const ctrl = event.ctrlKey || event.metaKey;
      if (ctrl && ["a", "c", "x", "v", "s", "p", "u"].includes(key)) {
        event.preventDefault();
        showShortStatus("Это действие недоступно во время экзамена.");
      }
    });
  }

  if (SETTINGS.warnOnTabSwitch) {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && !els.examView.classList.contains("hidden") && !state.submitted) {
        state.tabSwitchCount += 1;
        showShortStatus("Зафиксировано переключение окна.");
      }
    });
  }
}

function showShortStatus(message) {
  els.topStatus.textContent = message;
  setTimeout(() => {
    if (!els.examView.classList.contains("hidden") && !state.submitted) els.topStatus.textContent = "Экзамен идёт";
  }, 1800);
}

function showMessage(message, type) {
  els.loadMessage.textContent = message;
  els.loadMessage.className = `notice ${type || "warn"}`;
  els.loadMessage.classList.remove("hidden");
}

function hideMessage() {
  els.loadMessage.textContent = "";
  els.loadMessage.className = "notice hidden";
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
  return h ? `${h} ч ${m} мин ${s} сек` : `${m} мин ${s} сек`;
}

function formatNumber(value) {
  return Number.isInteger(value) ? String(value) : String(value.toFixed(2)).replace(/\.00$/, "");
}

function roundTo(value, digits) {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
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
