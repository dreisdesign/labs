import '../components/labs-list-item.js';
import '../components/labs-icon.js';
import iconsList from '../components/icons-list.js';
import { formatHuman } from '../utils/date-format.js';

export default {
    title: '3. Components (Wrapped)/List Item/Timestamp',
    component: 'labs-list-item',
    argTypes: {
        icon: { control: { type: 'select' }, options: iconsList, description: 'Icon name from labs-icon library' },
    },
    args: {
        icon: 'check',
    },
};

export const Default = ({ icon }) => {
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

export const Multiple = () => {
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
