# Tracker Migration TODO

Goal: Rebuild the Tracker app using the Smoothie Design System template.

**Status:** Core migration complete (September 2025). See `design-system/CHANGELOG.md` for component variants added.

## Completed ✅

### Setup & Core Components (September 2025)
- ✅ Base Smoothie template implementation
- ✅ Global tokens and `flavors.css` loaded
- ✅ Metric card variant (`labs-card variant="metric"`)
- ✅ Track button in footer (`labs-button`)
- ✅ Settings overlay with dark mode toggle and flavor selection
- ✅ Timestamp list with text-only variant (`labs-list-item variant="text-only"`)
- ✅ Typography tokens for metric display (`--font-size-h1`, `--font-weight-heading`)
- ✅ Dark mode and theme persistence (`theme.js` utilities)
- ✅ Migrated old tracker to `_archive`
- ✅ New implementation in `docs/tracker/`

### Layout Fixes (November 2025)
- ✅ **iOS Footer Sticky Positioning**: Fixed issue where footer would scroll off-screen on iPad/iPhone. Implemented: `100dvh` for viewport height, `position: sticky; bottom: 0;` for footer, `min-height: 0; overflow: auto;` for internal container scrolling. Tested on iOS Safari (real device and emulation).

## Outstanding Tasks

### Behavior & Patterns
 [x] Undo affordance — implemented via `labs-toast` (undo toast) for removals and reset-all
- [ ] Persist state using same LocalStorage keys and validate shape on load
 [x] Persist state using same LocalStorage keys and validate shape on load

### Assets & Icons
- [ ] Use `labs-icon` for all iconography; add any missing icons to the design-system icons list
- [ ] Move app-specific static images (if still needed) into design-system icons when appropriate

### Migration & Cleanup
- [ ] Update `docs/tracker/CHANGELOG.md` with migration notes

### Tests & Validation
- [ ] Build Storybook and ensure `Smoothie Template` stories render without errors
- [ ] Smoke test the new tracker page in desktop and mobile breakpoints

### Follow-up Tasks
   ### Follow-up Tasks
- [ ] Add usage documentation for newly created components/patterns specific to Tracker
- [ ] Consider adding an integration story to Storybook demonstrating the Tracker layout

---

**Priority:** High for Behavior & Patterns; Medium for Tests & Validation; Low for Follow-up Tasks.
