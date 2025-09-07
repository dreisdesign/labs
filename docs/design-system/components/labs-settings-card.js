// Labs Settings Card - matches Tracker app settings overlay
class LabsSettingsCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 340px;
          margin: 0 auto;
          background: var(--color-surface, #fff);
          border-radius: 18px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.10), 0 1.5px 4px rgba(0,0,0,0.04);
          padding: 28px 24px 20px 24px;
          font-family: var(--font-family-base, system-ui, sans-serif);
          position: relative;
        }
        .header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .close-btn {
          width: 40px;
          height: 40px;
          min-width: 40px;
          min-height: 40px;
          border-radius: 50%;
          position: static;
          background: none;
          box-shadow: none;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .close-btn labs-icon {
          --icon-size: 28px;
        }
        h3 {
          margin: 0;
          font-size: 1.18rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .settings-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .settings-list labs-button {
          width: 100%;
          box-sizing: border-box;
        }
        .settings-actions {
          display: none;
        }
        /* Icon hover animation for settings icon in icon-only button */
        labs-button[variant="icon"] labs-icon[name="settings"] {
          transition: transform 0.3s cubic-bezier(.4,2,.6,1);
        }
        labs-button[variant="icon"]:hover labs-icon[name="settings"] {
          transform: rotate(180deg);
        }
      </style>
      <div class="header-row">
        <h3>Settings</h3>
        <labs-button id="icon-close-btn" class="close-btn" variant="icon" aria-label="Close">
          <labs-icon name="close" slot="icon-left" width="28" height="28"></labs-icon>
        </labs-button>
      </div>
      <div class="settings-list">
        <labs-button id="all-apps-btn" variant="secondary" style="gap:10px;">
          <labs-icon name="apps" slot="icon-left"></labs-icon>
          All Apps
        </labs-button>
        <div id="appearance-btn-slot"></div>
        <labs-button id="reset-all-btn" variant="destructive" style="gap:10px;">
          Reset All Data
        </labs-button>
      </div>
    `;
    // Add close event for icon button (dispatches a custom event for overlay to handle)
    const iconCloseBtn = this.shadowRoot.getElementById('icon-close-btn');
    if (iconCloseBtn) {
      iconCloseBtn.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
      });
    }
    // Inline theme toggle button logic for shadow DOM compatibility
    const slot = this.shadowRoot.getElementById('appearance-btn-slot');
    if (slot) {
      const btn = document.createElement('labs-button');
      btn.setAttribute('variant', 'secondary');
      btn.setAttribute('size', 'large');
      btn.style.width = '100%';
      btn.style.justifyContent = 'flex-start';
      btn.style.margin = '0';
      btn.style.position = 'static';
      btn.id = 'theme-toggle-btn';
      function updateLabel() {
        const isDark = document.documentElement.classList.contains('theme-dark');
        // Remove any existing icon and label
        while (btn.firstChild) btn.removeChild(btn.firstChild);
        // Create the icon with the correct slot
        const icon = document.createElement('labs-icon');
        icon.setAttribute('slot', 'icon-left');
        icon.setAttribute('name', isDark ? 'bedtime_off' : 'bedtime');
        btn.appendChild(icon);
        // Add the label as a text node
        btn.appendChild(document.createTextNode(isDark ? 'Turn on light mode' : 'Turn on dark mode'));
      }
      btn.onclick = () => {
        const isDark = document.documentElement.classList.contains('theme-dark');
        const root = document.documentElement;
        const flavorClass = Array.from(root.classList).find(c => c.startsWith('flavor-'));
        const flavor = flavorClass ? flavorClass.replace('flavor-', '') : 'vanilla';
        import('../utils/theme.js').then(({ applyTheme }) => {
          applyTheme({ flavor, theme: isDark ? 'light' : 'dark' });
          updateLabel();
        });
      };
      // Keep the visible label in sync with external theme changes
      const observer = new MutationObserver(() => updateLabel());
      try {
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
      } catch (e) { }
      updateLabel();
      slot.appendChild(btn);
    }
  }
}
customElements.define('labs-settings-card', LabsSettingsCard);
