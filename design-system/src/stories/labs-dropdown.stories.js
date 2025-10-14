import '../components/labs-dropdown.js';
import '../components/labs-list-item.js';


export default {
    title: '2. Components/Dropdown',
    component: 'labs-dropdown',
    parameters: {
        docs: {
            description: {
                component: 'Canonical dropdown API: all controls, all props, kitchen sink. Use the Actions/Combos/Patterns stories for atomic and contextual variants.'
            }
        }
    },
    argTypes: {
        open: { control: 'boolean' },
        archived: { control: 'boolean' },
        restored: { control: 'boolean' },
        only: {
            name: 'buttons',
            description: 'Multi-select which menu items to render (archive, delete, restore)',
            control: { type: 'inline-check' },
            options: ['archive', 'delete', 'restore']
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


export const APIControls = ({ open = false, archived = false, restored = false, only = [] } = {}) => {
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
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
APIControls.storyName = 'API / Controls';
APIControls.args = {
    open: false,
    archived: false,
    restored: false,
    only: []
};

export const KitchenSink = () => {
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('open', '');
    dd.setAttribute('only', 'archive,delete,restore');
    return dd;
};
KitchenSink.storyName = 'Kitchen Sink (All Actions)';


// pattern stories moved to `patterns-dropdown.stories.js`
