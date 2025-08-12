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
      
      <labs-input-overlay ${args.active ? 'active' : ''}></labs-input-overlay>
      
      <script>
        setTimeout(() => {
          const overlay = document.querySelector('labs-input-overlay');
          
          // Add event listeners for demo purposes
          overlay.addEventListener('task-save', (e) => {
            console.log('Task saved:', e.detail);
            alert('Task saved: "' + e.detail.text + '"');
          });
          
          // If pre-opened, open it with demo content
          ${args.active ? `overlay.open('Edit Task', 'Enter your task...', 'Sample task content');` : ''}
        }, 100);
      </script>
    </div>
  `;
};

export const Default = Template.bind({});
Default.args = {
  active: false
};
Default.parameters = {
  docs: {
    description: {
      story: "Default input overlay component. Use controls to explore states (active/inactive) and test opening with different content. Provides modal input functionality with save/cancel actions.",
    },
  },
};

const InputOverlayVariantsTemplate = () => {
  return `
    <div style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; padding: 2rem;">
      <div style="text-align: center; padding: 1.5rem; border: 1px solid var(--color-outline); border-radius: 8px; min-width: 300px;">
        <div style="margin-bottom: 1rem; font-weight: bold;">New Task Mode</div>
        <button 
          onclick="document.querySelector('#overlay1').open('Add Task', 'Enter your task...')"
          style="padding: 12px 24px; background: var(--color-primary); color: var(--color-on-primary); border: none; border-radius: 8px; cursor: pointer;"
        >
          Add New Task
        </button>
        <labs-input-overlay id="overlay1"></labs-input-overlay>
      </div>
      
      <div style="text-align: center; padding: 1.5rem; border: 1px solid var(--color-outline); border-radius: 8px; min-width: 300px;">
        <div style="margin-bottom: 1rem; font-weight: bold;">Edit Mode</div>
        <button 
          onclick="document.querySelector('#overlay2').open('Edit Task', 'Edit your task...', 'Existing task text', 0)"
          style="padding: 12px 24px; background: var(--color-secondary); color: var(--color-on-secondary); border: none; border-radius: 8px; cursor: pointer;"
        >
          Edit Existing Task
        </button>
        <labs-input-overlay id="overlay2"></labs-input-overlay>
      </div>
    </div>
    
    <script>
      // Add event listeners for both overlays
      setTimeout(() => {
        ['overlay1', 'overlay2'].forEach(id => {
          const overlay = document.getElementById(id);
          if (overlay) {
            overlay.addEventListener('task-save', (e) => {
              console.log('Task saved:', e.detail);
              alert(\`Task saved: "\${e.detail.text}"\`);
            });
            overlay.addEventListener('task-cancel', () => {
              console.log('Task cancelled');
            });
          }
        });
      }, 100);
    </script>
  `;
};

export const AllVariants = InputOverlayVariantsTemplate.bind({});
AllVariants.parameters = {
  docs: {
    description: {
      story: "Input overlay variants showing new task creation and edit modes. Each overlay maintains separate state and demonstrates the complete interaction flow with save/cancel events.",
    },
  },
};
