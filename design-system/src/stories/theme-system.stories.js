// Theme System Documentation Story
import '../styles/main.css';
import '../components/labs-button.js';
import '../components/labs-icon.js';
import { createThemeToggleButton } from '../components/ThemeToggle.js';

export default {
  title: 'Foundation/Theme System',
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: `
# Light/Dark Theme System

The Labs Design System provides a unified light/dark theme system that works consistently across both production apps and Storybook documentation.

## How It Works

### Theme Classes
- **\`.theme-light\`** - Applied to root element for light theme
- **\`.theme-dark\`** - Applied to root element for dark theme
- **Automatic switching** - Theme toggle button handles class management

### Semantic Tokens
All components use semantic color tokens that automatically adapt to the active theme:
- \`--color-background\` - Main background color
- \`--color-surface\` - Card/elevated surface color
- \`--color-on-background\` - Text on background
- \`--color-on-surface\` - Text on surfaces
- \`--color-primary\` - Brand/accent color
- \`--color-on-primary\` - Text on primary color

### Implementation Example

\`\`\`javascript
// Apply theme programmatically
import { applyTheme } from '../utils/theme.js';

// Switch to dark mode
applyTheme({ theme: 'dark' });

// Switch to light mode
applyTheme({ theme: 'light' });
\`\`\`

### Theme Toggle Button
Use the reusable theme toggle component in your apps:

\`\`\`javascript
import { createThemeToggleButton } from '../components/ThemeToggle.js';

// Add theme toggle to your app
createThemeToggleButton({ parent: document.body });
\`\`\`

## Features

✅ **Unified System** - Same token structure in apps and Storybook
✅ **Automatic Persistence** - User preference saved in localStorage
✅ **System Preference** - Respects \`prefers-color-scheme\` by default
✅ **Semantic Tokens** - All components use theme-aware color tokens
✅ **Component Integration** - Theme toggle uses design system button
✅ **Accessibility** - WCAG AA contrast ratios maintained in both themes

## Testing Themes

Use the theme toggle button below or the Storybook toolbar to test the theme system. All components should smoothly transition between light and dark modes.
        `,
      },
    },
  },
};

export const ThemeDemo = {
  name: 'Interactive Demo',
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div style="padding: 2rem; background: var(--color-background); color: var(--color-on-background); transition: all 0.2s;">
        <h2 style="color: var(--color-on-background);">Theme System Demo</h2>
        <p style="color: var(--color-on-background);">This demo shows how components adapt to theme changes.</p>

        <div style="display: flex; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
          <labs-button variant="primary">Primary Button</labs-button>
          <labs-button variant="secondary">
            <labs-icon slot="icon-left" name="settings"></labs-icon>
            Secondary with Icon
          </labs-button>
          <labs-button variant="destructive">Destructive Button</labs-button>
        </div>

        <div style="background: var(--color-surface); padding: 1.5rem; border-radius: 8px; margin: 1rem 0; border: 1px solid var(--color-primary); transition: all 0.2s;">
          <h3 style="color: var(--color-on-surface); margin-top: 0;">Surface Component</h3>
          <p style="color: var(--color-on-surface);">This surface uses semantic tokens and adapts automatically to theme changes.</p>
          <labs-button variant="primary">Surface Button</labs-button>
        </div>

        <div style="margin-top: 2rem;">
          <h3 style="color: var(--color-on-background);">Color Tokens in Action</h3>
          <ul style="color: var(--color-on-background);">
            <li><code>background: var(--color-background)</code></li>
            <li><code>color: var(--color-on-background)</code></li>
            <li><code>surface: var(--color-surface)</code></li>
            <li><code>surface text: var(--color-on-surface)</code></li>
          </ul>
        </div>
      </div>
    `;

    // Add theme toggle after a brief delay
    setTimeout(() => {
      createThemeToggleButton({ parent: container });
    }, 100);

    return container;
  },
  parameters: {
    docs: {
      source: {
        code: `
// Create themed component with semantic tokens
const themedComponent = document.createElement('div');
themedComponent.style.background = 'var(--color-surface)';
themedComponent.style.color = 'var(--color-on-surface)';
themedComponent.style.border = '1px solid var(--color-primary)';

// Add theme toggle
import { createThemeToggleButton } from '../components/ThemeToggle.js';
createThemeToggleButton({ parent: document.body });
        `,
      },
    },
  },
};
