# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2025-04-21

### Added
- Accessibility review and prep for improvements (color contrast, keyboard navigation, ARIA suggestions).
- All color variables now use rgb/rgba (no hex codes).
- Added 75% opacity variants for primary, secondary, and on-surface colors.
- Scrollbar colors now use the 75% opacity primary color for better contrast and theme consistency.
- Testing mode now groups by seconds (not minutes) for more granular testing.

### Changed
- README updated to document accessibility and color improvements.

## [1.0.1] - 2025-04-20

### Fixed
- Resolved issue where clicking the metric label required two clicks to become editable in Safari.
- Removed extraneous edit button (pencil icon) that was incorrectly added to the HTML.

## [Unreleased] - 2025-04-20

### Added
- Timestamp tracking functionality with a list display.
- Display of the current date above the timestamp list.
- Persistence of tracked entries and total count using Local Storage.
- Automatic dark/light theme switching based on system preference (`prefers-color-scheme`).
- Manual theme toggle button (Light/Dark) with preference saved to Local Storage.
- Fade-in animation for newly added timestamp entries.
- Fade-out animation when resetting the timestamp list.
- Pulse animation for "No entries yet" text when resetting an already empty list.
- `.gitignore` file to exclude specific files like `chat.log`.
- `CHANGELOG.md` file to track project changes.

### Changed
- Date format updated to "Weekday Month Day Year" (e.g., "Saturday April 19 2025").
- Timestamp list entries are now centered horizontally.
- Reset and Theme buttons are positioned at the bottom (Reset left, Theme right).
- Theme toggle button text changed from "Toggle Theme" to "Theme".
- Theme toggle button styled to match the Reset button.
- Added comments to JS, CSS, and HTML for better maintainability.
- Checkbox character changed to ✔.

### Fixed
- Initial `ReferenceError: trackedEntries is not defined`.
- Multiple layout issues ensuring the first timestamp entry correctly replaces the "No entries yet" placeholder without shifting subsequent entries.
- Ensured the date label remains fixed at the top during scrolling or adding entries.
- Corrected `.gitignore` pattern to properly ignore `tracker/chat.log`.
