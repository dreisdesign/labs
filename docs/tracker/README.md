# Daily Tracker App

A simple daily activity and habit tracking app that helps you monitor your habits and activities throughout the day. Perfect for tracking fitness, water intake, productivity, and more.

## ✨ Features

### Core Functionality
- **Metric Tracking**: Large, easy-to-read metric cards displaying activity counts
- **Daily Reset**: Automatically clears metrics at the end of each day (midnight)
- **Quick Add**: Add and remove entries directly from the tracking interface
- **Activity List**: View timestamped history of your entries for the current day
- **Persistent State**: All data survives page refresh within the current day

### Appearance & Theming
- **Dark mode support** with system preference detection
- **Multiple color themes** (Blueberry, Strawberry, Vanilla)
- **Responsive design** for mobile and desktop
- **Sticky footer** that remains visible while scrolling long activity lists (iOS-friendly)

### Technical Features
- **Progressive Web App (PWA)** with service worker
- **iOS home screen installation** support
- **State persistence** across browser sessions
- **Keyboard accessibility** improvements
- **Design system integration** with Labs components

## 🚀 Getting Started

Simply open `index.html` in your browser to use the app locally.

### Installation as PWA
1. Open the app in a supported browser
2. Tap the "Install" or "Add to Home Screen" option
3. The app will work offline and appear as a native app

## 📱 Usage

### Tracking Activities
1. Click the "Track" button to add a new entry for the current metric
2. Entries appear in the list below with timestamps
3. The metric count increases automatically
4. Your activity history persists until midnight (daily reset)

### Customization
- Click the settings icon (⚙️) to:
  - Toggle dark/light mode
  - Change color theme (Blueberry, Strawberry, Vanilla)
  - Reset today's entries manually (careful — this clears all today's data)

### Responsive Layout
- **Desktop**: Two-column layout with metric cards and activity list side-by-side
- **Mobile**: Vertical stack with sticky footer that remains visible while scrolling
- **iPad**: Full responsiveness with proper footer positioning (stays at bottom during scroll)

## 🏗️ Architecture

### Component Structure
```
docs/tracker/
├── index.html              # Main app shell with layout and styling
├── js/
│   └── main.js             # Application logic and state management
└── styles/
    └── [design system tokens]
```

### Key Technologies
- **Web Components** with Shadow DOM encapsulation
- **Design System** (Labs components: container, card, button, icon, list-item, etc.)
- **localStorage** for state persistence and theme preferences
- **Service Worker** for PWA functionality
- **Vanilla JavaScript** (no frameworks)

### Layout Technical Details

The app uses a modern flexbox layout with:
- **Viewport Height**: `100dvh` (dynamic viewport height) instead of `100vh` for proper Safari URL bar handling
- **Footer Positioning**: `position: sticky; bottom: 0;` to keep the footer visible while scrolling
- **Container Scrolling**: Main container has `min-height: 0; overflow: auto;` to allow internal scrolling
- **This pattern works seamlessly on:**
  - Desktop browsers (Chrome, Firefox, Safari, Edge)
  - iOS Safari with dynamic URL bar
  - iPad with large content lists

## 📚 Related Documentation

- [Labs Design System](../../design-system/README.md) — Component library and tokens
- [Daily Note App](../note/README.md) — Similar daily-reset note-taking app
- [Labs Homepage](../) — Overview of all apps
