import "../components/labs-input.js";

export default {
  title: "Components/Input",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "Reusable input component with design system integration. Features consistent styling, focus states, accessibility, and event forwarding for parent components.",
      },
    },
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text shown when input is empty"
    },
    value: {
      control: "text",
      description: "Initial value of the input"
    },
    maxlength: {
      control: "number",
      description: "Maximum number of characters allowed"
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "search", "url"],
      description: "Input type attribute"
    },
    inactive: {
      control: "boolean",
      description: "Whether the input is inactive"
    },
  },
};

const Template = (args) => {
  setTimeout(() => {
    document.addEventListener('labs-input', (e) => {
      console.log('Input changed:', e.detail.value);
    });

    document.addEventListener('labs-keydown', (e) => {
      if (e.detail.key === 'Enter') {
        console.log('Enter pressed with value:', e.detail.value);
      }
    });

    document.addEventListener('labs-focus', (e) => {
      console.log('Input focused');
    });

    document.addEventListener('labs-blur', (e) => {
      console.log('Input blurred');
    });
  }, 100);

  return `
    <style>
      .input-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
    </style>
    
    <div class="input-demo">
      <labs-input 
        placeholder="${args.placeholder || ''}"
        value="${args.value || ''}"
        maxlength="${args.maxlength || '100'}"
        type="${args.type || 'text'}"
        ${args.inactive ? 'disabled' : ''}
      ></labs-input>
    </div>
  `;
};

export const Default = {
  render: Template,
  args: {
    placeholder: '',
    value: '',
    maxlength: 100,
    type: 'text',
    inactive: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default input component with all controls. Use the controls panel to test different input types, placeholder text, and states.',
      },
    },
  },
};
Default.args = {
  placeholder: "Enter text here...",
  value: "",
  maxlength: 100,
  type: "text",
  inactive: false,
};
Default.parameters = {
  docs: {
    description: {
      story: "Default input component with design system styling. Use controls to explore all input types (text, email, password, search, url), states, and attributes. Forwards all standard input events.",
    },
  },
};

const InputVariantsTemplate = () => {
  setTimeout(() => {
    document.addEventListener('labs-input', (e) => {
      console.log('Input changed:', e.detail.value);
    });

    document.addEventListener('labs-keydown', (e) => {
      if (e.detail.key === 'Enter') {
        console.log('Enter pressed on:', e.target.getAttribute('placeholder'));
      }
    });
  }, 100);

  return `
    <style>
      .variants-demo {
        max-width: 500px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .input-group {
        margin-bottom: 1.5rem;
      }
      
      .input-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--color-on-surface);
        font-weight: var(--font-weight-medium);
      }
      
      .input-group .description {
        font-size: var(--font-size-body-sm);
        color: var(--color-on-surface-variant);
        margin-top: 0.5rem;
      }
    </style>
    
    <div class="variants-demo">
      <div class="input-group">
        <label>Task Description</label>
        <labs-input placeholder="Enter task details..." maxlength="200"></labs-input>
        <div class="description">Used for task entry in overlays and forms</div>
      </div>
      
      <div class="input-group">
        <label>Search</label>
        <labs-input type="search" placeholder="Search tasks..." maxlength="100"></labs-input>
        <div class="description">Search variant with appropriate semantics</div>
      </div>
      
      <div class="input-group">
        <label>Email Address</label>
        <labs-input type="email" placeholder="user@example.com" maxlength="100"></labs-input>
        <div class="description">Email input with validation support</div>
      </div>
      
      <div class="input-group">
        <label>Website URL</label>
        <labs-input type="url" placeholder="https://example.com" maxlength="200"></labs-input>
        <div class="description">URL input for web addresses</div>
      </div>
      
      <div class="input-group">
        <label>Notes (Inactive State)</label>
        <labs-input placeholder="Notes are not editable" value="This field is read-only" disabled></labs-input>
        <div class="description">Inactive state for read-only content</div>
      </div>
    </div>
  `;
};
