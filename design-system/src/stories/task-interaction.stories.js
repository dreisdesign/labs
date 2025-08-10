import "../components/labs-checkbox.js";
import "../components/labs-button.js";
import "../components/labs-icon.js";

export default {
    title: "Patterns/Task Interaction",
    parameters: {
        docs: {
            description: {
                component: "Complete task interaction patterns showing checkbox functionality, edit on hover, and task state management as used in Today List app.",
            },
        },
    },
};

const TaskItemTemplate = () => {
    return `
    <style>
      .task-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .task-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem;
        border-radius: 8px;
        background: var(--color-surface);
        border: 1px solid var(--color-outline);
        margin-bottom: 0.5rem;
        position: relative;
        transition: all 0.2s ease;
      }
      
      .task-item:hover {
        background: var(--color-surface-variant);
        border-color: var(--color-primary);
      }
      
      .task-text {
        flex: 1;
        cursor: default;
        font-size: var(--font-size-body-md);
        line-height: 1.4;
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
      
      .demo-section {
        margin-bottom: 2rem;
      }
      
      .demo-section h3 {
        margin-bottom: 1rem;
        color: var(--color-on-background);
      }
    </style>
    
    <div class="task-demo">
      <div class="demo-section">
        <h3>Task Items with Checkbox + Edit Hover</h3>
        
        <div class="task-item" data-task-id="1">
          <labs-checkbox></labs-checkbox>
          <span class="task-text">Write documentation for new components</span>
          <labs-button 
            class="edit-button"
            icon="edit" 
            variant="icon" 
            iconcolor="var(--color-primary)"
            aria-label="Edit task"
          ></labs-button>
        </div>
        
        <div class="task-item task-completed" data-task-id="2">
          <labs-checkbox checked></labs-checkbox>
          <span class="task-text">Review design system architecture</span>
          <labs-button 
            class="edit-button"
            icon="edit" 
            variant="icon" 
            iconcolor="var(--color-primary)"
            aria-label="Edit task"
          ></labs-button>
        </div>
        
        <div class="task-item" data-task-id="3">
          <labs-checkbox></labs-checkbox>
          <span class="task-text">Update Storybook stories with new patterns</span>
          <labs-button 
            class="edit-button"
            icon="edit" 
            variant="icon" 
            iconcolor="var(--color-primary)"
            aria-label="Edit task"
          ></labs-button>
        </div>
      </div>
      
      <div class="demo-section">
        <h3>Interaction Demo</h3>
        <p style="color: var(--color-on-surface-variant); margin-bottom: 1rem; font-size: var(--font-size-body-sm);">
          • Click checkboxes to toggle completion state<br>
          • Hover over tasks to reveal edit button<br>
          • Check animation plays on state change
        </p>
        
        <div class="task-item" data-task-id="demo">
          <labs-checkbox></labs-checkbox>
          <span class="task-text">Interactive demo task - try clicking!</span>
          <labs-button 
            class="edit-button"
            icon="edit" 
            variant="icon" 
            iconcolor="var(--color-primary)"
            aria-label="Edit task"
          ></labs-button>
        </div>
      </div>
    </div>
    
    <script>
      // Add interaction handling for demo
      document.addEventListener('labs-checkbox-change', (e) => {
        const taskItem = e.target.closest('.task-item');
        if (taskItem) {
          if (e.detail.checked) {
            taskItem.classList.add('task-completed');
          } else {
            taskItem.classList.remove('task-completed');
          }
        }
      });
      
      // Handle edit button clicks
      document.addEventListener('labs-click', (e) => {
        if (e.target.closest('.edit-button')) {
          const taskItem = e.target.closest('.task-item');
          const taskId = taskItem.dataset.taskId;
          alert(\`Edit task \${taskId} - In real app, this would open edit dialog\`);
        }
      });
    </script>
  `;
};

export const TaskItems = TaskItemTemplate.bind({});
TaskItems.parameters = {
    docs: {
        description: {
            story: "Complete task interaction pattern showing checkbox state management, hover-revealed edit buttons, and visual feedback for completed tasks. This demonstrates the default behavior where clicking tasks opens edit functionality instead of creating new tasks.",
        },
    },
};
