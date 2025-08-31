
# Design System TODO




## Outstanding Tasks

- [ ] **Component Development**
  - [ ] Implement Card, Input, and Alert components using semantic tokens
  - [ ] Create component usage examples showcasing theming capabilities

- [ ] **Smoothie Metaphor Integration**
  - [ ] Prototype Storybook UI with Smoothie metaphor controls
  - [ ] Document mapping for other components (inputs, overlays, etc)
  - [ ] Gather feedback from designers/devs on metaphor approach

## Completed Recent Work

### Colors & Theming System ✅
- [x] Robust Colors story: all tokens and flavors now display correct base mapping and theme-driven polaroid labels
- [x] Diagnostic and fallback logic for all semantic and palette tokens
- [x] Polaroid label color now always inherits from the theme (no forced inline color)

### Storybook Organization & Documentation ✅
- [x] **Storybook Sitemap Generation**: Complete automated generation of grouped sitemap
- [x] **Story Organization**: Moved button stories to proper `/stories` structure
- [x] **Storybook Sidebar Ordering**: Added proper sorting with Docs first, alphabetical after
- [x] **Smoothie Metaphor Documentation**: Comprehensive guide with authentic food terminology
- [x] **Sitemap Matching Sidebar**: Generated sitemap now matches actual Storybook structure

### Light/Dark Theme System ✅
- [x] Unified theme system across apps and Storybook
- [x] Semantic color tokens (--color-background, --color-on-surface, etc.)
- [x] Theme toggle button component using design system components
- [x] Proper icon color inheritance and theme detection
- [x] Theme system documentation story in Storybook
- [x] Button hover effects using color-mix() for theme adaptation
 - [x] Icon-only button color parity with secondary-icon fixed (2025-08-31)
 - [ ] Visual verification: confirm Icon-only in dark mode matches secondary-with-icon in Storybook

### Component System ✅
- [x] Complete Button component with all variants and hover effects
- [x] Add click animations to buttons (scale down on active)
- [x] Icon system refinements with proper theme awareness
- [x] Theme toggle button component with bedtime/bedtime_off icons

## Future App Ideas

- [ ] **Whiteboard App MVP**
  - [ ] Accept Apple Pencil input for drawing
  - [ ] Settings icon button in bottom right corner
  - [ ] Basic drawing functionality with Labs theming
