# Today List — TODO

**Last reviewed**: November 16, 2025  
**Current branch**: `feature/today-list-improvement`  
**Migration status**: Phase 1 complete (Oct 9, 2025)

Priority order: Design system first (enables app features), then app improvements.

## Current Features ✅

- ✅ Add item via input overlay
- ✅ Persist items to localStorage with JSON serialization
- ✅ Display list with basic metadata (timestamps)
- ✅ Mark complete/unmark with checkbox toggle
- ✅ Archive items with undo toast
- ✅ Restore items from archive
- ✅ Delete items with undo toast
- ✅ Empty state with welcome card (`labs-card` variant="welcome")
- ✅ iOS footer sticky positioning (100dvh fix)
- ✅ Light/dark theme support with 3 flavor variants
- ✅ Design system token usage (no hardcoded colors)

## Priority Features (Next Sprint)

### Design System Foundation (do first, enables others)

1. **Badge contrast fix** 🎨  
   - Location: `design-system/src/components/labs-badge.js`
   - Impact: Fixes accessibility on Labs homepage beta badge
   - Status: ⬜ Not started

2. **Button completion animation** ✨  
   - Location: `design-system/src/components/labs-button.js`
   - Add optional `animate()` method for task-complete and task-created states
   - Reusable across all apps
   - Status: ⬜ Not started

3. **List item drag-drop support** 🔄  
   - Location: `design-system/src/components/labs-list-item.js`
   - Add `draggable` attribute support
   - Add CSS states for drag visual feedback
   - Status: ⬜ Not started

### App Implementation (Today List)

4. **Auto-focus keyboard on "Add New Item"** ⌨️  
   - Location: `docs/today-list/js/main.js` → `toggleInputOverlay()`
   - Currently has structure; refine focus timing
   - Status: ⬜ Not started

5. **Left-align list item text on mobile** 📱  
   - Location: `design-system/src/components/labs-list-item.js`
   - Add media query or CSS custom property for mobile alignment
   - Status: ⬜ Not started

6. **Drag & drop reorder items** 🔄  
   - Location: `docs/today-list/js/main.js`
   - Reorder array on drop, persist to localStorage
   - Depends on #2–3 from design system
   - Status: ⬜ Not started

## Completed Migrations & Refactors

- ✅ **Phase 1 (Oct 9, 2025)**: Template foundation from design system
  - HTML reduced from 281 → 138 lines
  - Removed custom styling and layout hacks
  - Implemented `labs-footer-with-settings` overlay
  - Full migration details in archived docs

- ✅ **iOS layout fix (Nov 2025)**: `100dvh` viewport, sticky footer

## Related Documentation

- **Long-term roadmap**: `docs/today-list/ROADMAP.md`
- **Process guide**: `_dev/_documents/APP-MIGRATION-PROCESS.md`
- **Design system**: `design-system/src/components/`
