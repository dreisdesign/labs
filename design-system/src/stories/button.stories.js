// button.stories.js
// Remove Storybook autodocs surface background for button stories
const style = document.createElement('style');
style.innerHTML = `
  .labs-autodocs-surface {
    background: none !important;
    box-shadow: none !important;
  }
`;
document.head.appendChild(style);
// Storybook stories for Labs Button (best practice structure)
import '../components/labs-button.js';
import '../components/labs-icon.js';
import iconsList from '../components/icons-list.js';

export default {
  title: 'Components/Button',
  component: 'labs-button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Modular, theme-agnostic Labs Button web component. Uses CSS custom properties for all styling.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'destructive', 'transparent'],
      description: 'Button variant style'
    },
    size: {
      // size control removed: not used in docs rendering; keep size attribute available via args when needed
      table: { disable: true }
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the button'
    },
    text: {
      control: { type: 'text' },
      description: 'Button text content'
    },
    leftIcon: {
      control: { type: 'select' },
      options: iconsList,
      description: 'Left icon name (optional)'
    },
    rightIcon: {
      control: { type: 'select' },
      options: iconsList,
      description: 'Right icon name (optional)'
    }
  },
  args: {
    variant: 'primary',
    // size intentionally omitted from args defaults
    disabled: false,
    text: 'Button',
    leftIcon: '',
    rightIcon: '',
    pill: true
  }
};

export const Default = {
  name: 'Default',
  render: (args) => `
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button
        variant="${args.variant}"
        ${args.disabled ? 'disabled' : ''}
        ${args.pill ? 'pill' : ''}
      >
        ${args.leftIcon ? `<labs-icon slot="icon-left" name="${args.leftIcon}"></labs-icon>` : ''}
        ${args.text}
        ${args.rightIcon ? `<labs-icon slot="icon-right" name="${args.rightIcon}"></labs-icon>` : ''}
      </labs-button>
    </div>
  `,
};

export const Primary = {
  name: 'Primary',
  render: () => `
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="primary">Primary</labs-button>
    </div>
  `,
};

export const Secondary = {
  name: 'Secondary',
  render: () => `
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="secondary">Secondary</labs-button>
    </div>
  `,
};

export const WithLeftIcon = {
  name: 'With Left Icon',
  render: () => `
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="primary">
        <labs-icon slot="icon-left" name="add"></labs-icon>
        With Left Icon
      </labs-button>
    </div>
  `,
};

export const WithRightIcon = {
  name: 'With Right Icon',
  render: () => `
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="primary">
        With Right Icon
        <labs-icon slot="icon-right" name="edit"></labs-icon>
      </labs-button>
    </div>
  `,
};


export const Destructive = {
  name: 'Destructive',
  render: () => `
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="destructive">Destructive</labs-button>
    </div>
  `,
};

export const Transparent = {
  name: 'Transparent',
  render: () => `
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="transparent">Transparent</labs-button>
    </div>
  `,
};

export const Pill = {
  name: 'Pill',
  render: () => `
    <div style="display:flex;gap:12px;padding:8px;background:transparent;align-items:center;">
      <labs-button pill variant="primary" size="medium">Primary</labs-button>
      <labs-button pill variant="secondary" size="medium">Secondary</labs-button>
      <labs-button pill variant="destructive" size="medium">Destructive</labs-button>
      <labs-button pill variant="transparent" size="medium">Transparent</labs-button>
      <labs-button pill variant="primary" size="medium"><labs-icon slot="icon-left" name="add"></labs-icon>Add</labs-button>
    </div>
  `,
};
