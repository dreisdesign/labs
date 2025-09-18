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
  card.innerHTML = `<div style="display:flex;flex-direction:column;gap:4px">
    <div style="font-size:12px;color:var(--color-on-surface-variant)">Entries</div>
    <div style="font-size:28px;font-weight:700">42</div>
  </div>`;
  return card;
};


export const MetricZero = () => {
  const el = document.createElement('labs-card');
  el.setAttribute('variant', 'metric');

  const label = document.createElement('div');
  label.slot = 'media';
  label.innerHTML = '<div class="metric-label">Errors</div>';

  const value = document.createElement('div');
  value.innerHTML = '<div class="metric-value">0</div>';

  el.appendChild(label);
  el.appendChild(value);

  return el;
};
