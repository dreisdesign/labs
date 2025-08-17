import '../../components/labs-button/labs-button.js';
import '../../components/labs-icon.js';

export default {
  title: 'Patterns/Buttons',
  component: 'labs-button',
  tags: ['autodocs'],
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
