/* eslint-disable */
import './labs-button.js';
import './labs-icon.js';
import './labs-settings.js';

class LabsSettingsOverlay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["active"];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
    this.setupThemeObserver();
  }

  setupThemeObserver() {
    // Watch for theme changes on document.body
    this.themeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          this.updateIconColors();
        }
      });
    });

    this.themeObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  updateIconColors() {
    const closeIcon = this.shadowRoot.querySelector('.close-button labs-icon');
    if (closeIcon) {
      closeIcon.setAttribute('color', 'var(--color-on-surface)');
    }
  }

  setupEventListeners() {
    // Close when clicking overlay background (the host element itself)
    this.shadowRoot.addEventListener('click', (e) => {
      if (e.target === this.shadowRoot.host || e.target.classList.contains('overlay-background')) {
        this.close();
      }
    });

    // Close button
    setTimeout(() => {
      const closeButton = this.shadowRoot.querySelector('.close-button');
      if (closeButton) {
        closeButton.addEventListener('click', () => this.close());
      }
    }, 0);

    // Escape key handler
    this.handleEscape = (e) => {
      if (e.key === 'Escape' && this.hasAttribute('active')) {
        this.close();
      }
    };
    document.addEventListener('keydown', this.handleEscape);
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this.handleEscape);
    if (this.themeObserver) {
      this.themeObserver.disconnect();
    }
  }

  open() {
    this.setAttribute('active', '');
  }

  close() {
    this.removeAttribute('active');
    this.dispatchEvent(new CustomEvent('overlay-close', { bubbles: true }));
  }

  render() {
    const isActive = this.hasAttribute('active');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: ${isActive ? 'flex' : 'none'};
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .overlay-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .overlay-content {
          background: var(--surface-color, #ffffff);
          border-radius: var(--border-radius-large, 12px);
          padding: var(--spacing-large, 24px);
          max-width: 90vw;
          max-height: 90vh;
          width: 100%;
          max-width: 400px;
          box-shadow: var(--shadow-large, 0 8px 32px rgba(0, 0, 0, 0.15));
          border: 1px solid var(--border-color, #e0e0e0);
          overflow-y: auto;
        }        .overlay-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-md);
        }

        .overlay-header h2 {
          font-size: var(--font-size-h2);
          font-weight: var(--font-weight-semibold);
          color: var(--color-on-surface);
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-xs);
          border-radius: 8px;
        }
      </style>
      
      <div class="overlay-background"></div>
      <div class="overlay-content">
        <div class="overlay-header">
          <h2>Settings</h2>
          <button class="close-button">
            <labs-icon name="close" width="24" height="24" color="var(--color-on-surface)"></labs-icon>
          </button>
        </div>

        <labs-settings></labs-settings>
      </div>
    `;

    // Handle settings events
    const settingsComponent = this.shadowRoot.querySelector('labs-settings');
    if (settingsComponent) {
      settingsComponent.addEventListener('settings-action', (e) => {
        const { action, data } = e.detail;
        this.dispatchEvent(new CustomEvent('action-click', {
          bubbles: true,
          detail: { action, data }
        }));

        // Close overlay for navigation actions
        if (action === 'apps' || action === 'reset') {
          this.close();
        }
      });
    }

    // Setup generic listeners (close etc.) after rendering
    this.setupEventListeners();
  }
}

customElements.define("labs-settings-overlay", LabsSettingsOverlay);
