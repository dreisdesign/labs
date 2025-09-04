import '../components/labs-input.js';

export default {
  title: 'Components/Input',
};

export const Default = () => {
  const el = document.createElement('div');
  const input = document.createElement('labs-input');
  input.setAttribute('placeholder', 'Add item and press Enter');
  input.addEventListener('submit', (e) => {
    const p = document.createElement('p');
    p.textContent = `Submitted: ${e.detail.value}`;
    el.appendChild(p);
  });
  el.appendChild(input);
  return el;
};
