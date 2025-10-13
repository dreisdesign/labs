import '../components/labs-list-item.js';
export const WithArchivedListItem = () => {
    const details = document.createElement('labs-details');

    const summary = document.createElement('span');
    summary.slot = 'summary';
    summary.innerHTML = '<labs-icon name="chevron_right"></labs-icon> Archived Example';
    details.appendChild(summary);

    const item = document.createElement('labs-list-item');
    item.setAttribute('variant', 'task');
    item.setAttribute('state', 'archived');
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = 'This is an archived item (50% opacity)';
    item.appendChild(content);
    details.appendChild(item);

    return details;
};
import '../components/labs-details.js';
import '../components/labs-icon.js';

export default {
    title: '2. Components/Details',
    component: 'labs-details',
    parameters: {
        docs: {
            description: {
                component: 'Canonical details/accordion component. Uses native <details> for accessibility. Slots: summary (header), default (content).'
            }
        }
    }
};

export const Default = () => {
    const details = document.createElement('labs-details');

    const summary = document.createElement('span');
    summary.slot = 'summary';
    summary.innerHTML = '<labs-icon name="chevron_right"></labs-icon> Expand Me';
    details.appendChild(summary);

    const content = document.createElement('div');
    content.textContent = 'This is the expandable content. You can put anything here.';
    details.appendChild(content);

    return details;
};
