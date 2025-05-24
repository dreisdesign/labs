# Labs

This repository contains a collection of web development projects and utility scripts. Currently featuring:

## Projects

### Pomodoro Timer

A beautifully designed, minimalist Pomodoro timer for enhanced focus and productivity. Features perfect circular progress indicators and integrated focus music.

#### Features

- **25/5 Pomodoro Method**: Standard 25-minute work sessions with 5-minute breaks
- **Perfect Circle Design**: Responsive circles that maintain 1:1 aspect ratio on all devices
- **5:1 Size Ratio**: Large work timer is exactly 5x the size of the break timer
- **Visual Progress**: Circular progress rings show session advancement
- **Audio Integration**: Focus music plays during work sessions
- **Responsive Layout**: Adapts between portrait and landscape orientations
- **Zero Dependencies**: Pure HTML, CSS, and JavaScript implementation

[View Project Details](timer/README.md)

### DailyNote

A simple note-taking app that clears at the end of each day. Perfect for daily thoughts, tasks, or reminders.

#### Features

- Single note interface that resets daily
- Dark mode support with system preference detection
- Responsive design for mobile and desktop
- Customizable note label
- Undo functionality for cleared notes
- Settings menu with theme toggle and note reset
- iOS PWA support for home screen installation

[View Project Details](note/README.md)

### Tracker

A simple activity tracking web application. Try it live at [https://dreisdesign.github.io/labs/tracker/](https://dreisdesign.github.io/labs/tracker/)

#### Features

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

## Utility Scripts

The repository includes several utility scripts to enhance the development workflow.

### Version Management

A version management script automates the process of creating new feature branches and updating version numbers:

```bash
./scripts/prepare-version-update.sh <project-name>
```

Example usage:
```bash
# For the tracker project
./scripts/prepare-version-update.sh tracker

# For the note project
./scripts/prepare-version-update.sh note
```

This script will:
1. Create a new feature branch (e.g., feature/tracker-v1.0.7)
2. Update version numbers in relevant files
3. Add a new section in the project's changelog
4. Stage the changes for commit

The script automatically manages:
- Version numbers in index.html and styles/main.css
- Changelog entries with proper dating
- Git branch creation and management

### Branch Management

A branch management script simplifies switching between branches and handling uncommitted changes:

```bash
./scripts/switch-branch.sh <branch-name>
```

Additional options:
```bash
# To make current branch the main branch (merges into main)
./scripts/switch-branch.sh --make-main
```

This script will:
1. Stash any uncommitted changes
2. Switch to the specified branch and pull latest changes
3. Restore your uncommitted changes
4. Handle optional merging to main branch

### Documentation

- [Tracker Changelog](tracker/CHANGELOG.md) - Detailed change history for the Tracker project
- [DailyNote Changelog](note/CHANGELOG.md) - Detailed change history for the DailyNote project

### Contributing

Feel free to submit issues and enhancement requests!

### Repository Structure

```
labs/
├── index.html                   # Main entry page for all projects
├── README.md                    # Main repository documentation
├── LICENSE                      # Project license information
├── timer/                       # Pomodoro Timer project
│   ├── index.html              # Main timer app HTML file
│   ├── README.md               # Timer app documentation
│   ├── CHANGELOG.md            # Timer app change history
│   ├── styles.css              # Timer app stylesheet
│   └── assets/                 # Audio files for focus music
├── note/                        # DailyNote project
│   ├── index.html              # Main note app HTML file
│   ├── README.md               # Note app documentation
│   ├── CHANGELOG.md            # Note app change history
│   ├── js/                     # JavaScript files
│   ├── styles/                 # CSS stylesheets
│   ├── assets/                 # Icons and images
│   └── fonts/                  # Font files
├── tracker/                     # Tracker project
│   ├── index.html              # Main tracker app HTML file
│   ├── CHANGELOG.md            # Tracker app change history
│   ├── js/                     # JavaScript files
│   ├── styles/                 # CSS stylesheets
│   ├── assets/                 # Icons and images
│   ├── docs/                   # Documentation files
│   └── fonts/                  # Font files
└── scripts/                     # Utility scripts
    ├── prepare-version-update.sh  # Version management script
    └── switch-branch.sh           # Branch management script
```

### License

This project is open source and available under the [MIT License](LICENSE).