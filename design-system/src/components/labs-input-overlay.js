/* eslint-disable */
import "./labs-button.js";
import "./labs-icon.js";

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
        const input = this.shadowRoot.querySelector('.task-input');

        titleEl.textContent = title;
        input.placeholder = placeholder;
        input.value = value;

        this.setAttribute('active', '');

        // Focus input after overlay is visible
        setTimeout(() => {
            input.focus();
            input.select();
        }, 100);
    }

    close() {
        this.removeAttribute('active');
        this.currentIndex = null;
    }

    save() {
        const input = this.shadowRoot.querySelector('.task-input');
        const text = input.value.trim();

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

        .close-button {
          background: none;
          border: none;
          padding: var(--space-sm, 8px);
          cursor: pointer;
          border-radius: var(--border-radius-sm, 6px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-button:hover {
          background: var(--color-surface-container-high, #f0f0f0);
        }

        .task-input {
          width: 100%;
          padding: var(--space-md, 12px);
          border: 2px solid var(--color-outline-variant, #e0e0e0);
          border-radius: var(--border-radius-md, 8px);
          font-size: var(--font-size-body, 1rem);
          font-family: var(--font-family-base, system-ui);
          background: var(--color-surface, #ffffff);
          color: var(--color-on-surface, #1f1f1f);
          margin-bottom: var(--space-lg, 20px);
          transition: border-color 0.2s ease;
        }

        .task-input:focus {
          outline: none;
          border-color: var(--color-primary, #007bff);
        }

        .task-input::placeholder {
          color: var(--color-on-surface-variant, #6b6b6b);
        }

        .overlay-actions {
          display: flex;
          gap: var(--space-md, 12px);
          justify-content: flex-end;
        }

        .action-button {
          padding: var(--space-md, 12px) var(--space-lg, 20px);
          border-radius: var(--border-radius-md, 8px);
          font-size: var(--font-size-body, 1rem);
          font-family: var(--font-family-base, system-ui);
          font-weight: var(--font-weight-medium, 500);
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          min-width: 80px;
        }

        .action-button.cancel {
          background: transparent;
          color: var(--color-on-surface, #1f1f1f);
          border: 1px solid var(--color-outline-variant, #e0e0e0);
        }

        .action-button.cancel:hover {
          background: var(--color-surface-container-high, #f0f0f0);
        }

        .action-button.save {
          background: var(--color-primary, #007bff);
          color: var(--color-on-primary, #ffffff);
        }

        .action-button.save:hover {
          background: var(--color-primary-dark, #0056b3);
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
          <button class="close-button" id="closeButton">
            <labs-icon name="close" size="20" color="var(--color-on-surface)"></labs-icon>
          </button>
        </div>

        <input 
          type="text" 
          class="task-input" 
          placeholder="Enter task..."
          maxlength="100"
        />

        <div class="overlay-actions">
          <button class="action-button cancel" id="cancelButton">Cancel</button>
          <button class="action-button save" id="saveButton">Save</button>
        </div>
      </div>
    `;

        // Setup button event listeners
        const closeButton = this.shadowRoot.querySelector('#closeButton');
        const cancelButton = this.shadowRoot.querySelector('#cancelButton');
        const saveButton = this.shadowRoot.querySelector('#saveButton');
        const input = this.shadowRoot.querySelector('.task-input');

        closeButton?.addEventListener('click', () => this.close());
        cancelButton?.addEventListener('click', () => this.close());
        saveButton?.addEventListener('click', () => this.save());

        // Handle enter key to save
        input?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.save();
            }
        });
    }
}

customElements.define("labs-input-overlay", LabsInputOverlay);
