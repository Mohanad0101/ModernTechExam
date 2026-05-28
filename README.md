# ModernTechExam

Clean GitHub Pages exam app for **Modern Programming Technologies**.

## Exam settings

- 40 random questions
- 40 marks
- 40 minutes
- One question displayed at a time
- Password required before start
- Auto-submit when time finishes
- Printable result sheet with student information
- Built-in 2-phase readiness check at `?qa=1`

The exam password is stored only as a SHA-256 hash in `assets/app.js`. Do not publish the plain password inside this repository. Give the password privately to students.

## Repository structure

```text
ModernTechExam/
├── index.html
├── assets/
│   ├── app.js
│   ├── question-bank.js
│   └── styles.css
├── .github/workflows/pages.yml
├── .nojekyll
└── README.md
```

## Publish on GitHub Pages

1. Create a GitHub repository named `ModernTechExam`.
2. Upload these files to the repository root.
3. Go to **Settings → Pages**.
4. Select **Source: GitHub Actions**.
5. Open:

```text
https://YOUR-GITHUB-USERNAME.github.io/ModernTechExam/
```

Before publishing or before the exam, open the readiness check:

```text
https://YOUR-GITHUB-USERNAME.github.io/ModernTechExam/?qa=1
```

## Final audit status

This package was checked for:

- exactly 40 random questions per attempt
- exactly 40 total marks
- exactly 40 minutes
- required password gate
- one-question-at-a-time display
- auto-submit and close when time finishes
- printable student result sheet
- 52 valid keyed questions available in the local bank
- valid answer-key indexes and duplicate-option checks

Scientific references used for validation are stored in `assets/question-bank.js` metadata and can be viewed from `?qa=1`.

## Change the password

Generate a SHA-256 hash for the new password, then replace the value inside `assets/app.js`:

```js
acceptedPasswordHashes: Object.freeze([
  "PUT_NEW_SHA256_HASH_HERE"
]),
```

Example Node command:

```bash
node -e "const crypto=require('crypto'); console.log(crypto.createHash('sha256').update(process.argv[1]).digest('hex'))" "newPasswordHere"
```

## Security note

This is a static GitHub Pages app. It prevents casual access and reduces bulk copying, but it is not equivalent to a server-side LMS. For high-stakes exams, use a backend/LMS with server-side authentication, answer storage, and proctoring.
