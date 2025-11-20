# Today List App Changelog

All notable changes to the Today List app will be documented in this file.

---

## [1.1.0] - 2025-11-19 - Drag-Drop, Animation & ThemeManager

### ✨ New Features
- **Drag-Drop Reorder**: Full drag-and-drop reordering of list items
  - Visual feedback with `draggable` state styling
  - Instant localStorage persistence with automatic rerender
- **Auto-Focus on "Add New Item"**: Keyboard focus auto-triggered when input overlay opens
  - Refined timing using `requestAnimationFrame` for smooth UX
- **Theme Persistence**: Integrated ThemeManager v2 for unified app persistence
  - Seamless sync across sessions using `today-list-flavor` and `today-list-theme` keys
  - Automatic flavor/theme restoration on page reload

### 🎨 UI/UX Improvements
- **Button Completion Animation**: New `animate()` method for task-complete feedback
  - Three animation types: success, created, pulse
  - Visual reinforcement for user actions
- **Mobile-Responsive Text Alignment**: List item text now left-aligned on mobile screens
  - Better readability and touch target sizing on narrow viewports
- **Badge Accessibility**: Improved contrast for warning badge on Labs homepage

### 🏗️ Architecture
- **Design System Integration**: Full use of design system components
  - labs-list-item with drag-drop support
  - labs-button with animation support
  - labs-badge with enhanced accessibility
- **localStorage Persistence**: Full localStorage integration for items, completed state, and theme

---

## [1.0.0] - 2025-10-09 - Design System Migration & Core Features

### ✅ Completed Features
- ✅ Add item via input overlay
- ✅ Persist items to localStorage with JSON serialization
- ✅ Display list with basic metadata (timestamps)
- ✅ Mark complete/unmark with checkbox toggle
- ✅ Archive items with undo toast
- ✅ Restore items from archive
- ✅ Delete items with undo toast
- ✅ Empty state with welcome card
- ✅ iOS footer sticky positioning (100dvh fix)
- ✅ Light/dark theme support with 3 flavor variants
- ✅ Design system token usage (no hardcoded colors)

### 🔧 Technical
- **Migration**: Phase 1 complete Oct 9, 2025
  - HTML reduced from 281 → 138 lines
  - Removed custom styling and layout hacks
  - Implemented `labs-footer-with-settings` overlay
  - Full design system component integration

### 📁 Reference
- **Long-term Roadmap**: See `ROADMAP.md` for future features (CSV export, tags/sorting)
- **Process Guide**: See `_dev/_documents/APP-MIGRATION-PROCESS.md`
