// Icon Only Button Pattern — Storybook story for usage pattern, not a variant
import '../../components/labs-icon.js';
/**
 * @type { import('@storybook/web-components').Meta }
 */

export default {
  title: 'Patterns/Buttons/Icon Only',
  parameters: {
    docs: {
      autodocs: true,
      description: {
        component: 'Icon Only is a usage pattern, not a variant. Use a regular button variant (e.g. primary) and provide only a slotted icon with an aria-label for accessibility.'
      },
    },
    controls: { hideNoControlsWarning: true },
  },
};

export const IconOnly = {
  render: () => `
    <labs-button variant="icon" aria-label="Settings">
      <span slot="icon-left"><labs-icon name="settings"></labs-icon></span>
    </labs-button>
  `,
  name: 'Icon Only',
  args: {},
};
