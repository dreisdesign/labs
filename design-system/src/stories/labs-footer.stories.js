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
    "variant": {
      control: { type: "select" },
      options: ["default", "floating"],
      description: "Footer variant style - default (fixed) or floating",
      defaultValue: "default",
    },
  },
};

export const Default = (args) => {
  const footer = document.createElement("labs-footer");
  if (args["add-label"]) footer.setAttribute("add-label", args["add-label"]);
  if (args["settings-hidden"]) footer.setAttribute("settings-hidden", "");
  if (args["variant"]) footer.setAttribute("variant", args["variant"]);

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

export const FooterVariants = () => {
  const createFooterDemo = (title, description, attributes = {}) => {
    const footer = document.createElement("labs-footer");
    Object.entries(attributes).forEach(([key, value]) => {
      if (value === true) {
        footer.setAttribute(key, "");
      } else if (value) {
        footer.setAttribute(key, value);
      }
    });

    const container = document.createElement("div");
    container.style.cssText = `
        min-height: 300px;
        background: var(--color-background);
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 100px;
        margin-bottom: 1.5rem;
        border: 1px solid var(--color-outline-variant);
        border-radius: 8px;
      `;

    container.innerHTML = `
        <div style="text-align: center; max-width: 350px; padding: 1rem;">
          <h3 style="color: var(--color-on-background); margin-bottom: 0.5rem; font-size: 1.125rem;">${title}</h3>
          <p style="color: var(--color-on-background); opacity: 0.8; font-size: 0.875rem; margin: 0;">
            ${description}
          </p>
        </div>
      `;

    container.appendChild(footer);

    footer.addEventListener('add-click', () => {
      alert(`${title}: Add clicked!`);
    });

    footer.addEventListener('settings-click', () => {
      alert(`${title}: Settings clicked!`);
    });

    return container;
  };

  const wrapper = document.createElement("div");

  wrapper.appendChild(createFooterDemo(
    "Default Footer",
    "Standard footer with both add and settings buttons",
    { "add-label": "+ Add" }
  ));

  wrapper.appendChild(createFooterDemo(
    "Custom Label",
    "Footer with custom add button text",
    { "add-label": "Create New" }
  ));

  wrapper.appendChild(createFooterDemo(
    "No Settings",
    "Footer with settings button hidden",
    { "add-label": "+ Add", "settings-hidden": true }
  ));

  wrapper.appendChild(createFooterDemo(
    "Floating Variant",
    "Floating footer variant with enhanced glassmorphic effects",
    { "add-label": "+ Add", "variant": "floating" }
  ));

  return wrapper;
};

FooterVariants.parameters = {
  docs: {
    description: {
      story: "All footer configurations: default (standard), custom label (personalized text), no settings (hidden button), and floating variant (enhanced glassmorphic design).",
    },
  },
};
