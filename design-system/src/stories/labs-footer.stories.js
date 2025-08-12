import "../components/labs-footer.js";

export default {
  title: "Patterns/Footer",
  component: "labs-footer",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Modular footer component with glassmorphic design, featuring centered add button and optional settings. Emits custom events and adapts to light/dark themes. Use controls to explore all options or 'Show code' for implementation.`,
      },
    },
  },
  argTypes: {
    "add-label": {
      control: "text",
      description: "Label for the primary add button",
      defaultValue: "+ Add",
    },
    "settings-hidden": {
      control: "boolean",
      description: "Hide the settings button",
      defaultValue: false,
    },
  },
};

export const Default = (args) => {
  const footer = document.createElement("labs-footer");
  if (args["add-label"]) footer.setAttribute("add-label", args["add-label"]);
  if (args["settings-hidden"]) footer.setAttribute("settings-hidden", "");

  const container = document.createElement("div");
  container.style.cssText = `
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
  `;

  container.innerHTML = `
    <div style="text-align: center; max-width: 500px; padding: 2rem;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Footer Component</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Glassmorphic footer with configurable add button and optional settings. Use controls to customize label, hide settings, or change variant.
      </p>
    </div>
  `;

  container.appendChild(footer);

  // Add event listeners for demonstration
  footer.addEventListener('add-click', () => {
    alert('Add button clicked!');
  });

  footer.addEventListener('settings-click', () => {
    alert('Settings button clicked!');
  });

  return container;
};

Default.args = {
  "add-label": "+ Add",
  "settings-hidden": false,
  "variant": "default"
};

Default.parameters = {
  docs: {
    description: {
      story: "Default footer component with glassmorphic design. Use controls to modify add button label, toggle settings visibility, and change variant (default/floating). Click buttons to see event handling.",
    },
  },
};
