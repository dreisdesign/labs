import "../components/labs-undo-button.js";

export default {
    title: "Components/Undo Button",
    parameters: {
        docs: {
            description: {
                component: "Undo notification component implementing the tracker app pattern. Replaces confirmation dialogs with a more user-friendly undo workflow: Action → Undo notification → Auto-dismiss.",
            },
        },
    },
    argTypes: {
        message: {
            control: "text",
            description: "Message shown in the undo notification"
        },
        actionType: {
            control: { type: "select" },
            options: ["delete", "edit", "add"],
            description: "Type of action for styling (affects border color)"
        },
        timeout: {
            control: "number",
            description: "Auto-dismiss timeout in milliseconds"
        },
    },
};

const Template = (args) => {
    setTimeout(() => {
        const undoButton = document.querySelector('labs-undo-button');

        // Trigger button to show
        const triggerButton = document.querySelector('.trigger-undo');
        triggerButton?.addEventListener('click', () => {
            undoButton.show(
                args.message || "Task deleted",
                args.actionType || "delete",
                args.timeout || 5000
            );
        });

        // Handle undo events
        document.addEventListener('labs-undo-action', (e) => {
            console.log('Undo action triggered:', e.detail);
            alert(`Undo triggered for: ${e.detail.message}`);
        });

        document.addEventListener('labs-undo-dismiss', (e) => {
            console.log('Undo dismissed:', e.detail);
        });
    }, 100);

    return `
    <style>
      .undo-demo {
        max-width: 500px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
        text-align: center;
        padding: 2rem;
      }
      
      .trigger-undo {
        background: var(--color-error);
        color: var(--color-on-error);
        border: none;
        padding: var(--space-md) var(--space-lg);
        border-radius: var(--border-radius-md);
        font-size: var(--font-size-body);
        cursor: pointer;
        transition: background-color 0.2s ease;
      }
      
      .trigger-undo:hover {
        opacity: 0.9;
      }
      
      .description {
        color: var(--color-on-surface-variant);
        margin-bottom: 2rem;
        font-size: var(--font-size-body-sm);
      }
    </style>
    
    <div class="undo-demo">
      <p class="description">
        Click the button below to trigger the undo notification. 
        You can then either undo the action or let it auto-dismiss after ${(args.timeout || 5000) / 1000} seconds.
      </p>
      
      <button class="trigger-undo">
        ${args.actionType === 'delete' ? 'Delete Task' :
            args.actionType === 'edit' ? 'Edit Task' : 'Add Task'}
      </button>
    </div>
    
    <labs-undo-button></labs-undo-button>
  `;
};

export const DeleteAction = Template.bind({});
DeleteAction.args = {
    message: "Task deleted",
    actionType: "delete",
    timeout: 5000,
};
DeleteAction.parameters = {
    docs: {
        description: {
            story: "Delete action undo notification with red accent border. Shows typical usage for destructive actions.",
        },
    },
};

export const EditAction = Template.bind({});
EditAction.args = {
    message: "Task updated",
    actionType: "edit",
    timeout: 3000,
};
EditAction.parameters = {
    docs: {
        description: {
            story: "Edit action undo notification with yellow accent border. Shorter timeout for less critical actions.",
        },
    },
};

export const AddAction = Template.bind({});
AddAction.args = {
    message: "New task created",
    actionType: "add",
    timeout: 4000,
};
AddAction.parameters = {
    docs: {
        description: {
            story: "Add action undo notification with green accent border. For creation actions that can be undone.",
        },
    },
};

const UndoWorkflowTemplate = () => {
    setTimeout(() => {
        const undoButton = document.querySelector('labs-undo-button');
        let taskCount = 3;

        // Simulate task actions
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('demo-delete')) {
                const taskText = e.target.closest('.demo-task').querySelector('.task-text').textContent;
                undoButton.show(`"${taskText}" deleted`, "delete", 5000);
                e.target.closest('.demo-task').style.opacity = '0.5';
            }

            if (e.target.classList.contains('demo-edit')) {
                const taskText = e.target.closest('.demo-task').querySelector('.task-text').textContent;
                undoButton.show(`"${taskText}" updated`, "edit", 3000);
            }

            if (e.target.classList.contains('demo-add')) {
                taskCount++;
                undoButton.show(`New task #${taskCount} created`, "add", 4000);
            }
        });

        // Handle undo events
        document.addEventListener('labs-undo-action', (e) => {
            console.log('Undo action:', e.detail);

            if (e.detail.actionType === 'delete') {
                // Restore deleted task appearance
                document.querySelectorAll('.demo-task').forEach(task => {
                    task.style.opacity = '1';
                });
                alert(`Restored: ${e.detail.message}`);
            } else {
                alert(`Undid: ${e.detail.message}`);
            }
        });

        document.addEventListener('labs-undo-dismiss', (e) => {
            console.log('Action confirmed (not undone):', e.detail);
        });
    }, 100);

    return `
    <style>
      .workflow-demo {
        max-width: 500px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .demo-actions {
        display: flex;
        gap: var(--space-md);
        justify-content: center;
        margin-bottom: 2rem;
      }
      
      .demo-button {
        padding: var(--space-sm) var(--space-md);
        border: none;
        border-radius: var(--border-radius-md);
        font-size: var(--font-size-body-sm);
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .demo-add {
        background: var(--color-success);
        color: var(--color-on-primary);
      }
      
      .demo-edit {
        background: var(--color-warning);
        color: var(--color-on-primary);
      }
      
      .demo-delete {
        background: var(--color-error);
        color: var(--color-on-error);
      }
      
      .demo-button:hover {
        opacity: 0.9;
        transform: scale(1.02);
      }
      
      .demo-tasks {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }
      
      .demo-task {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-md);
        background: var(--color-surface);
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--border-radius-md);
        transition: opacity 0.3s ease;
      }
      
      .task-text {
        flex: 1;
        color: var(--color-on-surface);
      }
      
      .task-actions {
        display: flex;
        gap: var(--space-xs);
      }
      
      .description {
        color: var(--color-on-surface-variant);
        margin-bottom: 2rem;
        font-size: var(--font-size-body-sm);
        text-align: center;
      }
    </style>
    
    <div class="workflow-demo">
      <p class="description">
        Try the different actions below to see the undo workflow in action. 
        Each action type has different styling and timeout behavior.
      </p>
      
      <div class="demo-actions">
        <button class="demo-button demo-add">Add Task</button>
      </div>
      
      <div class="demo-tasks">
        <div class="demo-task">
          <span class="task-text">Review design system updates</span>
          <div class="task-actions">
            <button class="demo-button demo-edit">Edit</button>
            <button class="demo-button demo-delete">Delete</button>
          </div>
        </div>
        
        <div class="demo-task">
          <span class="task-text">Implement timestamp component</span>
          <div class="task-actions">
            <button class="demo-button demo-edit">Edit</button>
            <button class="demo-button demo-delete">Delete</button>
          </div>
        </div>
        
        <div class="demo-task">
          <span class="task-text">Update Storybook documentation</span>
          <div class="task-actions">
            <button class="demo-button demo-edit">Edit</button>
            <button class="demo-button demo-delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
    
    <labs-undo-button></labs-undo-button>
  `;
};

export const UndoWorkflow = UndoWorkflowTemplate.bind({});
UndoWorkflow.parameters = {
    docs: {
        description: {
            story: "Complete undo workflow demonstration showing how different action types trigger appropriate undo notifications. Replace confirmation dialogs with this more user-friendly pattern.",
        },
    },
};
