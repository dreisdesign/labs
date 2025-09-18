# Design System: List Item + Dropdown Work

Created: 2025-09-18

Scope
- Make `labs-dropdown` a standalone, reusable component (icon-only default + open state variant)
- Refactor `labs-list-item` into a pattern-driven component with named slots (Button, Checkbox, Dropdown)
- Add `text-only` / `timestamp` variant and reuse tracker archived timestamp formatting

Goals
- Reduce duplication and make dropdown a first-class component used across apps
- Provide clear Storybook examples and patterns so app authors can reuse components
- Ensure accessibility and consistent timestamp formatting across Tracker and Today-list

Phases & Tasks

Phase 1 — Dropdown separation
- [ ] Verify or extract `design-system/src/components/labs-dropdown.js` as standalone
- [ ] Add default story showing icon-only (more_vert) and an `open` variant
- [ ] Ensure aria attributes and keyboard interactions are present

Phase 2 — Pattern-driven List Item
- [ ] Refactor `design-system/src/components/labs-list-item.js` to use named slots: `slot="control"`, `slot="content"`, `slot="meta"`
- [ ] Add story controls to choose Pattern: `Button | Checkbox | Dropdown`
- [ ] Ensure `Dropdown` pattern uses the standalone `labs-dropdown`

Phase 3 — `text-only` / `timestamp` variant
- [ ] Add `text-only` attribute/variant handling inside `labs-list-item`
- [ ] Add `design-system/src/utils/date-format.js` reusing Tracker archived format
- [ ] Add Storybook stories showing formatted timestamps

Phase 4 — Docs & Integration
- [ ] Update Storybook docs and examples for both components
- [ ] Update `design-system/CHANGELOG.md` and `design-system/TODO.md` when phases complete
- [ ] Replace in-app usages in Today-list / Tracker to use new patterns

Acceptance Criteria
- Storybook shows icon-only `labs-dropdown` and `open` variant
- `labs-list-item` patterns selectable in Storybook and render correctly
- `text-only` variant timestamps match Tracker archived formatting

Notes
- Follow shadow-DOM guidance: prefer component-level attributes (e.g., `fullwidth`) instead of parent CSS hacks
- Keep changes incremental and test in Storybook after each small commit
