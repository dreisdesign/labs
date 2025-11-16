# Labs Project — Master TODO Index

**Last updated**: November 16, 2025  
**Current branch**: `feature/today-list-improvement`

This is the canonical project-wide checklist. Area-specific TODOs are in each app's directory.

---

## 🚀 Active Sprint: Today List Improvements

**Branch**: `feature/today-list-improvement`  
**Focus**: Design system enhancements + app features

### Design System Foundation (Do First — Enables Others)

- [ ] **1. Badge contrast fix** 🎨  
  - File: `design-system/src/components/labs-badge.js`
  - Impact: Fixes accessibility on Labs homepage beta badge
  - Priority: HIGH (blocks nothing, fixes a11y)

- [ ] **2. Button completion animation** ✨  
  - File: `design-system/src/components/labs-button.js`
  - Add optional `animate()` method for task-complete and task-created states
  - Reusable across all apps
  - Priority: MEDIUM (enables feature #6)

- [ ] **3. List item drag-drop support** 🔄  
  - File: `design-system/src/components/labs-list-item.js`
  - Add `draggable` attribute support
  - Add CSS states for drag visual feedback
  - Priority: MEDIUM (enables feature #6)

### Today List App Features

- [ ] **4. Auto-focus keyboard on "Add New Item"** ⌨️  
  - File: `docs/today-list/js/main.js` → `toggleInputOverlay()`
  - Refine focus timing
  - Priority: LOW (polish)

- [ ] **5. Left-align list item text on mobile** 📱  
  - File: `design-system/src/components/labs-list-item.js`
  - Add media query or CSS custom property for mobile alignment
  - Priority: MEDIUM

- [ ] **6. Drag & drop reorder items** 🔄  
  - File: `docs/today-list/js/main.js`
  - Reorder array on drop, persist to localStorage
  - Depends on: #2–3
  - Priority: MEDIUM (feature request)

---

## 📊 Cross-App Improvements

### All Apps — Quality & UX

- [ ] **Tooltips on hover**  
  - Add `<title>` or `aria-label` to all interactive elements
  - Consider `labs-tooltip` component if needed
  - Priority: MEDIUM (a11y + UX)
  - Scope: All apps (timer, tracker, today-list, note, pad)

- [ ] **Flavor selector UX improvement** 🎨  
  - Current: Button that cycles through flavors
  - Goal: Dropdown or radio select
  - Files: `labs-footer-with-settings.js` and/or new flavor selector component
  - Decision needed: Dropdown vs. Radio select?
  - Priority: MEDIUM (UX improvement)

### Design System — Component Updates

- [ ] **Update "disabled" label to "inactive/active"** 🏷️  
  - File: `design-system/src/stories/labs-button.stories.js` and component
  - Context: "Disabled" is negative framing; "inactive" is more semantic
  - Scope: Button component, all related stories
  - Priority: LOW (terminology)

### Documentation & Marketing

- [ ] **About page (Storybook)** 📖  
  - Recover and update Storybook "About" section
  - Create elevated first impression
  - Priority: MEDIUM (visibility)

---

## 💾 Today List — Extended Features (Future)

- [ ] **Export as CSV** 📥  
  - Export completed tasks with dates
  - Pattern: Add export button to settings menu
  - Priority: LOW (future sprint)

- [ ] **Tags, Sort by date/tag** 🏷️  
  - Add optional tags to items
  - Implement filtering/sorting
  - Data structure: `{ text, timestamp, tags: ['work', 'review'] }`
  - Priority: LOW (future sprint)

---

## 🏗️ Design System — Ongoing

### Component Gaps & Enhancements
- [ ] `labs-input` — range slider for brush size / controls
- [ ] `labs-tooltip` — hover tooltips for all interactive elements
- [ ] `labs-dropdown-flavor` or flavor selector component
- [ ] `labs-sortable-list` — drag-drop support for lists

### Documentation
- [ ] Update component migration patterns guide
- [ ] Add design system integration best practices
- [ ] Document flavor selector UX pattern

---

## 📦 Cleanup & Maintenance

### Archive Old Migration Docs ✅ Preparing

**Today List**:
- ✅ Archived: `_archive/MIGRATION-2025-10-09.md` (Oct 9 Phase 1 migration complete)

**Tracker**:
- [ ] Archive: `MIGRATION-2025-10-08.md` → `_archive/` (Oct 8 Phase 4 migration complete)

**Note App**:
- [ ] Archive all migration planning docs to `_archive/`:
  - `MIGRATION-2025-10-17.md`
  - `MIGRATION-DESIGN-SYSTEM-TEST.md`
  - `MIGRATION-FINAL-SUMMARY.md`
  - `MIGRATION-PLAN-OVERVIEW.md`
  - `MIGRATION-QUICK-REFERENCE.md`

**Pad App**:
- [ ] Archive: `DESIGN-SYSTEM-INTEGRATION.md` → `_archive/` (reference only, no active work)
- [ ] Archive: `index-v1-original.html` → `_archive/` (historical reference)

**Design System**:
- [ ] Review & archive: `docs/footer-test/` (reference template, minimal content)

### Review Completed Work

- [ ] **Tracker TODO** (`docs/tracker/TODO.md`)
  - Mark completed migration items as ✅
  - Keep outstanding tasks (storybook, smoke tests)

- [ ] **Pad TODO** (`docs/pad/TODO.md`)
  - Mark V2.0 complete items
  - Keep design system integration opportunities

- [ ] **Home TODO** (`docs/home/TODO.md`)
  - Evaluate app card pattern status
  - Update acceptance criteria if changed

---

## 📋 App-Specific TODOs

Each app has its own TODO file with detailed priorities:

- `docs/tracker/TODO.md` — Layout fixes ✅, storybook/tests ⬜
- `docs/today-list/TODO.md` — Current sprint items (see above)
- `docs/pad/TODO.md` — Design system integration roadmap
- `docs/home/TODO.md` — App card pattern / grid layout
- `docs/note/TODO.md` — (Check if migration is tracked)

---

## 🎯 Strategy for This Sprint

### Phase 1: Quick Wins (1–2 hours)
1. Archive old migration docs (cleanup)
2. Fix badge contrast (design system, high impact)
3. Review all TODO files and mark completed work ✅

### Phase 2: Design System Features (2–4 hours)
4. Button animation support
5. List item drag-drop CSS prep

### Phase 3: App Features (2–3 hours)
6. Today List improvements (drag-drop reorder, auto-focus, mobile alignment)

### Phase 4: Cross-App (1–2 hours)
7. Tooltip implementation pattern
8. Flavor selector UX decision & prototyping

---

## 🚦 Blocking Dependencies

```
Badge contrast fix (#1)
    ↓
    └─→ Unblocked (no dependencies)

Button animation (#2)
    ↓
    └─→ List drag-drop (#3)
        ↓
        └─→ Today List drag-drop (#6)

Flavor selector UX (#8)
    ↓
    └─→ Design decision needed (dropdown vs. radio)

Tooltips (#7)
    ↓
    └─→ Parallel: Can work on all apps simultaneously
```

---

## 📅 Timeline

- **Today (Nov 16)**: Archive docs, review TODOs, plan sprint
- **This week**: Badge fix + button animation
- **Next week**: List drag-drop + Today List features
- **Following**: Cross-app improvements (tooltips, flavor UX)

---

## 🔗 Related Documentation

- **Today List**: `docs/today-list/TODO.md` and `docs/today-list/ROADMAP.md`
- **Tracker**: `docs/tracker/TODO.md`
- **Pad**: `docs/pad/TODO.md`
- **Design System**: `design-system/README.md`
- **Migration Patterns**: `_dev/_documents/APP-MIGRATION-PROCESS.md`
