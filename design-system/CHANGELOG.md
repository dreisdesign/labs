

## v2.4.9 – 2025-10-15

- **Dropdown & List Item Storybook Refactor:**
	- Refactored dropdown/list item Storybook stories for reliability and modularity
	- Removed redundant/legacy dropdown stories (combos, patterns, wrapped)
	- Canonical dropdown story now uses radio control for allowed combos only
	- Wrapped/contextual stories now always include delete button and match real usage
	- Fixed slotting/import issues for reliable rendering in all stories
- **Documentation:**
	- Updated COMPONENT-USAGE.md and README.md with new Storybook structure, slotting/import best practices, allowed combos, and migration notes
	- All documentation now matches the current codebase and Storybook organization


# v2.4.8 – 2025-10-12

### 🛠 Card & Button Alignment
- **Card header/close alignment:** `.header` now uses `flex: 1` to ensure close button is always right-aligned, regardless of content.
- **Icon-only button sizing:** `labs-input-card` now applies `min-width: 92px` only to non-icon buttons, so close buttons size naturally.

# v2.4.7 – 2025-10-12

### 🆕 Component & Token Refactors
- **Overlay/Warning Overlay:** Modularized, with robust blur/backdrop and centering. Consistent, accessible overlay pattern across all apps.
- **Badge, Card, Input, Settings:** Refactored for modularity, improved slot/attribute API, and Storybook documentation.
- **Token Normalization:** Typography and color tokens consolidated and normalized for reliability and easier maintenance.
- **Icon Workflow:** Icon scripts improved for safe, reliable icon management.

# [Unreleased] - 2025-10-04

### Documentation
- **Documentation Reorganization:** Complete documentation cleanup and reorganization
  - Created `DOCUMENTATION.md` as comprehensive navigation index
  - Moved release notes to `_docs/releases/` (out of GitHub Pages folder)
  - Moved planning docs to `_docs/planning/` 
  - Consolidated IDEAS into ROADMAP with Future Enhancements section
  - Fixed corrupted `todo-index.md` to use links-only format
  - Rebuilt main README to remove massive duplication
- **Modularity Guidelines:** Moved comprehensive component design guidelines to `.github/instructions/modularity.instructions.md` for active reference

---

## [v2.1.7] - 2025-10-03 - Footer Consolidation & October Fixes

## [v2.1.7] - 2025-10-03 - Footer Consolidation & October Fixes

### Added
- **`labs-footer-with-settings` Component:** Encapsulated wrapper that composes `labs-footer`, `labs-overlay`, and `labs-settings-card` with built-in event wiring (`settings-open`, `settings-close`)
- **Canonical Story:** `Components (Wrapped) / Footer → With Settings` demonstrating the wrapper pattern

### Fixed
- **Tracker Date Imports:** Corrected `date-format.js` import paths for GitHub Pages and local preview stability
- **Service Worker:** Updated path handling and added robust error responses

### Chore
- **Storybook Sorting:** Alphabetical `storySort` function for consistent sidebar ordering
- **Story Cleanup:** Removed legacy footer/template story duplicates; wrapped footer is now canonical
- **Archive Cleanup:** Moved legacy smoothie-template stories and generated artifacts out of active src

---

## [v2.1.7] - 2025-10-02 - Mobile Responsive Container System

### Added
- **Container Design System:** Responsive container tokens with mobile-first patterns
- **Mobile Full-Width:** Full-width list items in Tracker using shadow DOM media queries with edge-to-edge styling
- **Modular Container:** Design system token usage across Tracker/Today-list for layout parity

### Chore
- **Story Refactor:** All headers use font-size and font-weight tokens
- **Build Progress:** Enhanced repo preview script with live build progress indicators

---

## [v2.1.7] - 2025-09-30 - Dropdown Portal & Date Utilities

### Added
- **Dropdown Portal Architecture:** Implemented portal positioning for `labs-dropdown` with improved overlay behavior
- **Date Utilities:** Created `design-system/src/utils/date-format.js` with unit tests and 12-hour time formatting
- **List Item Refinements:** Enhanced slot patterns and interaction behaviors

### Fixed
- **Local Preview Stability:** Robust dynamic import for `date-format.js`, corrected asset paths, updated demo slots
- **Slot Rendering Reliability:** Import order best practice - always import `labs-dropdown.js` before `labs-list-item.js` in Storybook stories to guarantee slots render correctly after refresh

---

## [v2.1.7] - 2025-09-20 - Dropdown & List Item Enhancements

### Added
- **Dropdown Icon-Only Variant:** `labs-dropdown` with `only` attribute and `open` state for icon-only triggers
- **List Item Slot-Driven API:** Multiple slot patterns (Default, SlotDriven, TextOnly, Archived states)
- **Dropdown Tests:** Added vitest tests for dropdown component with jsdom environment

### Fixed
- **Container Widths:** Standardized container widths to eliminate Today-list FOUC
- **Theme Persistence:** FOUC/theme fixes and tracker persistence improvements
- **List Item Timestamp:** Fixed timestamp display rendering

### Documentation
- **TODO Cleanup:** Expanded list-item/dropdown TODO with container migration guidance and timing considerations
- **Progress Tracking:** Updated TODO with Phase 5 container system completion

---

## [v2.1.7] - 2025-09-18 - Tracker Integration & Component Variants

### 🚀 **New Component Variants**
- **`labs-card` Metric Variant:**
  - Added `variant="metric"` for large numeric displays
  - Uses H1 typography tokens (`--font-size-h1`, `--font-weight-heading`) for bold metric values
  - Optimized for dashboard and tracking applications
- **`labs-list-item` Text-Only Variant:**
  - Added `variant="text-only"` for simple timestamp/text displays
  - Removes checkbox and overflow menu for clean, read-only list items
  - Supports actions slot for contextual buttons
- **Enhanced `labs-settings-card`:**
  - Built-in dark mode toggle with theme persistence
  - Integrated flavor selection button for theme customization
  - Theme utilities properly wired for seamless switching

### 📚 **Storybook Documentation**
- Added Metric story for `labs-card` showcasing large number displays
- Added TextOnly story for `labs-list-item` demonstrating timestamp lists
- Updated component stories with proper variant examples

### 🎯 **Tracker App Integration**
- Complete migration of Tracker app to use design system components
- All tracker UI elements now use proper design tokens and components
- Theme switching and flavor selection fully functional in production

# [v2.1.6] - 2025-09-01 - Storybook docs dark-preview & token fixes

## [Unreleased] - 2025-09-15

### Changed
	- Input card: default input changed to a two-line textarea (`rows=2`) with keyboard save on Ctrl/Cmd+Enter. See commit `76e1b47`.
	- Overlay: use `transparent` overlay mode for settings/input overlays so overlays provide backdrop only and the card component supplies the visible surface (fixes double-wrapping). Mirrored to Storybook stories and docs. See commit `76e1b47`.
	- Labs List Item: replaced icon-only archive action with a small labelled secondary `Archive` button for improved discoverability and accessibility. See commit `76e1b47`.
	- Documentation: mirrored component changes into `docs/design-system/*` and updated Today List TODO. See commit `3e03fd4`.

	### ✅ Phase 1 Completed — Dropdown Separation (2025-09-19)

	- Extracted and stabilized `labs-dropdown` as a standalone component. Changes include:
		- Icon-only default trigger and `open` variant for explicit open state.
		- Added ARIA attributes: `aria-haspopup`, `aria-expanded`, `aria-controls` and `role="menu"` / `role="menuitem"` semantics for menu and items.
		- Keyboard interaction and focus management for Enter/Space/Arrow/Escape/Home/End.
		- Storybook stories added: `IconOnly`, `Open`, `InList` and updated `Default` to show icon-only dropdown.
		- Storybook rebuilt and docs assets synced to `docs/design-system/` for preview.

# [v2.1.6] - 2025-09-01 - Storybook docs dark-preview & token fixes

### �️ Fixes & Improvements
- Storybook docs previews now respect the dark theme global (`?globals=theme:dark`) by using design tokens for preview surfaces and cards (`--color-surface`, `--color-on-surface`, `--color-background`, `--color-on-background`).
- Added token-aware Storybook CSS overrides and linked them via `.storybook/preview-head.html` to ensure autodocs previews inherit theme tokens in both dev and static builds.
- Hardened the docs decorator to avoid coercing lit TemplateResult and DOM Node story outputs (fixes `[object Object]` rendering and double-wrapping of some stories).
- Updated `icons-grid` story to use token-based backgrounds and set the default icon color to `var(--color-on-surface)` so icons remain visible in dark mode.

# [v2.1.4] - 2025-08-28 - Robust Colors Story & Theme Mapping
### 🚀 Major Improvements
	- All theme flavors (Vanilla, Blueberry, Strawberry) now display correct base mapping for every token.
	- Diagnostic and fallback logic ensures every semantic and palette token is mapped to a friendly label, even if the chain is missing.
	- Polaroid label color now always inherits from the theme (no forced inline color), ensuring correct appearance in all themes.
	- Strategic Storybook documentation and grid layout improvements.
- **Token Architecture:**
	- Two-layer system (palette + semantic) is now fully production-ready and robust for all flavors and themes.
	- All color/theming TODOs are now complete; only future enhancements remain.

## [v2.1.5] - 2025-08-31 - Minor parity fixes

### 🛠️ Bug fixes & polish
- **Colors story:** Global `<details>` uses `--color-surface` / `--color-on-surface` so the Global palette renders using the neutral base (Base 100) consistent with themed sections.
- **Button component:** Icon-only variant updated to prefer `--color-on-surface` (falling back to `--settings-icon-color` then `--color-primary`) to match secondary-with-icon opacity/contrast in dark mode.



> This changelog tracks only the Labs Design System package. For global project milestones, see the [main Labs changelog](../CHANGELOG.md).

### 🛠️ Technical Improvements
- **Menu-Driven Workflow & AI Chat Policy** - Adopted explicit, menu-driven workflow and AI Chat task continuation policy for all design system development. See `.github/instructions/development-workflow.instructions.md` for details.
# Labs Design System Changelog

## [v2.1.3] - 2025-08-12 - Alert Flash Prevention & Storybook v9.1.2

### 🐛 Critical Bug Fixes
- **Alert Flash Prevention:** Fixed unwanted "Action Completed" green alert flash on component initialization
- **Demo Button Reliability:** Resolved alert demo buttons not appearing consistently in Storybook stories
- **Component Loading:** Improved component initialization timing with `customElements.whenDefined()`

### 🔧 Technical Improvements
- **Storybook Upgrade:** Updated from v9.1.1 → v9.1.2 across all packages
- **Alert Component:** Modified render method to prevent content display when inactive
- **Component Dependencies:** Added missing `labs-button` import to alert stories
- **Event Handling:** Added duplicate listener prevention and proper component waiting

### 🎨 UX Enhancements
- **Warning Icons:** Added proper warning icon for warning variant alerts
- **Reliable Interactions:** Alert demo buttons now consistently show and function properly
- **Clean State Management:** Eliminated unwanted component flashes during story navigation

## [v2.1.2] - 2025-08-11 - Native Storybook Integration

### 🎯 Major Achievement
- **Native "Show Code" Feature:** Successfully implemented Storybook's built-in source code display
- **Dual Pattern Approach:** Both custom consolidated view and native individual stories
- **Clean Configuration:** Fixed Storybook config corruption, added `autodocs` tags for automatic docs generation
- **Streamlined Addons:** Removed incompatible v8 addons, leveraging built-in Storybook v9 features

### 🔧 Technical Improvements
- Added `tags: ['autodocs']` to patterns-buttons-storybook-native.stories.js and labs-button.stories.js
- Enhanced preview.js with `docs: { autodocs: 'tag' }` configuration
- Fixed corrupted main.js configuration for clean addon loading
- Real-time code updates with built-in copy functionality

### 📚 Documentation
- **Native Approach:** Access via `/docs/patterns-buttons--docs` for individual stories with built-in "Show code"
- **Custom Approach:** Maintained consolidated view for overview and comparison
- Updated README with native Storybook integration details

## [v2.1.1] - 2025-08-08 - Theme Toggle Componentization & Docs

### ✨ New
- Added `labs-theme-toggle-button` component (variants: transparent, container, icon)
- Integrated the theme toggle into `labs-settings-overlay`

### 📚 Docs
- Documented component composition (tree view) in README
- Labeled Components with Storybook sidebar names
- Archived Theme Implementation doc (moved to `_dev/_documents/`)

### 🔧 Misc
- Minor cleanup and alignment with modularity guidelines

## [v2.1.0] - 2025-08-06 - Icons Grid & Component Performance Overhaul

### 🎯 Major Icons System Improvements
- **Complete Icons Grid Rebuild:** From scratch responsive multi-column layout using CSS Grid
- **Fixed Icon Scaling:** Icons now properly resize with interactive size controls (16px-64px range)
- **Enhanced labs-icon Component:** Complete SVG rendering overhaul with proper attribute reactivity
- **Performance Optimization:** Removed debug logging that caused resize lag, now smooth interactions

### 📱 Responsive Design Excellence
- **Content-Aware Grid:** Uses `auto-fit` with intelligent minimum widths (180px desktop, 140px tablet, 120px mobile)
- **Typography Fixes:** Replaced "tiny" font tokens (9.6px) with proper "small" tokens (14px) for readability
- **Smart Text Wrapping:** Fixed code snippets breaking inappropriately, now breaks at natural word boundaries
- **Progressive Enhancement:** Optimal column counts across all screen sizes

### 🔧 Technical Architecture
- **SVG Processing:** Direct color/size attribute replacement for reliable rendering
- **Attribute Observation:** Added width, height, color to observedAttributes for real-time updates
- **Storybook Organization:** Resolved import conflicts, clean story structure
- **Modularity Compliance:** Self-contained shadow DOM styling, CSS custom properties with fallbacks

### 🎨 User Experience Enhancements
- **Interactive Controls:** Size and color sliders work immediately without lag
- **Improved Visual Hierarchy:** Better spacing, hover effects, and card proportions
- **Enhanced Readability:** Icon names and usage code now clearly visible at appropriate sizes
- **Professional Layout:** Production-ready component showcase following design system guidelines

### 📊 Performance Metrics
- **Files Changed:** 24 files with 1,789 insertions and 741 deletions
- **Grid Performance:** Eliminated resize lag through optimized rendering pipeline
- **Component Efficiency:** Streamlined SVG manipulation for faster icon loading

---

## [v2.0.0] - 2025-08-05 - Complete Theme System Overhaul

### ✨ Major Features
- **Storybook Theme Switcher:** Implemented proper theme switching using `@storybook/addon-themes` with `withThemeByClassName` decorator
- **Complete Theme Toggle System:** Added `setupThemeToggle()` and `updateThemeToggleButton()` functions for app integration
- **Icon-Only Button Variants:** New `icon` variant and `createIconButton()` function for truly icon-only buttons
- **Smart Color System:** Enhanced Colors token page with semantic CSS properties that adapt to theme changes
- **Modular Button Configurations:** Comprehensive system with 15+ pre-configured button combinations

### 🧹 Major Cleanup & Reorganization
- **Removed Redundant Stories:** Eliminated duplicate icon grid, theme toggle, and "Old vs New Approach" stories
- **Consolidated Theme Functionality:** Unified all theme-related code into single, clean implementation
- **Reorganized Button Configs Page:** Moved Usage examples to bottom, improved section hierarchy
- **Removed Manual Theme Toggles:** Replaced individual story theme toggles with global Storybook switcher

### 🔧 Technical Improvements
- **Storybook v9.1.1:** Upgraded from v9.0.18 with proper addon support and version compatibility
- **Theme Class Application:** Applied to document body for proper CSS custom property inheritance
- **Disabled Backgrounds Addon:** Prevented confusion with theme switcher functionality
- **Enhanced Container Variants:** Improved overlay and panel button styling for real app usage

### 📚 Documentation & Developer Experience
- **Clean Story Organization:** Logical grouping of Common Actions, Destructive Actions, UI/Navigation, Icon-Only
- **Theme-Aware Components:** All stories now work correctly in both light and dark themes
- **Comprehensive Button System:** Ready-to-use configurations for immediate app implementation
- **Improved Import Structure:** Clean, consolidated imports throughout all stories

### 🎯 Ready for App Integration
- **Modular Design:** All components follow modularity-first architecture with CSS custom properties
- **Theme System:** Complete theme switching ready for Note, Timer, and Tracker app integration
- **Button Migration:** Pre-configured buttons ready to replace individual app button implementations
- **Storybook Documentation:** Professional design system workflow with proper theme testing

---

## 2025-10-09 — Card/Welcome Centering, Modularity, and Storybook Controls Cleanup

- **labs-card**: Actions area is now always centered using pure flexbox (no slot wrappers, no margin tricks). This guarantees robust, modular centering for all slotted content in the actions slot, regardless of structure.
- **Storybook**: Removed the obsolete `align` control from the canonical Card/Welcome story. The only supported alignment is now `center` for maximum modularity and clarity. For advanced alignment, consumers can wrap actions in a primitive container (see story comment for example).
- **labs-button**: Icon-only variant color is now always `--color-on-surface` for consistent appearance in all contexts. Disabled state uses `opacity: 0.5` for improved accessibility.
- **labs-checkbox**: No longer forcibly disables the internal button; now matches modular button behavior and accessibility.
- **labs-settings-card**: Added safety check to prevent reset-all action if the button is disabled.
- **Today-List App**: Welcome card now always sets `align="center"` for empty state, ensuring the add button is perfectly centered.

**Modularity**: All changes follow the modularity guidelines—no external CSS, all layout logic is internal, and advanced alignment is opt-in via a documented primitive container pattern.

**Storybook**: All stories and controls are updated for clarity and parity with the new modular approach.

---

## 2025-10-09 — Tracker App Parity: Welcome Card Pattern

- **Tracker app** now uses the modular labs-card welcome card for its empty state, matching Today-List. This is now the canonical pattern for all Labs apps: always use `<labs-card variant="welcome" align="center">` for empty states, with header, description, and a primary action button.

---

## [Previous - v1.x] - Legacy System

- Refactored and unified the container button system for overlays and destructive actions
- Cleaned up and modularized button configs and stories for best practices
- Removed redundant stories and improved Storybook sidebar organization
- Improved icon color logic and ensured all icon colors use design tokens
- Updated overlay and container button CSS for visual consistency with Tracker app
- Added and updated documentation for modular usage and best practices
- Automated Storybook sitemap and sidebar mapping
- Improved deploy script to ensure parity between Storybook and public demo

## [Previous Releases]

See earlier entries in the monorepo or project changelogs for prior changes.
