# Changelog

All notable changes to the Labs repository will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Enhanced main Labs hub with app icons and improved layout
- Responsive grid system with mobile, tablet, and desktop optimizations
- Interactive clickable cards with hover animations
- App icons integrated into the main index page layout
- Simplified single-version SVG favicons for all projects
- Consistent #202F48 brand color backgrounds across all favicons
- Clean favicon structure with optimal 32x32 sizing
- Test page for favicon preview and validation

### Changed
- Main index page redesigned with icon-left, content-right layout
- Grid system now uses responsive auto-fit columns with breakpoints
- Entire project cards are now clickable instead of just "View Project" links
- Enhanced visual design with better shadows, rounded corners, and animations
- Converted all favicons from adaptive CSS-based versions to simple SVG format
- Standardized all favicons to use solid #202F48 backgrounds with white icons
- Updated all HTML files to reference streamlined `favicon.svg` files
- Improved favicon contrast and visibility across light/dark browser contexts

### Removed
- Complex adaptive favicon CSS media queries
- Old experimental adaptive favicon files
- Unused source assets folder with original SVG files
- Legacy favicon variants and outdated icon versions

### Technical Improvements
- Eliminated CSS complexity in favor of reliable static SVG favicons
- Reduced file sizes by removing unnecessary adaptive styling
- Enhanced cross-platform compatibility and consistency
- Optimized for PWA home screen installation

### Projects
- **Main Site**: Clean `favicon.svg` with home icon
- **Timer**: Clean `favicon.svg` with timer icon  
- **Note**: Clean `favicon.svg` with note icon
- **Tracker**: Clean `favicon.svg` with tracker icon

---

For detailed project-specific changes, see individual project changelogs:
- [Timer Changelog](timer/CHANGELOG.md)
- [Note Changelog](note/CHANGELOG.md)
- [Tracker Changelog](tracker/CHANGELOG.md)
