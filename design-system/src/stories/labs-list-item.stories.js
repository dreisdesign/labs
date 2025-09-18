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
  },
  args: {
    value: 'New task',
    checked: false,
  }
};

export const Default = ({ value, checked }) => {
  // Create a wrapper to hold the item and the toast
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '16px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '600px';
  wrapper.style.margin = '0 auto';

  const el = document.createElement('labs-list-item');
  el.setAttribute('value', value);
  if (checked) el.setAttribute('checked', '');

  // Add a toast element
  const toast = document.createElement('labs-toast');
  wrapper.appendChild(el);
  wrapper.appendChild(toast);

  // wire events for demo output and undo toast
  el.addEventListener('archive', (e) => console.log('archive', e.detail));
  el.addEventListener('remove', (e) => {
    toast.show('Item removed', { actionText: 'Undo', duration: 4000 });
    toast.addEventListener('action', () => {
      // Re-insert the item for demo purposes
      if (!wrapper.contains(el)) wrapper.insertBefore(el, toast);
    }, { once: true });
  });
  el.addEventListener('toggle', (e) => console.log('toggle', e.detail));

  return wrapper;
};

export const TextOnly = () => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '12px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '600px';
  wrapper.style.margin = '0 auto';

  // Create multiple text-only items to show typical usage
  const items = [
    { text: 'Entry logged at 9:15 AM', timestamp: 'Sep 17, 2025, 9:15:23 AM' },
    { text: 'Entry logged at 2:30 PM', timestamp: 'Sep 17, 2025, 2:30:45 PM' },
    { text: 'Entry logged at 5:45 PM', timestamp: 'Sep 17, 2025, 5:45:12 PM' }
  ];

  items.forEach((item, index) => {
    const el = document.createElement('labs-list-item');
    el.setAttribute('variant', 'text-only');
    el.setAttribute('value', item.text);
    el.setAttribute('timestamp', item.timestamp);

    // Add a delete button in the actions slot
    const deleteBtn = document.createElement('labs-button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('aria-label', `Delete entry ${index + 1}`);
    deleteBtn.slot = 'actions';
    deleteBtn.addEventListener('click', () => {
      console.log(`Delete clicked for: ${item.text}`);
      el.remove();
    });

    el.appendChild(deleteBtn);
    wrapper.appendChild(el);
  });

  return wrapper;
};
