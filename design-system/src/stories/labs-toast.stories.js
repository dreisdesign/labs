import '../components/labs-toast.js';

export default {
  title: 'Components/Toast',
  tags: ['autodocs'],
  args: {
    open: false
  },
  argTypes: {
    open: { control: { type: 'boolean' }, description: 'Open toast on render' }
  }
};

export const Default = {
  render: () => {
    const root = document.createElement('div');
    const toast = document.createElement('labs-toast');
    // ensure single instance in document body for demo
    document.body.appendChild(toast);

    const btn = document.createElement('labs-button');
    btn.setAttribute('variant', 'primary');
    btn.setAttribute('pill', '');
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
  },
  play: async ({ args }) => {
    if (!args.open) return;
    let toast = document.querySelector('labs-toast');
    if (!toast) {
      toast = document.createElement('labs-toast');
      document.body.appendChild(toast);
    }
    toast.show('Item deleted', { actionText: 'Undo', duration: 4000 });
  }
};
