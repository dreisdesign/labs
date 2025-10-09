import '../styles/main.css';
import '../components/labs-card.js';
import '../components/labs-button.js';

export default {
  title: '2. Components/Card/Welcome',
  component: 'labs-card',
  parameters: {
    docs: {
      description: {
        component: 'Canonical labs-card story. Use this as a reference for the base card component.'
      }
    }
  },
  // For advanced alignment, wrap your actions in a primitive container:
  // <div slot="actions" style="justify-content: flex-start; display: flex; width: 100%">...</div>
  // This allows you to override alignment as needed, while the default is always centered.
};

export const Default = () => {
  const el = document.createElement('labs-card');
  el.setAttribute('variant', 'welcome');
  el.setAttribute('align', 'center');

  const header = document.createElement('div');
  header.slot = 'header';
  header.textContent = 'Welcome to Today List';
  const desc = document.createElement('div');
  desc.textContent = 'Start your day by adding the most important tasks. Use the Add button to create your first item.';
  const addBtn = document.createElement('labs-button');
  addBtn.setAttribute('variant', 'primary');
  addBtn.setAttribute('slot', 'actions');
  addBtn.textContent = 'Add first item';

  el.appendChild(header);
  el.appendChild(desc);
  el.appendChild(addBtn);

  return el;
};


