import "./labs-button.js";
import "./labs-icon.js";

class LabsSettingsOverlay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }

        .settings-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--overlay-background, rgba(0, 0, 0, 0.5));
          backdrop-filter: blur(var(--overlay-blur, 25px));
          -webkit-backdrop-filter: blur(var(--overlay-blur, 16px));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: var(--overlay-z-index, 1000);
          transition: opacity 0.3s ease;
        }

        .settings-overlay.hidden {
          opacity: 0;
          pointer-events: none;
          visibility: hidden;
        }

        .overlay-content {
          background-color: var(--surface-color, #fff);
          color: var(--on-surface-color, #1c1b1f);
          padding: var(--overlay-padding, 20px);
          border-radius: var(--border-radius, 12px);
          box-shadow: var(--overlay-shadow, 0 5px 20px rgba(0, 0, 0, 0.2));
          width: 90%;
          max-width: var(--overlay-max-width, 400px);
          position: relative;
          margin: auto;
          max-height: 80dvh;
          overflow-y: auto;
          overflow-x: hidden;
          transition: all 0.3s ease-out;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .overlay-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--header-margin, 0.75rem);
        }

        .overlay-header h2 {
          margin: 0;
          font-size: var(--title-size, 1.5rem);
          color: var(--on-surface-color, #1c1b1f);
          font-family: var(--font-family, inherit);
        }

        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          border-radius: 50%;
          transition: background-color 0.2s;
          width: var(--close-button-size, 3rem);
          height: var(--close-button-size, 3rem);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .close-button:hover {
          background-color: var(--close-button-hover, color-mix(in srgb, var(--color-primary) 8%, transparent));
        }

        .close-icon {
          width: var(--close-icon-size, 1.5rem);
          height: var(--close-icon-size, 1.5rem);
          display: block;
        }

        .button-container {
          display: flex;
          flex-direction: column;
          gap: var(--button-gap, 0.5rem);
          margin-top: var(--button-container-margin, 1rem);
        }

        /* Container button styles within shadow DOM */
        .button-container labs-button[variant="container"],
        .button-container labs-button[variant="container-danger"] {
          width: 100%;
          font-size: var(--button-font-size, 1.125rem);
          padding: var(--button-padding, 1rem);
          text-align: left;
          justify-content: flex-start;
          border-radius: var(--button-radius, 0.7rem);
          background: transparent;
          transition: background 0.2s, color 0.2s;
          box-shadow: none;
          outline: none;
          color: var(--on-surface-color, #1c1b1f);
          box-sizing: border-box;
          border: none;
        }

        .button-container labs-button[variant="container"]:hover {
          background: var(--button-hover-bg, rgba(46, 43, 116, 0.1));
        }

        .button-container labs-button[variant="container-danger"] {
          color: var(--error-color, #b5005a);
        }

        .button-container labs-button[variant="container-danger"]:hover {
          background: var(--error-color, #b5005a);
          color: var(--on-error-color, #fff);
        }
      </style>

  <labs-button id="open-settings-btn" icon="settings" variant="primary" label="Settings"></labs-button>
      <div id="overlay" class="settings-overlay" style="display:none;">
        <div class="overlay-content">
          <div class="overlay-header">
            <h2>Settings</h2>
            <button class="close-button">
              <labs-icon name="close" class="close-icon"></labs-icon>
            </button>
          </div>
          <div class="button-container">
            <labs-button label="All Apps" icon="add" variant="container"></labs-button>
            <labs-button label="Turn On Dark Mode" icon="bedtime" variant="container" id="theme-toggle"></labs-button>
            <!-- Reset All Data removed from global settings overlay; scoped to Today List app -->
          </div>
        </div>
      </div>
    `;

    const openBtn = this.shadowRoot.getElementById("open-settings-btn");
    const overlay = this.shadowRoot.getElementById("overlay");
    const closeBtn = this.shadowRoot.querySelector(".close-button");
    const themeButton = this.shadowRoot.getElementById('theme-toggle');

    openBtn.addEventListener("click", () => {
      overlay.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.style.display = "none";
    });

    // Responsive: collapse theme button label to icon-only below 700px
    function updateCollapse() {
      try {
        const isSmall = window.matchMedia('(max-width: 700px)').matches;
        if (themeButton) {
          if (isSmall) themeButton.setAttribute('data-collapse', 'small');
          else themeButton.removeAttribute('data-collapse');
        }
      } catch (e) { }
    }

    updateCollapse();
    window.addEventListener('resize', updateCollapse);

    // Ensure all labs-icon elements are upgraded and rendered
    customElements.whenDefined('labs-icon').then(() => {
      this.shadowRoot.querySelectorAll('labs-icon').forEach(icon => {
        if (typeof icon.render === 'function') icon.render();
      });
    });

    // Reset All Data button: require explicit confirmation before deleting
    const resetBtn = this.shadowRoot.getElementById('reset-data-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const confirmed = window.confirm('Warning: This will delete all entries. Are you sure you want to continue?');
        if (confirmed) {
          this._performReset();
        }
      });
    }
  }

  _performReset() {
    try {
      // Clear localStorage (app data) - keep this conservative and only clear storage
      // related to the demos/apps. If you want to restrict keys, change this logic.
      localStorage.clear();
    } catch (e) { /* ignore */ }

    // Reload to reflect cleared state
    try { location.reload(); } catch (e) { /* ignore */ }
  }
}

customElements.define("labs-settings-overlay", LabsSettingsOverlay);
