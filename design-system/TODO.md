
# Design System TODO





## Outstanding Tasks

- [ ] **Component Development**
  - [ ] Implement Alert component using semantic tokens
  - [ ] Create usage examples for new components and patterns as they are added

- [ ] **Smoothie Metaphor Integration**
  - [ ] Prototype Storybook UI with Smoothie metaphor controls
  - [ ] Document mapping for other components (inputs, overlays, etc)
  - [ ] Gather feedback from designers/devs on metaphor approach

- [ ] **Tokenization & Docs**
  - [ ] Ongoing: Review for new typography token opportunities as new components/patterns are added
  - [ ] Visual QA: Confirm Storybook sidebar order and Foundation/Token stories are discoverable after config changes (future visual QA)

## Completed Recent Work

### Typography & Tokenization System ✅ (last-reviewed: 2025-09-07)
- [x] Typography tokens: Added and documented all current and suggested tokens (see `typography.css`)
- [x] All major components (Button, Input, Card, Toast, Badge, Footer, Overlay, Today List) now use typography tokens for font, size, weight, and line height
- [x] Storybook stories updated to showcase new tokens and patterns (see Typography, Footer, Overlay, Badge, Patterns)
- [x] Today List pattern and fallback CSS now use entry-text and entry-meta tokens
- [x] Footer and Overlay stories updated for design system consistency
- [x] All color, flavor, and theme tokens mapped and documented
- [x] Npm scripts for workflow shortcuts (`labs`, `smoothie`, etc.) added

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

### Light/Dark Theme System ✅ (last-reviewed: 2025-09-01)
- [x] Unified theme system across apps and Storybook
- [x] Semantic color tokens (--color-background, --color-on-surface, etc.)
- [x] Theme toggle button component using design system components
- [x] Proper icon color inheritance and theme detection
- [x] Theme system documentation story in Storybook
- [x] Button hover effects using color-mix() for theme adaptation
- [x] Icon-only button color parity with secondary-icon fixed (2025-08-31)
- [ ] Visual verification: confirm Icon-only in dark mode matches secondary-with-icon in Storybook (pending visual QA)

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

### Light/Dark Theme System ✅ (last-reviewed: 2025-09-01)
- [x] Unified theme system across apps and Storybook
- [x] Semantic color tokens (--color-background, --color-on-surface, etc.)
- [x] Theme toggle button component using design system components
- [x] Proper icon color inheritance and theme detection
- [x] Theme system documentation story in Storybook
- [x] Button hover effects using color-mix() for theme adaptation
 - [x] Icon-only button color parity with secondary-icon fixed (2025-08-31)
 - [ ] Visual verification: confirm Icon-only in dark mode matches secondary-with-icon in Storybook (pending visual QA)

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
