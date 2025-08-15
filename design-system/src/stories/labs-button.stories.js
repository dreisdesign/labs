import "../components/labs-button.js";
import "../components/labs-icon.js";
import "../components/labs-checkbox.js";
import "../styles/components/settings-overlay.css";
import { createButton, createIconButton, buttonConfigs, iconOnlyButtons } from "../tokens/button-configs.js";
import iconList from "../components/icons-list.js";

export default {
  title: "Components/Button",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `The comprehensive button component of the Labs Design System. Supports all variants, icons, theme toggles, and interactive states.\n\n**To share or bookmark a button preset:**\n- Select a preset from the Preset dropdown in the controls panel.\n- The URL will update (e.g., \`&args=preset:add\`).\n- Copy the URL to share or bookmark this exact button configuration.\n\nIf you change other controls, re-select the preset to update the URL and state.`,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Button text content",
      table: { category: "Content" },
      order: 1
    },
    style: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "transparent"],
      description: "Button style (color/intent)",
      table: { category: "Appearance" },
      order: 2
    },
    shape: {
      control: { type: "inline-radio" },
      options: ["pill", "rounded"],
      description: "Button shape",
      table: { category: "Appearance" },
      order: 3
    },
    container: {
      control: "boolean",
      description: "Full-width container style",
      table: { category: "Appearance" },
      order: 4
    },
    iconLeft: {
      control: { type: "select" },
      options: ["", ...iconList],
      description: "Icon on the left",
      table: { category: "Icons" },
      order: 6
    },
    iconRight: {
      control: { type: "select" },
      options: ["", ...iconList],
      description: "Icon on the right",
      table: { category: "Icons" },
      order: 7
    },
    iconCenter: {
      control: { type: "select" },
      options: ["", ...iconList],
      description: "Icon only (centered)",
      table: { category: "Icons" },
      order: 8
    },
    checkmark: {
      control: "boolean",
      description: "Show checkmark animation on click",
      table: { category: "State" },
      order: 8
    },
    darkMode: {
      control: "boolean",
      description: "Theme toggle state (for theme toggle button only)",
      table: { category: "State" },
      order: 9
    }
  }
};


/**
 * Primary button story (CSF3 object format)
 */
export const Primary = {
  render: (args) => {
    // Icon-only button logic
    if (args.iconCenter) {
      return `<labs-button
        icon="${args.iconCenter}"
        variant="icon"
        aria-label="${args.label || args.iconCenter}"
        ${args.checkmark ? 'checkmark' : ''}
      ></labs-button>`;
    }
    // Theme toggle button logic
    if (args.label === 'Turn on dark mode' || args.label === 'Turn off dark mode' || args.themeToggle) {
      const isDark = args.darkMode;
      return `<labs-button
        label="${isDark ? 'Turn off dark mode' : 'Turn on dark mode'}"
        icon="${isDark ? 'bedtime_off' : 'bedtime'}"
        variant="${args.variant || 'transparent'}"
        ${args.checkmark ? 'checkmark' : ''}
      ></labs-button>`;
    }
    let variant = args.style || "primary";
    if (args.container) {
      variant = "container";
    } else if (args.shape === "rounded") {
      variant = (args.style === "secondary") ? "rounded-secondary" : "rounded";
    } else if (args.shape === "pill") {
      variant = (args.style === "secondary") ? "pill-secondary" : "pill";
    }
    return `<labs-button
      label="${args.label}"
      variant="${variant}"
      icon-left="${args.iconLeft}"
      icon-right="${args.iconRight}"
      ${args.checkmark ? 'checkmark' : ''}
    ></labs-button>`;
  },
  args: {
    label: "Button",
    style: "primary",
    shape: "pill",
    container: false,
    iconLeft: "",
    iconRight: "",
    iconCenter: "",
    checkmark: false,
    darkMode: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button. Use controls to change style, shape, icons, and state.'
      }
    }
  }
};

/**
 * Theme toggle button story (CSF3 object format)
 */
export const ThemeToggle = {
  render: (args) => {
    const isDark = args.darkMode;
    return `<labs-button
      label="${isDark ? 'Turn off dark mode' : 'Turn on dark mode'}"
      icon="${isDark ? 'bedtime_off' : 'bedtime'}"
      variant="${args.variant || 'transparent'}"
      ${args.checkmark ? 'checkmark' : ''}
    ></labs-button>`;
  },
  args: {
    label: 'Turn on dark mode',
    style: 'transparent',
    shape: 'pill',
    container: false,
    iconLeft: '',
    iconRight: '',
    iconCenter: '',
    checkmark: false,
    darkMode: false,
    themeToggle: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Theme toggle button. Use the darkMode control to toggle state. For real app integration, use setupThemeToggle(button) from button-configs.js.'
      }
    }
  }
};
