import '../components/labs-icon.js';

export default {
    title: 'Icons/Default',
    argTypes: {
        name: {
            control: { type: 'select' },
            options: [
                'add_comment',
                'bedtime',
                'bedtime_off',
                'cancel',
                'change_circle',
                'check',
                'close',
                'comment',
                'delete_forever',
                'edit',
                'rate_review',
                'settings',
                'undo',
                // Add more icon names as needed
            ],
        },
    },
};

export const Default = (args) => `<labs-icon name="${args.name}"></labs-icon>`;
Default.args = {
    name: 'cancel',
};
