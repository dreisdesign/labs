# Changelog

All notable changes to the Focus Timer project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Project-specific favicon with `icon-labs--focus-timer.*` naming
- Favicon files placed in project root for easy maintenance
- Cache busting parameters for favicon and CSS assets

### Changed
- Updated HTML to reference new favicon assets
- Simplified favicon paths from `assets/` subfolder to project root
- Added cache busting (`?v=2.0.0`) to ensure updated assets load properly

## [2.1.0] - 2025-05-27

### Added
- **Interactive Circles**: Circles are now clickable and function as large touch targets for play/pause
- **Smart Button Text**: Button now shows "Resume" when paused (after being started) vs "Start" for new sessions
- **Enhanced Touch Experience**: Visual feedback on circle hover and press interactions
- **Improved Accessibility**: Larger interactive areas for better mobile usability

### Changed
- **User Interface**: Circles now provide visual feedback (scale effects) when interacted with
- **Button Logic**: More intuitive button text that reflects the actual action available
- **Touch Targets**: Significantly expanded interactive areas especially beneficial on mobile devices

### Technical Improvements
- **Event Handling**: Added click event listeners to both work and break circles
- **State Management**: Enhanced timer state tracking with `hasStarted` property
- **CSS Enhancements**: Added cursor pointer, hover, and active states for circles
- **User Feedback**: Smooth scaling transitions for interactive elements

## [2.0.1] - 2025-05-27

### Improved
- **Mobile Experience**: Significantly increased circle sizes on mobile devices for better touch interaction
- **Responsive Design**: Enhanced mobile-specific media queries for optimal circle sizing
- **Touch Usability**: Circles now use up to 95% of viewport on small screens

### Changed
- **Circle Sizing**: Updated base circle sizes from 75vw/60vmin to 85vw/70vmin
- **Mobile Optimization**: Added progressive sizing for tablets (90vw) and phones (95vw)
- **Aspect Ratio Maintenance**: Preserved 5:1 ratio between large and small circles across all screen sizes

### Technical Details
- **Media Queries**: Added specific breakpoints for ≤768px and ≤480px screen widths
- **Viewport Units**: Enhanced use of `min()` function with multiple viewport constraints
- **Touch Targets**: Improved accessibility compliance for mobile touch interfaces

## [2.0.0] - 2025-05-27

### Added
- **Version Display**: Added version number display in top-right corner
- **Version Management**: Integrated with automated version update system
- **Project Infrastructure**: Added proper versioning support for deployment workflows

### Changed
- **Version Tracking**: Now properly tracks and displays version information
- **Development Workflow**: Enhanced with automated version management tools
- **Project Structure**: Aligned with other projects in the labs workspace

### Technical Improvements
- **CSS Styling**: Added version number styling with fixed positioning
- **HTML Structure**: Enhanced with version display element
- **Project Standards**: Implemented consistent versioning across all lab projects

## [1.0.0] - 2025-05-24

### Added
- **Initial Release**: Complete Focus Timer application
- **Core Timer Functionality**:
  - 25-minute work sessions with countdown display
  - 5-minute break sessions with countdown display
  - Automatic session switching between work and break
  - Play/pause/reset controls
- **Visual Design**:
  - Two circular progress indicators (work and break)
  - 5:1 size ratio between large work circle and small break circle
  - Perfect 1:1 aspect ratio circles maintained on all screen sizes
  - Minimalist, distraction-free interface
- **Responsive Layout**:
  - Portrait mode: circles stacked vertically
  - Landscape mode: circles arranged horizontally
  - Mobile-optimized touch targets and spacing
  - Viewport-based scaling using `vmin` units
- **Audio Integration**:
  - 25-minute focus music track during work sessions
  - Automatic play/pause with session state
  - Silent break periods for mental rest
- **Technical Implementation**:
  - Pure vanilla JavaScript (no dependencies)
  - CSS Grid and Flexbox for layout
  - CSS `aspect-ratio` for perfect circles
  - Container queries for responsive typography
  - Modern CSS custom properties for theming

### Technical Details
- **CSS Framework**: Custom responsive design system
- **JavaScript**: ES6+ class-based architecture
- **Audio Format**: MP3 with proper fallback handling
- **Browser Support**: Modern browsers with CSS Grid and aspect-ratio support
- **File Size**: Lightweight single-file application
- **Performance**: 60fps smooth animations and transitions

### Features in Detail
- **Session Management**: Automatic work/break cycling with proper state tracking
- **Progress Visualization**: Conic gradient progress rings with smooth updates
- **Status Feedback**: Clear text status for current session state
- **Time Display**: Real-time countdown with MM:SS format
- **Control Interface**: Simple two-button control system (Start/Pause, Reset)
- **Audio Control**: Integrated music player with session-aware playback

### Browser Compatibility
- Chrome 88+ (CSS aspect-ratio support)
- Firefox 87+ (CSS aspect-ratio support)
- Safari 14+ (CSS aspect-ratio support)
- Edge 88+ (CSS aspect-ratio support)

### Accessibility
- Semantic HTML structure with proper headings
- High contrast visual design
- Clear status updates for screen readers
- Keyboard-accessible controls
- Touch-friendly mobile interface
