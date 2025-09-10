import{c as o}from"./ThemeToggle-CWQneXSm.js";import"./iframe-DzJGxyCr.js";import"./preload-helper-D9Z9MdNV.js";const d={title:"About",parameters:{viewMode:"docs",docs:{description:{story:`
// This is the About page for the Smoothie Design System
        `}}}},t=()=>{const e=document.createElement("div");return e.innerHTML=`
    <h1>Smoothie Design System</h1>
    <p>A simple, modular approach to UI components.</p>
    <hr />
      <h2>Built with Smoothie</h2>
      <div>
        <a href="/labs/docs/pad/index.html" target="_blank" rel="noopener noreferrer">
          Pad</a>
        <span>
          A minimalist, cross-device drawing app.
        </span>
      </div>
    <hr />
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
    <strong>Where to Find More</strong>
    <ul>
      <li>See the <a href="../README.md" target="_blank">main README</a> for project overview</li>
      <li>See the <a href="ROADMAP.md" target="_blank">ROADMAP</a> for upcoming features</li>
      <li>See <a href="src/styles/COLORS-DOCS.md" target="_blank">Color Tokens & Theming Guide</a> for implementation details</li>
      <li>Component docs: e.g., <a href="src/components/labs-button/BUTTON-DOCS.md" target="_blank">Button Docs</a></li>
    </ul>
    <hr />
  <!-- Version info removed -->
  <i>Designed by Dan Reis in Somerville</i>
  `,setTimeout(()=>{o({parent:e})},0),e};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.innerHTML = \`
    <h1>Smoothie Design System</h1>
    <p>A simple, modular approach to UI components.</p>
    <hr />
      <h2>Built with Smoothie</h2>
      <div>
        <a href="/labs/docs/pad/index.html" target="_blank" rel="noopener noreferrer">
          Pad</a>
        <span>
          A minimalist, cross-device drawing app.
        </span>
      </div>
    <hr />
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
    <strong>Where to Find More</strong>
    <ul>
      <li>See the <a href="../README.md" target="_blank">main README</a> for project overview</li>
      <li>See the <a href="ROADMAP.md" target="_blank">ROADMAP</a> for upcoming features</li>
      <li>See <a href="src/styles/COLORS-DOCS.md" target="_blank">Color Tokens & Theming Guide</a> for implementation details</li>
      <li>Component docs: e.g., <a href="src/components/labs-button/BUTTON-DOCS.md" target="_blank">Button Docs</a></li>
    </ul>
    <hr />
  <!-- Version info removed -->
  <i>Designed by Dan Reis in Somerville</i>
  \`;
  // Add theme toggle button to the About story
  setTimeout(() => {
    createThemeToggleButton({
      parent: container
    });
  }, 0);

  // About uses the package version instead of a build timestamp
  return container;
}`,...t.parameters?.docs?.source}}};const a=["About"];export{t as About,a as __namedExportsOrder,d as default};
