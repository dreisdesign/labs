
# Design System TODO

_Last updated: 2025-08-26_

## Outstanding Tasks

- [ ] **Colors Story Refinements**
  - [x] Rename "Resolved Value" column to "Resolved"
  - [x] Fix text color column to show token names instead of hex values (in progress)
  - [x] Add theme switcher controls (light/dark toggle in toolbar)
  - [x] Add light/dark comparison table to UI
  - [ ] Consider adding copy-to-clipboard functionality for token names

- [ ] **Component Development**
  - [x] Complete Button component with all variants and hover effects
  - [x] Add click animations to buttons (scale down on active)
  - [x] Icon system refinements with proper theme awareness
  - [x] Theme toggle button component with bedtime/bedtime_off icons
  - [ ] Implement Card, Input, and Alert components using semantic tokens
  - [ ] Create component usage examples showcasing theming capabilities

## Completed Recent Work

### Light/Dark Theme System ✅
- [x] Unified theme system across apps and Storybook
- [x] Semantic color tokens (--color-background, --color-on-surface, etc.)
- [x] Theme toggle button component using design system components
- [x] Proper icon color inheritance and theme detection
- [x] Theme system documentation story in Storybook
- [x] Button hover effects using color-mix() for theme adaptation

## Future App Ideas

- [ ] **Whiteboard App MVP**
  - [ ] Accept Apple Pencil input for drawing
  - [ ] Settings icon button in bottom right corner
  - [ ] Basic drawing functionality with Labs theming
