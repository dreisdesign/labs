import '../components/labs-input-overlay.js';

export default {
  title: 'Patterns/Input Overlay',
  component: 'labs-input-overlay',
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Whether the overlay is active/visible'
    },
    title: {
      control: 'text',
      description: 'Overlay title text'
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder text'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Modal input overlay pattern for task creation and editing. Features automatic focus, keyboard shortcuts (Enter to submit, Escape to close), and icon-only close button. Commonly used for adding/editing tasks in productivity apps.'
      }
    }
  }
};


export const Opened = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.cssText = 'position: relative; height: 400px; background: var(--color-surface); padding: 20px; border-radius: 8px;';
    container.innerHTML = `
      <h3>Input Overlay Demo</h3>
      <p>Click the button below to open the input overlay.</p>
      <button 
        id="openInputOverlayBtn"
        style="
          padding: 12px 24px;
          background: var(--color-primary);
          color: var(--color-on-primary);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        "
      >
        Open Input Overlay
      </button>
      <labs-input-overlay ${args.active ? 'active' : ''}></labs-input-overlay>
    `;
    setTimeout(() => {
      const overlay = container.querySelector('labs-input-overlay');
      const openBtn = container.querySelector('#openInputOverlayBtn');
      if (overlay && openBtn) {
        openBtn.addEventListener('click', () => overlay.open('Add Task', 'Enter your task...'));
        overlay.addEventListener('task-save', (e) => {
          alert('Task saved: "' + e.detail.text + '"');
        });
        if (args.active) {
          overlay.open('Edit Task', 'Enter your task...', 'Sample task content');
        }
      }
    }, 100);
    return container;
  },
  args: {
    active: false,
    title: "Add Task",
    placeholder: "Enter your task..."
  },
  parameters: {
    docs: {
      description: {
        story: "Input overlay in opened state. Click the trigger button to test the interaction flow with automatic input focus, keyboard shortcuts (Enter to submit, Escape to close), and icon-only close button."
      }
    }
  }
};


export const Closed = {
  render: (args) => Opened.render(args),
  args: {
    active: false,
    title: "Add Task",
    placeholder: "Enter your task..."
  },
  parameters: {
    docs: {
      description: {
        story: "Closed/inactive state. Click the trigger button to open the overlay and test the interaction flow.",
      },
    },
  }
};


