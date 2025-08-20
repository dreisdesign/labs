// labs-button.stories.js
// Storybook story for Labs Button (modular web component)
import "../labs-button.js";

/**
 * @type { import('@storybook/web-components').Meta }
 */

export default {
  title: 'Components/Button',
  component: 'labs-button',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'destructive'] },
    'aria-label': { control: 'text', name: 'aria-label' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Modular, theme-agnostic Labs Button web component. Uses CSS custom properties for all styling.\n\n**Note:** Icon Only is a usage pattern, not a variant. To create an icon-only button, use a regular variant (e.g. primary) and provide only a slotted icon with an aria-label.',
      },
    },
  },
};

const Template = (args) => {
  return `
    <labs-button
      variant="${args.variant}"
      ${args['aria-label'] ? `aria-label="${args['aria-label']}"` : ''}
    >
      Button
    </labs-button>
  `;
};

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  'aria-label': '',
};

// Keep a single Default story; other variants can be tested from controls in the Docs.
