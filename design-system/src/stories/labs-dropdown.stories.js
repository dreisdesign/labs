import '../components/labs-dropdown.js';
import '../components/labs-list-item.js';

export default {
    title: '2. Components/Dropdown',
    component: 'labs-dropdown',
    tags: ['autodocs'],
    argTypes: {
        open: { control: 'boolean' },
        archived: { control: 'boolean' },
        restored: { control: 'boolean' },
        only: {
            name: 'buttons',
            description: 'Multi-select which menu items to render (archive, delete)',
            control: { type: 'inline-check' },
            options: ['archive', 'delete']
        }
    },
    args: {
        open: false,
        archived: false,
        restored: false,
        only: []
    }
};



// pattern stories moved to `patterns-dropdown.stories.js`

export const Open = ({ open = true, archived = false, restored = false, only = [] } = {}) => {
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
    wrap.innerHTML = '';
    const dd = document.createElement('labs-dropdown');
    if (open) dd.setAttribute('open', '');
    if (Array.isArray(only) && only.length) dd.setAttribute('only', only.join(','));
    else if (typeof only === 'string' && only) dd.setAttribute('only', only);
    if (archived) dd.setAttribute('archived', '');
    if (restored) dd.setAttribute('restored', '');
    wrap.appendChild(dd);
    return wrap;
};

// Default args for the Open story: show the menu open by default
Open.args = {
    open: true
};

// IconOnly is now the default export for this story
export const Default = ({ open = false, archived = false, restored = false, only = [] } = {}) => {
    const wrap = document.createElement('div');
    wrap.style.padding = '8px';
    wrap.style.width = '40px';
    wrap.style.display = 'flex';
    wrap.style.alignItems = 'center';
    wrap.style.justifyContent = 'center';
    wrap.style.boxSizing = 'border-box';
    wrap.innerHTML = '';
    const dd = document.createElement('labs-dropdown');
    if (open) dd.setAttribute('open', '');
    if (archived) dd.setAttribute('archived', '');
    if (restored) dd.setAttribute('restored', '');
    if (Array.isArray(only) && only.length) dd.setAttribute('only', only.join(','));
    else if (typeof only === 'string' && only) dd.setAttribute('only', only);
    wrap.appendChild(dd);
    return wrap;
};
Default.args = {
    only: []
};


// pattern stories moved to `patterns-dropdown.stories.js`
