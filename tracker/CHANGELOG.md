# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Table of Contents
- [Unreleased](#unreleased)
- [1.0.9](#109) - Animation & Theme Transition Improvements
- [1.0.8](#108) - Theme Transition Updates
- [1.0.7](#107) - No changes - *script test*
- [1.0.6](#106) - Theme Toggle Enhancements
- [1.0.5](#105) - UI Enhancements & Theme Toggle Update
- [1.0.4](#104) - PWA Enhancements & UI Simplification
- [1.0.3](#103) - Accessibility Implementation + PWA Enhancements
- [1.0.2](#102) - Accessibility Preparation
- [1.0.1](#101) - Bug Fixes & Refinements
- [1.0.0](#100) - Initial Release

## [Unreleased]

## [2.0.1] - 2025-05-09

### Added
- Added checkmark animation to refresh button when clicked
- Added "You are on the latest version" success message using color-success variable
- Implemented smooth transitions for success message appearance and disappearance
- Enhanced visual feedback when refreshing app from homescreen

### Changed
- Improved refresh button layout with properly positioned checkmark icon
- Standardized animation style to match add button's success animation
- Updated success message styling to use consistent app design patterns

## [2.0.0] - 2025-05-09

### Added
- Added "Refresh" button in settings menu for web app users
- Implemented detection for standalone/homescreen app mode
- Added ability to force refresh the app when installed on iOS homescreen
- Added update icon to match app's visual style


## [1.7.2] - 2025-05-09

### Fixed
- Fixed mobile overlay positioning when on-screen keyboard appears on smartphones
- Implemented CSS-first solution using modern viewport units (dvh/svh) for keyboard handling
- Ensured editing windows remain properly centered when keyboard appears
- Prevented overlay content from shifting off-screen on iOS Safari and other mobile browsers
- Maintained consistent width and position during keyboard transitions
- Added responsive media queries to handle different screen heights during keyboard interaction

### Changed
- Simplified JavaScript keyboard handling with minimal implementation
- Added browser capability detection for modern viewport units
- Maintained backward compatibility with existing API calls from main.js
- Removed direct style manipulation in JavaScript in favor of CSS-based solutions

## [1.7.1] - 2025-05-09

### Fixed
- Fixed issue with text editing overlays disappearing off-screen when the mobile keyboard appears
- Improved overlay positioning with modern CSS-only solution:
  - Added support for dynamic viewport height units (dvh/svh) for better mobile keyboard handling
  - Implemented proper centering of modals in available space above keyboard
  - Fixed iOS Safari issue where modal would shift too far upward
- Added specialized keyboard handling for both comment and label editing overlays
- Improved scrolling behavior for overlays on mobile devices
- Eliminated "jumping" effect when the keyboard appears on mobile devices
- Added smoother transitions and animations for overlay positioning
- Optimized handling of viewport changes when keyboard appears/disappears

### Changed
- Improved hover style for "Total" header by removing background fill on hover for cleaner visual experience
- Adjusted edit icon positioning to provide better spacing (right: -30px)
- Added direct hover state for the edit icon with smooth transitions
- Maintained consistent icon size (24px) to match time entry icons

## [1.7.0] - 2025-05-06


## [1.6.0] - 2025-05-05

### Added
- Enhanced metric label editing with overlay interface
- Added ability to edit the "Total" label with same UX pattern as time entry commenting
- Edit pencil icon appears on hover over the metric label
- Modal overlay for editing the label with input field
- "Reset to Default" button when label is customized, "Cancel" when using default
- Note overlay now shows timestamp context (e.g., "Note @ 2:55 PM")

### Changed
- Updated comment overlay title to include the timestamp of the entry being edited
- Improved placeholder behavior for default label editing to avoid text selection
- Consolidated metric label hover and edit styling for consistent user experience

## [1.5.0] - 2025-05-05

### Added
- Added the ability to add comments to time entries
- Time entries are now clickable, opening a comment editor overlay
- Comment icon appears on entries that have comments
- Comment overlay has the same visual style as the settings menu for consistency
- Mobile keyboard automatically opens when the comment overlay appears
- Comments are saved with the entry data and persist through page reloads
- Added undo functionality for comment deletion similar to the reset undo
- Enhanced hover effects for time entries showing different icons based on comment state

### Changed
- Enhanced time entries to be more interactive with cursor pointer
- Improved time entry layout to accommodate comment icons
- Updated time entries to use space-between layout for better alignment
- Made comment overlay width consistent with settings overlay for better UI coherence

### Fixed
- Fixed icon display issue in settings menu for the reset button

## [1.4.1] - 2025-05-04

### Added
- Added variable font support with 'Source Sans 3' font for better typography
- Added proper font weights across the application using the variable font range (100-900)

### Changed
- Simplified CSS by consolidating redundant button classes (merged track-button and bottom-track-button into main-button)
- Improved scrollbar styling for better Safari compatibility
- Adjusted settings button position with proper spacing (50px margin from right)
- Updated version number font to use the new variable font

### Fixed
- Fixed scrollbar styling in Safari by using a simpler CSS approach with the custom-scrollbar class

## [1.4.0] - 2025-04-30


## [1.2.1] - 2025-04-29


## [1.2.0] - 2025-04-27


## [1.1.3] - 2025-04-25

### Added
- Added reset countdown functionality that delays reset operation for 5 seconds
- Implemented cancel button that appears when reset is clicked, allowing users to cancel the reset operation
- Enhanced reset UX with animated button that slides in from the bottom of the screen
- Added visual countdown timer showing seconds remaining before reset completes

### Changed
- Modified reset button to trigger a confirmation flow instead of immediate data clearing
- Improved feedback during reset operation with countdown timer

## [1.1.2] - 2025-04-25


## [1.1.1] - 2025-04-25


## [1.1] - 2025-04-25

### Changed
- Improved FLIP animation logic for time entries and date headers: all items now slide smoothly and in order when a new entry is added.
- Newest entry card now pops in from 0.5x scale to 1x scale for a more dramatic effect.
- Only the newest entry animates opacity/scale; all others have their opacity set instantly, preventing random fade-in bugs and visual gaps.
- Grouping in testing mode now uses 10-second intervals, with group headers showing the correct range.
- Date headers are now centered and spacing between entries within a group is improved.
- Track button is disabled during animation to prevent overlapping or out-of-order animations.
- Improved opacity logic: most recent entry is 100%, next is 70%, and the rest fill linearly down to 20%.
- Fixed animation mapping by using a unique data-key for each entry, ensuring correct sliding behavior.

## [1.0.14] - 2025-04-24

### Added
- Added gradual opacity effect for timestamps in the viewport
- New entries appear with smooth pop-in animation starting at 1.5x scale
- Implemented sliding animation for existing timestamps when adding new ones
- Opacity values shift down with entries (100%, 80%, 60%, 40%, 20%)

## [1.0.13] - 2025-04-24

### Added
- Added create-feature.sh script for automated feature branch creation
- Enhanced testing capabilities with automated test setup

## [1.0.12] - 2025-04-24

### Changed
- Improved responsive layout for smaller screens
- Enhanced button feedback animations
- Updated icon assets for better clarity

## [1.0.11] - 2025-04-24

### Fixed
- Fixed edge case in theme switching animation
- Resolved mobile Safari rendering issues
- Improved touch event handling on iOS devices

## [1.0.10] - 2025-04-24

### Added
- Enhanced error handling for local storage operations
- Improved data persistence reliability
- Added recovery mechanism for corrupted data

## [1.0.9] - 2025-04-24

### Added
- Smooth theme transitions for all UI components with optimized timing
- Enhanced timestamp entry animations with scale and fade effects
- Added pressed state animations for interactive elements
- Improved theme toggle button with scale and color transitions

### Changed
- Updated CSS transitions for smoother color changes across components
- Optimized animation timings for better user experience
- Improved visual feedback on button interactions
- Enhanced overall UI responsiveness with subtle animations

## [1.0.8] - 2025-04-24

### Added
- Smooth fade transition when switching between light and dark themes
- Enhanced theme transitions for all UI elements including backgrounds, text, and icons
- Added scale-down effect to theme toggle button to match track button behavior

## [1.0.7] - 2025-04-24
No changes - *script test*

## [1.0.6] - 2025-04-24

### Changed
- Added transitional theme icons for button press states (light-to-dark and dark-to-light)
- Added touch support for theme toggle transitional states
- Updated theme toggle hover effect: removed background color change in favor of 1.25x scale transform
- Made theme toggle icon use the same hover color as the track button for consistency

## [1.0.5] - 2025-04-23

### Changed
- Replaced text-based theme toggle with icon button using dark/light mode icons
- Enhanced theme toggle icon size and colors to match button text styles
- Added press-down effect (scale and darker background) to the Track button
- Added mobile support for Track button press-down effect
- Fixed placeholder text opacity to match 75% of the current theme's text color
- Added full-width footer with drop shadow when scrolling
- Made scrollbar permanently visible when content is scrollable

### Fixed
- Fixed drop shadow behavior on browser resize
- Ensured footer shadow only shows when content is actually scrollable

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
