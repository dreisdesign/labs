
# Design System TODO

## Outstanding Tasks

- [ ] **Component Development**
  - [ ] See feature TODO: [List Item + Dropdown](TODO-list-item-dropdown.md) for planned List Item + Dropdown work

- [ ] **Repository Hygiene**
  - [ ] Alphabetize component exports and Storybook sidebar entries to improve discoverability (suggested: sort component stories and build a maintenance script to enforce ordering).

- [ ] **Tokenization & Docs**
  - Note: Typography tokens are implemented in `design-system/src/styles/tokens/typography.css`. Track new token proposals in `_docs/planning/typography-todo.md`.
  - [ ] Visual QA: Confirm Storybook sidebar order

---
## Review Queue — Stepwise Approval

Purpose: This section breaks the recent changes into small, reviewable items. Reply with `approve: <item-key>` to approve an item (I will then move it into the main todo list and prepare a commit if you ask). Reply `approve: all` to approve everything.

Item keys use short ids (e.g. `container`, `today-page`, `app-cards`, `date-util`, `settings-safety`, `alphabetize`).

---

Item: container
- Files to review: `design-system/src/components/labs-container.js`, `design-system/src/stories/tokens-grid--container-patterns.stories.js`
- What to check:
  - Open Storybook: `http://localhost:6006/?path=/story/tokens-grid--container-patterns`
  - Confirm `Tracker metric` and `Today input` examples match widths (both constrained by `--app-container-max`).
  - Responsive: reduce viewport width and confirm layout collapses gracefully.
- How to approve: reply `approve: container`.

---

Item: today-page
- Files to review: `docs/today-list/index.html` (recently aligned to `--app-container-max`)
- What to check:
  - Open docs preview: `http://localhost:8000/today-list/`
  - Confirm input card width matches Tracker metric width and page spacing feels consistent.
- How to approve: reply `approve: today-page`.

---

Item: app-cards
- Files to review: `design-system/src/stories/layout-app-cards.stories.js`
- What to check:
  - Open Storybook: `http://localhost:6006/?path=/story/patterns-app-cards--two-column-grid`
  - Confirm two-column layout on desktop and single-column on mobile; icon-left / content-right pattern is visible.
- How to approve: reply `approve: app-cards`.

---

Item: date-util
- Files to review: `design-system/src/utils/date-format.js`, `design-system/src/utils/__tests__/date-format.test.js`
- What to check:
  - Run tests: `npm --prefix ./design-system run test:unit` — expect tests to pass.
  - Confirm `formatTime12` behavior in Storybook examples (timestamps render consistently).
- How to approve: reply `approve: date-util`.

---

Item: settings-safety
- Files to review: `design-system/src/components/labs-settings-card.js` and built/docs copies in `docs/design-system/components/`.
- What to check:
  - On a production preview (docs site), the All Apps button should not probe `http://localhost:8000/`.
  - On local dev (when on `localhost`), the behavior may attempt a local probe — confirm it only runs locally.
- How to approve: reply `approve: settings-safety`.

---

Item: alphabetize
- Files to review: `design-system/src/stories/` and Storybook sidebar order
- What to check:
  - Open Storybook and scan the sidebar order. Decide whether you want me to prepare a script to suggest/automate alphabetical ordering.
- How to approve: reply `approve: alphabetize` (I will then prepare a small check script on request).

---

Notes:
- I will not commit or push any changes until you explicitly say so. After you `approve` an item I will (if you ask) stage a focused commit containing only the relevant edits and push it.
- If you want any item split into smaller steps, tell me which one and I will break it down further.


---

## Review Queue — Stepwise Approval

Purpose: This section breaks the recent changes into small, reviewable items. Reply with `approve: <item-key>` to approve an item (I will then move it into the main todo list and prepare a commit if you ask). Reply `approve: all` to approve everything.