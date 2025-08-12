/* eslint-disable */
import "./labs-button.js";
import "./labs-icon.js";
import "./labs-input.js";
import { createButtonElement } from "../tokens/button-configs.js";

class LabsInputOverlay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.currentIndex = null;
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
    }

    setupEventListeners() {
        // Handle overlay background clicks
        this.shadowRoot.addEventListener('click', (e) => {
            if (e.target === this.shadowRoot.querySelector('.overlay')) {
                this.close();
            }
        });

        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.hasAttribute('active')) {
                this.close();
            }
        });
    }

    open(title = "Add Task", placeholder = "Enter task...", value = "", index = null) {
        this.currentIndex = index;

        // Update content
        const titleEl = this.shadowRoot.querySelector('.overlay-title');
        const input = this.shadowRoot.querySelector('#taskInput');

        titleEl.textContent = title;
        input.setAttribute('placeholder', placeholder);
        input.setValue(value);

        // Show overlay
        this.setAttribute('active', '');

        // Focus input after animation and component setup
        setTimeout(() => {
            const input = this.shadowRoot.querySelector('#taskInput');
            if (input && input.focus) {
                input.focus();
            }
        }, 200);
    }

    close() {
        this.removeAttribute('active');
        this.currentIndex = null;
    }

    save() {
        const input = this.shadowRoot.querySelector('#taskInput');
        const text = input.getValue().trim();

        if (text) {
            // Dispatch save event with text and index
            this.dispatchEvent(new CustomEvent('task-save', {
                bubbles: true,
                detail: { text, index: this.currentIndex }
            }));
        }

        this.close();
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
          z-index: 1000;
          display: ${isActive ? 'flex' : 'none'};
          align-items: center;
          justify-content: center;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--color-overlay-background, rgba(0, 0, 0, 0.5));
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          animation: ${isActive ? 'fadeIn' : 'fadeOut'} 0.2s ease;
        }

        .overlay-content {
          position: relative;
          background: var(--color-surface-container, #f8f9fa);
          border-radius: var(--border-radius-lg, 12px);
          padding: var(--space-xl, 24px);
          margin: var(--space-md, 16px);
          max-width: 400px;
          width: 90%;
          border: 1px solid var(--color-outline-variant, #e0e0e0);
          box-shadow: var(--shadow-overlay, 0 5px 20px rgba(0, 0, 0, 0.2));
          animation: ${isActive ? 'slideIn' : 'slideOut'} 0.2s ease;
        }

        .overlay-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-lg, 20px);
        }

        .overlay-title {
          font-size: var(--font-size-h3, 1.25rem);
          font-weight: var(--font-weight-medium, 500);
          color: var(--color-on-surface, #1f1f1f);
          margin: 0;
        }

        /* Remove close-button styles - now using labs-button component */

        .overlay-actions {
          display: flex;
          gap: var(--space-md, 12px);
          justify-content: flex-end;
          margin-top: var(--space-lg, 20px);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes slideOut {
          from { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to { 
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
        }
      </style>

      <div class="overlay"></div>
      <div class="overlay-content">
        <div class="overlay-header">
          <h2 class="overlay-title">Add Task</h2>
          <div id="closeButtonContainer"></div>
        </div>

        <labs-input 
          id="taskInput"
          placeholder="Enter task..."
          maxlength="100"
        ></labs-input>

        <div class="overlay-actions">
          <div id="cancelButtonContainer"></div>
          <div id="saveButtonContainer"></div>
        </div>
      </div>
    `;

        // Create buttons using new configurations
        const closeButtonContainer = this.shadowRoot.querySelector('#closeButtonContainer');
        const cancelButtonContainer = this.shadowRoot.querySelector('#cancelButtonContainer');
        const saveButtonContainer = this.shadowRoot.querySelector('#saveButtonContainer');

        const closeButton = createButtonElement('closeRounded');
        const cancelButton = createButtonElement('cancelRounded');
        const saveButton = createButtonElement('saveRounded');

        closeButtonContainer.appendChild(closeButton);
        cancelButtonContainer.appendChild(cancelButton);
        saveButtonContainer.appendChild(saveButton);

        // Setup event listeners
        const input = this.shadowRoot.querySelector('#taskInput');

        closeButton?.addEventListener('labs-click', () => this.close());
        cancelButton?.addEventListener('labs-click', () => this.close());
        saveButton?.addEventListener('labs-click', () => this.save());

        // Handle enter key to save
        input?.addEventListener('labs-keydown', (e) => {
            if (e.detail.key === 'Enter') {
                this.save();
            }
        });
    }
}

customElements.define("labs-input-overlay", LabsInputOverlay);
