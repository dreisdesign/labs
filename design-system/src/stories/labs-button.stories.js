import "../components/labs-button.js";
import "../styles/components/settings-overlay.css";

export default {
  title: "Components/Button",
  argTypes: {
    label: { control: "text" },
    iconLeft: { control: "boolean", name: "Icon Left" },
    icon: {
      control: { type: "select" },
      name: "Left Icon Name",
      description: "Set left icon name (if iconLeft is true)",
      options: [
        "",
        "add_comment",
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
    iconRight: { control: "boolean", name: "Icon Right" },
    iconRightName: {
      control: { type: "select" },
      name: "Right Icon Name",
      description: "Set right icon name (if iconRight is true)",
      options: [
        "",
        "add_comment",
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
    checkmark: { control: "boolean", name: "Check Animation" },
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "danger",
        "success",
        "transparent",
        "container",
        "container-danger",
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

// Show container variants in proper context
export const ContainerVariants = () => {
  return `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 800px;">
        <div>
            <h4 style="margin: 0 0 1rem 0; font-size: 1.25rem;">Standard Buttons</h4>
            <div style="display: flex; flex-direction: column; gap: 0.5rem; padding: 1rem; border: 1px solid var(--color-primary-25); border-radius: 8px; background: var(--color-surface);">
                <labs-button label="All Apps" icon="settings" variant="transparent"></labs-button>
                <labs-button label="Turn on dark mode" icon="bedtime" variant="transparent"></labs-button>
                <labs-button label="Settings" icon-right="settings" variant="transparent"></labs-button>
            </div>
        </div>
        <div class="settings-overlay">
            <h4 style="margin: 0 0 1rem 0; font-size: 1.25rem;">Container Buttons</h4>
            <div style="display: flex; flex-direction: column; gap: 0.5rem; padding: 1rem; border: 1px solid var(--color-primary-25); border-radius: 8px; background: var(--color-surface);">
                <labs-button label="All Apps" icon="settings" variant="container"></labs-button>
                <labs-button label="Turn on dark mode" icon="bedtime" variant="container"></labs-button>
                <labs-button label="Settings" icon-right="settings" variant="container"></labs-button>
            </div>
        </div>
    </div>
    `;
};

ContainerVariants.parameters = {
  docs: {
    description: {
      story:
        "Comparison of standard buttons vs container variants. Container buttons are designed for overlays and panels where full-width, rounded rectangle hover states are desired.",
    },
  },
};

import { ThemeToggleButton } from "./theme-toggle.stories.js";
