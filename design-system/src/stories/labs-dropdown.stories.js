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
            name: 'Only Menu Items',
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

export const Default = ({ open = false, archived = false, restored = false, only = [] } = {}) => {
    // Render dropdown inline with a short label to show typical placement
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
    wrap.style.display = 'flex';
    wrap.style.alignItems = 'center';
    wrap.style.gap = '12px';
    wrap.innerHTML = '';
    const dd = document.createElement('labs-dropdown');
    if (open) dd.setAttribute('open', ''); else dd.removeAttribute('open');
    if (archived) dd.setAttribute('archived', ''); else dd.removeAttribute('archived');
    if (restored) dd.setAttribute('restored', ''); else dd.removeAttribute('restored');
    if (Array.isArray(only) && only.length) dd.setAttribute('only', only.join(','));
    else if (typeof only === 'string' && only) dd.setAttribute('only', only);

    const label = document.createElement('div');
    label.textContent = 'More actions';
    label.style.fontSize = '0.95rem';
    label.style.color = 'var(--color-on-surface-variant, #666)';

    wrap.appendChild(label);
    wrap.appendChild(dd);
    return wrap;
};
Default.args = {
    only: []
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

export const IconOnly = ({ open = false, archived = false, restored = false, only = [] } = {}) => {
    // Render the dropdown in a tight container so only the trigger (icon button)
    // is visible. This makes IconOnly visually distinct from Default.
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
    // Closed by default so only the icon trigger is visible in this tight layout
    wrap.appendChild(dd);
    return wrap;
};

IconOnly.args = {
    only: []
};


// pattern stories moved to `patterns-dropdown.stories.js`
