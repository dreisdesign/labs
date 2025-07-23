import '../components/labs-button.js';

export default {
    title: 'Components/Button',
    argTypes: {
        label: { control: 'text' },
        icon: { control: 'text' },
        iconRight: { control: 'text' },
        checkmark: { control: 'boolean' },
        variant: { control: 'text' },
        iconColor: { control: 'color', name: 'Icon Color' },
    },
};

const Template = ({ label, icon, iconRight, checkmark, variant, iconColor }) => {
    return `
    <labs-button
      label="${label || ''}"
      ${icon ? `icon="${icon}"` : ''}
      ${iconRight ? `icon-right="${iconRight}"` : ''}
      ${checkmark ? 'checkmark' : ''}
      variant="${variant || 'primary'}"
      ${iconColor ? `iconcolor="${iconColor}"` : ''}
    ></labs-button>
  `;
};

export const Default = Template.bind({});
Default.args = {
    label: 'Primary Button',
    checkmark: false,
    variant: 'primary',
    iconColor: '',
};
Default.storyName = 'Primary';

export const IconLeft = Template.bind({});
IconLeft.args = {
    label: 'Icon Left',
    icon: 'assets/icons/undo.svg',
    checkmark: false,
    variant: 'primary',
    iconColor: '#fff',
};

export const IconRight = Template.bind({});
IconRight.args = {
    label: 'Icon Right',
    iconRight: 'assets/icons/settings--fill.svg',
    checkmark: false,
    variant: 'primary',
    iconColor: '#fff',
};
export const WithCheckmark = Template.bind({});
WithCheckmark.args = {
    label: '+ Add',
    checkmark: true,
    variant: 'primary',
    iconColor: '',
};
WithCheckmark.storyName = 'On click: Checkmark';