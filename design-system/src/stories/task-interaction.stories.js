import "../components/labs-task-item.js";
import "../components/labs-checkbox.js";
import "../components/labs-button.js";
import "../components/labs-icon.js";
import "../components/labs-input-overlay.js";
import "../components/labs-undo-button.js";

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


export const TaskItems = {
  render: () => {
    setTimeout(() => {
      const overlay = document.querySelector('labs-input-overlay');
      const undoButton = document.querySelector('labs-undo-button');
      document.addEventListener('labs-checkbox-change', (e) => {
        console.log('Task changed:', e.detail);
      });
      document.addEventListener('labs-task-edit', (e) => {
        console.log('Edit task requested:', e.detail);
        overlay.open(
          "Edit Task",
          "Update task text...",
          e.detail.text,
          e.detail.taskId
        );
      });
      document.addEventListener('labs-task-delete', (e) => {
        console.log('Delete task requested:', e.detail);
        undoButton.show(`"${e.detail.text}" deleted`, "delete", 5000);
        const taskElements = document.querySelectorAll('labs-task-item');
        taskElements.forEach(task => {
          if (task.getAttribute('task-id') === e.detail.taskId) {
            task.style.opacity = '0.5';
            task.style.pointerEvents = 'none';
          }
        });
      });
      document.addEventListener('labs-undo-action', (e) => {
        console.log('Undo action triggered:', e.detail);
        if (e.detail.actionType === 'delete') {
          const taskElements = document.querySelectorAll('labs-task-item');
          taskElements.forEach(task => {
            task.style.opacity = '1';
            task.style.pointerEvents = 'auto';
          });
          console.log('Task restored');
        }
      });
      document.addEventListener('labs-undo-dismiss', (e) => {
        console.log('Delete action confirmed (not undone):', e.detail);
      });
      document.addEventListener('task-save', (e) => {
        console.log('Task saved:', e.detail);
        const message = e.detail.index
          ? `Updated task ${e.detail.index}: "${e.detail.text}"`
          : `Created new task: "${e.detail.text}"`;
        alert(message);
      });
    }, 100);
    return `
      <style>
        .task-demo { max-width: 400px; margin: 0 auto; font-family: var(--font-family-primary); }
        .demo-section { margin-bottom: 2rem; }
        .demo-section h3 { margin-bottom: 1rem; color: var(--color-on-background); }
        .task-list { display: flex; flex-direction: column; gap: 0.5rem; }
      </style>
      <div class="task-demo">
        <div class="demo-section">
          <h3>Task Items with Checkbox + Edit Hover</h3>
          <div class="task-list">
            <labs-task-item task-id="1" task-text="Write documentation for new components"></labs-task-item>
            <labs-task-item task-id="2" task-text="Review design system architecture" completed></labs-task-item>
            <labs-task-item task-id="3" task-text="Update Storybook stories with new patterns"></labs-task-item>
          </div>
        </div>
        <div class="demo-section">
          <h3>Interaction Demo</h3>
          <p style="color: var(--color-on-surface-variant); margin-bottom: 1rem; font-size: var(--font-size-body-sm);">
            • Click anywhere on task to toggle completion<br>
            • Hover to reveal edit and delete buttons<br>
            • Check animation plays on state change<br>
            • Edit button opens input overlay for text editing<br>
            • Delete button shows undo notification (no confirmation needed!)
          </p>
          <div class="task-list">
            <labs-task-item task-id="demo" task-text="Interactive demo task - click anywhere!"></labs-task-item>
          </div>
        </div>
        <labs-input-overlay></labs-input-overlay>
        <labs-undo-button></labs-undo-button>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: "Complete task interaction pattern showing checkbox state management, hover-revealed edit buttons, and visual feedback for completed tasks. This demonstrates the default behavior where clicking tasks opens edit functionality instead of creating new tasks."
      }
    }
  }
};
