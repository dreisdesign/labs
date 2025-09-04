import '../components/labs-toast.js';

export default {
  title: 'Components/Toast',
};

export const Default = () => {
  const root = document.createElement('div');
  const toast = document.createElement('labs-toast');
  // ensure single instance in document body for demo
  document.body.appendChild(toast);

  const btn = document.createElement('button');
  btn.textContent = 'Show undo toast';
  btn.addEventListener('click', () => {
    toast.show('Item deleted', { actionText: 'Undo', duration: 4000 });

    toast.addEventListener('action', (e) => {
      const p = document.createElement('p');
      p.textContent = `Action clicked: ${e.detail.message}`;
      root.appendChild(p);
    }, { once: true });

    toast.addEventListener('dismiss', () => {
      const p = document.createElement('p');
      p.textContent = 'Toast dismissed';
      root.appendChild(p);
    }, { once: true });
  });

  root.appendChild(btn);
  return root;
};
