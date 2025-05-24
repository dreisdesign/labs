# Pomodoro Timer

A beautifully designed, minimalist Pomodoro timer web application. Built with vanilla HTML, CSS, and JavaScript for a distraction-free focus experience.

## Features

### Core Functionality
- **25/5 Pomodoro Method**: 25-minute work sessions followed by 5-minute breaks
- **Visual Progress Indicators**: Two circular progress rings showing work and break time
- **Audio Integration**: Focus music plays during work sessions to enhance concentration
- **Session Management**: Automatic switching between work and break sessions

### Design & Usability
- **Responsive Layout**: Perfect circles that maintain 1:1 aspect ratio on all devices
- **5:1 Size Ratio**: Large work circle is exactly 5x the size of the small break circle
- **Minimalist Interface**: Clean, distraction-free design focused on the task at hand
- **Viewport Scaling**: Uses `vmin` units for reliable scaling across all screen sizes
- **Mobile Optimized**: Touch-friendly controls and responsive design

### Technical Features
- **Pure Frontend**: Zero dependencies, works entirely in the browser
- **Perfect Circles**: CSS aspect-ratio ensures perfect 1:1 circles regardless of screen size
- **Flexible Layout**: Automatically switches between portrait and landscape orientations
- **Container Queries**: Uses modern CSS for optimal typography scaling
- **Audio Controls**: Integrated focus music with proper play/pause handling

## How to Use

1. **Start a Focus Session**: Click the "Start" button to begin a 25-minute work session
2. **Monitor Progress**: Watch the large circle fill as time progresses
3. **Take Breaks**: After work completion, a 5-minute break automatically begins
4. **Pause/Resume**: Click "Pause" to pause the timer, "Start" to resume
5. **Reset**: Use the "Reset" button to return to the beginning of a work session

## Technical Details

### Layout System
- **CSS Grid/Flexbox Hybrid**: Grid for overall structure, flexbox for responsive orientation
- **Viewport Units**: Primary sizing uses `vmin` for consistent scaling
- **Aspect Ratio**: CSS `aspect-ratio: 1` ensures perfect circles
- **Container Queries**: `cqi` units for responsive typography within circles

### Responsive Breakpoints
- **Portrait Mode**: Circles stacked vertically (`flex-direction: column`)
- **Landscape Mode**: Circles arranged horizontally (`flex-direction: row`)
- **Mobile First**: Optimized sizing for mobile devices with larger touch targets

### Audio Integration
- **Work Session Music**: 25-minute focus music track
- **Auto Play/Pause**: Music automatically starts/stops with work sessions
- **Break Silence**: No audio during break periods for mental rest

## File Structure

```
timer/
├── index.html          # Main application file with embedded JavaScript
├── styles.css          # Complete styling and responsive design
├── README.md           # This documentation
└── assets/
    ├── click-1.mp3     # UI click sound
    ├── click-2.mp3     # Alternative click sound
    └── focus-drums-25.mp3  # 25-minute focus music track
```

## Browser Compatibility

- **Modern Browsers**: Chrome 88+, Firefox 87+, Safari 14+, Edge 88+
- **CSS Features Used**: 
  - CSS Grid and Flexbox
  - CSS Custom Properties (variables)
  - `aspect-ratio` property
  - `vmin` viewport units
  - Container queries (`cqi` units)

## Development

To run locally:
1. Clone or download the project
2. Open `index.html` in a web browser
3. No build process or dependencies required

## Accessibility

- Semantic HTML structure
- High contrast design
- Clear visual feedback for all states
- Keyboard accessible controls
- Screen reader friendly status updates

## License

Open source under the [MIT License](../LICENSE).
