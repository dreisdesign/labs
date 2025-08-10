import "../components/labs-task-item.js";
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
    // Use setTimeout to ensure the component is fully rendered before adding event listeners
    setTimeout(() => {
        document.addEventListener('labs-checkbox-change', (e) => {
            console.log('Task changed:', e.detail);
        });

        document.addEventListener('labs-task-edit', (e) => {
            alert(`Edit task ${e.detail.taskId}: "${e.detail.text}"

In real app, this would open the input overlay.`);
        });
    }, 100);

    return `
    <style>
      .task-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .demo-section {
        margin-bottom: 2rem;
      }
      
      .demo-section h3 {
        margin-bottom: 1rem;
        color: var(--color-on-background);
      }
      
      .task-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    </style>
    
    <div class="task-demo">
      <div class="demo-section">
        <h3>Task Items with Checkbox + Edit Hover</h3>
        
        <div class="task-list">
          <labs-task-item 
            task-id="1" 
            task-text="Write documentation for new components"
          ></labs-task-item>
          
          <labs-task-item 
            task-id="2" 
            task-text="Review design system architecture" 
            completed
          ></labs-task-item>
          
          <labs-task-item 
            task-id="3" 
            task-text="Update Storybook stories with new patterns"
          ></labs-task-item>
        </div>
      </div>
      
      <div class="demo-section">
        <h3>Interaction Demo</h3>
        <p style="color: var(--color-on-surface-variant); margin-bottom: 1rem; font-size: var(--font-size-body-sm);">
          • Click anywhere on task to toggle completion<br>
          • Hover to reveal edit button<br>
          • Check animation plays on state change<br>
          • Edit button shows alert (would open input overlay)
        </p>
        
        <div class="task-list">
          <labs-task-item 
            task-id="demo" 
            task-text="Interactive demo task - click anywhere!"
          ></labs-task-item>
        </div>
      </div>
    </div>
  `;
}; export const TaskItems = TaskItemTemplate.bind({});
TaskItems.parameters = {
    docs: {
        description: {
            story: "Complete task interaction pattern showing checkbox state management, hover-revealed edit buttons, and visual feedback for completed tasks. This demonstrates the default behavior where clicking tasks opens edit functionality instead of creating new tasks.",
        },
    },
};
