
# Design System TODO


---

09/18/2025

# Design System Organization

Focus areas: List Item, Dropdown
Apps: Today-list, Tracker
---
## General issues to address
1. Some components should be generic, and the current components should actually be patterns

Changes
**Dropdown** (https://dreisdesign.github.io/labs/design-system/?path=/story/components-dropdown--default)
 - Dropdown should be just the Icon (not the entire list item) - and on click opens dropdown. Currently it's nested in the list item - all i want is to essentially separate it from the list item so that it's a proper stand alone dropdown.
 - Call it default. What i expect: to see in storybook: just the more_vert icon.
 - Add a variant showing the open state
 - The current Archived variant with the checkbox left and dropdown right should actually be a list item pattern variant.

**List Item**
  - List item (https://dreisdesign.github.io/labs/design-system/?path=/story/components-list-item--default): component should be using slots with controls - those slots should have patterns as selects: Patterns: Button, Checkbox, Dropdown
  - Text only (https://dreisdesign.github.io/labs/design-system/?path=/story/components-list-item--text-only): Should be renamed to "With dropdown" (following the same naming convention as with Buttons, example: https://dreisdesign.github.io/labs/design-system/?path=/story/components-button--with-left-icon)
    - Then create a new pattern for List Item. Called "Dropdown" - this will be the one used in tracker.
    - For text only pattern add a timestamp variant as well. Does it make sense to have a timestamp version of the list item component too?
    - Timestamp formatting: use the archived Tracker date/time formatting

---
## References
**List Item**
Default: https://dreisdesign.github.io/labs/design-system/?path=/story/components-list-item--default
- Location: Today-List
Archived / States: https://dreisdesign.github.io/labs/design-system/?path=/story/components-list-item-archived--states 
- Location: Today-List
Text Only: https://dreisdesign.github.io/labs/design-system/?path=/story/components-list-item--text-only
- Location: Tracker

**Dropdown**
Location: Today-List
Default: https://dreisdesign.github.io/labs/design-system/?path=/story/components-dropdown--default
Docs (auto)
Archived: https://dreisdesign.github.io/labs/design-system/?path=/story/components-dropdown--archived






---




## Outstanding Tasks

- [ ] **Component Development**
  - [x] ~~Implement labs-dropdown component with fullwidth button support~~ ✅ Completed Sept 17, 2025
  - [ ] See feature TODO: `TODO-list-item-dropdown.md` for planned List Item + Dropdown work
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

### Development Guidelines & Shadow DOM Issues ✅ (last-reviewed: 2025-09-18)
- [x] Created comprehensive web component layout guidelines (`web-component-layout.instructions.md`)
- [x] Updated task management instructions with shadow DOM component patterns
- [x] Documented common problems and working solutions from real development sessions
- [x] Added modularity validation checklist for component development
- [x] Created development lessons document based on button width issue resolution

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
