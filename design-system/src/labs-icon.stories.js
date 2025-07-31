
import './components/labs-icon.js';
import iconNames from './components/icons-list.js';

export default {
    title: 'Icons/Default',
    argTypes: {
        name: {
            control: { type: 'select' },
            options: iconNames,
            defaultValue: 'cancel',
        },
        size: {
            control: { type: 'number', min: 16, max: 128, step: 4 },
            description: 'Icon size in pixels',
        },
        color: {
            control: { type: 'color', presetColors: [] },
            description: 'Icon color',
        },
    },
};

export const Default = (args) => {
    const size = args.size || 32;
    const color = args.color || 'currentColor';
    return `<labs-icon name="${args.name}" style="width:${size}px;height:${size}px;color:${color};"></labs-icon>`;
};
Default.args = {
    name: 'cancel',
    size: 32,
    color: 'currentColor',
};

export const __namedExportsOrder = ['Default'];
