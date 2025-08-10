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
        this.setupEventListeners();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "completed") {
            this.completed = newValue !== null;
        }
        this.render();
    }

    setupEventListeners() {
        // Handle checkbox changes
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

        // Handle edit button clicks
        this.addEventListener('labs-click', (e) => {
            if (e.target.closest('.edit-button')) {
                e.stopPropagation();
                this.dispatchEvent(new CustomEvent("labs-task-edit", {
                    bubbles: true,
                    detail: {
                        taskId: this.getAttribute("task-id"),
                        text: this.getAttribute("task-text")
                    }
                }));
            }
        });

        // Handle task item clicks (entire area)
        this.shadowRoot.addEventListener('click', (e) => {
            // Don't trigger if clicking edit button or checkbox
            if (e.target.closest('.edit-button') || e.target.closest('labs-checkbox')) {
                return;
            }

            // Toggle checkbox when clicking anywhere else
            const checkbox = this.shadowRoot.querySelector('labs-checkbox');
            if (checkbox) {
                checkbox.toggleState();
            }
        });
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
          gap: 0.75rem;
          padding: 0.75rem;
          border-radius: 8px;
          background: var(--color-surface);
          border: 1px solid var(--color-outline);
          position: relative;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .task-item:hover {
          background: var(--color-surface-variant);
          border-color: var(--color-primary);
        }
        
        .task-text {
          flex: 1;
          cursor: pointer;
          font-size: var(--font-size-body-md);
          line-height: 1.4;
          transition: all 0.2s ease;
        }
        
        .task-completed .task-text {
          text-decoration: line-through;
          opacity: 0.6;
        }
        
        .edit-button {
          opacity: 0;
          transform: translateX(8px);
          transition: all 0.2s ease;
          position: absolute;
          right: 0.5rem;
        }
        
        .task-item:hover .edit-button {
          opacity: 1;
          transform: translateX(0);
        }
      </style>
      
      <div class="task-item ${this.completed ? 'task-completed' : ''}" data-task-id="${taskId}">
        <labs-checkbox ${this.completed ? 'checked' : ''}></labs-checkbox>
        <span class="task-text">${taskText}</span>
        <labs-button 
          class="edit-button"
          icon="edit" 
          variant="icon" 
          iconcolor="var(--color-primary)"
          aria-label="Edit task"
        ></labs-button>
      </div>
    `;
    }
}

customElements.define("labs-task-item", LabsTaskItem);
