import "./labs-checkbox.js";
import "./labs-button.js";
import "./labs-icon.js";

class LabsTaskItem extends HTMLElement {
    static get observedAttributes() {
        return ["task-id", "completed", "task-text"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.completed = false;
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "completed") {
            this.completed = newValue !== null;
        }
        this.render();
    }

    setupEventListeners() {
        // Clean up any existing shadow DOM listeners
        this.shadowRoot.removeEventListener('labs-click', this.handleEditClick);
        this.shadowRoot.removeEventListener('click', this.handleTaskClick);

        // Handle checkbox changes (these bubble up from checkbox component)
        this.addEventListener('labs-checkbox-change', (e) => {
            e.stopPropagation();
            this.completed = e.detail.checked;

            if (this.completed) {
                this.setAttribute("completed", "");
            } else {
                this.removeAttribute("completed");
            }

            this.render();

            // Dispatch task change event
            this.dispatchEvent(new CustomEvent("labs-task-change", {
                bubbles: true,
                detail: {
                    taskId: this.getAttribute("task-id"),
                    completed: this.completed,
                    text: this.getAttribute("task-text")
                }
            }));
        });

        // Create bound methods for cleanup
        this.handleEditClick = (e) => {
            if (e.target.closest('labs-button[icon="edit"]')) {
                e.stopPropagation();
                this.dispatchEvent(new CustomEvent("labs-task-edit", {
                    bubbles: true,
                    detail: {
                        taskId: this.getAttribute("task-id"),
                        text: this.getAttribute("task-text")
                    }
                }));
            }
        };

        this.handleTaskClick = (e) => {
            // Don't trigger if clicking edit button, delete button, or checkbox directly
            if (e.target.closest('labs-button') || e.target.closest('labs-checkbox')) {
                return;
            }

            // Toggle checkbox when clicking anywhere else in the task area
            const checkbox = this.shadowRoot.querySelector('labs-checkbox');
            if (checkbox) {
                checkbox.toggleState();
            }
        };

        // Handle edit button clicks within shadow DOM
        this.shadowRoot.addEventListener('labs-click', this.handleEditClick);

        // Handle delete button clicks
        this.handleDeleteClick = (e) => {
            const deleteButton = e.target.closest('[data-action="delete"]');
            if (deleteButton) {
                e.stopPropagation();
                this.dispatchEvent(new CustomEvent("labs-task-delete", {
                    bubbles: true,
                    detail: {
                        taskId: this.getAttribute("task-id"),
                        text: this.getAttribute("task-text")
                    }
                }));
            }
        };

        this.shadowRoot.addEventListener('labs-click', this.handleDeleteClick);

        // Handle task item clicks (entire area) - but exclude checkbox, edit, and delete buttons
        this.shadowRoot.addEventListener('click', this.handleTaskClick);
    }

    render() {
        const taskId = this.getAttribute("task-id") || "";
        const taskText = this.getAttribute("task-text") || "Sample task";

        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        
        .task-item {
          display: flex;
          align-items: center;
          gap: var(--space-md, 0.75rem);
          padding: var(--space-md, 0.75rem);
          border-radius: var(--border-radius-md, 8px);
          background: var(--color-surface);
          border: 1px solid var(--color-outline);
          position: relative;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .task-item:hover {
          background: var(--color-surface-container);
          border-color: var(--color-primary);
        }
        
        .task-text {
          flex: 1;
          cursor: pointer;
          font-size: var(--font-size-body, 1rem);
          line-height: var(--line-height-normal, 1.4);
          color: var(--color-on-surface);
          transition: all 0.2s ease;
        }
        
        .task-completed .task-text {
          text-decoration: line-through;
          opacity: 0.6;
          color: var(--color-on-surface-variant);
        }
        
        .action-buttons {
          position: absolute;
          right: var(--space-sm, 0.5rem);
          display: flex;
          gap: var(--space-xs, 0.25rem);
          opacity: 0;
          transform: translateX(var(--space-sm, 8px));
          transition: all var(--motion-duration-short, 0.2s) ease;
        }
        
        .task-item:hover .action-buttons {
          opacity: 1;
          transform: translateX(0);
        }
      </style>
      
      <div class="task-item ${this.completed ? 'task-completed' : ''}" data-task-id="${taskId}">
        <labs-checkbox ${this.completed ? 'checked' : ''}></labs-checkbox>
        <span class="task-text">${taskText}</span>
        <div class="action-buttons">
          <labs-button 
            icon="edit" 
            variant="icon-transparent" 
            iconcolor="var(--color-on-surface-variant)"
            data-action="edit"
            aria-label="Edit task"
          ></labs-button>
          <labs-button 
            icon="delete_forever" 
            variant="icon-transparent" 
            iconcolor="var(--color-error)"
            data-action="delete"
            aria-label="Delete task"
          ></labs-button>
        </div>
      </div>
    `;

        // Setup event listeners after DOM is rendered
        this.setupEventListeners();
    }
}

customElements.define("labs-task-item", LabsTaskItem);
