import '../components/labs-badge.js';

export default {
  title: 'Components/Badge',
};

export const Default = () => {
  const el = document.createElement('labs-badge');
  el.textContent = 'Badge';
  return el;
};
