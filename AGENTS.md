# Repository instructions for M&A Academy contributors and agents

This repository also contains a pre-existing group-signup app. **Do not modify the group-signup application, database, Railway service or unrelated files when working on M&A Academy.**

## Mandatory M&A course production specification

Before editing any M&A Academy lesson under `docs/`, **read and follow the complete Traditional Chinese instruction file**:

**[`docs/MA_Academy_Authoring_Standard_v4.md`](docs/MA_Academy_Authoring_Standard_v4.md)**

The v4 document is the current source of truth. The previous v3 remains available as historical detail, but v4 controls when storytelling, fictional-data labeling, lesson progression, or chapter pacing differ.

High-priority summary (the full file takes precedence):
1. **Lesson 01 is frozen**. Keep its content, interactive scenarios, quiz and behavior unchanged. Regression-test Lesson 01 whenever touching shared files such as `docs/app.js`, `docs/index.html` or `docs/styles.css`.
2. Author and revise **Lessons 02–16** in Traditional Chinese. Preserve the user-approved natural story style: realistic scene → question → concept → calculation/evidence → new decision. Never make characters read disclaimers. Progressively integrate verified academic research and original transaction evidence.
3. All activities must be **solo, self-paced, and browser-operable**. **Never introduce group activities, team assignments, classroom grouping, or multi-person simulations**. A single user may play different business roles in different rounds.
4. The course now has 16 lessons: new 07 covers financial statements/FCFF, 08 valuation/DCF, 09 bargaining, 10 payment; former 09–14 become 11–16. Preserve Lessons 01–06. The two original 07/08 files provide content to the 07–10 split adapter. **After the split, `docs/lesson-07-10-narrative-v2.js` applies the user-approved stories to lessons 07–10; this is the current editorial source of truth for those revised sections.** Load order is original sources → split → narrative-v2 → individual journeys → app. Check both the split map and the narrative layer before editing those lessons. Do not map old 07/08 completed progress to new lessons.
5. Each lesson needs a meaningful **multi-stage decision simulation** whose later rounds depend on earlier choices; include fresh information, revision, different outcomes and explanatory feedback. Also preserve quick introductory interactions.
6. Verify academic sources, paper claims, official transaction dates/terms, financial formulas, route loading, keyboard/mobile behavior and GitHub commits. Identify teaching assumptions clearly when first introduced or beside the relevant model; **do not have story characters repeatedly announce that the story is fictional**. Keep genuine deal and journal citations verifiable.
7. Deploy the static course through GitHub Pages from `main/docs`; Railway and a backend database are not requirements.
8. Change only requested lesson files and necessary shared components. Preserve unrelated lessons and the existing app.

When a user asks to work on a specific lesson, read the latest repository content and the master standard first; perform actual edits and verification, not just a plan. Provide the commit SHA and honestly report remaining untested items.
