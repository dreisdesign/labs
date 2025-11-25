# Design System: List Item + Dropdown Outstanding Tasks

This TODO focuses on remaining work for the list item and dropdown components.

## Outstanding Tasks

### Phase 4 — Documentation & Integration
- [ ] Update Storybook docs and examples for both components
- [ ] Update `design-system/CHANGELOG.md` when Phase 4 work completes

### Phase 5 — Container System Extensions ✅ COMPLETE
- [x] Create `labs-container` web component for programmatic container patterns
- [x] Document container design system approach and usage patterns in Storybook

> **Completed**: `labs-container` component created with `small/medium/large/fill` attributes.
> Storybook story at `1. Foundations/Container`. See changelog v2.1.7.

## Completed (Moved to CHANGELOG)

- ✅ Dropdown icon-only variant with `open` state (verified 2025-09-19)
- ✅ List item slot-driven API with multiple story patterns
- ✅ Footer migrated to shared `labs-footer` component
- ✅ `date-format.js` utility created with unit tests
- ✅ Mobile responsive layout for list items (completed 2025-09-20)

## Notes
## Notes
- Mobile responsive behavior and container design system are now complete
- Components use `slot="actions"` for consistency - confirm this is the canonical slot name across docs
- Stories were updated to fully rebuild DOM on arg changes so Controls behave deterministically in Storybook (important for review).

## Next Recommended Steps
## Next Recommended Steps
- [ ] Decide canonical slot name (`actions` vs `meta`) and standardize across component + stories.
  - **Decision (recommended):** use `slot="actions"` as the canonical slot name for overflow/menu/action controls. Stories and components currently use `actions` — continue with this pattern.
- [ ] Update Storybook docs (docs pages / README snippets) to document the slot-driven API and show recommended usage patterns (checkbox + content + dropdown pattern).
- [ ] Create a feature branch and commit the current changes for review: `feature/list-item-slots`.

## Container Pattern Migration (2025-09-20)

## Container Pattern Migration (2025-09-20) ✅ COMPLETE

**Make Today-List and Tracker more modular / share more components:**
- [x] Extract a canonical container pattern (`labs-container`) or ensure `.container-responsive` is implemented as a documented shared pattern.
- [x] Replace app-specific container divs with the shared container in both `docs/today-list/*` and `docs/tracker/*`.
- [x] Align the main app container markup and tokens so spacing, max-width and padding are consistent across demos.
- [x] Create small Storybook examples demonstrating the shared container + list-item patterns together.

> **Completed**: All apps now use `labs-container` with consistent sizing attributes.

## Timing & Priority Guidance

- **Priority order (recommended):**
  1. Tokens & container primitives: confirm `tokens/grid.css` values and add `--app-container-max` note where needed.
  2. `labs-container` component (optional): if you prefer programmatic control over container behavior, implement after tokens are stable.
 3. Migrate Today-List and Tracker to the shared container and run smoke tests.
 4. Update stories & docs, then add tests and examples.

- **Timing suggestions:**
  - Keep each step small and independently commit-able (tokens -> component -> migration -> docs).
  - Rebuild Storybook after the docs step to catch any visual regressions early.

Migration checklist (short actionable items) ✅ COMPLETE

- [x] Create branch `feature/container-pattern` and implement token docs update.
- [x] Create `labs-container` web component with `small/medium/large/fill` attributes.
- [x] Replace container markup in `docs/today-list/index.html` and `docs/tracker/index.html` with the shared pattern and test on mobile widths.
- [x] Add a Storybook story `1. Foundations/Container` showing container variants.
- [x] Run unit tests and Vitest DOM tests after migration and before deploying docs.

> **Completed**: All migration work done. See changelog v2.1.7 entries.

Notes on timing and coordination

- When migrating container markup in the docs pages, avoid large-scope changes in the same commit as component API changes; prefer multiple small commits so the path-fix tooling and Storybook builds remain predictable.
- Coordinate the `feature/list-item-slots` and `feature/container-pattern` branches to avoid merge conflicts in demos and tokens.

---

## Container Design System Architecture

**Problem Solved**: Need for consistent, reusable responsive container patterns across Tracker and Today-list apps.

**Solution Approach**:
1. **Container Tokens** — CSS custom properties for responsive behavior, padding, breakpoints
2. **Utility Classes** — Reusable CSS classes for common container patterns (`.container-responsive`, `.container-fullbleed`)
3. **Component Integration** — List items and cards automatically respect container responsive behavior via shadow DOM media queries
4. **Storybook Examples** — Visual documentation of container + component combinations

**Benefits**:
- **Modular**: Each app can use container classes without custom CSS
- **Responsive**: Mobile-first design with token-driven breakpoints
- **Consistent**: Same visual behavior across Tracker, Today-list, and future apps
- **Maintainable**: Centralized responsive logic in design system rather than per-app

**Usage Pattern**:
```html
<div class="container-responsive">
  <labs-card metric><!-- metric card --></labs-card>
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <labs-list-item><!-- automatically mobile-responsive --></labs-list-item>
  </div>
</div>
```

**Next Steps**: Consider creating `labs-container` web component for programmatic patterns and advanced responsive behaviors.

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