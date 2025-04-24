# Labs

This repository contains a collection of web development projects. Currently featuring:

## Tracker

A simple activity tracking web application. Try it live at [https://dreisdesign.github.io/labs/tracker/](https://dreisdesign.github.io/labs/tracker/)

### Features

- **Activity Tracking**: Easily track activities with a single click
- **Timestamp History**: View a chronological list of tracked activities with timestamps
- **Total Counter**: Keep track of the total number of activities
- **Dark/Light Theme**: Toggle between dark and light modes for comfortable viewing
- **Persistent Storage**: Data is saved locally in your browser
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Testing Mode**: Toggle minute-based grouping for testing (Ctrl/Cmd + Shift + T)
- **Smooth Animations**: 
  - Fade-in animation for new entries
  - Fade-out animation when clearing the list
  - Pulse animation for empty state indicators

### Technical Details

- **Pure Frontend Stack**: Built with vanilla HTML, CSS, and JavaScript
- **No Dependencies**: Zero external dependencies, completely self-contained
- **Local Storage**: Uses browser's localStorage API for data persistence
- **CSS Custom Properties**: Themed using CSS variables for easy customization
- **Responsive Layout**: Fluid design that adapts to different screen sizes
- **Semantic HTML**: Built with accessibility in mind

### Project Structure

```
tracker/
├── index.html          # Main HTML file
├── js/
│   └── main.js        # Core application logic
├── styles/
│   └── main.css       # Styling and themes
├── site.webmanifest   # Progressive Web App manifest
├── browserconfig.xml  # Windows tile configuration
└── assets/           # Icons and images
    ├── favicon.svg
    ├── favicon.png
    └── [other icon files]
```

### Features in Detail

#### State Management
- Tracks total count of activities
- Stores timestamp entries with date and time
- Persists data using localStorage
- Maintains theme preference across sessions

#### UI Components
- Total count display card
- Track button for adding new entries
- Timestamp list with animations
- Theme toggle for dark/light mode
- Reset button for clearing data
- Testing mode for minute-based grouping

#### Time Management
- Default day-based grouping for normal use
- Minute-based grouping in testing mode
- Keyboard shortcut (Ctrl/Cmd + Shift + T) to toggle modes
- Detailed timestamps with date and time information

#### Animations
- New entries fade in from top
- List items fade out when clearing
- Empty state placeholder pulses on reset
- Smooth theme transition effects

## Accessibility & UI Improvements

- Color variables now use only rgb/rgba for clarity and accessibility.
- Added 75% opacity variants for primary, secondary, and on-surface colors.
- Scrollbar colors now use the 75% opacity primary color for better contrast and theme consistency.
- Testing mode now groups by seconds (not minutes) for more granular testing.
- Improved semantic HTML and keyboard accessibility (see [changelog](CHANGELOG.md) for details).
- Enhanced mobile experience with full PWA support including colored status bar on iOS.

### Development

To run this project locally:

1. Clone the repository:
```bash
git clone https://github.com/dreisdesign/labs.git
```

2. Navigate to the project directory:
```bash
cd labs
```

3. Open the project in a web browser:
- Open `index.html` in your browser
- Or serve it using a local development server

### Version Management

The project includes a version management script that helps automate the development workflow:

```bash
./tracker/scripts/create-feature.sh
```

This script will:
1. Create a new feature branch (e.g., feature/v1.0.7)
2. Update version numbers in relevant files
3. Add a new section in the changelog
4. Stage the changes for commit

Example workflow:
1. Run the script to start a new feature
2. Make your changes
3. Commit and merge when ready

The script automatically manages:
- Version numbers in index.html and styles/main.css
- Changelog entries with proper dating
- Git branch creation and management

### Documentation

- [Changelog](tracker/CHANGELOG.md) - Detailed change history for this project

### Contributing

Feel free to submit issues and enhancement requests!

### License

This project is open source and available under the [MIT License](LICENSE).