import '../components/labs-checkbox.js';
import '../components/labs-list-item.js';

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
  const el = document.createElement('labs-list-item');
  el.setAttribute('value', value);
  if (checked) el.setAttribute('checked', '');

  // wire events for demo output
  el.addEventListener('archive', (e) => console.log('archive', e.detail));
  el.addEventListener('remove', (e) => console.log('remove', e.detail));
  el.addEventListener('toggle', (e) => console.log('toggle', e.detail));

  return el;
};
