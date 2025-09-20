import '../components/labs-checkbox.js';
import '../components/labs-list-item.js';
import '../components/labs-button.js';
import '../components/labs-toast.js';

export default {
  title: 'Components/List Item',
  component: 'labs-list-item',
  argTypes: {
    value: { control: 'text', description: 'Item text' },
    checked: { control: 'boolean', description: 'Checked state' },
    slotsPattern: {
      name: 'Slots Pattern',
      control: { type: 'select' },
      options: ['fallback', 'full-slots', 'control-only', 'content-only', 'actions-only'],
      description: 'Choose which slots to render in the SlotDriven example'
    }
  },
  args: {
    value: 'New task',
    checked: false,
    slotsPattern: 'full-slots',
  }
};

export const Default = ({ value, checked, slotsPattern = 'full-slots' }) => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '16px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '600px';
  wrapper.style.margin = '0 auto';
  wrapper.innerHTML = '';

  const el = document.createElement('labs-list-item');
  el.setAttribute('value', value);
  if (checked) el.setAttribute('checked', '');

  // Optional slots according to slotsPattern
  const customChk = document.createElement('labs-checkbox');
  customChk.slot = 'control';
  customChk.setAttribute('aria-label', 'Mark complete');

  const content = document.createElement('div');
  content.slot = 'content';
  content.textContent = value;

  const actions = document.createElement('div');
  actions.slot = 'actions';
  const dd = document.createElement('labs-dropdown');
  actions.appendChild(dd);

  if (slotsPattern === 'full-slots') {
    el.appendChild(customChk);
    el.appendChild(content);
    el.appendChild(actions);
  } else if (slotsPattern === 'control-only') {
    el.appendChild(customChk);
  } else if (slotsPattern === 'content-only') {
    el.appendChild(content);
  } else if (slotsPattern === 'actions-only') {
    el.appendChild(actions);
  } // 'fallback' -> don't append anything

  // Add a toast element
  const toast = document.createElement('labs-toast');
  wrapper.appendChild(el);
  wrapper.appendChild(toast);

  // wire events for demo output and undo toast
  el.addEventListener('archive', (e) => console.log('archive', e.detail));
  el.addEventListener('remove', (e) => {
    toast.show('Item removed', { actionText: 'Undo', duration: 4000 });
    toast.addEventListener('action', () => {
      if (!wrapper.contains(el)) wrapper.insertBefore(el, toast);
    }, { once: true });
  });
  el.addEventListener('toggle', (e) => console.log('toggle', e.detail));

  return wrapper;
};

export const TextOnly = ({ slotsPattern = 'full-slots' } = {}) => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '12px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '600px';
  wrapper.style.margin = '0 auto';
  wrapper.innerHTML = '';

  // Create multiple text-only items that may include the left checkbox depending on pattern
  const items = [
    { text: 'Entry logged', timestamp: '12:00 PM' },
    { text: 'Entry logged', timestamp: '12:00 PM' },
    { text: 'Entry logged', timestamp: '12:00 PM' }
  ];

  items.forEach((item, index) => {
    const el = document.createElement('labs-list-item');
    el.setAttribute('variant', 'text-only');
    el.setAttribute('value', item.text);
    el.setAttribute('timestamp', item.timestamp);

    const chk = document.createElement('labs-checkbox');
    chk.slot = 'control';
    chk.setAttribute('aria-label', `Mark entry ${index + 1} complete`);
    chk.addEventListener('change', (e) => console.log('checkbox change', e.target.checked));

    if (slotsPattern === 'full-slots' || slotsPattern === 'control-only') {
      el.appendChild(chk);
    }

    wrapper.appendChild(el);
  });

  return wrapper;
};

export const SlotDriven = ({ slotsPattern = 'full-slots', value }) => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '12px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '600px';
  wrapper.style.margin = '0 auto';
  // ensure we start with a clean container on every render
  wrapper.innerHTML = '';

  const el = document.createElement('labs-list-item');
  el.setAttribute('value', value || 'Slot-driven task with custom controls');

  // Prepare optional slotted nodes
  const customChk = document.createElement('labs-checkbox');
  customChk.slot = 'control';
  customChk.setAttribute('aria-label', 'Mark complete');

  const content = document.createElement('div');
  content.slot = 'content';
  content.innerHTML = `<div style="display:flex;align-items:center;gap:8px;min-width:0;"><div style="flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Custom slot content that truncates when long</div><div style="font-size:0.75rem;color:var(--color-on-surface-variant)">12:00 PM</div></div>`;

  const actions = document.createElement('div');
  actions.slot = 'actions';
  const btn = document.createElement('labs-button');
  btn.id = 'restoreBtn';
  btn.textContent = 'Restore';
  btn.addEventListener('click', () => console.log('Restore clicked'));
  actions.appendChild(btn);

  // Attach slots according to the chosen pattern
  if (slotsPattern === 'full-slots') {
    el.appendChild(customChk);
    el.appendChild(content);
    el.appendChild(actions);
  } else if (slotsPattern === 'control-only') {
    el.appendChild(customChk);
  } else if (slotsPattern === 'content-only') {
    el.appendChild(content);
  } else if (slotsPattern === 'actions-only') {
    el.appendChild(actions);
  } else { // 'fallback'
    // don't append any slotted content so the component uses its internal fallbacks
  }

  wrapper.appendChild(el);
  return wrapper;
};
