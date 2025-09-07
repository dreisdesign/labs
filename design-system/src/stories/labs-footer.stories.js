import '../components/labs-footer.js';
import '../components/labs-button.js';
import '../components/labs-icon.js';
import '../components/labs-overlay.js';

export default {
  title: 'Components/Footer',
  parameters: {
    docs: {
      description: {
        component: 'A flexible footer component with slots for left, center, and right content.'
      }
    }
  }
};

export const Default = {
  render: () => {
    return `
      <div style="min-height:60vh; display:flex; flex-direction:column;">
        <div style="flex:1"></div>
        <labs-footer full-width elevated>
          <div slot="center">
            <labs-button variant="primary">+ Add</labs-button>
          </div>
          <div slot="right" style="display:flex;align-items:center;gap:8px;">
            <labs-button variant="icon" aria-label="Settings" style="padding-right:12px;">
              <labs-icon name="settings" slot="icon-left"></labs-icon>
            </labs-button>
          </div>
        </labs-footer>
      </div>
    `;
  }
};
