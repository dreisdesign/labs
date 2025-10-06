import '../components/labs-list-item.js';

export default {
    title: 'Components (Wrapped)/List Item - Text Only',
    component: 'labs-list-item',
    argTypes: {
        text: { control: 'text', description: 'Text content for the list item' },
    },
    args: {
        text: 'Simple text item',
    },
};

export const Default = ({ text }) => {
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

export const Multiple = () => {
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
