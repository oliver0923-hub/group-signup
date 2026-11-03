# Repository instructions for M&A Academy contributors and agents

This repository also contains a pre-existing group-signup app. **Do not modify the group-signup application, database, Railway service or unrelated files when working on M&A Academy.**

## Mandatory M&A course production specification

Before editing any M&A Academy lesson under `docs/`, **read and follow the complete Traditional Chinese instruction file**:

**[`docs/MA_Academy_Authoring_Standard_v3.md`](docs/MA_Academy_Authoring_Standard_v3.md)**

High-priority summary (the full file takes precedence):
1. **Lesson 01 is frozen**. Keep its content, interactive scenarios, quiz and behavior unchanged. Regression-test Lesson 01 whenever touching shared files such as `docs/app.js`, `docs/index.html` or `docs/styles.css`.
2. Author and revise **Lessons 02–14** in Traditional Chinese. Preserve accessible everyday stories and explanations, then progressively integrate substantive, verified academic research mechanisms and original transaction evidence.
3. All activities must be **solo, self-paced, and browser-operable**. **Never introduce group activities, team assignments, classroom grouping, or multi-person simulations**. A single user may play different business roles in different rounds.
4. Each lesson needs a meaningful **multi-stage decision simulation** whose later rounds depend on earlier choices; include fresh information, revision, different outcomes and explanatory feedback. Also preserve quick introductory interactions.
5. Verify academic sources, paper claims, official transaction dates/terms, financial formulas, route loading, keyboard/mobile behavior and GitHub commits. Clearly label all fictional data as teaching assumptions.
6. Deploy the static course through GitHub Pages from `main/docs`; Railway and a backend database are not requirements.
7. Change only requested lesson files and necessary shared components. Preserve unrelated lessons and the existing app.

When a user asks to work on a specific lesson, read the latest repository content and the master standard first; perform actual edits and verification, not just a plan. Provide the commit SHA and honestly report remaining untested items.
