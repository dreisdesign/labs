import '../components/labs-input-overlay.js';

export default {
    title: 'Components/Input Overlay',
    component: 'labs-input-overlay',
    argTypes: {
        active: {
            control: 'boolean',
            description: 'Whether the overlay is active/visible'
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'Input overlay component for text input dialogs. Used for adding and editing tasks.'
            }
        }
    }
};

const Template = (args) => {
    const overlay = document.createElement('labs-input-overlay');

    if (args.active) {
        overlay.setAttribute('active', '');
    }

    // Add event listeners for demo purposes
    overlay.addEventListener('task-save', (e) => {
        console.log('Task saved:', e.detail);
        alert(`Task saved: "${e.detail.text}"`);
    });

    return `
    <div style="position: relative; height: 400px; background: var(--color-surface); padding: 20px; border-radius: 8px;">
      <h3>Input Overlay Demo</h3>
      <p>Click the button below to open the input overlay.</p>
      
      <button 
        onclick="document.querySelector('labs-input-overlay').open('Add Task', 'Enter your task...')"
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
      
      ${overlay.outerHTML}
    </div>
  `;
};

export const Default = Template.bind({});
Default.args = {
    active: false
};

export const PreOpened = Template.bind({});
PreOpened.args = {
    active: true
};

export const EditMode = () => {
    const overlay = document.createElement('labs-input-overlay');

    // Add event listeners
    overlay.addEventListener('task-save', (e) => {
        console.log('Task edited:', e.detail);
        alert(`Task edited: "${e.detail.text}"`);
    });

    return `
    <div style="position: relative; height: 400px; background: var(--color-surface); padding: 20px; border-radius: 8px;">
      <h3>Edit Mode Demo</h3>
      <p>This shows the overlay pre-filled with text for editing.</p>
      
      <button 
        onclick="document.querySelector('labs-input-overlay').open('Edit Task', 'Edit your task...', 'Existing task text', 0)"
        style="
          padding: 12px 24px;
          background: var(--color-secondary);
          color: var(--color-on-secondary);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        "
      >
        Edit Existing Task
      </button>
      
      ${overlay.outerHTML}
    </div>
  `;
};
