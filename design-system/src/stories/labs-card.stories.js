import '../styles/main.css';
import '../components/labs-card.js';
import '../components/labs-button.js';

export default { title: 'Components/Card' };

export const Welcome = () => {
  const el = document.createElement('labs-card');
  el.setAttribute('variant', 'welcome');

  const header = document.createElement('div'); header.slot = 'header'; header.textContent = 'Welcome to Today List';
  const desc = document.createElement('div'); desc.textContent = 'Start your day by adding the most important tasks. Use the Add button to create your first item.';
  const actions = document.createElement('div'); actions.slot = 'actions';
  const addBtn = document.createElement('labs-button'); addBtn.setAttribute('variant', 'primary'); addBtn.textContent = 'Add first item';
  actions.appendChild(addBtn);

  el.appendChild(header);
  el.appendChild(desc);
  el.appendChild(actions);

  return el;
};


