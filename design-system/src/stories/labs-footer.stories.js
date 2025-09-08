import '../components/labs-footer.js';
import '../components/labs-button.js';
import '../components/labs-icon.js';
import iconsList from '../components/icons-list.js';
import '../components/labs-overlay.js';

export default {
  title: 'Components/Footer',
  parameters: {
    docs: {
      description: {
        component: 'A flexible footer component with slots for left, center, and right content.'
      }
    }
  },
  argTypes: {
    settingsIcon: {
      name: 'settingsIcon',
      control: { type: 'select' },
      options: Object.keys(iconsList),
    },
  },
};

export const Default = {
  render: (args) => {
    return `
      <div style="min-height:60vh; display:flex; flex-direction:column;">
        <div style="flex:1"></div>
        <labs-footer full-width elevated>
          <div slot="center">
            <labs-button pill variant="primary">+ Add</labs-button>
          </div>
          <div slot="right" style="display:flex;align-items:center;gap:8px;">
            <labs-button variant="icon" aria-label="Settings" style="padding-right:12px;">
              <labs-icon name="${args.settingsIcon || 'settings'}" slot="icon-left"></labs-icon>
            </labs-button>
          </div>
        </labs-footer>
      </div>
    `;
  }
};

// Default args to prevent fallback
Default.args = {
  settingsIcon: 'settings'
};
