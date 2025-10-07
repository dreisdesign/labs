import '../components/labs-dropdown.js';
import '../components/labs-list-item.js';

export default {
    title: '4. Patterns/Dropdown',
    component: 'labs-dropdown',
    tags: ['autodocs'],
    argTypes: {
        only: {
            name: 'Only Menu Items',
            description: 'Multi-select which menu items to render (archive, delete)',
            control: { type: 'inline-check' },
            options: ['archive', 'delete']
        }
    },
    args: {
        only: ['archive', 'delete']
    }
};

export const InListArchive = ({ open = false, archived = true, restored = false, only = ['archive', 'delete'] } = {}) => {
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
    wrap.innerHTML = '';
    const item = document.createElement('labs-list-item');
    item.setAttribute('value', 'Archived item');
    if (archived) item.setAttribute('archived', ''); else item.removeAttribute('archived');
    if (restored) item.setAttribute('restored', ''); else item.removeAttribute('restored');
    // add dropdown into the actions slot for the archived list-item
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('slot', 'actions');
    if (open) dd.setAttribute('open', '');
    if (Array.isArray(only) && only.length) dd.setAttribute('only', only.join(','));
    else if (typeof only === 'string' && only) dd.setAttribute('only', only);
    item.appendChild(dd);
    wrap.appendChild(item);
    return wrap;
};

export const InList = ({ open = false, archived = false, restored = false, only = ['archive'] } = {}) => {
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
    wrap.innerHTML = '';
    const item = document.createElement('labs-list-item');
    item.setAttribute('value', 'Item with dropdown');
    if (archived) item.setAttribute('archived', ''); else item.removeAttribute('archived');
    if (restored) item.setAttribute('restored', ''); else item.removeAttribute('restored');
    // Insert dropdown into the actions slot of the list item
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('slot', 'actions');
    if (open) dd.setAttribute('open', '');
    if (Array.isArray(only) && only.length) dd.setAttribute('only', only.join(','));
    else if (typeof only === 'string' && only) dd.setAttribute('only', only);
    item.appendChild(dd);
    wrap.appendChild(item);
    return wrap;
};

export const DeleteOnly = ({ open = false, only = ['delete'] } = {}) => {
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
    wrap.innerHTML = '';
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('only', 'delete');
    if (open) dd.setAttribute('open', '');
    wrap.appendChild(dd);
    return wrap;
};

export const ArchiveAndDelete = ({ open = false, only = ['archive', 'delete'] } = {}) => {
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
    wrap.innerHTML = '';
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('only', 'archive,delete');
    if (open) dd.setAttribute('open', '');
    wrap.appendChild(dd);
    return wrap;
};
