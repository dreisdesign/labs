import '../components/labs-list-item.js';
import '../components/labs-checkbox.js';
import '../components/labs-dropdown.js';
import '../components/labs-toast.js';

export default {
    title: '3. Components (Wrapped)/List Item/Task',
    component: 'labs-list-item',
    argTypes: {
        text: { control: 'text', description: 'Task text content' },
        checked: { control: 'boolean', description: 'Checked state' },
    },
    args: {
        text: 'Buy groceries',
        checked: false,
    },
};

export const Default = ({ text, checked }) => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '16px';
    wrapper.style.width = '100%';
    wrapper.style.maxWidth = '600px';
    wrapper.style.margin = '0 auto';

    const item = document.createElement('labs-list-item');
    const checkbox = document.createElement('labs-checkbox');
    checkbox.setAttribute('slot', 'control');
    if (checked) checkbox.setAttribute('checked', '');
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = text;
    const dropdown = document.createElement('labs-dropdown');
    dropdown.setAttribute('slot', 'actions');

    item.appendChild(checkbox);
    item.appendChild(content);
    item.appendChild(dropdown);

    const toast = document.createElement('labs-toast');
    wrapper.appendChild(item);
    wrapper.appendChild(toast);

    // Wire up events for demo
    item.addEventListener('toggle', (e) => {
        console.log('Task toggled:', e.detail);
    });
    item.addEventListener('archive', (e) => {
        console.log('Task archived:', e.detail);
        toast.show('Task archived', { duration: 3000 });
    });
    item.addEventListener('remove', (e) => {
        console.log('Task removed:', e.detail);
        toast.show('Task removed', { actionText: 'Undo', duration: 4000 });
        toast.addEventListener('action', () => {
            if (!wrapper.contains(item)) wrapper.insertBefore(item, toast);
        }, { once: true });
    });
    item.addEventListener('restore', (e) => {
        console.log('Task restored:', e.detail);
        toast.show('Task restored', { duration: 3000 });
    });

    return wrapper;
};

export const Multiple = () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '12px';
    wrapper.style.width = '100%';
    wrapper.style.maxWidth = '600px';
    wrapper.style.margin = '0 auto';

    const tasks = [
        { text: 'Morning workout', checked: true },
        { text: 'Review pull requests', checked: false },
        { text: 'Team standup meeting', checked: false },
        { text: 'Lunch break', checked: false },
        { text: 'Code review session', checked: false },
    ];

    tasks.forEach(({ text, checked }) => {
        const item = document.createElement('labs-list-item');
        const checkbox = document.createElement('labs-checkbox');
        checkbox.setAttribute('slot', 'control');
        if (checked) checkbox.setAttribute('checked', '');
        const content = document.createElement('div');
        content.setAttribute('slot', 'content');
        content.textContent = text;
        const dropdown = document.createElement('labs-dropdown');
        dropdown.setAttribute('slot', 'actions');
        item.appendChild(checkbox);
        item.appendChild(content);
        item.appendChild(dropdown);
        wrapper.appendChild(item);
    });

    return wrapper;
};
