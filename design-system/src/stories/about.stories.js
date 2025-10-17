import { createThemeToggleButton } from '../components/ThemeToggle.js';

export default {
    title: 'About',
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                story: `
          Unified About page for Labs and Smoothie Design System.
        `,
            },
        },
    },
};

export const About = () => {
    const container = document.createElement('div');
    container.innerHTML = `
    <h1>Labs Design System &amp; Smoothie Philosophy</h1>
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
    <h2>Smoothie Design System Philosophy</h2>
    <p>A simple, modular approach to UI components.</p>
    <h3>Example: Smoothie Config Table</h3>
    <table border="1" cellpadding="4">
      <thead>
        <tr>
          <th>Option Type</th>
          <th>Control</th>
          <th>Vanilla</th>
          <th>Blueberry</th>
          <th>Strawberry</th>
          <th>Custom</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Single Select</td><td>Size</td><td>Large</td><td>Medium</td><td>Medium</td><td>Choose</td></tr>
        <tr><td>Single Select</td><td>Flavor</td><td>Vanilla</td><td>Blueberry</td><td>Strawberry</td><td>Choose</td></tr>
        <tr><td>Toggle</td><td>Theme</td><td>Light</td><td>Light</td><td>Light</td><td>Light/Dark</td></tr>
        <tr><td>Single Select</td><td>Primary Color</td><td>#6B5C4B</td><td>#2E2B74</td><td>#800800</td><td>Choose</td></tr>
        <tr><td>Single Select</td><td>Background</td><td>#F5F1E7</td><td>#DBD7FF</td><td>#FFD3D2</td><td>Choose</td></tr>
      </tbody>
    </table>
    <p style="font-size:0.95em;">Each column is a flavor preset. Each row is an ingredient (option/prop). "Custom" lets you mix any combination, including theme.</p>
    <ul>
      <li><strong>Smoothie = Component Recipe:</strong> Presets like "Tropical", "Berry", or "Power" map to pre-configured component variants.</li>
      <li><strong>Ingredients = Options/Props:</strong> Each option (size, fruit, veg, etc.) is a prop or control you can mix and match.</li>
      <li><strong>Custom = Full Control:</strong> Mix and match any options to create your own "Custom Smoothie" (component config).</li>
    </ul>
    <strong>Why Smoothie?</strong>
    <ul>
      <li>Modular: Every option is an ingredient, every combo is valid</li>
      <li>Scalable: Easy to add new presets or ingredients</li>
      <li>Universal: Works for any component, not just buttons</li>
    </ul>
    <hr />
    <strong>Mapping to UI Components</strong>
    <ul>
      <li>Each preset = a ready-to-use component variant (e.g., <code>&lt;labs-button variant="tropical" /&gt;</code>)</li>
      <li>Each ingredient = a prop, attribute, or Storybook control</li>
      <li>Custom = full control panel for designers/devs to mix their own</li>
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
    <h2>Documentation &amp; Contribution</h2>
    <ul>
      <li><a href="../README.md" target="_blank">Main README</a> — Project overview</li>
      <li><a href="../DOCUMENTATION.md" target="_blank">Documentation Index</a> — Navigation guide</li>
      <li><a href="../design-system/README.md" target="_blank">Design System README</a> — Component library overview</li>
      <li><a href="../design-system/COMPONENT-USAGE.md" target="_blank">Component Usage Guide</a></li>
      <li><a href="../design-system/ROADMAP.md" target="_blank">Design System Roadmap</a></li>
      <li><a href="../CONTRIBUTING.md" target="_blank">Contributing Guide</a></li>
      <li><a href="../todo-index.md" target="_blank">Global TODO Index</a></li>
      <li>Component docs: e.g., <a href="src/components/labs-button/BUTTON-DOCS.md" target="_blank">Button Docs</a></li>
      <li>See <a href="src/styles/COLORS-DOCS.md" target="_blank">Color Tokens &amp; Theming Guide</a> for implementation details</li>
    </ul>
    <hr />
    <i>Designed by Dan Reis in Somerville — Last updated October 2025</i>
  `;
    setTimeout(() => {
        createThemeToggleButton({ parent: container });
    }, 0);
    return container;
};
