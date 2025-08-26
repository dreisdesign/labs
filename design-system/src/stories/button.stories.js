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

export const WithIcon = {
  name: 'With Icon',
  render: () => `
    <labs-button variant="primary">
      <labs-icon slot="icon-left" name="add"></labs-icon>
      With Icon
    </labs-button>
  `,
};

export const Destructive = {
  name: 'Destructive',
  render: () => `
    <labs-button variant="destructive">Destructive</labs-button>
  `,
};
