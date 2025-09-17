import '../components/labs-dropdown.js';
import '../components/labs-list-item.js';

export default {
    title: 'Components/Dropdown',
    tags: ['autodocs'],
};

export const Default = () => {
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
    const item = document.createElement('labs-list-item');
    item.setAttribute('value', 'Example item');
    wrap.appendChild(item);
    return wrap;
};

export const Archived = () => {
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
    const item = document.createElement('labs-list-item');
    item.setAttribute('value', 'Archived item');
    item.setAttribute('archived', '');
    wrap.appendChild(item);
    return wrap;
};
