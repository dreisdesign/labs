import '../components/labs-checkbox.js';
import '../components/labs-list-item.js';

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
  wrapper.style.maxWidth = '400px';
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
