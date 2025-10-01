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

export const Metric = () => {
  const card = document.createElement('labs-card');
  card.setAttribute('variant', 'metric');

  const label = document.createElement('div');
  label.className = 'metric-label';
  label.style.cssText = 'font-size: var(--metric-label-size, 0.875rem); font-weight: var(--metric-label-weight, 800); line-height: var(--metric-label-line-height, 1.2); color: var(--color-on-surface); margin-bottom: var(--space-md, 1rem); text-align: center; width: 100%;';
  label.textContent = 'Entries';

  const value = document.createElement('div');
  value.className = 'metric-value';
  value.style.cssText = 'font-size: var(--metric-value-size, 2rem); font-weight: var(--metric-value-weight, 800); line-height: var(--metric-value-line-height, 1.2); color: var(--color-primary); text-align: center; width: 100%;';
  value.textContent = '42';

  card.appendChild(label);
  card.appendChild(value);

  return card;
};
