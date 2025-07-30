import '../components/labs-button.js';

export default {
    title: 'Components/Button',
    argTypes: {
        label: { control: 'text' },
        iconLeft: { control: 'boolean', name: 'Icon Left' },
        icon: {
            control: { type: 'select' },
            name: 'Left Icon Name',
            description: 'Set left icon name (if iconLeft is true)',
            options: [
                '',
                'add_comment',
                'bedtime',
                'bedtime_off',
                'cancel',
                'change_circle',
                'check--labs-icons.svg',
                'check',
                'close',
                'comment',
                'delete_forever',
                'edit',
                'rate_review',
                'settings_fill',
                'settings',
                'undo',
                'undo_svg',
            ],
        },
        iconRight: { control: 'boolean', name: 'Icon Right' },
        iconRightName: {
            control: { type: 'select' },
            name: 'Right Icon Name',
            description: 'Set right icon name (if iconRight is true)',
            options: [
                '',
                'add_comment',
                'bedtime',
                'bedtime_off',
                'cancel',
                'change_circle',
                'check--labs-icons.svg',
                'check',
                'close',
                'comment',
                'delete_forever',
                'edit',
                'rate_review',
                'settings_fill',
                'settings',
                'undo',
                'undo_svg',
            ],
        },
        checkmark: { control: 'boolean', name: 'Check Animation' },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'danger', 'success'],
        },
    },
};

const Template = ({ label, iconLeft, icon, iconRight, iconRightName, checkmark, variant }) => {
    let leftIcon = iconLeft ? (icon || 'undo') : '';
    let rightIcon = iconRight ? (iconRightName || 'settings--labs-icons') : '';
    let iconColor = '#fff';
    if (variant === 'danger') {
        leftIcon = 'delete_forever';
        rightIcon = '';
        iconColor = '#b5005a';
    }
    return `
    <labs-button
      label="${label || ''}"
      ${leftIcon ? `icon="${leftIcon}"` : ''}
      ${rightIcon ? `icon-right="${rightIcon}"` : ''}
      ${checkmark ? 'checkmark' : ''}
      variant="${variant || 'primary'}"
      iconcolor="${iconColor}"
    ></labs-button>
  `;
};

export const Default = Template.bind({});
Default.args = {
    label: 'Primary Button',
    iconLeft: false,
    icon: '',
    iconRight: false,
    iconRightName: '',
    checkmark: false,
    variant: 'primary',
};
Default.storyName = 'Primary';


export const IconGrid = () => `
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-end;">
    <labs-button label="Undo" icon="undo" variant="primary" iconcolor="#fff"></labs-button>
    <labs-button label="Settings" icon-right="settings_fill" variant="primary" iconcolor="#fff"></labs-button>
    <labs-button label="Check" checkmark variant="primary" iconcolor="#fff"></labs-button>
    <labs-button label="Secondary" icon="undo" variant="secondary" iconcolor="#fff"></labs-button>
    <labs-button label="Danger" icon="delete_forever" variant="danger" iconcolor="#b5005a"></labs-button>
    <labs-button label="Success" icon="check" variant="success" iconcolor="#fff"></labs-button>
    <labs-button label="Edit" icon="edit" variant="primary" iconcolor="#fff"></labs-button>
  </div>
`;
IconGrid.storyName = 'Icon Grid Demo';