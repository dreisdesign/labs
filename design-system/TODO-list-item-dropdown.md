# Design System: List Item + Dropdown Outstanding Tasks

This TODO focuses on remaining work for the list item and dropdown components.

## Outstanding Tasks

### Phase 4 — Documentation & Integration
- [ ] Update Storybook docs and examples for both components
- [ ] Update `design-system/CHANGELOG.md` when work completes

### Phase 5 — Container System Extensions
- [ ] Create `labs-container` web component for programmatic container patterns
- [ ] Document container design system approach and usage patterns in Storybook

## Notes
- Mobile responsive behavior and container design system are now complete
- Components use `slot="actions"` for consistency - confirm this is the canonical slot name across docs
- Stories were updated to fully rebuild DOM on arg changes so Controls behave deterministically in Storybook (important for review).

Next recommended steps (short-term)
- [ ] Decide canonical slot name (`actions` vs `meta`) and standardize across component + stories.
- [ ] Extract date formatting into `design-system/src/utils/date-format.js` and update `labs-list-item` to use it; add unit tests for formatting.
- [ ] Update Storybook docs (docs pages / README snippets) to document the slot-driven API and show recommended usage patterns (checkbox + content + dropdown pattern).
- [ ] Create a feature branch and commit the current changes for review: `feature/list-item-slots`.
- [ ] Update `design-system/CHANGELOG.md` summarizing Phase 1–3 progress and planned Phase 4 work.

---

Recent notes:

- **Tests:** `vitest` config was updated to use `jsdom` to support DOM-based component tests. `jsdom` was added to `devDependencies` and unit tests for `date-format` and `labs-dropdown` were added and pass locally.
- **Build integration suggestion:** Consider running `npm --prefix ./design-system run test:unit` as part of `prestorybook` so Storybook fails fast on broken tests. This is reversible and recommended for developer feedback.
- **[COMPLETED 2025-09-20] Mobile responsive layout:** Successfully implemented mobile-responsive full-width list items in Tracker using shadow DOM internal media queries. Solution uses `width: calc(100% + 24px)`, negative margins, and border styling for edge-to-edge appearance on mobile while maintaining container alignment with metric cards. Applied full-bleed CSS technique within component shadow DOM for reliable cross-boundary styling.

Acceptance Criteria (updated)
- Storybook shows icon-only `labs-dropdown` and `open` variant (done).
- `labs-list-item` is slot-driven and stories allow selecting patterns (done for SlotDriven/Default/TextOnly/Archived states).
- `text-only`/timestamp displays use a consistent 12-hour format with sensible fallbacks (implemented; recommend extracting util).
- Docs updated and in-app usages migrated in a coordinated feature rollout (pending).

Acceptance Criteria
- [x] Storybook shows icon-only `labs-dropdown` and `open` variant — Verified 2025-09-19 (stories added and Storybook rebuilt locally).
- [ ] `labs-list-item` patterns selectable in Storybook and render correctly
- [ ] `text-only` variant timestamps match Tracker archived formatting

Notes
- Follow shadow-DOM guidance: prefer component-level attributes (e.g., `fullwidth`) instead of parent CSS hacks
- Keep changes incremental and test in Storybook after each small commit

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