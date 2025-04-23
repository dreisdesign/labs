# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Table of Contents
- [1.0.5](#105) - UI Enhancements & Theme Toggle Update
- [1.0.4](#104) - PWA Enhancements & UI Simplification
- [1.0.3](#103) - Accessibility Implementation + PWA Enhancements
- [1.0.2](#102) - Accessibility Preparation
- [1.0.1](#101) - Bug Fixes & Refinements
- [1.0.0](#100) - Initial Release

## [1.0.5] - 2025-04-23

### Changed
- Replaced text-based theme toggle with icon button using dark/light mode icons
- Enhanced theme toggle icon size and colors to match button text styles
- Added press-down effect (scale and darker background) to the Track button
- Added mobile support for Track button press-down effect
- Fixed placeholder text opacity to match 75% of the current theme's text color

## [1.0.4] - 2024-04-21

### Added
- iOS status bar coloring support for web app mode (when added to home screen)
- Dynamic Safari tab bar coloring that changes with theme toggle
- Updated meta tags for improved PWA (Progressive Web App) experience
- Added `apple-mobile-web-app-capable` and `apple-mobile-web-app-status-bar-style` meta tags
- Added `viewport-fit=cover` for proper handling of edge-to-edge iOS displays
- JavaScript-based theme color adaptation for browser UI elements

### Changed
- Updated version number display in HTML and CSS.
- Adjusted iOS PWA status bar padding and version number positioning.
- Improved metric label editing UX: focus on click, save on blur/enter, revert on escape.
- Added checkmark success animation to Track button.
- Added pulsing animation to placeholder text when Reset is clicked on an empty list.
- Added fade-out animation when clearing entries with Reset button.
- Improved theme toggle persistence and meta tag update.
- Refactored JS for clarity, added constants for localStorage keys.
- Added basic testing mode (Ctrl/Cmd+Shift+T) to add sample entries.
- Improved accessibility: focus styles, skip link, touch targets, ARIA states.
- Added print styles.
- Simplified UI: Removed top date heading, removed date label within list, removed line under newest entry
- Removed all entry animations (grow-in, push-down) for simplicity
- Replaced entry animations with a fixed-height scrollable list area (`#mainContent`) to prevent layout shifts
- Updated testing mode to group entries by day (like normal mode) instead of by second
- Added roll-in animation for the checkmark icon on the Track button

### Fixed
- Ensured placeholder text displays correctly when list becomes empty.
- Prevented potential errors by validating data loaded from localStorage.
- Fixed label editing focus issues, especially on Safari.
- Addressed potential double animation triggers on Track button.
- Fixed iOS status bar appearance when app is launched from home screen
- Resolved theme color inconsistencies between browser and app modes
- Adjusted CSS animations attempting to fix gap issue (though ultimately removed animations)

## [1.0.3]
### Added
- Skip to content link for keyboard users for better navigation
- Support for prefers-reduced-motion media query to respect user motion preferences
- Print styles for better document printing
- High contrast mode support for Windows users with forced-colors
- ARIA disabled state styling for better screen reader feedback
- iOS status bar coloring support for web app mode (when added to home screen)
- Dynamic Safari tab bar coloring that changes with theme toggle
- Updated meta tags for improved PWA (Progressive Web App) experience
- Added `apple-mobile-web-app-capable` and `apple-mobile-web-app-status-bar-style` meta tags
- Added `viewport-fit=cover` for proper handling of edge-to-edge iOS displays
- JavaScript-based theme color adaptation for browser UI elements

### Changed
- Improved color contrast throughout the application for better readability
- Increased touch target sizes (minimum 44px height, 48px on mobile) for all interactive elements
- Added visible focus indicators for keyboard navigation with distinct colors for light/dark mode
- Standardized focus states across all interactive elements using `:focus-visible`
- Improved text spacing and letter spacing for better readability
- Added proper underline offset for text with underline decoration
- Enhanced mobile accessibility with larger touch targets and font sizes
- Updated site.webmanifest to use "fullscreen" display mode for better iOS integration
- Enhanced app-like experience on iOS devices when added to home screen
- Consolidated changelog files to a single source of truth
- Improved theme switching with automatic browser UI color updates

### Fixed
- Improved version number contrast and visibility
- Enhanced checkbox visibility by setting explicit dimensions
- Fixed potential focus trapping issues with proper focus states
- Ensured color is not the only means of conveying information
- Improved word wrapping and hyphenation for time entries
- Fixed iOS status bar appearance when app is launched from home screen
- Resolved theme color inconsistencies between browser and app modes

## [1.0.2]
### Changed
- Accessibility review preparation (786a8fa):
  - Converted all color variables to use rgb/rgba (no hex codes)
  - Added 75% opacity variants for primary, secondary, and on-surface colors
  - Updated scrollbar colors to use the 75% opacity primary color for better contrast
  - Modified testing mode to group by seconds (not minutes) for more granular testing
- README updated to document accessibility and color improvements (c8df505)

### Fixed
- Fixed centering by removing scrollbar style (49f31fb)

## [1.0.1]
### Changed
- Refactored styles and scripts (85b550d)
- Updated documentation (bf17033)

### Fixed
- Fixed reset issue (14deeb7)
- Fixed title editing issues (2c92925, 80e155b)
- Resolved issue where clicking the metric label required two clicks to become editable in Safari
- Removed extraneous edit button (pencil icon) that was incorrectly added to the HTML

## [1.0.0] - 2024-04-20

- Initial release.
