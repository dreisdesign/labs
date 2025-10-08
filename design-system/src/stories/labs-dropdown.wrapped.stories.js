import '../components/labs-dropdown.js';

export default {
    title: '3. Components (Wrapped)/Dropdown',
    parameters: {
        docs: {
            description: {
                component: 'Preconfigured, reusable dropdown menu variants for common actions (archive, delete, both). Use these as drop-in menu actions in list items, cards, etc.'
            }
        }
    },
    argTypes: {
        open: { control: 'boolean', description: 'Open state' },
    },
    args: {
        open: false,
    },
};

// Archive Only Dropdown
export const ArchiveOnly = ({ open = false } = {}) => {
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('only', 'archive');
    if (open) dd.setAttribute('open', '');
    return dd;
};
ArchiveOnly.storyName = 'Archive Only';

// Delete Only Dropdown
export const DeleteOnly = ({ open = false } = {}) => {
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('only', 'delete');
    if (open) dd.setAttribute('open', '');
    return dd;
};
DeleteOnly.storyName = 'Delete Only';

// Archive and Delete Dropdown
export const ArchiveAndDelete = ({ open = false } = {}) => {
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('only', 'archive,delete');
    if (open) dd.setAttribute('open', '');
    return dd;
};
ArchiveAndDelete.storyName = 'Archive + Delete';