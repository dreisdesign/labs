// Storybook Vitest setup for a11y addon (added manually after failed automigration)
import { setProjectAnnotations } from '@storybook/web-components';
import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';

setProjectAnnotations([
  a11yAddonAnnotations,
]);
