# Changelog

All notable changes to the DailyNote app will be documented in this file.

## [Unreleased]

### Added
- "All Apps" button in settings overlay for navigation back to labs home page
- Project-specific favicon with `icon-labs--note.*` naming
- Favicon files placed in project root for easy maintenance
- Cache busting parameters for favicon and CSS assets

### Changed
- Updated HTML to reference new favicon assets
- Simplified favicon paths from `assets/images/` subfolder to project root
- Added cache busting (`?v=2.0.0`) to ensure updated assets load properly

### Fixed
- Fixed circular UI elements (settings button) getting distorted on tablet devices
- Removed problematic padding that was causing "squished circles" while preserving improved tablet positioning

## [1.0.3] - 2025-05-13

### Changed
- Settings button and overlay styles now match Tracker app (light/dark, hover, active)
- Settings overlay buttons (theme toggle, clear note) updated for consistency and accessibility
- Clear Note button is now inactive when there is no note, matching Tracker
- Added Refresh button to settings overlay (mobile only), with matching icon and behavior
- Improved icon consistency and SVG usage for settings/refresh/reset
- Minor accessibility and focus improvements

### Fixed
- Refresh icon now displays correctly on all devices
- Overlay and button states are visually consistent in both light and dark mode

## [1.0.0] - 2025-05-12

### Added
- Initial release of DailyNote app
- Single note interface that resets daily
- Dark mode support that respects system preferences
- Responsive design for mobile and desktop devices
- Note editing functionality with proper overlay
- Label editing functionality to customize the note header
- Settings menu with theme toggle and note reset options
- Undo functionality for cleared notes
- iOS PWA support for home screen installation
- Theme color updating for browser UI elements
- Keyboard accessibility improvements
- Flash prevention during page load

### Design Features
- Clean and consistent UI design matching the Tracker app
- Font scaling for better readability
- Proper button styling with hover and active states
- Consistent overlay design across modals
- Visual feedback for user interactions
- High-contrast support for accessibility
- Smooth transitions between states
