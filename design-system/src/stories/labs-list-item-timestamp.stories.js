import '../components/labs-timestamp-item.js';

export default {
    title: 'Components (Wrapped)/List Item - Timestamp',
    component: 'labs-timestamp-item',
    argTypes: {
        text: { control: 'text', description: 'Activity description text' },
        icon: { control: 'text', description: 'Icon name from labs-icon library' },
    },
    args: {
        text: 'Started working on new feature',
        icon: 'check',
    },
};

export const Default = ({ text, icon }) => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '16px';
    wrapper.style.width = '100%';
    wrapper.style.maxWidth = '600px';
    wrapper.style.margin = '0 auto';

    const item = document.createElement('labs-timestamp-item');
    if (icon) item.setAttribute('icon', icon);
    item.textContent = text;

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

    const activities = [
        'Completed code review',
        'Updated documentation',
        'Created new task',
        'Archived completed items',
        'Restored from archive',
    ];

    activities.forEach(text => {
        const item = document.createElement('labs-timestamp-item');
        item.textContent = text;
        wrapper.appendChild(item);
    });

    return wrapper;
};
