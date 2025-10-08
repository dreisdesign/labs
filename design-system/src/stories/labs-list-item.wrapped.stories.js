import '../components/labs-list-item.js';
import '../components/labs-checkbox.js';
import '../components/labs-dropdown.js';
import '../components/labs-toast.js';
import '../components/labs-icon.js';
import iconsList from '../components/icons-list.js';
import { formatHuman } from '../utils/date-format.js';

export default {
    title: '3. Components (Wrapped)/List Item',
};

// --- Task Variant ---
export const Task = ({ text = 'Buy groceries', checked = false }) => {
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
Task.argTypes = {
    text: { control: 'text', description: 'Task text content' },
    checked: { control: 'boolean', description: 'Checked state' },
};
Task.args = {
    text: 'Buy groceries',
    checked: false,
};

export const TaskMultiple = () => {
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

// --- Text Only Variant ---
export const TextOnly = ({ text = 'Simple text item' }) => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '16px';
    wrapper.style.width = '100%';
    wrapper.style.maxWidth = '600px';
    wrapper.style.margin = '0 auto';
    const item = document.createElement('labs-list-item');
    item.setAttribute('variant', 'text-only');
    const span = document.createElement('span');
    span.setAttribute('slot', 'content');
    span.textContent = text;
    item.appendChild(span);
    wrapper.appendChild(item);
    return wrapper;
};
TextOnly.argTypes = {
    text: { control: 'text', description: 'Text content for the list item' },
};
TextOnly.args = {
    text: 'Simple text item',
};

export const TextOnlyMultiple = () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '12px';
    wrapper.style.width = '100%';
    wrapper.style.maxWidth = '600px';
    wrapper.style.margin = '0 auto';
    const items = [
        'First text item',
        'Second text item',
        'Third text item',
        'Fourth text item',
        'Fifth text item',
    ];
    items.forEach(text => {
        const item = document.createElement('labs-list-item');
        item.setAttribute('variant', 'text-only');
        const span = document.createElement('span');
        span.setAttribute('slot', 'content');
        span.textContent = text;
        item.appendChild(span);
        wrapper.appendChild(item);
    });
    return wrapper;
};

// --- Timestamp Variant ---
export const Timestamp = ({ icon = 'check' }) => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '16px';
    wrapper.style.width = '100%';
    wrapper.style.maxWidth = '600px';
    wrapper.style.margin = '0 auto';
    const item = document.createElement('labs-list-item');
    item.setAttribute('variant', 'timestamp');
    const now = new Date();
    item.setAttribute('timestamp', now.toISOString());
    const iconEl = document.createElement('labs-icon');
    iconEl.setAttribute('slot', 'control');
    iconEl.setAttribute('name', icon || 'check');
    iconEl.setAttribute('aria-hidden', 'true');
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = formatHuman(now);
    item.appendChild(iconEl);
    item.appendChild(content);
    wrapper.appendChild(item);
    return wrapper;
};
Timestamp.argTypes = {
    icon: { control: { type: 'select' }, options: iconsList, description: 'Icon name from labs-icon library' },
};
Timestamp.args = {
    icon: 'check',
};

export const TimestampMultiple = () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '12px';
    wrapper.style.width = '100%';
    wrapper.style.maxWidth = '600px';
    wrapper.style.margin = '0 auto';
    for (let i = 0; i < 5; i++) {
        const item = document.createElement('labs-list-item');
        item.setAttribute('variant', 'timestamp');
        const now = new Date(Date.now() - i * 60000); // Each item 1 min apart
        item.setAttribute('timestamp', now.toISOString());
        const iconEl = document.createElement('labs-icon');
        iconEl.setAttribute('slot', 'control');
        iconEl.setAttribute('name', 'check');
        iconEl.setAttribute('aria-hidden', 'true');
        const content = document.createElement('div');
        content.setAttribute('slot', 'content');
        content.textContent = formatHuman(now);
        item.appendChild(iconEl);
        item.appendChild(content);
        wrapper.appendChild(item);
    }
    return wrapper;
};
