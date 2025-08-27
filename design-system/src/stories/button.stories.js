// button.stories.js
// Storybook stories for Labs Button (best practice structure)
import '../components/labs-button.js';
import '../components/labs-icon.js';

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
};

export const Default = {
  name: 'Default',
  render: () => `
    <labs-button variant="primary">Default</labs-button>
  `,
};

export const Primary = {
  name: 'Primary',
  render: () => `
    <labs-button variant="primary">Primary</labs-button>
  `,
};

export const Secondary = {
  name: 'Secondary',
  render: () => `
    <labs-button variant="secondary">Secondary</labs-button>
  `,
};

export const WithLeftIcon = {
  name: 'With Left Icon',
  render: () => `
    <labs-button variant="primary">
      <labs-icon slot="icon-left" name="add"></labs-icon>
      With Left Icon
    </labs-button>
  `,
};

export const WithRightIcon = {
  name: 'With Right Icon',
  render: () => `
    <labs-button variant="primary">
      With Right Icon
      <labs-icon slot="icon-right" name="edit"></labs-icon>
    </labs-button>
  `,
};


export const Destructive = {
  name: 'Destructive',
  render: () => `
    <labs-button variant="destructive">Destructive</labs-button>
  `,
};
