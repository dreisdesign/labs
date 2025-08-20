
# Labs Design System — Roadmap

For the design system philosophy and metaphor, see the [Smoothie Design System Overview](smoothie.md).

## Ultimate Goal

Rebuild all Labs productivity apps (Today-List, Tracker, Note, Timer, etc.) using the Smoothie Design System for fully modular, maintainable, and consistent UI. Start with Today-List as the reference implementation.

## Reference Apps (UX Only)

- [Today-List](https://dreisdesign.github.io/labs/today-list/)
- [Tracker](https://dreisdesign.github.io/labs/tracker/)
- [Note](https://dreisdesign.github.io/labs/note/)
- [Focus Timer](https://dreisdesign.github.io/labs/timer/)

## High Priority

- Button Controls: Complete and document all controls in [`src/components/labs-button/BUTTON-DOCS.md`](src/components/labs-button/BUTTON-DOCS.md)
- Design System Foundations: Finalize tokens, theming, and icon system for consistent component development

## Backlog

1. Review legacy Storybook and architect new plan
	- [Legacy Storybook: Button Docs](https://dreisdesign.github.io/labs/design-system/?path=/docs/components-button--docs)
2. Develop migration checklist for each app (Today-List, Tracker, Note, Timer)

### Components
1. Theme Toggle
2. Card
3. Alert
4. Input
5. Timestamp

### Patterns
1. Settings Overlay
2. Date Lists
3. Footer
4. Input Overlay
5. Task Interaction

### Patterns to Generalize
- List management (add/edit/delete/reorder)
- Date picker/calendar
- Settings overlays
- Task completion/interaction
- Footer navigation
- Input overlays/modals
