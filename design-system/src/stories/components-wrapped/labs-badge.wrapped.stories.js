import '../../components/labs-badge.js';

export default {
    title: '3. Components (Wrapped)/Badge',
    component: 'labs-badge',
};

export const Success = {
    name: 'Success',
    render: () => `
    <labs-badge variant="success">Success</labs-badge>
  `,
};

export const Warning = {
    name: 'Warning',
    render: () => `
    <labs-badge variant="warning">Warning</labs-badge>
  `,
};

export const Error = {
    name: 'Error',
    render: () => `
    <labs-badge variant="error">Error</labs-badge>
  `,
};

export const Secondary = {
    name: 'Secondary',
    render: () => `
    <labs-badge variant="secondary">Secondary</labs-badge>
  `,
};

export const Primary = {
    name: 'Primary (Default)',
    render: () => `
    <labs-badge>Primary</labs-badge>
  `,
};