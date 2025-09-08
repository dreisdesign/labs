import '../../components/labs-footer.js';
import '../../components/labs-button.js';
import '../../components/labs-icon.js';
import '../../components/labs-overlay.js';

export default {
  title: 'Patterns/Footer with Settings',
  parameters: {
    docs: {
      description: {
        component: 'A pattern showing a footer with a settings button that opens an overlay.'
      }
    }
  }
};

export const FooterWithSettings = {
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <style>
        #settings-btn labs-icon {
          width: 28px;
          height: 28px;
          transition: transform 0.4s cubic-bezier(.4,2,.6,1);
        }
        #settings-btn:hover labs-icon {
          transform: rotate(90deg);
        }
      </style>
      <labs-footer full-width elevated>
        <div slot="center">
          <labs-button pill variant="primary">+ Add</labs-button>
        </div>
        <div slot="right" style="display: flex; align-items: center; gap: 8px;">
          <labs-button id="settings-btn" variant="icon" aria-label="Settings" style="padding-right:12px;">
            <labs-icon name="settings" slot="icon-left" width="28" height="28"></labs-icon>
          </labs-button>
        </div>
      </labs-footer>
      <labs-overlay id="settings-overlay">
        <labs-settings-card></labs-settings-card>
      </labs-overlay>
    `;

    const settingsBtn = container.querySelector('#settings-btn');
    const overlay = container.querySelector('#settings-overlay');

    settingsBtn.addEventListener('click', () => {
      overlay.open();
    });

    // Listen for 'close' event from labs-settings-card and close the overlay
    const settingsCard = container.querySelector('labs-settings-card');
    if (settingsCard && overlay) {
      settingsCard.addEventListener('close', () => {
        overlay.close();
      });
    }
    return container;
  }
};
