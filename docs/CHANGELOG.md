# [1.0.2] - 2025-07-23
## [1.0.3] - 2025-07-28

### Changed/Fixes
- Storybook sidebar now shows "Icons/Default", "Icons/Grid Preview", and "Tokens/Colors/Spacing/Typography" as top-level entries.
- "Grid Preview" story added for icons, with direct links to individual icon demos.
- All icon and token stories now use clear, editable navigation labels.
- Comments added to story files for maintainability.
- Removed legacy MDX docs and redundant story files.
- Improved automation for icon list and grid generation.

### Changed/Fixes
- Button width is now content-based ("hug" width) for all variants in both demo and Storybook.
- All icon paths (including checkmark) now use consistent relative paths for compatibility in both Storybook and static demo.
- Fixed checkmark icon 404 in both environments by aligning path handling with other icons.
- Normalized icon and label spacing for all button variants; removed unwanted margins and ensured consistent alignment.
- Demo page now uses flexbox for button layout, with improved spacing and a clean, production-like appearance.
- Favicon and static asset handling confirmed for all environments.
- Cleaned up demo HTML and removed debug text/outline.

# Changelog

All notable changes to the Labs Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.0.1] - 2025-07-23

### Added/Changed
- Fully automated asset path rewriting for local/public/GitHub Pages preview and deploy (including favicon and all static assets).
- Public and demo pages now always reference correct asset paths for all environments.
- Favicon 404s fixed for all preview and deploy modes.
- Deploy script now commits all public/QA/demo pages and ensures all assets are present for GitHub Pages.
- Improved documentation and workflow for public preview (`npm run public`) and deploy.
- All automation scripts now robust to new tokens/components/demos.

---

### Archived Storybook Implementation Notes

Previous attempts at Storybook integration, legacy configs, and migration steps have been archived. For details, see `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md`.

## [1.0.0] - 2025-07-20

### Added - Initial Design System Release
  - Complete accessibility support with proper ARIA attributes

- **Comprehensive Design Token System**
  - **Colors**: 15+ semantic color variables extracted from Tracker app
  - **Typography**: Variable font system with Source Sans 3 (100-900 weights)
  - **Spacing**: 12-step spacing scale based on 4px increments
  - **Layout**: Responsive breakpoints and container utilities
  - **Animations**: Consistent transition timings and easing functions
  - Full light and dark mode support with automatic theme switching
[2025-07-24] Design System & Storybook Cleanup
 - Fixed checkmark animation for Labs Button (works in Storybook and public demo)
 - Removed all generic Button, Header, and Page files and references
 - Cleaned up duplicate src folders and legacy assets
 - Ensured asset paths and build scripts run from project root
 - Added up-next: cachebuster for public assets

- **Storybook Documentation Platform**
  - Interactive component playground with live controls
  - Comprehensive design token documentation
  - Real-world component testing playground
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

## [1.0.4] - 2025-07-28

### Changed/Added
- Refactored Tokens stories: split into `Tokens.colors.stories.js`, `Tokens.typography.stories.js`, and `Tokens.spacing.stories.js` for proper Storybook sidebar grouping and sorting.
- Tokens now appear as a sortable folder in the sidebar, matching Icons and Components.
- Removed old combined `Tokens.stories.js` file.
- Sidebar navigation and maintainability improved for all design tokens.

### Changed/Fixes
- Storybook sidebar now shows "Icons/Default", "Icons/Grid Preview", and "Tokens/Colors/Spacing/Typography" as top-level entries.
- "Grid Preview" story added for icons, with direct links to individual icon demos.
- All icon and token stories now use clear, editable navigation labels.
- Comments added to story files for maintainability.
- Removed legacy MDX docs and redundant story files.
- Improved automation for icon list and grid generation.

### Changed/Fixes
- Button width is now content-based ("hug" width) for all variants in both demo and Storybook.
- All icon paths (including checkmark) now use consistent relative paths for compatibility in both Storybook and static demo.
- Fixed checkmark icon 404 in both environments by aligning path handling with other icons.
- Normalized icon and label spacing for all button variants; removed unwanted margins and ensured consistent alignment.
- Demo page now uses flexbox for button layout, with improved spacing and a clean, production-like appearance.
- Favicon and static asset handling confirmed for all environments.
- Cleaned up demo HTML and removed debug text/outline.

# Changelog

All notable changes to the Labs Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.0.1] - 2025-07-23

### Added/Changed
- Fully automated asset path rewriting for local/public/GitHub Pages preview and deploy (including favicon and all static assets).
- Public and demo pages now always reference correct asset paths for all environments.
- Favicon 404s fixed for all preview and deploy modes.
- Deploy script now commits all public/QA/demo pages and ensures all assets are present for GitHub Pages.
- Improved documentation and workflow for public preview (`npm run public`) and deploy.
- All automation scripts now robust to new tokens/components/demos.

---

### Archived Storybook Implementation Notes

Previous attempts at Storybook integration, legacy configs, and migration steps have been archived. For details, see `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md`.

## [1.0.0] - 2025-07-20

### Added - Initial Design System Release
  - Complete accessibility support with proper ARIA attributes

- **Comprehensive Design Token System**
  - **Colors**: 15+ semantic color variables extracted from Tracker app
  - **Typography**: Variable font system with Source Sans 3 (100-900 weights)
  - **Spacing**: 12-step spacing scale based on 4px increments
  - **Layout**: Responsive breakpoints and container utilities
  - **Animations**: Consistent transition timings and easing functions
  - Full light and dark mode support with automatic theme switching
[2025-07-24] Design System & Storybook Cleanup
 - Fixed checkmark animation for Labs Button (works in Storybook and public demo)
 - Removed all generic Button, Header, and Page files and references
 - Cleaned up duplicate src folders and legacy assets
 - Ensured asset paths and build scripts run from project root
 - Added up-next: cachebuster for public assets

- **Storybook Documentation Platform**
  - Interactive component playground with live controls
  - Comprehensive design token documentation
  - Real-world component testing playground
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

## [1.0.4] - 2025-07-28

### Changed/Added
- Refactored Tokens stories: split into `Tokens.colors.stories.js`, `Tokens.typography.stories.js`, and `Tokens.spacing.stories.js` for proper Storybook sidebar grouping and sorting.
- Tokens now appear as a sortable folder in the sidebar, matching Icons and Components.
- Removed old combined `Tokens.stories.js` file.
- Sidebar navigation and maintainability improved for all design tokens.

### Changed/Fixes
- Storybook sidebar now shows "Icons/Default", "Icons/Grid Preview", and "Tokens/Colors/Spacing/Typography" as top-level entries.
- "Grid Preview" story added for icons, with direct links to individual icon demos.
- All icon and token stories now use clear, editable navigation labels.
- Comments added to story files for maintainability.
- Removed legacy MDX docs and redundant story files.
- Improved automation for icon list and grid generation.

### Changed/Fixes
- Button width is now content-based ("hug" width) for all variants in both demo and Storybook.
- All icon paths (including checkmark) now use consistent relative paths for compatibility in both Storybook and static demo.
- Fixed checkmark icon 404 in both environments by aligning path handling with other icons.
- Normalized icon and label spacing for all button variants; removed unwanted margins and ensured consistent alignment.
- Demo page now uses flexbox for button layout, with improved spacing and a clean, production-like appearance.
- Favicon and static asset handling confirmed for all environments.
- Cleaned up demo HTML and removed debug text/outline.

# Changelog

All notable changes to the Labs Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.0.1] - 2025-07-23

### Added/Changed
- Fully automated asset path rewriting for local/public/GitHub Pages preview and deploy (including favicon and all static assets).
- Public and demo pages now always reference correct asset paths for all environments.
- Favicon 404s fixed for all preview and deploy modes.
- Deploy script now commits all public/QA/demo pages and ensures all assets are present for GitHub Pages.
- Improved documentation and workflow for public preview (`npm run public`) and deploy.
- All automation scripts now robust to new tokens/components/demos.

---

### Archived Storybook Implementation Notes

Previous attempts at Storybook integration, legacy configs, and migration steps have been archived. For details, see `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md`.

## [1.0.0] - 2025-07-20

### Added - Initial Design System Release
  - Complete accessibility support with proper ARIA attributes

- **Comprehensive Design Token System**
  - **Colors**: 15+ semantic color variables extracted from Tracker app
  - **Typography**: Variable font system with Source Sans 3 (100-900 weights)
  - **Spacing**: 12-step spacing scale based on 4px increments
  - **Layout**: Responsive breakpoints and container utilities
  - **Animations**: Consistent transition timings and easing functions
  - Full light and dark mode support with automatic theme switching
[2025-07-24] Design System & Storybook Cleanup
 - Fixed checkmark animation for Labs Button (works in Storybook and public demo)
 - Removed all generic Button, Header, and Page files and references
 - Cleaned up duplicate src folders and legacy assets
 - Ensured asset paths and build scripts run from project root
 - Added up-next: cachebuster for public assets

- **Storybook Documentation Platform**
  - Interactive component playground with live controls
  - Comprehensive design token documentation
  - Real-world component testing playground
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

## [1.0.4] - 2025-07-28

### Changed/Added
- Refactored Tokens stories: split into `Tokens.colors.stories.js`, `Tokens.typography.stories.js`, and `Tokens.spacing.stories.js` for proper Storybook sidebar grouping and sorting.
- Tokens now appear as a sortable folder in the sidebar, matching Icons and Components.
- Removed old combined `Tokens.stories.js` file.
- Sidebar navigation and maintainability improved for all design tokens.

### Changed/Fixes
- Storybook sidebar now shows "Icons/Default", "Icons/Grid Preview", and "Tokens/Colors/Spacing/Typography" as top-level entries.
- "Grid Preview" story added for icons, with direct links to individual icon demos.
- All icon and token stories now use clear, editable navigation labels.
- Comments added to story files for maintainability.
- Removed legacy MDX docs and redundant story files.
- Improved automation for icon list and grid generation.

### Changed/Fixes
- Button width is now content-based ("hug" width) for all variants in both demo and Storybook.
- All icon paths (including checkmark) now use consistent relative paths for compatibility in both Storybook and static demo.
- Fixed checkmark icon 404 in both environments by aligning path handling with other icons.
- Normalized icon and label spacing for all button variants; removed unwanted margins and ensured consistent alignment.
- Demo page now uses flexbox for button layout, with improved spacing and a clean, production-like appearance.
- Favicon and static asset handling confirmed for all environments.
- Cleaned up demo HTML and removed debug text/outline.

# Changelog

All notable changes to the Labs Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.0.1] - 2025-07-23

### Added/Changed
- Fully automated asset path rewriting for local/public/GitHub Pages preview and deploy (including favicon and all static assets).
- Public and demo pages now always reference correct asset paths for all environments.
- Favicon 404s fixed for all preview and deploy modes.
- Deploy script now commits all public/QA/demo pages and ensures all assets are present for GitHub Pages.
- Improved documentation and workflow for public preview (`npm run public`) and deploy.
- All automation scripts now robust to new tokens/components/demos.

---

### Archived Storybook Implementation Notes

Previous attempts at Storybook integration, legacy configs, and migration steps have been archived. For details, see `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md`.

## [1.0.0] - 2025-07-20

### Added - Initial Design System Release
  - Complete accessibility support with proper ARIA attributes

- **Comprehensive Design Token System**
  - **Colors**: 15+ semantic color variables extracted from Tracker app
  - **Typography**: Variable font system with Source Sans 3 (100-900 weights)
  - **Spacing**: 12-step spacing scale based on 4px increments
  - **Layout**: Responsive breakpoints and container utilities
  - **Animations**: Consistent transition timings and easing functions
  - Full light and dark mode support with automatic theme switching
[2025-07-24] Design System & Storybook Cleanup
 - Fixed checkmark animation for Labs Button (works in Storybook and public demo)
 - Removed all generic Button, Header, and Page files and references
 - Cleaned up duplicate src folders and legacy assets
 - Ensured asset paths and build scripts run from project root
 - Added up-next: cachebuster for public assets

- **Storybook Documentation Platform**
  - Interactive component playground with live controls
  - Comprehensive design token documentation
  - Real-world component testing playground
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

## [1.0.4] - 2025-07-28

### Changed/Added
- Refactored Tokens stories: split into `Tokens.colors.stories.js`, `Tokens.typography.stories.js`, and `Tokens.spacing.stories.js` for proper Storybook sidebar grouping and sorting.
- Tokens now appear as a sortable folder in the sidebar, matching Icons and Components.
- Removed old combined `Tokens.stories.js` file.
- Sidebar navigation and maintainability improved for all design tokens.

### Changed/Fixes
- Storybook sidebar now shows "Icons/Default", "Icons/Grid Preview", and "Tokens/Colors/Spacing/Typography" as top-level entries.
- "Grid Preview" story added for icons, with direct links to individual icon demos.
- All icon and token stories now use clear, editable navigation labels.
- Comments added to story files for maintainability.
- Removed legacy MDX docs and redundant story files.
- Improved automation for icon list and grid generation.

### Changed/Fixes
- Button width is now content-based ("hug" width) for all variants in both demo and Storybook.
- All icon paths (including checkmark) now use consistent relative paths for compatibility in both Storybook and static demo.
- Fixed checkmark icon 404 in both environments by aligning path handling with other icons.
- Normalized icon and label spacing for all button variants; removed unwanted margins and ensured consistent alignment.
- Demo page now uses flexbox for button layout, with improved spacing and a clean, production-like appearance.
- Favicon and static asset handling confirmed for all environments.
- Cleaned up demo HTML and removed debug text/outline.

# Changelog

All notable changes to the Labs Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.0.1] - 2025-07-23

### Added/Changed
- Fully automated asset path rewriting for local/public/GitHub Pages preview and deploy (including favicon and all static assets).
- Public and demo pages now always reference correct asset paths for all environments.
- Favicon 404s fixed for all preview and deploy modes.
- Deploy script now commits all public/QA/demo pages and ensures all assets are present for GitHub Pages.
- Improved documentation and workflow for public preview (`npm run public`) and deploy.
- All automation scripts now robust to new tokens/components/demos.

---

### Archived Storybook Implementation Notes

Previous attempts at Storybook integration, legacy configs, and migration steps have been archived. For details, see `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md`.

## [1.0.0] - 2025-07-20

### Added - Initial Design System Release
  - Complete accessibility support with proper ARIA attributes

- **Comprehensive Design Token System**
  - **Colors**: 15+ semantic color variables extracted from Tracker app
  - **Typography**: Variable font system with Source Sans 3 (100-900 weights)
  - **Spacing**: 12-step spacing scale based on 4px increments
  - **Layout**: Responsive breakpoints and container utilities
  - **Animations**: Consistent transition timings and easing functions
  - Full light and dark mode support with automatic theme switching
[2025-07-24] Design System & Storybook Cleanup
 - Fixed checkmark animation for Labs Button (works in Storybook and public demo)
 - Removed all generic Button, Header, and Page files and references
 - Cleaned up duplicate src folders and legacy assets
 - Ensured asset paths and build scripts run from project root
 - Added up-next: cachebuster for public assets

- **Storybook Documentation Platform**
  - Interactive component playground with live controls
  - Comprehensive design token documentation
  - Real-world component testing playground
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

## [1.0.4] - 2025-07-28

### Changed/Added
- Refactored Tokens stories: split into `Tokens.colors.stories.js`, `Tokens.typography.stories.js`, and `Tokens.spacing.stories.js` for proper Storybook sidebar grouping and sorting.
- Tokens now appear as a sortable folder in the sidebar, matching Icons and Components.
- Removed old combined `Tokens.stories.js` file.
- Sidebar navigation and maintainability improved for all design tokens.

### Changed/Fixes
- Storybook sidebar now shows "Icons/Default", "Icons/Grid Preview", and "Tokens/Colors/Spacing/Typography" as top-level entries.
- "Grid Preview" story added for icons, with direct links to individual icon demos.
- All icon and token stories now use clear, editable navigation labels.
- Comments added to story files for maintainability.
- Removed legacy MDX docs and redundant story files.
- Improved automation for icon list and grid generation.

### Changed/Fixes
- Button width is now content-based ("hug" width) for all variants in both demo and Storybook.
- All icon paths (including checkmark) now use consistent relative paths for compatibility in both Storybook and static demo.
- Fixed checkmark icon 404 in both environments by aligning path handling with other icons.
- Normalized icon and label spacing for all button variants; removed unwanted margins and ensured consistent alignment.
- Demo page now uses flexbox for button layout, with improved spacing and a clean, production-like appearance.
- Favicon and static asset handling confirmed for all environments.
- Cleaned up demo HTML and removed debug text/outline.

# Changelog

All notable changes to the Labs Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.0.1] - 2025-07-23

### Added/Changed
- Fully automated asset path rewriting for local/public/GitHub Pages preview and deploy (including favicon and all static assets).
- Public and demo pages now always reference correct asset paths for all environments.
- Favicon 404s fixed for all preview and deploy modes.
- Deploy script now commits all public/QA/demo pages and ensures all assets are present for GitHub Pages.
- Improved documentation and workflow for public preview (`npm run public`) and deploy.
- All automation scripts now robust to new tokens/components/demos.

---

### Archived Storybook Implementation Notes

Previous attempts at Storybook integration, legacy configs, and migration steps have been archived. For details, see `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md`.

## [1.0.0] - 2025-07-20

### Added - Initial Design System Release
  - Complete accessibility support with proper ARIA attributes

- **Comprehensive Design Token System**
  - **Colors**: 15+ semantic color variables extracted from Tracker app
  - **Typography**: Variable font system with Source Sans 3 (100-900 weights)
  - **Spacing**: 12-step spacing scale based on 4px increments
  - **Layout**: Responsive breakpoints and container utilities
  - **Animations**: Consistent transition timings and easing functions
  - Full light and dark mode support with automatic theme switching
[2025-07-24] Design System & Storybook Cleanup
 - Fixed checkmark animation for Labs Button (works in Storybook and public demo)
 - Removed all generic Button, Header, and Page files and references
 - Cleaned up duplicate src folders and legacy assets
 - Ensured asset paths and build scripts run from project root
 - Added up-next: cachebuster for public assets

- **Storybook Documentation Platform**
  - Interactive component playground with live controls
  - Comprehensive design token documentation
  - Real-world component testing playground
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

## [1.0.4] - 2025-07-28

### Changed/Added
- Refactored Tokens stories: split into `Tokens.colors.stories.js`, `Tokens.typography.stories.js`, and `Tokens.spacing.stories.js` for proper Storybook sidebar grouping and sorting.
- Tokens now appear as a sortable folder in the sidebar, matching Icons and Components.
- Removed old combined `Tokens.stories.js` file.
- Sidebar navigation and maintainability improved for all design tokens.

### Changed/Fixes
- Storybook sidebar now shows "Icons/Default", "Icons/Grid Preview", and "Tokens/Colors/Spacing/Typography" as top-level entries.
- "Grid Preview" story added for icons, with direct links to individual icon demos.
- All icon and token stories now use clear, editable navigation labels.
- Comments added to story files for maintainability.
- Removed legacy MDX docs and redundant story files.
- Improved automation for icon list and grid generation.

### Changed/Fixes
- Button width is now content-based ("hug" width) for all variants in both demo and Storybook.
- All icon paths (including checkmark) now use consistent relative paths for compatibility in both Storybook and static demo.
- Fixed checkmark icon 404 in both environments by aligning path handling with other icons.
- Normalized icon and label spacing for all button variants; removed unwanted margins and ensured consistent alignment.
- Demo page now uses flexbox for button layout, with improved spacing and a clean, production-like appearance.
- Favicon and static asset handling confirmed for all environments.
- Cleaned up demo HTML and removed debug text/outline.

# Changelog

All notable changes to the Labs Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.0.1] - 2025-07-23

### Added/Changed
- Fully automated asset path rewriting for local/public/GitHub Pages preview and deploy (including favicon and all static assets).
- Public and demo pages now always reference correct asset paths for all environments.
- Favicon 404s fixed for all preview and deploy modes.
- Deploy script now commits all public/QA/demo pages and ensures all assets are present for GitHub Pages.
- Improved documentation and workflow for public preview (`npm run public`) and deploy.
- All automation scripts now robust to new tokens/components/demos.

---

### Archived Storybook Implementation Notes

Previous attempts at Storybook integration, legacy configs, and migration steps have been archived. For details, see `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md`.

## [1.0.0] - 2025-07-20

### Added - Initial Design System Release
  - Complete accessibility support with proper ARIA attributes

- **Comprehensive Design Token System**
  - **Colors**: 15+ semantic color variables extracted from Tracker app
  - **Typography**: Variable font system with Source Sans 3 (100-900 weights)
  - **Spacing**: 12-step spacing scale based on 4px increments
  - **Layout**: Responsive breakpoints and container utilities
  - **Animations**: Consistent transition timings and easing functions
  - Full light and dark mode support with automatic theme switching
[2025-07-24] Design System & Storybook Cleanup
 - Fixed checkmark animation for Labs Button (works in Storybook and public demo)
 - Removed all generic Button, Header, and Page files and references
 - Cleaned up duplicate src folders and legacy assets
 - Ensured asset paths and build scripts run from project root
 - Added up-next: cachebuster for public assets

- **Storybook Documentation Platform**
  - Interactive component playground with live controls
  - Comprehensive design token documentation
  - Real-world component testing playground
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

## [1.0.4] - 2025-07-28

### Changed/Added
- Refactored Tokens stories: split into `Tokens.colors.stories.js`, `Tokens.typography.stories.js`, and `Tokens.spacing.stories.js` for proper Storybook sidebar grouping and sorting.
- Tokens now appear as a sortable folder in the sidebar, matching Icons and Components.
- Removed old combined `Tokens.stories.js` file.
- Sidebar navigation and maintainability improved for all design tokens.

### Changed/Fixes
- Storybook sidebar now shows "Icons/Default", "Icons/Grid Preview", and "Tokens/Colors/Spacing/Typography" as top-level entries.
- "Grid Preview" story added for icons, with direct links to individual icon demos.
- All icon and token stories now use clear, editable navigation labels.
- Comments added to story files for maintainability.
- Removed legacy MDX docs and redundant story files.
- Improved automation for icon list and grid generation.

### Changed/Fixes
- Button width is now content-based ("hug" width) for all variants in both demo and Storybook.
- All icon paths (including checkmark) now use consistent relative paths for compatibility in both Storybook and static demo.
- Fixed checkmark icon 404 in both environments by aligning path handling with other icons.
- Normalized icon and label spacing for all button variants; removed unwanted margins and ensured consistent alignment.
- Demo page now uses flexbox for button layout, with improved spacing and a clean, production-like appearance.
- Favicon and static asset handling confirmed for all environments.
- Cleaned up demo HTML and removed debug text/outline.

# Changelog

All notable changes to the Labs Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.0.1] - 2025-07-23

### Added/Changed
- Fully automated asset path rewriting for local/public/GitHub Pages preview and deploy (including favicon and all static assets).
- Public and demo pages now always reference correct asset paths for all environments.
- Favicon 404s fixed for all preview and deploy modes.
- Deploy script now commits all public/QA/demo pages and ensures all assets are present for GitHub Pages.
- Improved documentation and workflow for public preview (`npm run public`) and deploy.
- All automation scripts now robust to new tokens/components/demos.

---

### Archived Storybook Implementation Notes

Previous attempts at Storybook integration, legacy configs, and migration steps have been archived. For details, see `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md`.

## [1.0.0] - 2025-07-20

### Added - Initial Design System Release
  - Complete accessibility support with proper ARIA attributes

- **Comprehensive Design Token System**
  - **Colors**: 15+ semantic color variables extracted from Tracker app
  - **Typography**: Variable font system with Source Sans 3 (100-900 weights)
  - **Spacing**: 12-step spacing scale based on 4px increments
  - **Layout**: Responsive breakpoints and container utilities
  - **Animations**: Consistent transition timings and easing functions
  - Full light and dark mode support with automatic theme switching
[2025-07-24] Design System & Storybook Cleanup
 - Fixed checkmark animation for Labs Button (works in Storybook and public demo)
 - Removed all generic Button, Header, and Page files and references
 - Cleaned up duplicate src folders and legacy assets
 - Ensured asset paths and build scripts run from project root
 - Added up-next: cachebuster for public assets

- **Storybook Documentation Platform**
  - Interactive component playground with live controls
  - Comprehensive design token documentation
  - Real-world component testing playground
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

## [1.0.4] - 2025-07-28

### Changed/Added
- Refactored Tokens stories: split into `Tokens.colors.stories.js`, `Tokens.typography.stories.js`, and `Tokens.spacing.stories.js` for proper Storybook sidebar grouping and sorting.
- Tokens now appear as a sortable folder in the sidebar, matching Icons and Components.
- Removed old combined `Tokens.stories.js` file.
- Sidebar navigation and maintainability improved for all design tokens.

### Changed/Fixes
- Storybook sidebar now shows "Icons/Default", "Icons/Grid Preview", and "Tokens/Colors/Spacing/Typography" as top-level entries.
- "Grid Preview" story added for icons, with direct links to individual icon demos.
- All icon and token stories now use clear, editable navigation labels.
- Comments added to story files for maintainability.
- Removed legacy MDX docs and redundant story files.
- Improved automation for icon list and grid generation.

### Changed/Fixes
- Button width is now content-based ("hug" width) for all variants in both demo and Storybook.
- All icon paths (including checkmark) now use consistent relative paths for compatibility in both Storybook and static demo.
- Fixed checkmark icon 404 in both environments by aligning path handling with other icons.
- Normalized icon and label spacing for all button variants; removed unwanted margins and ensured consistent alignment.
- Demo page now uses flexbox for button layout, with improved spacing and a clean, production-like appearance.
- Favicon and static asset handling confirmed for all environments.
- Cleaned up demo HTML and removed debug text/outline.

# Changelog

All notable changes to the Labs Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.0.1] - 2025-07-23

### Added/Changed
- Fully automated asset path rewriting for local/public/GitHub Pages preview and deploy (including favicon and all static assets).
- Public and demo pages now always reference correct asset paths for all environments.
- Favicon 404s fixed for all preview and deploy modes.
- Deploy script now commits all public/QA/demo pages and ensures all assets are present for GitHub Pages.
- Improved documentation and workflow for public preview (`npm run public`) and deploy.
- All automation scripts now robust to new tokens/components/demos.

---

### Archived Storybook Implementation Notes

Previous attempts at Storybook integration, legacy configs, and migration steps have been archived. For details, see `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md`.

## [1.0.0] - 2025-07-20

### Added - Initial Design System Release
  - Complete accessibility support with proper ARIA attributes

- **Comprehensive Design Token System**
  - **Colors**: 15+ semantic color variables extracted from Tracker app
  - **Typography**: Variable font system with Source Sans 3 (100-900 weights)
  - **Spacing**: 12-step spacing scale based on 4px increments
  - **Layout**: Responsive breakpoints and container utilities
  - **Animations**: Consistent transition timings and easing functions
  - Full light and dark mode support with automatic theme switching
[2025-07-24] Design System & Storybook Cleanup
 - Fixed checkmark animation for Labs Button (works in Storybook and public demo)
 - Removed all generic Button, Header, and Page files and references
 - Cleaned up duplicate src folders and legacy assets
 - Ensured asset paths and build scripts run from project root
 - Added up-next: cachebuster for public assets

- **Storybook Documentation Platform**
  - Interactive component playground with live controls
  - Comprehensive design token documentation
  - Real-world component testing playground
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

## [1.0.4] - 2025-07-28

### Changed/Added
- Refactored Tokens stories: split into `Tokens.colors.stories.js`, `Tokens.typography.stories.js`, and `Tokens.spacing.stories.js` for proper Storybook sidebar grouping and sorting.
- Tokens now appear as a sortable folder in the sidebar, matching Icons and Components.
- Removed old combined `Tokens.stories.js` file.
- Sidebar navigation and maintainability improved for all design tokens.

### Changed/Fixes
- Storybook sidebar now shows "Icons/Default", "Icons/Grid Preview", and "Tokens/Colors/Spacing/Typography" as top-level entries.
- "Grid Preview" story added for icons, with direct links to individual icon demos.
- All icon and token stories now use clear, editable navigation labels.
- Comments added to story files for maintainability.
- Removed legacy MDX docs and redundant story files.
- Improved automation for icon list and grid generation.

### Changed/Fixes
- Button width is now content-based ("hug" width) for all variants in both demo and Storybook.
- All icon paths (including checkmark) now use consistent relative paths for compatibility in both Storybook and static demo.
- Fixed checkmark icon 404 in both environments by aligning path handling with other icons.
- Normalized icon and label spacing for all button variants; removed unwanted margins and ensured consistent alignment.
- Demo page now uses flexbox for button layout, with improved spacing and a clean, production-like appearance.
- Favicon and static asset handling confirmed for all environments.
- Cleaned up demo HTML and removed debug text/outline.
