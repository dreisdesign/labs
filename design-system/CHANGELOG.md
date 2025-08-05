# Labs Design System Changelog

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
