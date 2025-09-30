import '../components/labs-dropdown.js';
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
      options: ['full-slots', 'content-only'],
      description: 'Choose which slots to render in the SlotDriven example'
    }
  },
  args: {
    value: 'New task',
    checked: false,
    slotsPattern: 'full-slots',
  },
  parameters: {
    docs: {
      story: {
        TextOnly: {
          args: { slotsPattern: 'content-only' }
        }
      }
    }
  }
};

export const Checkbox = ({ value, checked, slotsPattern = 'full-slots' }) => {
  if (!customElements.get('labs-list-item') || !customElements.get('labs-dropdown')) {
    const placeholder = document.createElement('div');
    placeholder.textContent = 'Labs List Item or Dropdown not defined yet.';
    return placeholder;
  }

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

  const dd = document.createElement('labs-dropdown');
  dd.slot = 'actions';

  // Always provide all slots for robust demo
  if (slotsPattern === 'full-slots') {
    el.appendChild(customChk);
    el.appendChild(content);
    el.appendChild(dd);
  } else if (slotsPattern === 'content-only') {
    el.appendChild(content);
  }

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

export const TextOnly = ({ slotsPattern } = {}) => {
  slotsPattern = slotsPattern || 'content-only';
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
    // Use a dedicated 'timestamp' variant so it doesn't pick up text-only styles
    el.setAttribute('variant', 'timestamp');
    el.setAttribute('value', item.text);
    el.setAttribute('timestamp', item.timestamp);

    const chk = document.createElement('labs-checkbox');
    chk.slot = 'control';
    chk.setAttribute('aria-label', `Mark entry ${index + 1} complete`);
    chk.addEventListener('change', (e) => console.log('checkbox change', e.target.checked));

    const content = document.createElement('div');
    content.slot = 'content';
    content.textContent = item.text;

    const dd = document.createElement('labs-dropdown');
    dd.slot = 'actions';

    if (slotsPattern === 'full-slots') {
      el.appendChild(chk);
      el.appendChild(content);
      el.appendChild(dd);
    } else if (slotsPattern === 'content-only') {
      el.appendChild(content);
    }

    wrapper.appendChild(el);
  });

  return wrapper;
}
TextOnly.args = { slotsPattern: 'content-only' };

export const Timestamp = ({ slotsPattern = 'full-slots' } = {}) => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '12px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '600px';
  wrapper.style.margin = '0 auto';
  wrapper.innerHTML = '';

  // Items where the primary label is the timestamp string and the small timestamp
  // meta is removed (so we don't set the `timestamp` attribute on the component).
  // Showing a single example here avoids confusion with the separate
  // `variant="timestamp"` usage which renders the component's internal
  // timestamp attribute into the left-side label area.
  const items = ['12:00 PM'];

  items.forEach((ts, index) => {
    const el = document.createElement('labs-list-item');
    el.setAttribute('variant', 'text-only');
    // Use the timestamp as the main label
    el.setAttribute('value', ts);

    const icon = document.createElement('labs-icon');
    icon.slot = 'control';
    icon.setAttribute('name', 'check');
    icon.setAttribute('aria-hidden', 'false');
    icon.setAttribute('title', 'Completed');

    const content = document.createElement('div');
    content.slot = 'content';
    content.textContent = ts;

    const dd = document.createElement('labs-dropdown');
    dd.slot = 'actions';

    // Ensure the actions dropdown doesn't add extra right-side spacing
    dd.style.marginRight = '0';
    dd.style.paddingRight = '0';
    dd.style.minWidth = '40px';
    dd.style.display = 'inline-flex';
    dd.style.alignItems = 'center';

    el.appendChild(icon);
    el.appendChild(content);
    el.appendChild(dd);

    wrapper.appendChild(el);
  });

  return wrapper;
};
