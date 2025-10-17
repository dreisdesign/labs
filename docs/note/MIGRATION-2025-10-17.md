# Note App Migration to Complete Design System

**Date**: October 17, 2025  
**Branch**: feature/note-migration  
**Goal**: Rebuild Note app using complete modular design system

---

## Migration Overview

Refactor the Note app from a custom implementation (440 lines JS + 292 lines HTML with custom CSS) to a clean, modular design system implementation based on the footer-test reference page and proven Tracker/Today-List migration patterns.

### Reference Implementations
- **Primary**: `docs/footer-test/index.html` (209 lines, zero hacks)
- **Pattern Source 1**: `docs/tracker/` (successful migration, 97 HTML + 98 JS lines)
- **Pattern Source 2**: `docs/today-list/` (successful migration, uses design system extensively)
- **Process Guide**: `_dev/_documents/APP-MIGRATION-PROCESS.md`
- **Quality**: Production-ready, fully modular

### Current State
- **File**: `docs/note/index.html` (292 lines with custom CSS)
- **JavaScript**: `docs/note/js/main.js` (440 lines - complex)
- **Issues**: 
  - Custom CSS for layout and positioning (styles/main.css)
  - Manual overlay management
  - Custom theme implementation (should use design system utils)
  - Hardcoded colors and spacing
  - 40+ custom CSS classes
- **Good Parts**: 
  - Working note persistence (localStorage)
  - Undo functionality
  - Label customization
  - Dark mode support
  - Daily reset logic

---

## Analysis: Current vs. Target

### Feature Mapping

| Feature | Current | Target | Design System Component |
|---------|---------|--------|-------------------------|
| Header | Custom div | Template header | `labs-template-header-wrapped` |
| Note display card | Custom div with CSS | Metric card variant | `labs-metric-card` |
| Edit note overlay | Custom div + custom CSS | Overlay component | `labs-overlay` + `labs-input-card` |
| Label edit overlay | Custom div + custom CSS | Overlay component | `labs-overlay` + `labs-input-card` |
| Settings menu | Custom div + custom CSS | Footer settings card | `labs-footer-with-settings` |
| Theme toggle | Custom button + custom logic | Footer theme toggle | Built into footer |
| Flavor support | Not implemented | Built-in support | Design system flavors |
| Clear button | Custom button | Footer reset-all event | Built into footer |
| Undo toast | Custom HTML + CSS | Toast component | `labs-toast` |
| Button styling | Custom classes | Design system button | `labs-button` |
| Icons | Custom SVG/CSS | Icon library | `labs-icon` |

### Key Differences from Tracker
- **Text input**: Note needs textarea/text-area for note content (not just metadata like Tracker)
- **Label customization**: Note allows custom label text (Tracker doesn't)
- **Daily reset**: Note auto-resets at midnight (Tracker shows all entries)
- **Undo on clear**: Note needs undo for cleared note (Tracker deletes permanently)
- **State display**: Note shows "No note yet" vs "Add/Edit" button state (simpler than Tracker)

---

## Design System Coverage Analysis

### Available Components for Note
✅ **Available** (Ready to use):
- `labs-template-header-wrapped` - Header
- `labs-metric-card` - Note display card
- `labs-button` - All buttons
- `labs-icon` - Icons for buttons
- `labs-overlay` - Overlay container
- `labs-input-card` - Alternative overlay with input
- `labs-footer-with-settings` - Settings menu + theme/flavor toggle
- `labs-toast` - Undo toast
- `labs-container` - Layout container
- Theme/flavor utilities - Already working in other apps

⚠️ **Potential Gaps** (May need verification):
- Text area component for note editing (if labs-input-card doesn't support multiline)
- Label editing UX (might use labs-input-card or custom input)

### Design Tokens
✅ All needed tokens available:
- Colors (background, surface, on-surface, etc.)
- Spacing (var(--space-xs) through var(--space-xl))
- Typography (font sizes, families, weights)
- Border radius (--radius-sm, --radius-lg, etc.)
- Shadows (--elevation-*)
- Theme system (light/dark + flavors)

---

## Migration Strategy

### Phase 1: Template Foundation
**Goal**: Create clean HTML structure from footer-test template  
**Time Estimate**: 30 minutes

**Tasks**:
1. Backup current Note files (index.html.backup, js/main.js.backup)
2. Create new `index.html` based on footer-test pattern
3. Update title to "Labs: Note"
4. Keep `note-*` localStorage keys
5. Add Note-specific components:
   - labs-template-header-wrapped
   - labs-metric-card (for note display)
   - labs-overlay (for edit overlays)
   - labs-input-card (for text input if available)
   - labs-button (action buttons)
   - labs-icon (if needed)
   - labs-footer-with-settings (settings menu)
   - labs-toast (undo notification)
   - labs-container (layout)
6. Set up basic semantic HTML structure
7. Early theme initialization script
8. Test that template loads correctly

**Checkpoint**: Template loads with design system, theme works, footer visible, no console errors

**Expected Result**:
- HTML: ~120 lines (under 150 ✓)
- Zero custom CSS
- All components loading correctly
- Theme toggle working

---

### Phase 2: JavaScript Modernization
**Goal**: Simplify main.js using design system patterns  
**Time Estimate**: 45 minutes

**Tasks**:
- Import `applyTheme` from `design-system/utils/theme.js`
- Create simple data store for note persistence:
  ```javascript
  const store = {
    getNote() { /* load from localStorage */ },
    saveNote(text) { /* persist to localStorage */ },
    clearNote() { /* remove from localStorage */ },
    getLabel() { /* load label from localStorage */ },
    saveLabel(text) { /* persist label */ }
  };
  ```
- Implement note display updates (use metric-card slots)
- Wire footer `add` event to open input overlay
- Wire footer `reset-all` event to clear note (with undo toast)
- Setup flavor/theme toggle listeners
- Implement label editing overlay
- Keep working undo functionality
- Remove all custom DOM styling

**Expected Outcome**: ~100-120 lines clean JavaScript

---

### Phase 3: Data & Features
**Goal**: Restore all Note functionality  
**Time Estimate**: 30 minutes

**Tasks**:
- ✅ Load/display current note on page load
- ✅ Add new note via overlay
- ✅ Edit existing note
- ✅ Save note to localStorage with today's date
- ✅ Clear note with undo toast
- ✅ Customize note label
- ✅ Daily reset at midnight (load existing logic)
- ✅ Theme persistence (light/dark)
- ✅ Flavor cycling support
- ✅ Empty state display ("No note yet")
- ✅ Button state updates ("+ Add" vs "✐ Edit")
- ✅ Undo button with timeout

**Checkpoint**: All features working, feature parity with original

**Expected Outcome**: Full feature parity without custom CSS

---

### Phase 4: Polish & Testing
**Goal**: Visual consistency and quality assurance  
**Time Estimate**: 30 minutes

**Tasks**:
- Visual comparison with footer-test reference
- Verify borders on metric card
- Test light/dark mode switching
- Test all three flavors (Blueberry, Strawberry, Vanilla)
- Verify theme persistence across page reloads
- Mobile responsiveness check
- Test undo toast functionality
- Verify overlay open/close animations
- Accessibility audit (keyboard, ARIA, screen reader)
- Test on multiple browsers

**Checkpoint**: Visually consistent, production-ready

**Expected Outcome**:
- Matches design system styling
- No visual regressions
- All features working
- Accessible to users with disabilities

---

## Timeline

| Phase | Duration | Status |
|-------|----------|--------|
| Phase 1: Template Foundation | 30 min | ⬜ Not started |
| Phase 2: JavaScript Modernization | 45 min | ⬜ Not started |
| Phase 3: Features & Data | 30 min | ⬜ Not started |
| Phase 4: Polish & Testing | 30 min | ⬜ Not started |
| Deployment & QA | 15 min | ⬜ Not started |
| **Total** | **2.5 hours** | ⬜ Not started |

---

## Success Criteria

### Functional
- [ ] All Note features working (add, edit, save, clear, undo, label edit)
- [ ] Daily reset logic working
- [ ] localStorage persistence working
- [ ] Theme switching working (light/dark)
- [ ] Flavor cycling working
- [ ] Settings menu complete

### Code Quality
- [ ] HTML: < 150 lines (target ~120)
- [ ] JavaScript: < 150 lines (target ~100-120)
- [ ] CSS: Only design tokens, zero custom rules
- [ ] Zero `!important` overrides
- [ ] Zero hardcoded colors/spacing
- [ ] All components from design system

### Design System Coverage
- [ ] Uses only design system components
- [ ] All styling via design tokens
- [ ] Demonstrates design system completeness
- [ ] Modular, portable implementation

### Testing & QA
- [ ] All features tested locally
- [ ] Theme/flavor tested
- [ ] Mobile responsive
- [ ] Accessible (keyboard, screen reader)
- [ ] Undo functionality working
- [ ] localStorage persistence verified
- [ ] Deployed to GitHub Pages successfully

---

## Lessons from Tracker & Today-List Migrations

1. **Component Slots Pattern**: Always use slots for content insertion (cleaner than manual DOM creation)
2. **Footer Events**: Wire up `add`, `reset-all`, and `flavor-changed` events from footer component
3. **Theme Utils**: Use design system `applyTheme()` instead of custom theme logic
4. **Toast Positioning**: Position toast above footer with `--toast-bottom: 120px`
5. **Data Store**: Keep localStorage structure but simplify the store object
6. **Undo Pattern**: Show toast with undo button on destructive actions
7. **Empty State**: Use conditional rendering for empty vs. filled states
8. **CSS Variables**: Reference design tokens instead of hardcoding values

---

## References

- **Tracker Migration**: `/docs/tracker/MIGRATION-2025-10-08.md` (completed)
- **Today-List Migration**: `/docs/today-list/MIGRATION-2025-10-09.md` (completed)
- **Footer Test Reference**: `/docs/footer-test/index.html` (209 lines, zero hacks)
- **App Migration Guide**: `/_dev/_documents/APP-MIGRATION-PROCESS.md`
- **Design System README**: `/design-system/README.md`
- **Modularity Guidelines**: `/.github/instructions/modularity.instructions.md`

---

## Acceptance Criteria

Migration is complete when:

1. ✅ New `index.html` created from footer-test template
2. ✅ New `js/main.js` modernized with design system utilities
3. ✅ All features working with feature parity
4. ✅ No custom CSS (only design tokens)
5. ✅ All components loading without errors
6. ✅ Theme/flavor toggle working
7. ✅ localStorage persistence verified
8. ✅ Mobile responsive
9. ✅ Accessible
10. ✅ Deployed to GitHub Pages
11. ✅ Tested on multiple browsers
12. ✅ MIGRATION-SUMMARY.md created

---

**Status**: Planning phase  
**Owner**: Design System Team  
**Next Step**: Implement Phase 1 - Template Foundation
