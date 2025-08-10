import "../components/labs-button.js";
import "../components/labs-icon.js";
import "../components/labs-checkbox.js";
import "../styles/components/settings-overlay.css";
import { createButton, createIconButton, buttonConfigs, iconOnlyButtons } from "../tokens/button-configs.js";

export default {
  title: "Components/Button",
  parameters: {
    docs: {
      description: {
        component: "The primary button component of the Labs Design System. Supports multiple variants, icons, and interactive states.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Button text content"
    },
    iconLeft: {
      control: "boolean",
      name: "Left Icon",
      description: "Show icon on the left side"
    },
    icon: {
      control: { type: "select" },
      name: "Left Icon Name",
      description: "Icon name from Labs icon system",
      options: [
        "",
        "add",
        "add_comment",
        "apps",
        "bedtime",
        "bedtime_off",
        "cancel",
        "change_circle",
        "check",
        "close",
        "comment",
        "delete_forever",
        "edit",
        "rate_review",
        "settings",
        "undo",
      ],
    },
    iconRight: {
      control: "boolean",
      name: "Right Icon",
      description: "Show icon on the right side"
    },
    iconRightName: {
      control: { type: "select" },
      name: "Right Icon Name",
      description: "Icon name from Labs icon system",
      options: [
        "",
        "add",
        "add_comment",
        "apps",
        "bedtime",
        "bedtime_off",
        "cancel",
        "change_circle",
        "check",
        "close",
        "comment",
        "delete_forever",
        "edit",
        "rate_review",
        "settings",
        "undo",
      ],
    },
    checkmark: {
      control: "boolean",
      name: "Success Animation",
      description: "Show checkmark animation on click"
    },
    variant: {
      control: { type: "select" },
      description: "Button variant/style",
      options: [
        "primary",
        "secondary",
        "danger",
        "success",
        "transparent",
        "icon",
        "container",
        "container-danger",
        "pill",
        "pill-secondary",
        "rounded",
        "rounded-secondary",
      ],
    },
  },
};

const Template = ({
  label,
  iconLeft,
  icon,
  iconRight,
  iconRightName,
  checkmark,
  variant,
}) => {
  let leftIcon = iconLeft ? icon || "undo" : "";
  let rightIcon = iconRight ? iconRightName || "settings" : "";

  return `
    <labs-button
      label="${label || ""}"
      ${leftIcon ? `icon="${leftIcon}"` : ""}
      ${rightIcon ? `icon-right="${rightIcon}"` : ""}
      ${checkmark ? "checkmark" : ""}
      variant="${variant || "primary"}"
    ></labs-button>
  `;
};

export const Default = Template.bind({});
Default.args = {
  label: "Primary Button",
  iconLeft: false,
  icon: "",
  iconRight: false,
  iconRightName: "",
  checkmark: false,
  variant: "primary",
};
Default.storyName = "Primary";

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  iconLeft: false,
  icon: "",
  iconRight: false,
  iconRightName: "",
  checkmark: false,
  variant: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Delete",
  iconLeft: true,
  icon: "delete_forever",
  iconRight: false,
  iconRightName: "",
  checkmark: false,
  variant: "danger",
};

export const Success = Template.bind({});
Success.args = {
  label: "Save",
  iconLeft: true,
  icon: "check",
  iconRight: false,
  iconRightName: "",
  checkmark: true,
  variant: "success",
};

export const Transparent = Template.bind({});
Transparent.args = {
  label: "Settings",
  iconLeft: true,
  icon: "settings",
  iconRight: false,
  iconRightName: "",
  checkmark: false,
  variant: "transparent",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  label: "",
  iconLeft: true,
  icon: "settings",
  iconRight: false,
  iconRightName: "",
  checkmark: false,
  variant: "icon",
};

export const RoundedRectangle = Template.bind({});
RoundedRectangle.args = {
  label: "Save Changes",
  iconLeft: true,
  icon: "check",
  iconRight: false,
  iconRightName: "",
  checkmark: true,
  variant: "rounded",
};
RoundedRectangle.parameters = {
  docs: {
    description: {
      story: "Rounded rectangle buttons with soft corners (border-radius: 12px). Perfect for modal overlays, form actions, and modern interfaces. Available in both primary (`rounded`) and secondary (`rounded-secondary`) variants.",
    },
  },
};

export const RoundedSecondary = Template.bind({});
RoundedSecondary.args = {
  label: "Cancel",
  iconLeft: false,
  icon: "",
  iconRight: false,
  iconRightName: "",
  checkmark: false,
  variant: "rounded-secondary",
};
RoundedSecondary.parameters = {
  docs: {
    description: {
      story: "Secondary variant of rounded rectangle buttons. Provides visual hierarchy when paired with primary rounded buttons in dialogs and forms.",
    },
  },
};

// Checkbox-specific template using the labs-checkbox component
const CheckboxTemplate = ({ checked, iconcolor }) => {
  return `
    <div style="display: flex; align-items: center; gap: 1rem;">
      <labs-checkbox 
        ${checked ? 'checked' : ''}
        ${iconcolor ? `iconcolor="${iconcolor}"` : ''}
      ></labs-checkbox>
    </div>
  `;
};

export const Checkbox = CheckboxTemplate.bind({});
Checkbox.args = {
  checked: false,
  iconcolor: "var(--color-on-surface)",
};
Checkbox.parameters = {
  docs: {
    description: {
      story: "Checkbox functionality using icon-only button with state management. Shows checkmark animation on state change and proper icon switching between checked/unchecked states.",
    },
  },
};
Checkbox.argTypes = {
  checked: {
    control: "boolean",
    description: "Whether the checkbox is checked"
  },
  iconcolor: {
    control: "color",
    description: "Color for unchecked state (checked state uses primary color)"
  },
};
