# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
