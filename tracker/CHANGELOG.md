# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Table of Contents
- [Unreleased](#unreleased)
- [1.0.3](#103) - Accessibility Implementation
- [1.0.2](#102) - Accessibility Preparation
- [1.0.1](#101) - Bug Fixes & Refinements
- [1.0.0](#100) - Initial Release

## [Unreleased]
### Added
- iOS status bar coloring support for web app mode (when added to home screen)
- Updated meta tags for improved PWA (Progressive Web App) experience
- Added `apple-mobile-web-app-capable` and `apple-mobile-web-app-status-bar-style` meta tags
- Media query support for theme-color meta tags to match light/dark mode

### Changed
- Updated site.webmanifest theme and background colors to match app color scheme
- Enhanced app-like experience on iOS devices when added to home screen

## [1.0.3]
### Added
- Skip to content link for keyboard users for better navigation
- Support for prefers-reduced-motion media query to respect user motion preferences
- Print styles for better document printing
- High contrast mode support for Windows users with forced-colors
- ARIA disabled state styling for better screen reader feedback

### Changed
- Improved color contrast throughout the application for better readability
- Increased touch target sizes (minimum 44px height, 48px on mobile) for all interactive elements
- Added visible focus indicators for keyboard navigation with distinct colors for light/dark mode
- Standardized focus states across all interactive elements using `:focus-visible`
- Improved text spacing and letter spacing for better readability
- Added proper underline offset for text with underline decoration
- Enhanced mobile accessibility with larger touch targets and font sizes

### Fixed
- Improved version number contrast and visibility
- Enhanced checkbox visibility by setting explicit dimensions
- Fixed potential focus trapping issues with proper focus states
- Ensured color is not the only means of conveying information
- Improved word wrapping and hyphenation for time entries

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

## [1.0.0]
### Added
- Initial release of tracking functionality (523c9fe to 5dffbe6):
  - Timestamp tracking functionality with a list display
  - Display of the current date above the timestamp list
  - Persistence of tracked entries and total count using Local Storage
  - Automatic dark/light theme switching based on system preference (`prefers-color-scheme`)
  - Manual theme toggle button (Light/Dark) with preference saved to Local Storage
  - Fade-in animation for newly added timestamp entries
  - Fade-out animation when resetting the timestamp list
  - Pulse animation for "No entries yet" text when resetting an already empty list
- Version number display (f1ad953)
- Testing mode with time-based grouping (3a10037)
- Editable title feature (b909ca1)
- Basic documentation:
  - `README.md` file (088300e)
  - `.gitignore` file to exclude specific files like `chat.log`
  - `CHANGELOG.md` file to track project changes

### Changed
- Date format: "Weekday Month Day Year" (e.g., "Saturday April 19 2025")
- Timestamp list entries centered horizontally
- Reset and Theme buttons positioned at the bottom
- Theme toggle button styled to match the Reset button
- Added comments to JS, CSS, and HTML for better maintainability
- Checkbox character changed to ✔

### Fixed
- Initial `ReferenceError: trackedEntries is not defined`
- Multiple layout issues with timestamp entries and placeholders
- Ensured the date label remains fixed at the top during scrolling or adding entries
- Corrected `.gitignore` pattern to properly ignore `tracker/chat.log`
