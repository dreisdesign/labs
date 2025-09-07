import { html } from 'lit';
import '../../components/labs-button.js';
import '../../components/labs-icon.js';

// Inline the icon list for Storybook controls compatibility
const iconOptions = [
  "add",
  "add_circle",
  "add_comment",
  "apps",
  "bedtime",
  "bedtime_off",
  "build",
  "cancel",
  "change_circle",
  "check",
  "check_box",
  "check_box_outline_blank",
  "check_indeterminate_small",
  "close",
  "code",
  "colors",
  "comment",
  "content_copy",
  "delete_forever",
  "edit",
  "history",
  "indeterminate_check_box",
  "open_in_new",
  "published_with_changes",
  "rate_review",
  "settings",
  "star",
  "undo"
];

// Design system color variants
const colorVariants = {
  'On Surface': 'var(--color-on-surface)',
  'On Primary': 'var(--color-on-primary)',
  'Primary': 'var(--color-primary)',
  'Error': 'var(--color-error)',
  'On Error': 'var(--color-on-error)',
  'Settings Icon': 'var(--settings-icon-color)',
};

export default {
  title: 'Patterns/Buttons/Icon Only',
  argTypes: {
    icon: {
      options: iconOptions,
      control: { type: 'select' },
      description: 'Icon name',
    },
    colorVariant: {
      options: Object.keys(colorVariants),
      control: { type: 'select' },
      description: 'Icon color variant',
    },
    ariaLabel: {
      control: 'text',
      description: 'Aria label for accessibility',
    },
    animation: {
      control: 'boolean',
      description: 'Enable icon hover animation',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A canonical pattern for icon-only actions. Used for theme, delete, settings, close, etc. Supports animation and accessibility.',
      },
    },
  },
};

export const IconOnly = ({ icon = 'settings', colorVariant = 'On Surface', ariaLabel = 'Settings', animation = true }) => {
  const style = `
    labs-button[variant="icon"] labs-icon {
      transition: transform 0.4s cubic-bezier(.4,2,.6,1);
      transform: rotate(0deg);
    }
    labs-button[variant="icon"]:hover labs-icon {
      transform: ${animation ? 'rotate(90deg)' : 'rotate(0deg)'};
    }
  `;
  const color = colorVariants[colorVariant] || 'var(--color-on-surface)';
  return html`
    <style>${style}</style>
    <labs-button variant="icon" aria-label="${ariaLabel}">
      <labs-icon name="${icon}" width="24" height="24" slot="icon-left" color="${color}" style="color: ${color};"></labs-icon>
    </labs-button>
  `;
};

IconOnly.args = {
  icon: 'settings',
  colorVariant: 'On Surface',
  ariaLabel: 'Settings',
  animation: true,
};

IconOnly.storyName = 'Icon Only';
