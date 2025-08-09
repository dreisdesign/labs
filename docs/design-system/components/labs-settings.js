import './labs-button.js';
import './labs-icon.js';
import './labs-theme-toggle-button.js';

class LabsSettings extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .settings-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-md, 1rem);
        }

        .settings-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm, 0.75rem);
        }

        .section-title {
          font-size: var(--font-size-small, 0.875rem);
          font-weight: var(--font-weight-medium, 500);
          color: var(--color-on-surface-variant);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0;
        }

        .button-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs, 0.5rem);
        }

        labs-button {
          width: 100%;
        }

        /* Divider */
        .divider {
          height: 1px;
          background: var(--color-outline-variant);
          margin: var(--space-sm, 0.75rem) 0;
        }
      </style>

      <div class="settings-container">
        <!-- Navigation Section -->
        <div class="settings-section">
          <h4 class="section-title">Navigation</h4>
          <div class="button-list">
            <labs-button 
              variant="container" 
              icon="apps" 
              icon-position="left"
              id="apps-button"
            >
              All Apps
            </labs-button>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Appearance Section -->
        <div class="settings-section">
          <h4 class="section-title">Appearance</h4>
          <div class="button-list">
            <labs-theme-toggle-button variant="container"></labs-theme-toggle-button>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Data Section -->
        <div class="settings-section">
          <h4 class="section-title">Data</h4>
          <div class="button-list">
            <labs-button 
              variant="container-danger" 
              icon="delete_forever" 
              icon-position="left"
              id="reset-button"
            >
              Reset All Data
            </labs-button>
          </div>
        </div>
      </div>
    `;
    }

    setupEventListeners() {
        const appsButton = this.shadowRoot.getElementById('apps-button');
        const resetButton = this.shadowRoot.getElementById('reset-button');

        appsButton.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('settings-action', {
                detail: { action: 'apps' },
                bubbles: true
            }));
        });

        resetButton.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('settings-action', {
                detail: { action: 'reset' },
                bubbles: true
            }));
        });
    }
}

customElements.define('labs-settings', LabsSettings);
