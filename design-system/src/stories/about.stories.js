import { createThemeToggleButton } from '../components/ThemeToggle.js';

export default {
    title: 'About Labs',
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                story: `
// This is the About page for the Smoothie Design System
        `,
            },
        },
    },
};

// Render About content directly in the Canvas view for maximum compatibility

export const About = () => {
    const container = document.createElement('div');
    container.innerHTML = `
    <h1>Labs Design System & Apps</h1>
    <p>
      <strong>Labs</strong> is a modular design system and suite of productivity apps built with vanilla JavaScript, Web Components, and CSS custom properties.<br>
      All components are fully modular, themeable, and use Shadow DOM for encapsulation.<br>
      Supports three theme flavors (Vanilla, Blueberry, Strawberry) with light/dark modes and WCAG AA color contrast.
    </p>
    <hr />
    <h2>Key Features</h2>
    <ul>
      <li><strong>Design System:</strong> Modular Web Components, canonical design tokens, semantic variants, Storybook documentation.</li>
      <li><strong>Apps:</strong> Focus Timer, Daily Tracker, Daily Note, Today List, Pad, Labs Homepage.</li>
      <li><strong>Technical Stack:</strong> Web Components, Lit, Storybook v9.1.7, Vite, GitHub Pages.</li>
      <li><strong>Development Workflow:</strong> <code>npm run rp</code> for local dev, hot module reload, automatic icon generation.</li>
      <li><strong>Recent Improvements:</strong> Canonical border-radius tokens, modular overlays, refactored components, icon workflow automation, Storybook grouping.</li>
    </ul>
    <hr />
    <h2>Quick Links</h2>
    <ul>
      <li><a href="https://dreisdesign.github.io/labs/" target="_blank">Labs Homepage</a></li>
      <li><a href="https://dreisdesign.github.io/labs/design-system/" target="_blank">Design System Storybook</a></li>
      <li><a href="https://dreisdesign.github.io/labs/timer/" target="_blank">Timer App</a></li>
      <li><a href="https://dreisdesign.github.io/labs/tracker/" target="_blank">Tracker App</a></li>
      <li><a href="https://dreisdesign.github.io/labs/note/" target="_blank">Note App</a></li>
      <li><a href="https://dreisdesign.github.io/labs/pad/" target="_blank">Pad App</a></li>
      <li><a href="https://dreisdesign.github.io/labs/today-list/" target="_blank">Today List</a></li>
    </ul>
    <hr />
    <h2>Documentation & Contribution</h2>
    <ul>
      <li><a href="../README.md" target="_blank">Main README</a> — Project overview</li>
      <li><a href="../DOCUMENTATION.md" target="_blank">Documentation Index</a> — Navigation guide</li>
      <li><a href="../design-system/README.md" target="_blank">Design System README</a> — Component library overview</li>
      <li><a href="../design-system/COMPONENT-USAGE.md" target="_blank">Component Usage Guide</a></li>
      <li><a href="../design-system/ROADMAP.md" target="_blank">Design System Roadmap</a></li>
      <li><a href="../CONTRIBUTING.md" target="_blank">Contributing Guide</a></li>
      <li><a href="../todo-index.md" target="_blank">Global TODO Index</a></li>
    </ul>
    <hr />
    <i>Designed by Dan Reis in Somerville — Last updated October 2025</i>
  `;
    setTimeout(() => {
        createThemeToggleButton({ parent: container });
    }, 0);
    return container;
};
