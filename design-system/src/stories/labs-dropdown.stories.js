import '../components/labs-dropdown.js';
import '../components/labs-list-item.js';

export default {
    title: 'Components/Dropdown',
    tags: ['autodocs'],
    argTypes: {
        open: { control: 'boolean' },
        archived: { control: 'boolean' },
        restored: { control: 'boolean' }
    },
    args: {
        open: false,
        archived: false,
        restored: false
    }
};

export const Default = ({ open = false, archived = false, restored = false } = {}) => {
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
    wrap.innerHTML = '';
    const dd = document.createElement('labs-dropdown');
    if (open) dd.setAttribute('open', ''); else dd.removeAttribute('open');
    if (archived) dd.setAttribute('archived', ''); else dd.removeAttribute('archived');
    if (restored) dd.setAttribute('restored', ''); else dd.removeAttribute('restored');
    wrap.appendChild(dd);
    return wrap;
};

export const InListArchive = ({ open = false, archived = true, restored = false } = {}) => {
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
    item.appendChild(dd);
    wrap.appendChild(item);
    return wrap;
};

export const InList = ({ open = false, archived = false, restored = false } = {}) => {
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
    item.appendChild(dd);
    wrap.appendChild(item);
    return wrap;
};

export const Open = ({ open = true, archived = false, restored = false } = {}) => {
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
    wrap.innerHTML = '';
    const dd = document.createElement('labs-dropdown');
    if (open) dd.setAttribute('open', '');
    if (archived) dd.setAttribute('archived', '');
    if (restored) dd.setAttribute('restored', '');
    wrap.appendChild(dd);
    return wrap;
};

export const IconOnly = ({ open = false, archived = false, restored = false } = {}) => {
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
    wrap.innerHTML = '';
    const dd = document.createElement('labs-dropdown');
    if (open) dd.setAttribute('open', '');
    if (archived) dd.setAttribute('archived', '');
    if (restored) dd.setAttribute('restored', '');
    // Render just the trigger in isolation for icon-only use
    wrap.appendChild(dd);
    return wrap;
};
