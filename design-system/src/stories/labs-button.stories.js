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

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "primary"
};
Primary.parameters = {
  docs: {
    description: {
      story: "Primary button with comprehensive controls. Explore all options using the controls panel to see real-time changes and copy the generated code.",
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary"
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Delete",
  variant: "danger",
  icon: "delete_forever"
};

export const Transparent = Template.bind({});
Transparent.args = {
  label: "Cancel",
  variant: "transparent"
};

export const Container = Template.bind({});
Container.args = {
  label: "Settings",
  variant: "container",
  icon: "settings"
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  label: "Add",
  variant: "icon",
  icon: "add"
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: "Save Changes",
  variant: "primary",
  icon: "check"
};

export const ThemeToggle = Template.bind({});
ThemeToggle.args = {
  label: "Dark Mode",
  variant: "transparent",
  icon: "bedtime",
  preset: "themeToggle"
};
