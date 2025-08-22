
# Labs Design System — Roadmap

For the design system philosophy and metaphor, see the [Smoothie Design System Overview](smoothie.md).

## Current Status: Foundation Complete ✅

**Token Architecture**: Complete two-layer system (palette + semantic) with WCAG AA accessibility
**Colors & Theming**: Full three-flavor support (Vanilla, Blueberry, Strawberry) with light/dark modes
**Storybook Documentation**: Strategic reorganization with comprehensive token visualization

## Ultimate Goal

Rebuild all Labs productivity apps using the Smoothie Design System for fully modular, maintainable, and consistent UI. With the foundation complete, component development can now begin in earnest.

## Reference Apps (UX Targets)

- [Today-List](https://dreisdesign.github.io/labs/today-list/) — *Primary target for first migration*
- [Tracker](https://dreisdesign.github.io/labs/tracker/)
- [Note](https://dreisdesign.github.io/labs/note/)
- [Focus Timer](https://dreisdesign.github.io/labs/timer/)

## High Priority

### **Component Development** 🚀
- **Button Controls**: Complete all variants and document in [`BUTTON-DOCS.md`](src/components/labs-button/BUTTON-DOCS.md)
- **Icon System**: Finalize default colors and semantic token usage (Base 800 vs dedicated icon token)
- **Theme Toggle**: Implement with persistence and smooth transitions

### **App Migration Planning**
- **Today-List Migration**: Create detailed migration checklist as reference implementation
- **Component Audit**: Map existing app patterns to needed design system components

## Components to Build

### **Core UI Components**
1. **Card** — Content containers with consistent spacing and shadows
2. **Alert** — Status messages with proper semantic color usage
3. **Input** — Form controls with validation states and theming
4. **Timestamp** — Date/time display with formatting options

### **App-Specific Patterns**
1. **Settings Overlay** — Modal settings panels used across apps
2. **Date Lists** — Timeline and list patterns for tracker/note apps
3. **Footer Navigation** — Consistent bottom navigation across apps
4. **Input Overlay** — Modal input patterns for quick entry
5. **Task Interaction** — Completion states and interaction patterns

### **Advanced Patterns**
- **List Management** — Add/edit/delete/reorder functionality
- **Date Picker/Calendar** — Date selection with theme integration
- **Modal System** — Consistent overlay and focus management
- **Animation System** — Smooth transitions using design tokens

---

**Next Steps**: Begin component development with Button completion, then move to Card and Input as foundation pieces for app migrations.
