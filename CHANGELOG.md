# [Unreleased] - 2025-09-20

### Added
- **PWA (minimal):** Registered a minimal service worker with a small precache list, navigation-fallback, and cache-first strategy for same-origin assets to provide basic offline navigation and improve resilience. (commit `f333b85`)

### Fixed
- **Settings (safety):** `labs-settings-card` now only probes `http://localhost:8000/` when the current page is a local dev page to avoid opening localhost from production/demo pages. (commit `842057c`)

### Chore
- **Deploy automation:** Multiple automated deploy commits ensured `docs/design-system/` assets are synced and asset paths were rewritten for GitHub Pages. (commits `02743f4`, `9e724a2`, `13bad60`)

# 🎯 v2.4.5 - Tracker Migration Complete: Dark Mode & Design System Integration (September 18, 2025)

### 🚀 **Tracker App Overhaul**
- **Complete Design System Migration:**
  - Tracker app fully migrated to Smoothie Design System components and patterns
  - Metric cards now use H1 typography tokens for large, bold numeric displays
  - List items support text-only variant (no checkboxes) for timestamp displays
  - Removed deprecated Design System link from footer, simplified to track button only
- **Dark Mode & Theming Integration:**
  - Added complete dark mode toggle functionality in settings overlay
  - Integrated flavor selection button for theme customization (Vanilla, Blueberry, Strawberry)
  - Theme utilities (`theme.js`) properly deployed for persistence and switching
  - Settings card includes built-in dark mode and flavor buttons with proper theming
- **Component Enhancements:**
  - Added `metric` variant to `labs-card` with H1 typography tokens
  - Added `text-only` variant to `labs-list-item` for timestamp-only displays
  - Enhanced `labs-settings-card` with theme toggle and flavor selection
  - All components documented in Storybook with new variant examples

### 🛠️ **Build System & Documentation**
- Updated tracker TODO documentation with completed migration tasks
- Proper component sync through build process for GitHub Pages deployment
- All design system files properly distributed to docs structure

---

# � v2.4.4 - Fixed Asset Path Script & Build Process (September 10, 2025)

### 🐛 **Build System Fixes**
- **Asset Path Script Improvements:**
  - Fixed `update-static-paths.js` to exclude hashed build files (e.g., `iframe-XXXXXXXX.js`) that shouldn't be modified
  - Enhanced file filtering with regex patterns to identify built assets vs. intended component files
  - Added directory exclusions for `assets/`, `sb-addons/`, `sb-manager/` to prevent processing Storybook build artifacts
- **Menu System Refinements:**
  - Fixed local preview mode to use `--public` paths instead of auto-detection for consistent local development
  - Improved workflow reliability for `npm run l` (local preview) command
  - Ensures correct path rewriting for all deployment scenarios (local, public, GitHub Pages)

## [Unreleased] - 2025-09-17

### Added
- **New `labs-dropdown` component** - Modular overflow menu component with icon trigger and card-style menu
- **`fullwidth` attribute for `labs-button`** - Universal 100% width support for buttons in containers
- **`more_vert` icon** - Added Material Design more vertical icon for dropdown triggers

### Changed
- **Surface variant tokens** - Added proper theme-specific surface variant tokens for all flavors (Vanilla, Blueberry, Strawberry) to fix hardcoded vanilla colors in common.css
- **Button alignment** - Improved right-alignment and 100% width behavior for buttons in dropdown menus
- **Icon button improvements** - Enhanced icon-only button styling and layout consistency

### Fixed
- **Theme-specific surface colors** - Fixed `--color-surface-variant` and related container tokens to use proper flavor-specific colors instead of hardcoded vanilla
- **Dropdown button width** - Resolved issue where native buttons inside `labs-button` weren't filling container width
- **Icon generation** - Updated icon list generation to include new `more_vert` icon

---

## [Previous] - 2025-09-15

### Changed
- `labs-input-card` default updated to a two-line textarea (`rows=2`) with keyboard save on Ctrl/Cmd+Enter. (commit `76e1b47`)
- Settings/input overlays use `transparent` mode so the overlay only renders the backdrop and the card component supplies the visible surface (fixes double-wrapping). Mirrored to docs and stories. (commit `76e1b47`)
- `labs-list-item` archive action switched from icon-only to a small labelled secondary `Archive` button for accessibility and discoverability. (commit `76e1b47`)
- Documentation mirrors updated in `docs/design-system/*` and `docs/today-list/TODO.md` updated (commit `3e03fd4`).

---
# �🖌️ v2.4.3 - Robust Colors Story & Theme Mapping (August 28, 2025)

### 🚀 **Design System Improvements**
- **Colors Story Robustness:**
  - All theme flavors (Vanilla, Blueberry, Strawberry) now display correct base mapping for every token.
  - Diagnostic and fallback logic ensures every semantic and palette token is mapped to a friendly label, even if the chain is missing.
  - Polaroid label color now always inherits from the theme (no forced inline color), ensuring correct appearance in all themes.
  - Strategic Storybook documentation and grid layout improvements.
- **Token Architecture:**
  - Two-layer system (palette + semantic) is now fully production-ready and robust for all flavors and themes.
  - All color/theming TODOs are now complete; only future enhancements remain.

---
# � v2.4.2 - Storybook Organization & Smoothie Metaphor System (August 26, 2025)

### 🚀 **Storybook Infrastructure**
- **Automated Sitemap Generation:** Complete sitemap generator matching actual Storybook sidebar structure
  - Grouped tables by category (Tokens, Components, Patterns, Foundation)
  - Enhanced parsing for story display names and file organization
  - Timestamp tracking for generation history
- **Story Organization:** Proper `/stories` structure with best practices
  - Moved button stories to centralized `src/stories/` directory
  - Added proper sidebar ordering with "Docs" first, alphabetical after
  - Cleaned up duplicate story files

### 🥤 **Design System Metaphor**
- **Smoothie Metaphor Documentation:** Comprehensive metaphor system for component configuration
  - Authentic smoothie terminology (ingredients, recipes, flavors)
  - Clear mapping between Storybook structure and smoothie concepts
  - Implementation guide for component variants and theming
- **Cross-Reference Tables:** Direct mapping between Storybook paths and metaphor elements

### 🛠️ **Developer Experience**
- **Documentation Cleanup:** Restored corrupted smoothie.md with clean structure
- **Workflow Integration:** Sitemap generation integrated into development workflow

---

# �🖊️ v2.4.1 - Pad Theme-Aware Drawing & Design System Sync (August 26, 2025)

### 🚀 **Pad App Improvements**
- **Theme-Aware Drawing:** Existing lines now update color when switching between light/dark themes (vector-based storage, redraw on theme change)
- **Performance:** Drawing is now stored as vector data, not PNG, for crisp scaling and theme adaptation

### 🛠️ **Design System & Build**
- **Robust Stylesheet Sync:** `dev-sync.sh` and `deploy.sh` now always copy all design system stylesheets for local and production use
- **Production Styles:** All CSS (main.css, flavors.css, storybook-tokens.css) are always up to date in `docs/design-system/styles/`

### 🧹 **Menu & Workflow**
- **Menu Cleanup:** Utilities submenu for advanced tools; streamlined main menu
- **README:** Pad app now featured in app list

---

# � v2.4.0 - Unified Light/Dark Theme System & Interactive Components (August 26, 2025)

### 🚀 **Major Features**
- **Complete Light/Dark Theme System:** Unified theming architecture across apps and Storybook
  - Semantic color tokens with automatic theme adaptation (`--color-background`, `--color-on-surface`, etc.)
  - Global theme toggle button component using design system components
  - Theme persistence in localStorage with system preference detection
  - Proper theme class management (`.theme-light`, `.theme-dark`) on root element

### 🎯 **Component Enhancements**
- **Button Component Improvements:**
  - Added hover effects for all variants using modern `color-mix()` CSS function
  - Implemented click animations with scale-down effect (`transform: scale(0.95)`)
  - Enhanced theme-aware styling with semantic tokens
- **Icon System Fixes:**
  - Fixed theme detection to use correct root element (`document.documentElement`)
  - Proper SVG color inheritance and theme observer functionality
  - Bedtime/bedtime_off icons for theme toggle with correct slot usage

### 📚 **Documentation & Stories**
- **New Theme System Documentation:** Complete interactive story at `Foundation/Theme System`
  - Live theme toggle demonstration with real-time component updates
  - Implementation guide with code examples for app integration
  - Semantic token reference and accessibility notes
- **Component Story Improvements:** Added icon integration examples and improved button documentation

### 🛠️ **Technical Improvements**
- **Storybook Integration:** Seamless theme switching between Storybook and production apps
- **CSS Architecture:** Modern CSS features (color-mix, semantic tokens) for maintainable theming
- **Component Registration:** Fixed labs-icon registration in Storybook preview for proper icon display

### 🧹 **Code Quality**
- **Import Organization:** Fixed import ordering in story files for proper Storybook parsing
- **Duplicate Code Removal:** Cleaned up test buttons and consolidated theme toggle functionality

# �🎨 v2.3.0 - Pad V1.0 & Documentation Consolidation (August 22, 2025)

### 🚀 **New Features**
- **Pad V1.0 App:** Upgraded Apple Pencil drawing app with clear functionality
  - Added clear button in bottom-right corner using design system components
  - Integrated `labs-icon` component with `delete_forever` icon (32px)
  - Uses semantic error color token for consistent theming
  - Native browser confirmation dialog with proper warning
  - Clean minimalist interface (header removed)
  - Full PWA support with manifest and favicon
  - Available at https://dreisdesign.github.io/labs/pad/

### 📚 **Documentation & Organization**
- **Color System Documentation Consolidation:** Streamlined color documentation structure
  - Archived completed `COLORS-TODO.md` to legacy (all tasks finished)
  - Updated cross-references in `COLORS-DOCS.md`
  - Maintained focused 3-document structure: COLORS-DOCS (primary), DESIGN-TOKENS-ARCHITECTURE (technical), smoothie.md (conceptual)
- **Labs Home Page Integration:** Added Pad V1.0 to main navigation with proper icon and description

### 🛠️ **Technical Improvements**
- **Design System Integration:** Pad app now uses complete Storybook component system
- **PWA Enhancements:** Full progressive web app support for optimal mobile drawing experience
- **Deploy Script Fix:** Resolved deployment issues with non-existent demo files

# � v2.2.0 - Color Palette Consolidation, Polaroid Sizing, and Docs Refactor (August 21, 2025)

### 🎨 **Design System & Storybook Improvements**
- **Palette Simplification:** Removed all `-300` color variants (vanilla-300, blueberry-300, strawberry-300) from palette, code, and docs for a leaner, more maintainable system.
- **Strawberry-800 Update:** Darkened `--palette-strawberry-800` to match other 800 stops for visual consistency.
- **Polaroid Sizing:** Global polaroids in the Colors story now match the size and padding of theme palette polaroids for a unified look.
- **Token-Driven Color Planning:** All color/theming TODOs and next steps are now tracked in `COLORS-TODO.md` (see design-system), with main TODO file linking only to area-specific TODOs.
- **Documentation Cleanup:** Updated all docs and architecture guides to reflect the new palette, removed references to deleted stops, and clarified the token-driven approach.
- **Legacy/Backup Files:** Removed or archived backup and legacy TODO files for clarity.

# �🗂️ v2.1.x - Documentation Consolidation & CSF3 Migration (August 2025)

> For detailed design system component changes, see [`design-system/CHANGELOG.md`](design-system/CHANGELOG.md).

### Unreleased — main - 2025-09-01
- docs(workflow): update sync prompt to include unified project task/TODO/changelog process
- docs: add dedicated TODO prompt for checklist/project hygiene

### Unreleased — feature/theme-cleanup/docs-and-scan (2025-08-19)
- docs(theme): add canonical Color Tokens & Theme System guide (design-system/src/styles/COLORS-DOCS.md)
- feat(theme): wire Storybook preview to init/apply system theme; add semantic token mapping (flavors.css, main.css)
- chore(docs): update tokens stories and housekeeping docs; prepare token-scan tooling (scripts)
- misc: add early-load IIFE to demo pages to prevent FOUC; small docs and README references

- docs(theme): sync `COLORS-DOCS.md` snapshots with authoritative `tokens/colors.css` and `flavors.css`; validated with local Storybook static build (design-system/storybook-static)

### 📝 Documentation Overhaul
- **Single Source of Truth:** All design system, Storybook, and UI development docs consolidated into `docs/DEVELOPMENT.md`
- **Legacy Docs Archived:** Old migration, features, and sprint docs moved to `_dev/_archive`
- **README Updated:** Main README now points to the new development guide

### 🚧 In Progress
See `TODO.md` for all current in-progress and planned work.
### 🛠️ Technical Enhancements
- **Menu-Driven Workflow & AI Chat Policy** - Adopted explicit, menu-driven workflow and AI Chat task continuation policy for all development and documentation. See `.github/instructions/development-workflow.instructions.md` for details.
# 📋 Labs Project Changelog

> **Global project updates, releases, and major milestones**

## 🚀 v2.1.3 - Component Stability & Storybook Enhancement (August 12, 2025)

### 🐛 **Critical Bug Fixes**
- **Alert Flash Prevention** - Eliminated unwanted "Action Completed" green alert flashes during component initialization
- **Demo Button Reliability** - Fixed alert demo buttons not appearing consistently in Storybook stories
- **Component Dependencies** - Resolved missing imports and improved initialization timing

### ⚡ **Storybook Upgrade**
- **Version Update** - Successfully upgraded from v9.1.1 → v9.1.2 across all packages
- **Enhanced Stability** - Improved component loading and interaction reliability
- **Clean Dependencies** - Updated addon ecosystem for better compatibility

### 🎨 **UX Improvements**
- **Warning Icons** - Added proper warning icons for alert warning variants
- **Consistent Interactions** - Alert demo buttons now reliably show and function
- **State Management** - Eliminated UI flashes during story navigation and component switching

## 🚀 v2.1.0 - Production Stability & Icon Resolution (August 7, 2025)

### ✨ **Major Improvements**
- **🔧 Icon Path Resolution** - Fixed 404 errors in production GitHub Pages deployment
- **⚡ Enhanced Build Scripts** - Auto-port-kill functionality with pre-error checking
- **🎯 Menu-Driven Development** - Simple npm run menu interface for all operations
- **🎨 Theme Toggle Implementation** - Working light/dark mode across all UI patterns

### 🛠️ **Technical Enhancements**
- **Hostname-Based Path Detection** - Reliable environment detection for GitHub Pages
- **Automated Port Management** - No more manual intervention for port 6006 conflicts
- **Build Validation** - Pre-checks for common build issues and missing dependencies
- **Production Deployment Pipeline** - One-command build and deploy to GitHub Pages

### 📋 **Documentation Overhaul**
- **Consolidated Documentation** - Single README per project, clean hierarchy
- **Comprehensive Main Index** - New Labs README as primary documentation hub
- **Active Task Tracking** - Clear separation of current work vs. reference docs
- **Archive Organization** - Outdated docs moved to appropriate archive locations

### 🔧 **Developer Experience**
- **Enhanced Menu System** - `npm run menu` with build/deploy options
- **Build Size Reporting** - Automatic bundle size and file count tracking
- **Error Prevention** - Pre-build validation and environment checking
- **Fallback Commands** - Original commands preserved as *-original

---

## 🎨 v2.0.0 - Design System & Architecture Rewrite (July 2025)

### 🏗️ **Complete Architecture Overhaul**
- **Modern Web Components** - Native browser APIs, no framework dependencies
- **Lit Integration** - Lightweight web component base class
- **Storybook v9.1.1** - Interactive component development and documentation
- **Vite Build System** - Fast development server and optimized production builds

### 🎨 **Design System v2.0**
- **Modular Components** - Self-contained, portable web components
- **CSS Custom Properties** - Extensive theming and customization system
- **Shadow DOM Encapsulation** - No style conflicts or external dependencies
- **Token System** - Comprehensive design tokens for colors, typography, spacing
- **Icon Management** - Automatic icon generation and dynamic loading

### 📱 **Application Modernization**
- **Progressive Web Apps** - Installable apps with offline support
- **Responsive Design** - Mobile-first approach with desktop optimization
- **Shared Component Library** - Consistent UI across all applications
- **Data Persistence** - Enhanced local storage with export/import features

### 🚀 **Deployment Infrastructure**
- **GitHub Pages Integration** - Automated deployment from docs/ folder
- **Multi-App Deployment** - All apps and Storybook deployed together
- **Build Automation** - Scripts for consistent build and deploy process
- **Performance Optimization** - Minified builds with asset optimization

---

## 📈 v1.0.0 - Initial Release (2024)

### 🎯 **Core Applications**
- **Focus Timer** - Pomodoro-style productivity timer
- **Daily Tracker** - Habit and activity tracking
- **Daily Note** - Simple daily note-taking
- **Today List** - Daily task management
- **Labs Homepage** - App launcher and overview

### 🏗️ **Foundation**
- **Monorepo Structure** - Organized codebase with shared components
- **GitHub Pages Hosting** - Free, reliable static site hosting
- **Responsive Design** - Mobile and desktop compatibility
- **Local Storage** - Data persistence without external dependencies

---

## 🎯 Current Development Priorities

See `TODO.md` for all actionable, in-progress, and planned work.

---

## 🏆 Recent Commits & Achievements

### **August 7, 2025**
- `e6d1025` - Deploy: Clean icon path logic to production ✅
- `cb7ca4b` - Deploy: Force GitHub Pages hostname detection ✅
- `d212e1d` - Deploy: Enhanced build with fixed icon paths ✅
- `1938562` - Fix: Update production Storybook build ✅
- `aa14e72` - Feat: Auto-port-kill scripts for seamless development ✅

### **Key Achievements**
- ✅ **404 Error Resolution** - Complete fix for production icon loading
- ✅ **Automated Build Pipeline** - Enhanced scripts with error prevention
- ✅ **Theme Toggle Implementation** - Working across all UI patterns
- ✅ **Documentation Organization** - Clean hierarchy and active task tracking
- ✅ **Production Stability** - Reliable GitHub Pages deployment

---

## 🛠️ Technical Stack

### **Frontend**
- **Web Components** - Native browser standard, framework-agnostic
- **Lit** - Lightweight web component library
- **CSS Custom Properties** - Native CSS variables for theming
- **Shadow DOM** - Encapsulation and style isolation

### **Build & Development**
- **Storybook v9.1.1** - Component development and documentation
- **Vite** - Fast build tool and development server
- **Node.js Scripts** - Build automation and deployment
- **GitHub Actions** - Automated deployment pipeline

### **Deployment & Hosting**
- **GitHub Pages** - Static site hosting
- **GitHub Repository** - Version control and collaboration
- **Custom Domain Support** - dreisdesign.github.io/labs
- **CDN Distribution** - Global content delivery

---

## 🤝 Development Philosophy

### **Modularity First**
Every component is designed to be self-contained, portable, and configurable without external dependencies. This ensures maximum reusability and maintainability.

### **Progressive Enhancement**
Applications work without JavaScript and are enhanced with modern web technologies. This ensures accessibility and performance across all devices.

### **Developer Experience**
Comprehensive tooling, clear documentation, and automated workflows reduce friction and enable rapid development and deployment.

### **Performance Optimization**
Minimal bundle sizes, efficient loading strategies, and optimized assets ensure fast, responsive user experiences.

---

*For detailed release notes and technical changes, see individual project changelogs in their respective directories.*
