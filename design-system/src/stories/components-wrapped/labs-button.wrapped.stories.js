export const Restore = {
    name: 'Restore',
    render: () => `
    <labs-button pill variant="secondary">
      <labs-icon slot="icon-left" name="history"></labs-icon>
      Restore
    </labs-button>
  `,
};
import '../../components/labs-button.js';
import '../../components/labs-icon.js';

export default {
    title: '3. Components (Wrapped)/Button',
    component: 'labs-button',
};

export const Add = {
    name: 'Add',
    render: () => `
    <labs-button pill variant="primary">
      <labs-icon slot="icon-left" name="add"></labs-icon>
      Add
    </labs-button>
  `,
};

export const ResetAllData = {
    name: 'Reset all data',
    render: () => `
    <labs-button variant="destructive" size="large" style="gap:10px;">
      <labs-icon slot="icon-left" name="delete" width="20" height="20" color="var(--color-on-error)"></labs-icon>
      Reset All Data
    </labs-button>
  `,
};
