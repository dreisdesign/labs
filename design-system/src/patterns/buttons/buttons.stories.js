import '../../components/labs-button/labs-button.js';
import '../../components/labs-icon.js';

export default {
  title: 'Patterns/Buttons',
  component: 'labs-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'destructive', 'icon'],
      description: 'Visual variant for the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    'icon-left': { control: 'text', description: 'Name of left icon (optional)' },
    'icon-right': { control: 'text', description: 'Name of right icon (optional)' },
    children: { control: 'text', name: 'Label', description: 'Button label text' },
  },
};

export const Default = {
  args: {
    variant: 'primary',
    size: 'medium',
    'icon-left': '',
    'icon-right': '',
    children: 'Button',
  },
  render: ({ variant, size, 'icon-left': iconLeft, 'icon-right': iconRight, children }) => {
    const left = iconLeft ? `<labs-icon name="${iconLeft}"></labs-icon>` : '';
    const right = iconRight ? `<labs-icon name="${iconRight}"></labs-icon>` : '';
    const leftAttr = iconLeft ? `icon-left="${iconLeft}"` : '';
    const rightAttr = iconRight ? `icon-right="${iconRight}"` : '';
    return `<labs-button variant="${variant}" size="${size}" ${leftAttr} ${rightAttr}>${left}${children}${right}</labs-button>`;
  },
  parameters: {
    docs: { description: { story: 'Default button example. Use controls to change variant, size and icons.' } },
  },
};

export const IconOnly = {
  name: 'Icon Only',
  render: () =>
    `<labs-button variant="icon" aria-label="Settings">
      <labs-icon name="settings"></labs-icon>
    </labs-button>`,
  parameters: {
    docs: { description: { story: 'Compact icon-only button. Provide an aria-label for accessibility.' } },
  },
};
