import '../components/labs-dropdown.js';

export default {
    title: '2. Components/Dropdown/Actions',
    component: 'labs-dropdown',
    parameters: {
        docs: {
            description: {
                component: 'Atomic dropdown actions: Archive Only, Delete Only, Restore Only.'
            }
        }
    }
};

export const ArchiveOnly = () => {
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('only', 'archive');
    dd.setAttribute('open', '');
    return dd;
};
ArchiveOnly.storyName = 'Archive Only';

export const DeleteOnly = () => {
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('only', 'delete');
    dd.setAttribute('open', '');
    return dd;
};
DeleteOnly.storyName = 'Delete Only';

export const RestoreOnly = () => {
    const dd = document.createElement('labs-dropdown');
    dd.setAttribute('only', 'restore');
    dd.setAttribute('open', '');
    return dd;
};
RestoreOnly.storyName = 'Restore Only';
