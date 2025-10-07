import '../components/labs-badge.js';

export default {
  title: '2. Components/Badge',
  argTypes: { variant: { control: { type: 'select', options: ['', 'secondary', 'success', 'warning', 'error'] } }, text: { control: 'text' } }
};

export const Default = ({ variant = '', text = 'Badge' } = {}) => {
  const el = document.createElement('labs-badge');
  if (variant) el.setAttribute('variant', variant);
  el.textContent = text;
  return el;
};

Default.args = { variant: '', text: 'Badge' };
