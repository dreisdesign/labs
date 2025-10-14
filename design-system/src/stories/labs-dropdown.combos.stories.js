import '../components/labs-dropdown.js';

export default {
    title: '2. Components/Dropdown/Combos',
    component: 'labs-dropdown',
    parameters: {
        docs: {
            description: {
                component: 'Dropdown action combinations: Archive+Delete, Archive+Restore, Delete+Restore, All Three.'
            }
        }
    }
};

export const ArchiveDelete = () => {
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('only', 'archive,delete');
    dd.setAttribute('open', '');
    return dd;
};
ArchiveDelete.storyName = 'Archive + Delete';

export const ArchiveRestore = () => {
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('only', 'archive,restore');
    dd.setAttribute('open', '');
    return dd;
};
ArchiveRestore.storyName = 'Archive + Restore';

export const DeleteRestore = () => {
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('only', 'delete,restore');
    dd.setAttribute('open', '');
    return dd;
};
DeleteRestore.storyName = 'Delete + Restore';

export const AllThree = () => {
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('only', 'archive,delete,restore');
    dd.setAttribute('open', '');
    return dd;
};
AllThree.storyName = 'All Three';
