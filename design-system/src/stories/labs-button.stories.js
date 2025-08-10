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

// Form Variants Template
const FormVariantsTemplate = () => {
  setTimeout(() => {
    document.addEventListener('labs-click', (e) => {
      console.log('Button clicked:', e.detail);
    });
  }, 100);

  return `
    <style>
      .form-variants-demo {
        max-width: 600px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .variant-section {
        margin-bottom: 2rem;
        padding: 1.5rem;
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--border-radius-lg);
        background: var(--color-surface-container);
      }
      
      .variant-section h3 {
        margin-bottom: 1rem;
        color: var(--color-on-surface);
        font-size: var(--font-size-h4);
      }
      
      .button-group {
        display: flex;
        gap: var(--space-md);
        flex-wrap: wrap;
        align-items: center;
      }
      
      .description {
        color: var(--color-on-surface-variant);
        font-size: var(--font-size-body-sm);
        margin-bottom: 1rem;
      }
    </style>
    
    <div class="form-variants-demo">
      <div class="variant-section">
        <h3>Pill Buttons</h3>
        <p class="description">Fully rounded buttons ideal for forms and compact interfaces</p>
        <div class="button-group">
          <labs-button label="Save" icon="check" variant="pill" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Cancel" variant="pill-secondary" iconcolor="var(--color-primary)"></labs-button>
          <labs-button label="Add Task" icon="add" variant="pill" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Edit" icon="edit" variant="pill-secondary" iconcolor="var(--color-primary)"></labs-button>
        </div>
      </div>
      
      <div class="variant-section">
        <h3>Rounded Rectangle Buttons</h3>
        <p class="description">Softly rounded buttons perfect for overlays and modal interfaces</p>
        <div class="button-group">
          <labs-button label="Save Changes" icon="check" variant="rounded" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Cancel" variant="rounded-secondary" iconcolor="var(--color-primary)"></labs-button>
          <labs-button label="Delete Item" icon="delete_forever" variant="rounded" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Undo" icon="undo" variant="rounded-secondary" iconcolor="var(--color-primary)"></labs-button>
        </div>
      </div>
      
      <div class="variant-section">
        <h3>Form Integration Example</h3>
        <p class="description">How these variants work together in typical form scenarios</p>
        <div style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--border-radius-md); border: 1px solid var(--color-outline-variant);">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: var(--color-on-surface);">Task Description</label>
            <input type="text" placeholder="Enter task details..." style="width: 100%; padding: 0.75rem; border: 2px solid var(--color-outline-variant); border-radius: var(--border-radius-md); font-size: var(--font-size-body);" />
          </div>
          <div class="button-group" style="justify-content: flex-end;">
            <labs-button label="Cancel" variant="pill-secondary" iconcolor="var(--color-primary)"></labs-button>
            <labs-button label="Save Task" icon="check" variant="pill" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const FormVariants = FormVariantsTemplate.bind({});
FormVariants.parameters = {
  docs: {
    description: {
      story: "New button variants designed for form interfaces: pill buttons (fully rounded) and rounded rectangle buttons (softly rounded). These variants provide better visual hierarchy and modern styling for overlay forms, input dialogs, and compact interfaces.",
    },
  },
};
