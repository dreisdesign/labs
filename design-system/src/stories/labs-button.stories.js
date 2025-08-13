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
        component: "The comprehensive button component of the Labs Design System. Supports all variants, icons, theme toggles, and interactive states. Only the top button is interactive—use the controls panel to explore all options and copy the generated code.",
      },
    },
  },
  argTypes: {
    // === Preset (top for quick access) ===
    preset: {
      control: { type: "select" },
      options: [
        "", "add", "save", "edit", "undo", "delete", "resetAllData",
        "themeToggle", "close", "settings", "allApps", "refresh", "iconOnly"
      ],
      description: "Load a pre-configured button setup",
      table: { category: "Presets" },
      order: 1
    },
    // === Basic Properties ===
    label: {
      control: "text",
      description: "Button text content",
      table: { category: "Content" },
      if: { arg: "iconPlacement", neq: "Icon Center (no label)" },
      order: 2
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "transparent"],
      description: "Button color/style variant",
      table: { category: "Appearance" },
      order: 3
    },
    container: {
      control: "boolean",
      description: "Use container style (full-width, overlay/panel)",
      table: { category: "Appearance" },
      order: 4
    },
    // === Icon Controls ===
    iconOnly: {
      control: 'boolean',
      description: 'Show only a single icon (icon-only button)',
      table: { category: 'Icons' },
      order: 5,
      defaultValue: false
    },
    iconLeft: {
      control: { type: 'select' },
      options: ["", ...iconList],
      description: 'Icon name (left side)',
      table: { category: 'Icons' },
      order: 6
    },
    iconRight: {
      control: { type: 'select' },
      options: ["", ...iconList],
      description: 'Icon name (right side)',
      table: { category: 'Icons' },
      order: 7
    },
    // === Interactive Features ===
    checkmark: {
      control: "boolean",
      description: "Enable checkmark animation on click",
      table: { category: "Interaction" },
      order: 8
    },
  },
};

// Map preset to args using buttonConfigs
const presetToArgs = (preset) => {
  if (!preset) return {};
  const config = buttonConfigs[preset];
  if (!config) return {};
  // Map config to Storybook args, always clear unused icon arg
  let iconPlacement = "None";
  if ((config.iconLeft || config.icon) && config.iconRight) iconPlacement = "Icon Left & Icon Right";
  else if ((config.iconLeft || config.icon) && !config.label) iconPlacement = "Icon Center (no label)";
  else if (config.iconLeft || config.icon) iconPlacement = "Icon Left";
  else if (config.iconRight) iconPlacement = "Icon Right";

  let iconLeft = "";
  let iconRight = "";
  if (iconPlacement === "Icon Left & Icon Right") {
    iconLeft = config.iconLeft || config.icon || "";
    iconRight = config.iconRight || "";
  } else if (iconPlacement === "Icon Left") {
    iconLeft = config.iconLeft || config.icon || "";
    iconRight = "";
  } else if (iconPlacement === "Icon Right") {
    iconLeft = "";
    iconRight = config.iconRight || "";
  } else if (iconPlacement === "Icon Center (no label)") {
    iconLeft = config.iconLeft || config.icon || "";
    iconRight = "";
  }

  const args = {
    label: config.label || "",
    iconLeft,
    iconRight,
    variant: config.variant || "primary",
    container: config.variant === "container" || config.variant === "container-danger" ? true : false,
    checkmark: !!config.checkmark,
    iconcolor: config.iconcolor || "",
    iconPlacement,
  };
  return args;
};

// Template function for generating button HTML
const Template = (args, { updateArgs }) => {
  // If a preset is selected, update all controls to match the preset (one-time per change)
  if (args.preset && args._lastPreset !== args.preset) {
    const presetArgs = presetToArgs(args.preset);
    updateArgs && updateArgs({
      ...args,
      ...presetArgs,
      _lastPreset: args.preset
    });
    return `<div>Loading preset...</div>`;
  }

  let label = args.label;
  let iconLeft = args.iconLeft || "";
  let iconRight = args.iconRight || "";

  // Icon Only logic: if iconOnly is true, show only iconLeft (or fallback to 'add'), hide label and iconRight
  if (args.iconOnly) {
    label = "";
    iconLeft = args.iconLeft || "add";
    iconRight = "";
  }

  const attrs = [];
  if (label) attrs.push(`label="${label}"`);
  if (args.container) {
    attrs.push(`variant="container"`);
  } else if (args.variant && args.variant !== 'primary') {
    attrs.push(`variant="${args.variant}"`);
  }
  if (iconLeft) attrs.push(`icon-left="${iconLeft}"`);
  if (iconRight) attrs.push(`icon-right="${iconRight}"`);
  if (args.checkmark) attrs.push(`checkmark="${args.checkmark}"`);
  if (args.iconcolor) attrs.push(`iconcolor=\"${args.iconcolor}\"`);
  return `<labs-button ${attrs.join(' ')}></labs-button>`;
};

// === Primary Stories ===

// === Preset Stories (for sidebar quick demos) ===
export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "primary",
  iconLeft: "",
  iconRight: "",
  iconOnly: false,
  container: false,
  checkmark: false,
  preset: ""
};
Primary.parameters = {
  docs: {
    description: {
      story: "Primary button with comprehensive controls. Only the top button is interactive—use the controls panel to see real-time changes and copy the generated code.",
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
  iconLeft: "",
  iconRight: "",
  container: false,
  checkmark: false,
  preset: ""
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Delete",
  variant: "danger",
  iconLeft: "delete_forever",
  iconRight: "",
  container: false,
  checkmark: false,
  preset: ""
};

export const Transparent = Template.bind({});
Transparent.args = {
  label: "Cancel",
  variant: "transparent",
  iconLeft: "",
  iconRight: "",
  container: false,
  checkmark: false,
  preset: ""
};

// Icon Only is now a preset (label: "", iconLeft: "add", size: "sm", variant: "primary")
// Use the main controls to reproduce icon-only style

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: "Save Changes",
  variant: "primary",
  iconLeft: "check",
  iconRight: "",
  container: false,
  checkmark: false,
  preset: ""
};

// === Toggle Button Pattern ===
const ToggleTemplate = (args, { globals }) => {
  // Use a boolean control to switch state
  const isToggled = args.toggled;
  const state = isToggled ? args.state2 : args.state1;
  const attrs = [];
  if (state.label) attrs.push(`label=\"${state.label}\"`);
  if (args.container) attrs.push(`variant=\"container\"`);
  else if (state.variant && state.variant !== 'primary') attrs.push(`variant=\"${state.variant}\"`);
  if (state.iconLeft) attrs.push(`icon-left=\"${state.iconLeft}\"`);
  if (state.iconRight) attrs.push(`icon-right=\"${state.iconRight}\"`);
  if (state.checkmark) attrs.push(`checkmark=\"${state.checkmark}\"`);
  return `<labs-button ${attrs.join(' ')}></labs-button>`;
};

export const ToggleButton = ToggleTemplate.bind({});
ToggleButton.args = {
  toggled: false,
  container: false,
  state1: {
    label: "Turn on Dark Mode",
    iconLeft: "bedtime",
    iconRight: "",
    variant: "transparent",
    checkmark: false
  },
  state2: {
    label: "Turn off Dark Mode",
    iconLeft: "bedtime_off",
    iconRight: "",
    variant: "transparent",
    checkmark: false
  }
};
ToggleButton.argTypes = {
  toggled: { control: "boolean", description: "Toggle state (for demo)" },
  container: { control: "boolean" },
  state1: { table: { disable: true } },
  state2: { table: { disable: true } }
};
ToggleButton.parameters = {
  docs: {
    description: {
      story: "Generic Toggle Button pattern. Use the boolean control to switch between two states. Theme Toggle is a preset of this pattern. Actual theme logic is handled by a separate component (labs-theme-toggle-button).",
    },
  },
};

// Theme Toggle (visual only, no theme logic)
export const ThemeToggle = ToggleTemplate.bind({});
ThemeToggle.args = {
  toggled: false,
  container: false,
  state1: {
    label: "Turn on Dark Mode",
    iconLeft: "bedtime",
    iconRight: "",
    variant: "transparent",
    checkmark: false
  },
  state2: {
    label: "Turn off Dark Mode",
    iconLeft: "bedtime_off",
    iconRight: "",
    variant: "transparent",
    checkmark: false
  }
};
ThemeToggle.argTypes = ToggleButton.argTypes;
ThemeToggle.parameters = {
  docs: {
    description: {
      story: "Theme Toggle preset using the generic Toggle Button. This is a visual toggle only; actual theme switching is handled by labs-theme-toggle-button.",
    },
  },
};
