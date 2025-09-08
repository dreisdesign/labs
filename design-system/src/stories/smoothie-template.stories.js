// Smoothie Template Story: Minimal pattern template matching index-today.html
import '../components/labs-footer.js';
import '../components/labs-button.js';
import '../components/labs-icon.js';
import '../components/labs-overlay.js';
import '../components/labs-settings-card.js';

export default {
  title: 'Templates/Smoothie Template',
  parameters: {
    docs: {
      description: {
        component: 'A minimal template for pattern demos: footer, flavor switcher, and settings overlay.'
      }
    }
  }
};

export const SmoothieTemplate = {
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <style>
        html, body, .smoothie-root {
          height: 100%;
          min-height: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          overflow: hidden;
          background: var(--color-background, #f6f6f9);
        }
        .smoothie-root {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .smoothie-root labs-footer {
          flex-shrink: 0;
          width: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        #floating-toggles {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        #flavorToggle {
          height: 48px;
          width: 48px;
          min-width: 48px;
          min-height: 48px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #flavorIcon {
          width: 28px;
          height: 28px;
        }
        #footer-settings-btn labs-icon {
          width: 28px;
          height: 28px;
          transition: transform 0.4s cubic-bezier(.4,2,.6,1);
        }
        #footer-settings-btn:hover labs-icon {
          transform: rotate(90deg);
        }
      </style>
      <div class="smoothie-root">
        <div id="floating-toggles">
          <labs-button id="flavorToggle" variant="icon" aria-label="Switch flavor" title="Switch flavor">
            <labs-icon id="flavorIcon" slot="icon-left" name="colors" style="color:var(--color-on-surface);width:28px;height:28px;"></labs-icon>
          </labs-button>
        </div>
        <labs-footer full-width elevated>
          <div slot="center">
            <labs-button id="footerAddBtn" pill variant="primary">+ Add</labs-button>
          </div>
          <div slot="right" style="display: flex; align-items: center; gap: 8px;">
            <labs-button id="footer-settings-btn" variant="icon" aria-label="Settings" style="padding-right:12px;">
              <labs-icon name="settings" slot="icon-left" width="28" height="28"></labs-icon>
            </labs-button>
          </div>
        </labs-footer>
        <labs-overlay id="settingsOverlay">
          <labs-settings-card></labs-settings-card>
        </labs-overlay>
      </div>
    `;
    // Flavor switcher logic
    const flavorToggle = container.querySelector('#flavorToggle');
    function getCurrentFlavor() {
      const flavors = ['vanilla', 'blueberry', 'strawberry'];
      for (const f of flavors) {
        if (document.documentElement.classList.contains(`flavor-${f}`)) return f;
      }
      return 'blueberry';
    }
    function applyTheme({ flavor = 'blueberry', theme = 'light' } = {}) {
      const root = document.documentElement;
      root.classList.remove('flavor-vanilla', 'flavor-blueberry', 'flavor-strawberry');
      root.classList.add(`flavor-${flavor}`);
      // Keep current theme
      const isDark = root.classList.contains('theme-dark');
      root.classList.remove('theme-light', 'theme-dark');
      root.classList.add(isDark ? 'theme-dark' : 'theme-light');
      root.setAttribute('data-color-scheme', isDark ? 'dark' : 'light');
      localStorage.setItem('today-list-theme', isDark ? 'dark' : 'light');
      localStorage.setItem('today-list-flavor', flavor);
    }
    function cycleFlavor() {
      const flavors = ['vanilla', 'blueberry', 'strawberry'];
      const current = getCurrentFlavor();
      const idx = flavors.indexOf(current);
      const next = flavors[(idx + 1) % flavors.length];
      const isDark = document.documentElement.classList.contains('theme-dark');
      applyTheme({ flavor: next, theme: isDark ? 'dark' : 'light' });
    }
    if (flavorToggle) {
      flavorToggle.addEventListener('click', cycleFlavor);
    }
    // Settings overlay logic
    const settingsBtn = container.querySelector('#footer-settings-btn');
    const settingsOverlay = container.querySelector('#settingsOverlay');
    if (settingsBtn && settingsOverlay) {
      settingsBtn.addEventListener('click', () => settingsOverlay.open());
      const settingsCard = settingsOverlay.querySelector('labs-settings-card');
      if (settingsCard) {
        settingsCard.addEventListener('close', () => settingsOverlay.close());
      }
    }
    return container;
  }
};
