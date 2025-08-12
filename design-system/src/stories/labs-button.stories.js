import "../components/labs-button.js";
import "../components/labs-icon.js";
import "../components/labs-checkbox.js";
import "../styles/components/settings-overlay.css";
import { createButton, createIconButton, buttonConfigs, iconOnlyButtons } from "../tokens/button-configs.js";

export default {
  title: "Components/Button",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "The comprehensive button component of the Labs Design System. Supports all variants, icons, theme toggles, and interactive states. Use the controls below to explore all possibilities or the 'Show code' feature to get copy-ready HTML.",
      },
    },
  },
  argTypes: {
    // === Basic Properties ===
    label: {
      control: "text",
      description: "Button text content",
      table: { category: "Content" }
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "transparent", "container", "container-danger", "icon"],
      description: "Button visual style and behavior",
      table: { category: "Appearance" }
    },

    // === Icon Configuration ===
    icon: {
      control: { type: "select" },
      options: [
        "", "add", "add_comment", "apps", "bedtime", "bedtime_off", "build",
        "cancel", "change_circle", "check", "close", "comment", "content_copy",
        "delete_forever", "edit", "open_in_new", "rate_review", "settings",
        "undo", "refresh"
      ],
      description: "Icon name (left side by default)",
      table: { category: "Icons" }
    },
    iconRight: {
      control: { type: "select" },
      options: [
        "", "add", "add_comment", "apps", "bedtime", "bedtime_off", "build",
        "cancel", "change_circle", "check", "close", "comment", "content_copy",
        "delete_forever", "edit", "open_in_new", "rate_review", "settings",
        "undo", "refresh"
      ],
      description: "Icon on the right side",
      table: { category: "Icons" }
    },
    iconcolor: {
      control: "color",
      description: "Icon color (CSS value)",
      table: { category: "Icons" }
    },

    // === Interactive Features ===
    checkmark: {
      control: "boolean",
      description: "Enable checkmark animation on click",
      table: { category: "Interaction" }
    },

    // === Pre-configured Variants ===
    preset: {
      control: { type: "select" },
      options: [
        "", "add", "save", "edit", "undo", "delete", "resetAllData",
        "themeToggle", "close", "settings", "allApps", "refresh"
      ],
      description: "Load a pre-configured button setup",
      table: { category: "Presets" }
    }
  },
};

// Template function for generating button HTML
const Template = (args) => {
  // If preset is selected, use that configuration
  if (args.preset && buttonConfigs[args.preset]) {
    const config = buttonConfigs[args.preset];
    const attrs = [];
    if (config.label) attrs.push(`label="${config.label}"`);
    if (config.variant && config.variant !== 'primary') attrs.push(`variant="${config.variant}"`);
    if (config.icon) attrs.push(`icon="${config.icon}"`);
    if (config.iconRight) attrs.push(`icon-right="${config.iconRight}"`);
    if (config.checkmark) attrs.push(`checkmark="${config.checkmark}"`);
    if (config.iconcolor) attrs.push(`iconcolor="${config.iconcolor}"`);

    return `<labs-button ${attrs.join(' ')}></labs-button>`;
  }

  // Otherwise use manual args
  const attrs = [];
  if (args.label) attrs.push(`label="${args.label}"`);
  if (args.variant && args.variant !== 'primary') attrs.push(`variant="${args.variant}"`);
  if (args.icon) attrs.push(`icon="${args.icon}"`);
  if (args.iconRight) attrs.push(`icon-right="${args.iconRight}"`);
  if (args.checkmark) attrs.push(`checkmark="${args.checkmark}"`);
  if (args.iconcolor) attrs.push(`iconcolor="${args.iconcolor}"`);

  return `<labs-button ${attrs.join(' ')}></labs-button>`;
};

// === Primary Stories ===

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  variant: "primary"
};
Default.parameters = {
  docs: {
    description: {
      story: "The default primary button. Use the controls to explore all variants and configurations.",
    },
  },
};

export const AllVariants = Template.bind({});
AllVariants.args = {
  label: "Try all variants",
  variant: "primary"
};
AllVariants.parameters = {
  docs: {
    description: {
      story: "Use the variant control to see all button styles: primary, secondary, danger, transparent, container, container-danger, and icon.",
    },
  },
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: "Save",
  icon: "check",
  variant: "primary",
  checkmark: true
};
WithIcons.parameters = {
  docs: {
    description: {
      story: "Buttons with icons support checkmark animations and color customization.",
    },
  },
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  icon: "settings",
  variant: "icon"
};
IconOnly.parameters = {
  docs: {
    description: {
      story: "Icon-only buttons for persistent UI elements. Use variant='icon' for circular style.",
    },
  },
};

export const ThemeToggle = Template.bind({});
ThemeToggle.args = {
  preset: "themeToggle"
};
ThemeToggle.parameters = {
  docs: {
    description: {
      story: "Pre-configured theme toggle button. Try other presets like 'add', 'save', 'delete', etc.",
    },
  },
};

export const DangerActions = Template.bind({});
DangerActions.args = {
  preset: "delete"
};
DangerActions.parameters = {
  docs: {
    description: {
      story: "Destructive actions with danger styling. Also try 'resetAllData' preset.",
    },
  },
};
