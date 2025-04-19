# Labs Projects

This repository contains a collection of web development projects. Currently featuring:

## Move Tracker

A lightweight, user-friendly web application for tracking activities with timestamps. Try it live at [https://dreisdesign.github.io/labs/tracker/](https://dreisdesign.github.io/labs/tracker/)

### Features

- **Activity Tracking**: Easily track activities with a single click
- **Timestamp History**: View a chronological list of tracked activities with timestamps
- **Total Counter**: Keep track of the total number of activities
- **Dark/Light Theme**: Toggle between dark and light modes for comfortable viewing
- **Persistent Storage**: Data is saved locally in your browser
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
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
├── index.html        # Main HTML file
├── js/
│   └── main.js    # JavaScript functionality
└── styles/
    └── main   # Styling and animations
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

#### Animations
- New entries fade in from top
- List items fade out when clearing
- Empty state placeholder pulses on reset
- Smooth theme transition effects

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

### Contributing

Feel free to submit issues and enhancement requests!

### License

This project is open source and available under the [MIT License](LICENSE).