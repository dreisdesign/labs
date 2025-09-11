import '../components/labs-checkbox.js';
import '../components/labs-list-item.js';
import '../components/labs-button.js';
import '../components/labs-icon.js';

export default {
    title: 'Components/List Item/Archived',
    component: 'labs-list-item',
};

export const States = () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '12px';
    wrapper.style.maxWidth = '420px';

    // Normal item
    const normal = document.createElement('labs-list-item');
    normal.setAttribute('value', 'Normal item');

    // Archived item
    const archived = document.createElement('labs-list-item');
    archived.setAttribute('value', 'Archived item');
    archived.setAttribute('archived', '');

    // Archived-original that has been restored (inactive history icon)
    const restored = document.createElement('labs-list-item');
    restored.setAttribute('value', 'Archived (restored)');
    restored.setAttribute('archived', '');
    restored.setAttribute('restored', '');

    wrapper.appendChild(normal);
    wrapper.appendChild(archived);
    wrapper.appendChild(restored);

    return wrapper;
};
