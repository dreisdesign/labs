# Changelog

All notable changes to the Labs Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]

### Changed
- Refactored and cleaned up Storybook integration: removed legacy configs, archived previous attempts, and set up a fresh Storybook v9 environment with Vite and Web Components.
- Button component and styles now use `labs-` prefix and design tokens for colors, spacing, border radius, and typography.
- Button CSS uses CSS custom properties with fallbacks for robust theming.
- Spacing story layout improved to vertical stack for easier comparison.
- All button classes renamed from `storybook-...` to `labs-...` for design system consistency.
- General design system cleanup and alignment with atomic/component-driven methodology.

---

### Archived Storybook Implementation Notes

Previous attempts at Storybook integration, legacy configs, and migration steps have been archived. For details, see `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md`.

## [1.0.0] - 2025-07-20

### Added - Initial Design System Release
- **Complete Button Component System**
  - 6 variants: Primary, Secondary, Success, Error, Outline, Ghost
  - 3 sizes: Small (sm), Default (md), Large (lg)
  - Multiple states: Default, Hover, Active, Inactive, Loading
  - Special modifiers: Full-width, Icon-only
  - Smooth hover and active animations with translateY effects
  - Loading spinner integration
  - Complete accessibility support with proper ARIA attributes

- **Comprehensive Design Token System**
  - **Colors**: 15+ semantic color variables extracted from Tracker app
  - **Typography**: Variable font system with Source Sans 3 (100-900 weights)
  - **Spacing**: 12-step spacing scale based on 4px increments
  - **Layout**: Responsive breakpoints and container utilities
  - **Animations**: Consistent transition timings and easing functions
  - Full light and dark mode support with automatic theme switching

- **Storybook Documentation Platform**
  - Interactive component playground with live controls
  - Comprehensive design token documentation
  - Welcome page with complete system overview
  - Story organization with proper categorization
  - Accessibility testing integration
  - Auto-generated documentation from component properties

- **Demo Environment**
  - Real-world component testing playground
  - Theme switching functionality with persistence
  - Usage examples mirroring production applications
  - Interactive logging for development debugging
  - Direct integration with design system CSS

- **Living Documentation System**
  - 1:1 parity between Storybook, demo, and production usage
  - Automatic synchronization of changes across all environments
  - Real-world validation through Labs application integration

### Features - Accessibility & Inclusive Design
- **WCAG 2.1 AA Compliance**
  - High contrast color ratios in both light and dark themes
  - Proper focus indicators with 2px outlines and offset
  - Keyboard navigation support for all interactive elements
  - Screen reader compatibility with semantic HTML

- **Inclusive Language Standards**
  - "Inactive" terminology instead of "disabled" in user-facing text
  - Technical HTML/CSS/JS standards preserved for functionality
  - Consistent inclusive language across all documentation

- **Theme System**
  - Smooth theme transitions with CSS custom properties
  - Browser UI color adaptation for PWA integration
  - Local storage theme persistence
  - Automatic system preference detection

### Technical - Foundation Architecture
- **CSS Custom Properties System**
  - Systematic token organization with clear naming conventions
  - Efficient cascade structure minimizing specificity conflicts
  - Easy customization and extension points

- **Component Methodology**
  - BEM-inspired naming convention with `labs-` prefix
  - Modifier-based variant system for scalability
  - Minimal CSS footprint with optimal reuse

- **Development Environment**
  - Storybook 8.6.14 with modern addon ecosystem
  - Hot module replacement for rapid development
  - Integrated accessibility testing tools

### Integration - Labs Ecosystem
- **Extracted from Production Apps**
  - Tracker app: Color system, button patterns, typography
  - Note app: Form patterns and interaction design
  - Timer app: Focus state management and transitions
  - All patterns validated through real user interactions

- **Cross-Application Consistency**
  - Shared design tokens ensure visual harmony
  - Component library eliminates design drift
  - Centralized system reduces maintenance overhead

### Documentation - Comprehensive Guides
- **README.md**: Complete setup and usage documentation
- **Storybook Welcome**: Interactive system overview
- **Component Stories**: Detailed usage examples for each component
- **Design Token Stories**: Visual documentation of color, typography, and spacing systems
- **Demo Environment**: Real-world integration examples

---

### Design System & Demo Automation Improvements
- Automated asset copying for all JS components and CSS tokens from `src/` to public `design-system/` folders for both local and public builds.
- Updated web component imports to use absolute paths, ensuring correct CSS loading and eliminating 404 errors.
- Removed legacy `<button>` elements from the demo; now only web components are showcased.
- Added root-level npm scripts for all workflows:
  - `npm run local` / `npm run public` / `npm run private`: Update assets, start server, open demo in browser.
  - `npm run storybook`: Start Storybook from root.
  - `npm run build-storybook`: Build Storybook from root.
- Demo HTML and automation now scale automatically as new components/tokens are added.
- Fixed all asset path and MIME type issues for seamless local and public previews.
- Improved script to ensure all assets are always up to date for both dev and deploy workflows.

### Automation & Deploy Improvements
- Deploy script now only copies public assets (`main.css`, `components/`, `tokens/`, `assets/`) to `docs/design-system/` for GitHub Pages, excluding `node_modules` and unnecessary files.
- Removed timestamp from demo HTML and deploy script for a cleaner, faster workflow.
- Deploy script commit message now includes automation context and timestamp for traceability.

### Deploy Script & Automation
- Deploy workflow now uses a shell script (`scripts/deploy.sh`) for timestamped commit messages and reliable automation.
- Run `npm run deploy` for a one-command, best-practice deploy with clear commit history.

### Archived Storybook Implementation Notes

Previous migration notes, legacy Storybook setup, and roadmap details have been archived. For full history and migration steps, see `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md`.
