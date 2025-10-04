
# Labs Design System — Roadmap

For the design system philosophy and metaphor, see the [Smoothie Design System Overview](smoothie.md).

## Current Status: Foundation Complete ✅


**Token Architecture**: Complete two-layer system (palette + semantic) with WCAG AA accessibility
**Colors & Theming**: ✅ Fully complete and robust for all flavors and themes (Vanilla, Blueberry, Strawberry; light/dark modes)
**Storybook Documentation**: Strategic reorganization with comprehensive token visualization and robust base mapping

## Ultimate Goal

Rebuild all Labs productivity apps using the Smoothie Design System for fully modular, maintainable, and consistent UI. With the foundation complete, component development can now begin in earnest.

## Reference Apps (UX Targets)

- [Pad] (https://dreisdesign.github.io/labs/pad/)
- [Tracker](https://dreisdesign.github.io/labs/tracker/)
- [Note](https://dreisdesign.github.io/labs/note/)
- [Focus Timer](https://dreisdesign.github.io/labs/timer/)

## High Priority

### **Component Development** 🚀
- **Button Controls**: Complete all variants and document in [`BUTTON-DOCS.md`](src/components/labs-button/BUTTON-DOCS.md)
- **Icon System**: Finalize default colors and semantic token usage (Base 800 vs dedicated icon token)
- **Theme Toggle**: Implement with persistence and smooth transitions

### **App Migration Planning**

**2025-09-05:** Today List demo is now fully compliant with the design system and Storybook icon usage. All inlined SVGs have been removed; only `<labs-icon>` and the DS icon set are used for all icons.
### Container & Header Parity (2025-10-02)
All apps now use `<labs-container>` for modular, mobile-first layout.
Headers use design system tokens for font size and weight.
Tracker and Today-list have reached parity in header/date/metric card structure.
`<labs-header>` component now supports `center` and `show-subtitle` attributes for flexible layout and Storybook controls.
Storybook story for labs-header includes boolean controls for centering and subtitle visibility.
Tracker markup fixed: header, metric card, and list root are now properly wrapped in container/main/section for correct rendering.

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

## Future Ideas & Enhancements

### Today List Enhancements
- **Custom Label System**: Allow users to change "item" to custom labels (e.g., "Task", "To-do", "Note")
  - Implementation: Translation map/config with localStorage persistence (`today-list-label-item`)
  - Support pluralization (item/items) with simple interpolation
  - Update all UI strings: "Add first item", placeholders, ARIA labels

---

**Next Steps**: Begin component development with Button completion, then move to Card and Input as foundation pieces for app migrations.
