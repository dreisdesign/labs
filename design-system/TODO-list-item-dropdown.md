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
- [x] Verify or extract `design-system/src/components/labs-dropdown.js` as standalone — Completed 2025-09-19: added `open` attribute, stable menu id, and isolated the dropdown rendering and behavior.
- [x] Add default story showing icon-only (more_vert) and an `open` variant — Completed 2025-09-19: added `IconOnly` and `Open` stories in `design-system/src/stories/labs-dropdown.stories.js` for manual testing.
- [x] Ensure aria attributes and keyboard interactions are present — Completed 2025-09-19: implemented `aria-haspopup`, `aria-expanded`, `aria-controls`, `role`/`menuitem` semantics and keyboard navigation (Enter/Space/Arrow keys/Escape/Home/End).

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
- [x] Storybook shows icon-only `labs-dropdown` and `open` variant — Verified 2025-09-19 (stories added and Storybook rebuilt locally).
- [ ] `labs-list-item` patterns selectable in Storybook and render correctly
- [ ] `text-only` variant timestamps match Tracker archived formatting

Notes
- Follow shadow-DOM guidance: prefer component-level attributes (e.g., `fullwidth`) instead of parent CSS hacks
- Keep changes incremental and test in Storybook after each small commit

---

### Original Request

# Design System Organization

Focus areas: List Item, Dropdown
Apps: Today-list, Tracker
---
## General issues to address
1. Some components should be generic, and the current components should actually be patterns

Changes
**Dropdown** (https://dreisdesign.github.io/labs/design-system/?path=/story/components-dropdown--default)
 - Dropdown should be just the Icon (not the entire list item) - and on click opens dropdown. Currently it's nested in the list item - all i want is to essentially separate it from the list item so that it's a proper stand alone dropdown.
 - Call it default. What i expect: to see in storybook: just the more_vert icon.
 - Add a variant showing the open state
 - The current Archived variant with the checkbox left and dropdown right should actually be a list item pattern variant.

**List Item**
  - List item (https://dreisdesign.github.io/labs/design-system/?path=/story/components-list-item--default): component should be using slots with controls - those slots should have patterns as selects: Patterns: Button, Checkbox, Dropdown
  - Text only (https://dreisdesign.github.io/labs/design-system/?path=/story/components-list-item--text-only): Should be renamed to "With dropdown" (following the same naming convention as with Buttons, example: https://dreisdesign.github.io/labs/design-system/?path=/story/components-button--with-left-icon)
    - Then create a new pattern for List Item. Called "Dropdown" - this will be the one used in tracker.
    - For text only pattern add a timestamp variant as well. Does it make sense to have a timestamp version of the list item component too?
    - Timestamp formatting: use the archived Tracker date/time formatting

---
## References
**List Item**
Default: https://dreisdesign.github.io/labs/design-system/?path=/story/components-list-item--default
- Location: Today-List
Archived / States: https://dreisdesign.github.io/labs/design-system/?path=/story/components-list-item-archived--states 
- Location: Today-List
Text Only: https://dreisdesign.github.io/labs/design-system/?path=/story/components-list-item--text-only
- Location: Tracker

**Dropdown**
Location: Today-List
Default: https://dreisdesign.github.io/labs/design-system/?path=/story/components-dropdown--default
Docs (auto)
Archived: https://dreisdesign.github.io/labs/design-system/?path=/story/components-dropdown--archived