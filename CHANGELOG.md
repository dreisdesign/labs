# Changelog

All notable changes to the Labs repository will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New project-specific favicons for all applications
- Consistent favicon organization across all projects
- Clean favicon naming convention with `icon-labs--{project}` format

### Changed
- Updated all HTML files to use new favicon references
- Moved favicons from assets subfolders to project root directories
- Updated PWA manifest files to reference new favicon assets
- Simplified favicon paths for better maintainability

### Removed
- Legacy favicon files and outdated icon versions
- Redundant favicon generator outputs
- Unused icon variants and @2x versions

### Projects
- **Main Site**: Updated to use `icon-labs--home.*` favicon
- **Timer**: Updated to use `icon-labs--focus-timer.*` favicon  
- **Note**: Updated to use `icon-labs--note.*` favicon
- **Tracker**: Updated to use `icon-labs--tracker.*` favicon

---

For detailed project-specific changes, see individual project changelogs:
- [Timer Changelog](timer/CHANGELOG.md)
- [Note Changelog](note/CHANGELOG.md)
- [Tracker Changelog](tracker/CHANGELOG.md)
