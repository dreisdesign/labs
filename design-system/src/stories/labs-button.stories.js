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
                'check',
                'close',
                'comment',
                'delete_forever',
                'edit',
                'rate_review',
                'settings',
                'undo',
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
                'check',
                'close',
                'comment',
                'delete_forever',
                'edit',
                'rate_review',
                'settings',
                'undo',
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


import { ThemeToggleButton } from './theme-toggle.stories.js';

export const IconGrid = () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '1rem';
    wrapper.style.flexWrap = 'wrap';
    wrapper.style.alignItems = 'flex-end';
    wrapper.innerHTML = `
    <labs-button label="Undo" icon="undo" variant="primary" iconcolor="var(--color-on-primary)"></labs-button>
    <labs-button label="Settings" icon-right="settings" variant="primary" iconcolor="var(--color-on-primary)"></labs-button>
    <labs-button label="Add" icon="add" checkmark variant="primary" iconcolor="var(--color-on-primary)"></labs-button>
    <labs-button label="Secondary" icon="undo" variant="secondary" iconcolor="var(--color-on-primary)"></labs-button>
    <labs-button label="Danger" icon="delete_forever" variant="danger" iconcolor="var(--color-error)"></labs-button>
    <labs-button label="Edit" icon="edit" variant="primary" iconcolor="var(--color-on-primary)"></labs-button>
  `;
    // Add the actual theme toggle button component
    wrapper.appendChild(ThemeToggleButton());
    return wrapper;
};
IconGrid.storyName = 'Preview All Buttons';