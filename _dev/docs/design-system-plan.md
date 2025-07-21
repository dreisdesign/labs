# Labs Design System

A comprehensive design system and component library for the Labs productivity suite, featuring consistent theming, reusable components, and documentation via Storybook.

## 🎯 Project Overview

The Labs Design System centralizes all shared UI patterns, components, and design tokens from your existing apps (Tracker, Note, Timer) into a cohesive, maintainable library. The Today List app will serve as the first implementation using this new system.

## 🏗️ Architecture

### Design System Structure
```
labs-design-system/
├── package.json                 # Design system package
├── .storybook/                 # Storybook configuration
│   ├── main.js
│   ├── preview.js
│   └── theme.js
├── src/
│   ├── tokens/                 # Design tokens
│   │   ├── colors.css         # Color system (light/dark)
│   │   ├── typography.css     # Font system
│   │   ├── spacing.css        # Spacing scale
│   │   └── index.css          # Combined tokens
│   ├── components/            # Reusable components
│   │   ├── App/              # App container
│   │   ├── Button/           # Button variants
│   │   ├── Overlay/          # Modal/overlay system
│   │   ├── Header/           # Date/timestamp headers
│   │   ├── Footer/           # Settings footer
│   │   ├── Input/            # Text inputs
│   │   ├── Checkbox/         # Checkbox component
│   │   └── Settings/         # Settings menu
│   ├── layouts/              # Layout components
│   │   ├── FixedLayout/      # No-scroll layout (Today List)
│   │   └── ScrollLayout/     # Scrollable layout (Tracker)
│   ├── icons/                # SVG icon system
│   │   ├── settings.svg
│   │   ├── close.svg
│   │   ├── edit.svg
│   │   └── theme-toggle.svg
│   └── utils/                # Helper functions
│       ├── date.js          # Date formatting
│       ├── theme.js         # Theme switching
│       └── storage.js       # localStorage helpers
├── dist/                     # Built design system
└── stories/                  # Storybook stories
    ├── tokens/
    ├── components/
    └── layouts/
```

## 🎨 Design Tokens

### Color System (Extracted from Tracker)
```css
/* Base Variables (Light Mode) */
:root {
  /* Primary Colors */
  --color-primary: rgb(46, 43, 116);
  --color-secondary: rgb(13, 11, 63);
  --color-primary-darker: rgb(25, 23, 80);
  
  /* Surface Colors */
  --color-background: rgb(193, 193, 255);
  --color-surface: rgb(255, 255, 255);
  
  /* Semantic Colors */
  --color-success: rgb(0, 181, 106);
  --color-error: rgb(181, 0, 90);
  
  /* Text Colors */
  --color-on-primary: rgb(255, 255, 255);
  --color-on-background: rgb(22, 10, 56);
  --color-on-surface: rgb(28, 27, 31);
  
  /* Opacity Variants */
  --color-primary-75: rgba(46, 43, 116, 0.75);
  --color-primary-25: rgba(193, 193, 255, 0.25);
}

/* Dark Mode Overrides */
body.dark-mode {
  --color-background: rgb(18, 18, 18);
  --color-surface: rgb(30, 30, 30);
  --color-primary: rgb(149, 117, 205);
  --color-on-background: rgb(255, 255, 255);
  --color-on-surface: rgb(255, 255, 255);
}
```

### Typography System
```css
:root {
  /* Font Family */
  --font-family-primary: 'Source Sans 3', system-ui, sans-serif;
  --font-family-mono: monospace;
  
  /* Font Sizes */
  --font-size-sm: 0.6rem;    /* Version numbers */
  --font-size-md: 1rem;      /* Body text */
  --font-size-lg: 1.1rem;    /* Buttons */
  --font-size-xl: 1.25rem;   /* Entry text */
  --font-size-xxl: 1.75rem;  /* Overlay titles */
  --font-size-display: 5.5rem; /* Metric values */
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 800;
}
```

### Spacing System
```css
:root {
  /* Spacing Scale */
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 0.75rem;   /* 12px */
  --space-lg: 1rem;      /* 16px */
  --space-xl: 1.5rem;    /* 24px */
  --space-xxl: 2rem;     /* 32px */
  --space-xxxl: 2.5rem;  /* 40px */
  
  /* Component Spacing */
  --padding-button: var(--space-md) var(--space-xl);
  --padding-overlay: var(--space-xl);
  --margin-component: var(--space-lg);
}
```

## 🧩 Component Library

### Core Components

#### 1. **App Container**
```css
.labs-app {
  /* Standardized app container */
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  background: transparent;
}

.labs-app--fixed {
  /* No scroll variant (Today List) */
  overflow: hidden;
}

.labs-app--scroll {
  /* Scrollable variant (Tracker) */
  overflow-y: auto;
}
```

#### 2. **Button System**
```css
.labs-button {
  /* Base button styles */
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-semibold);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.labs-button--primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
  padding: var(--padding-button);
}

.labs-button--footer {
  /* Rounded footer button (Track) */
  border-radius: 5rem;
  min-width: 120px;
}

.labs-button--settings {
  /* Icon-only settings button */
  background: none;
  padding: var(--space-sm);
}
```

#### 3. **Overlay System**
```css
.labs-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(25px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.labs-overlay__content {
  background: var(--color-surface);
  border-radius: 12px;
  padding: var(--padding-overlay);
  width: 90%;
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
}
```

#### 4. **Input Components**
```css
.labs-input {
  width: 100%;
  padding: var(--space-md);
  border: 1px solid var(--color-primary-75);
  border-radius: 0.5rem;
  background: var(--color-surface);
  color: var(--color-on-surface);
  font-family: var(--font-family-primary);
  outline: none;
}

.labs-input:focus {
  border-color: var(--color-primary);
}

.labs-checkbox {
  /* Custom checkbox styling */
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--color-primary-75);
  border-radius: 0.25rem;
  background: var(--color-surface);
  cursor: pointer;
}

.labs-checkbox:checked {
  background: var(--color-primary);
  border-color: var(--color-primary);
}
```

## 📖 Storybook Implementation

### Setup
```bash
# Initialize design system package
npm init -y
npm install --save-dev @storybook/html @storybook/addon-essentials
npm install --save-dev @storybook/addon-docs @storybook/addon-controls

# Storybook configuration
npx storybook init
```

### Story Structure
```javascript
// stories/Button.stories.js
export default {
  title: 'Components/Button',
  component: 'labs-button',
  parameters: {
    docs: {
      description: {
        component: 'Standardized button component used across all Labs apps.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'footer', 'settings']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Track'
  }
};

export const Footer = {
  args: {
    variant: 'footer',
    children: 'Track'
  }
};
```

## 🚀 Implementation Plan

### Phase 1: Extract & Document (Week 1)
- [ ] **Set up Storybook environment**
- [ ] **Extract design tokens** from Tracker app CSS
- [ ] **Document color system** with light/dark variants
- [ ] **Create typography and spacing tokens**
- [ ] **Build basic Storybook stories** for tokens

### Phase 2: Component Library (Week 2)
- [ ] **Build core components** (Button, Input, Overlay, App)
- [ ] **Extract shared patterns** from existing apps
- [ ] **Create comprehensive Storybook stories**
- [ ] **Add interactive controls** and documentation
- [ ] **Implement theme switching** in Storybook

### Phase 3: Today List Implementation (Week 3)
- [ ] **Build Today List** using design system components
- [ ] **Create app-specific components** (ChecklistItem, DateHeader)
- [ ] **Validate design system** through real usage
- [ ] **Refine components** based on implementation feedback

### Phase 4: Migration & Polish (Week 4)
- [ ] **Migrate existing apps** to use design system
- [ ] **Add advanced Storybook features** (accessibility, testing)
- [ ] **Create usage guidelines** and documentation
- [ ] **Set up publishing** (npm package or monorepo)

## 🎯 Benefits

### For Development
- **Consistency**: All apps use identical components and patterns
- **Efficiency**: Build new features faster with pre-built components
- **Maintainability**: Single source of truth for UI patterns
- **Quality**: Well-tested, documented components

### For Design
- **Visual Consistency**: Unified look and feel across all apps
- **Design Tokens**: Centralized control over colors, typography, spacing
- **Documentation**: Clear guidelines for component usage
- **Iteration**: Easy to update design system and propagate changes

### For Future Apps
- **Rapid Prototyping**: New apps can be built quickly using existing components
- **Pattern Library**: Rich set of proven UI patterns
- **Accessibility**: Built-in accessibility features in all components
- **Responsive Design**: Mobile-first components work everywhere

## 📋 Next Steps

1. **Start with Storybook setup** - Get the documentation environment running
2. **Extract Tracker CSS** - Pull out the proven design tokens and patterns
3. **Build component stories** - Document each component thoroughly
4. **Implement Today List** - Use it as the proving ground for the system
5. **Iterate and refine** - Improve based on real usage

This approach will give you a solid foundation for all future Labs development while ensuring the Today List app benefits from a mature, well-documented component system.

**Ready to start with the Storybook setup?**
