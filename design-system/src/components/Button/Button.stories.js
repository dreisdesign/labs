
import { Button } from './Button.jsx';

export default {
    title: 'Components/Button',
    render: (args) => Button(args),
    tags: ['autodocs'],
};

export const Default = {
    args: {
        label: 'Button',
    },
};

export const Primary = {
    args: {
        label: 'Primary',
        style: { background: '#007bff', color: '#fff', border: 'none', padding: '0.5em 1em', borderRadius: '4px' },
    },
};

export const Danger = {
    args: {
        label: 'Danger',
        style: { background: '#dc3545', color: '#fff', border: 'none', padding: '0.5em 1em', borderRadius: '4px' },
    },
};
