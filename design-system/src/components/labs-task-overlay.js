import './labs-button.js';
import './labs-icon.js';

class LabsTaskOverlay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._isOpen = false;
        this._taskText = '';
        this._taskIndex = null;
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: none;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: var(--space-lg, 1rem);
        }

        :host([open]) {
          display: flex;
        }

        .overlay-content {
          background: var(--color-surface-container, #fff);
          border-radius: var(--border-radius-lg, 12px);
          padding: var(--space-xl, 2rem);
          width: 100%;
          max-width: 400px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          border: 1px solid var(--color-outline-variant, #e0e0e0);
        }

        .overlay-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-lg, 1.5rem);
        }

        .overlay-title {
          font-size: var(--font-size-h3, 1.25rem);
          font-weight: var(--font-weight-medium, 500);
          color: var(--color-on-surface, #1a1a1a);
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-xs, 0.5rem);
          border-radius: var(--border-radius-sm, 4px);
          color: var(--color-on-surface-variant, #6b6b6b);
          transition: background-color 0.2s ease;
        }

        .close-button:hover {
          background: var(--color-surface-container-high, #f0f0f0);
        }

        .form-field {
          margin-bottom: var(--space-lg, 1.5rem);
        }

        .form-label {
          display: block;
          font-size: var(--font-size-small, 0.875rem);
          font-weight: var(--font-weight-medium, 500);
          color: var(--color-on-surface, #1a1a1a);
          margin-bottom: var(--space-xs, 0.5rem);
        }

        .task-input {
          width: 100%;
          padding: var(--space-md, 1rem);
          border: 2px solid var(--color-outline-variant, #e0e0e0);
          border-radius: var(--border-radius-md, 8px);
          font-size: var(--font-size-body, 1rem);
          font-family: var(--font-family-base, system-ui);
          color: var(--color-on-surface, #1a1a1a);
          background: var(--color-surface, #fff);
          transition: border-color 0.2s ease;
        }

        .task-input:focus {
          outline: none;
          border-color: var(--color-primary, #007acc);
        }

        .task-input::placeholder {
          color: var(--color-on-surface-variant, #6b6b6b);
        }

        .button-group {
          display: flex;
          gap: var(--space-md, 1rem);
          justify-content: flex-end;
        }

        .save-button {
          background: var(--color-primary, #007acc);
          color: var(--color-on-primary, #fff);
          border: none;
          padding: var(--space-md, 1rem) var(--space-lg, 1.5rem);
          border-radius: var(--border-radius-md, 8px);
          font-size: var(--font-size-body, 1rem);
          font-weight: var(--font-weight-medium, 500);
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .save-button:hover {
          background: var(--color-primary-dark, #005c99);
        }

        .save-button:disabled {
          background: var(--color-surface-container-low, #f5f5f5);
          color: var(--color-on-surface-variant, #6b6b6b);
          cursor: not-allowed;
        }

        .cancel-button {
          background: transparent;
          color: var(--color-on-surface-variant, #6b6b6b);
          border: 1px solid var(--color-outline-variant, #e0e0e0);
          padding: var(--space-md, 1rem) var(--space-lg, 1.5rem);
          border-radius: var(--border-radius-md, 8px);
          font-size: var(--font-size-body, 1rem);
          font-weight: var(--font-weight-medium, 500);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cancel-button:hover {
          background: var(--color-surface-container-low, #f5f5f5);
          border-color: var(--color-outline, #9b9b9b);
        }
      </style>

      <div class="overlay-content" id="overlay-content">
        <div class="overlay-header">
          <h3 class="overlay-title" id="overlay-title">Add Task</h3>
          <button class="close-button" id="close-button" aria-label="Close">
            <labs-icon name="close" width="20" height="20"></labs-icon>
          </button>
        </div>

        <div class="form-field">
          <label class="form-label" for="task-input">Task Description</label>
          <input 
            type="text" 
            id="task-input" 
            class="task-input" 
            placeholder="Enter your task..."
            maxlength="100"
          />
        </div>

        <div class="button-group">
          <button class="cancel-button" id="cancel-button">Cancel</button>
          <button class="save-button" id="save-button" disabled>Save Task</button>
        </div>
      </div>
    `;
    }

    setupEventListeners() {
        const closeButton = this.shadowRoot.getElementById('close-button');
        const cancelButton = this.shadowRoot.getElementById('cancel-button');
        const saveButton = this.shadowRoot.getElementById('save-button');
        const taskInput = this.shadowRoot.getElementById('task-input');

        // Close overlay
        closeButton.addEventListener('click', () => this.close());
        cancelButton.addEventListener('click', () => this.close());

        // Save task
        saveButton.addEventListener('click', () => this.saveTask());

        // Input validation
        taskInput.addEventListener('input', () => {
            const text = taskInput.value.trim();
            saveButton.disabled = text.length === 0;
        });

        // Enter key to save
        taskInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !saveButton.disabled) {
                this.saveTask();
            } else if (e.key === 'Escape') {
                this.close();
            }
        });

        // Click outside to close
        this.addEventListener('click', (e) => {
            if (e.target === this) {
                this.close();
            }
        });
    }

    open(taskText = '', taskIndex = null) {
        this._taskText = taskText;
        this._taskIndex = taskIndex;
        this._isOpen = true;

        const taskInput = this.shadowRoot.getElementById('task-input');
        const saveButton = this.shadowRoot.getElementById('save-button');
        const title = this.shadowRoot.getElementById('overlay-title');

        // Update UI based on mode
        if (taskIndex !== null) {
            title.textContent = `Edit Task ${taskIndex + 1}`;
            taskInput.value = taskText;
            saveButton.disabled = taskText.trim().length === 0;
        } else {
            title.textContent = 'Add Task';
            taskInput.value = '';
            saveButton.disabled = true;
        }

        this.setAttribute('open', '');

        // Focus input after animation
        setTimeout(() => {
            taskInput.focus();
            if (taskText) {
                taskInput.select();
            }
        }, 100);
    }

    close() {
        this._isOpen = false;
        this.removeAttribute('open');
    }

    saveTask() {
        const taskInput = this.shadowRoot.getElementById('task-input');
        const text = taskInput.value.trim();

        if (text) {
            // Dispatch custom event with task data
            this.dispatchEvent(new CustomEvent('task-save', {
                detail: {
                    text,
                    index: this._taskIndex
                },
                bubbles: true
            }));

            this.close();
        }
    }

    get isOpen() {
        return this._isOpen;
    }
}

customElements.define('labs-task-overlay', LabsTaskOverlay);
