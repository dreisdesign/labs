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
          background: inherit;
          box-shadow: none;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.10s cubic-bezier(.4,2,.6,1), color 0.10s cubic-bezier(.4,2,.6,1);
        }
        :host {
          background: var(--color-surface, #fff);
        }
        :host-context(.theme-dark) .close-btn {
          background: var(--color-surface, #181a1b);
        }
        :host-context(.theme-dark) .close-btn:hover,
        :host-context(.theme-dark) .close-btn:focus-visible {
          background: var(--color-surface-hover, #23272a);
        }
        :host-context(.theme-light) .close-btn {
          background: var(--color-surface, #fff);
        }
        :host-context(.theme-light) .close-btn:hover,
        :host-context(.theme-light) .close-btn:focus-visible {
          background: var(--color-surface-hover, #f5f5f5);
        }
        .close-btn:hover,
        .close-btn:focus-visible {
          color: var(--color-on-surface, #222);
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
        /* Layout for appearance slot: ensure buttons inside are stacked with spacing */
        .settings-list #appearance-btn-slot {
          display: flex;
          flex-direction: column;
          gap: 12px;
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
        /* Fix icon color in destructive buttons: ensure icon inherits semantic error color */
        labs-button[variant="destructive"] labs-icon,
        labs-button[variant="destructive"] ::slotted(labs-icon) {
          color: var(--color-on-error, #fff);
        }
      </style>
      <div class="header-row">
        <h3>Settings</h3>
        <labs-button id="icon-close-btn" class="close-btn" variant="icon" aria-label="Close">
          <labs-icon name="close" slot="icon-left" width="28" height="28"></labs-icon>
        </labs-button>
      </div>
      <div class="settings-list">
        <labs-button id="all-apps-btn" variant="secondary" size="large" style="gap:10px;">
          <labs-icon name="apps" slot="icon-left"></labs-icon>
          All Apps
        </labs-button>
        <div id="appearance-btn-slot"></div>
        <labs-button id="simulate-next-btn" variant="secondary" size="large" style="gap:10px; display:none;">
          <labs-icon name="add" slot="icon-left" width="20" height="20"></labs-icon>
          Simulate Next Day
        </labs-button>
        <labs-button id="reset-all-btn" variant="destructive" size="large" style="gap:10px;">
          <labs-icon name="delete" slot="icon-left" width="20" height="20" color="var(--color-on-error)"></labs-icon>
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
    // Wire All Apps button to open the local dev server only when the current page is local.
    // On production/docs sites, open the repo-scoped public URL immediately (no fetch attempt).
    const allAppsBtn = this.shadowRoot.getElementById('all-apps-btn');
    if (allAppsBtn) {
      const localUrl = 'http://localhost:8000/';
      // Repo-scoped fallback to open All Apps on the live docs site
      const publicUrl = '/labs/';
      const isLocalHostPage = typeof window !== 'undefined' && (window.location && (window.location.hostname.includes('localhost') || window.location.hostname === '127.0.0.1'));
      const openPreferLocal = async () => {
        if (!isLocalHostPage) {
          // Don't attempt to probe localhost from production — just open the public site.
          window.open(publicUrl, '_blank');
          return;
        }
        // Try a quick fetch to detect local server. Use no-cors so we don't get blocked by CORS.
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 600);
        try {
          await fetch(localUrl, { mode: 'no-cors', signal: controller.signal });
          window.open(localUrl, '_blank');
        } catch (e) {
          window.open(publicUrl, '_blank');
        } finally {
          clearTimeout(timeout);
        }
      };
      allAppsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openPreferLocal();
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

      // Ensure a flavor button is present (large) — use labs-flavor-button so label reflects current flavor
      const flavorBtn = document.createElement('labs-flavor-button');
      // compute initial human-friendly label from document class
      const flavorClass = Array.from(document.documentElement.classList).find(c => c && c.startsWith('flavor-'));
      const flavorKey = flavorClass ? flavorClass.replace('flavor-', '') : 'blueberry';
      const flavorLabel = flavorKey.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
      flavorBtn.setAttribute('label', flavorLabel);
      if (!this.shadowRoot.getElementById('flavor-btn')) slot.appendChild(flavorBtn);

      // Wire reset button to dispatch a confirmed reset event
      const resetBtn = this.shadowRoot.getElementById('reset-all-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const confirmed = window.confirm('Warning: This will delete all entries. Are you sure you want to continue?');
          if (confirmed) {
            this.dispatchEvent(new CustomEvent('reset-all', { bubbles: true, composed: true }));
            // Close overlay after reset so the app can refresh UI
            this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
          }
        });
      }
      // Wire simulate next day button to dispatch a simulate event so apps can handle the behavior
      const simulateBtn = this.shadowRoot.getElementById('simulate-next-btn');
      if (simulateBtn) {
        // Show simulate button only when URL contains simulate=1 or simulate=true
        try {
          const url = new URL(window.location.href);
          const simulateFlag = url.searchParams.get('simulate') || url.searchParams.get('simulateNext');
          if (simulateFlag === '1' || simulateFlag === 'true') simulateBtn.style.display = '';
        } catch (e) { }
        simulateBtn.addEventListener('click', (e) => {
          e.preventDefault();
          // Let apps handle the simulated action
          this.dispatchEvent(new CustomEvent('simulate-next-day', { bubbles: true, composed: true }));
          // Also emit a close event so overlays listening for 'close' will close automatically
          this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
        });
      }
    }
  }
}
customElements.define('labs-settings-card', LabsSettingsCard);
