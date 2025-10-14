import '../components/labs-dropdown.js';
import '../components/labs-list-item.js';

export default {
    title: '4. Patterns/Dropdown in Context',
    component: 'labs-dropdown',
    parameters: {
        docs: {
            description: {
                component: 'Dropdown in real-world contexts: in list (active, archived, restored), with usage notes.'
            }
        }
    }
};

export const InListActive = () => {
    const item = document.createElement('labs-list-item');
    item.setAttribute('value', 'Active item');
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('slot', 'actions');
    dd.setAttribute('only', 'archive');
    item.appendChild(dd);
    return item;
};
InListActive.storyName = 'In List (Active)';

export const InListArchived = () => {
    const item = document.createElement('labs-list-item');
    item.setAttribute('value', 'Archived item');
    item.setAttribute('archived', '');
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('slot', 'actions');
    dd.setAttribute('only', 'restore,delete');
    item.appendChild(dd);
    return item;
};
InListArchived.storyName = 'In List (Archived)';

export const InListRestored = () => {
    const item = document.createElement('labs-list-item');
    item.setAttribute('value', 'Restored item');
    item.setAttribute('restored', '');
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('slot', 'actions');
    dd.setAttribute('only', 'archive');
    item.appendChild(dd);
    return item;
};
InListRestored.storyName = 'In List (Restored)';

export const DocsUsage = () => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>Dropdown Usage</h3><ul><li>Use <code>only</code> to control which actions appear.</li><li>Use <code>archived</code> or <code>restored</code> attributes on the parent list item for state.</li><li>Events: <code>archive</code>, <code>restore</code>, <code>remove</code>.</li></ul>`;
    return div;
};
DocsUsage.storyName = 'Docs/Usage';
