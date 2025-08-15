export default {
    title: "Components/Badge",
    component: "labs-badge",
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: "Comprehensive badge component for status indicators and labels. Supports multiple variants, custom colors, and automatic contrast calculation. Use controls to explore all variants or 'Show code' for implementation.",
            },
        },
    },
    argTypes: {
        label: {
            control: "text",
            description: "Badge text content"
        },
        variant: {
            control: { type: "select" },
            description: "Badge appearance variant",
            options: [
                "primary",
                "secondary",
                "danger",
                "success",
                "warning"
            ],
        },
    },
};
import "../components/labs-badge.js";

export const Default = {
    render: (args) => `
        <labs-badge 
            label="${args.label || 'Badge'}"
            variant="${args.variant || 'primary'}"
        ></labs-badge>
    `,
    args: {
        label: "New",
        variant: "primary",
    },
    parameters: {
        docs: {
            description: {
                story: "Default badge with comprehensive controls. Explore all variants, sizes, and configurations using the controls panel."
            }
        }
    }
};

export const Danger = {
    render: (args) => `
        <labs-badge 
            label="${args.label || 'Badge'}"
            variant="${args.variant || 'danger'}"
        ></labs-badge>
    `,
    args: {
        label: "Failed",
        variant: "danger",
    }
};

export const Secondary = {
    render: (args) => `
        <labs-badge 
            label="${args.label || 'Badge'}"
            variant="${args.variant || 'secondary'}"
        ></labs-badge>
    `,
    args: {
        label: "Draft",
        variant: "secondary",
    }
};

export const Success = {
    render: (args) => `
        <labs-badge 
            label="${args.label || 'Badge'}"
            variant="${args.variant || 'success'}"
        ></labs-badge>
    `,
    args: {
        label: "Complete",
        variant: "success",
    }
};

export const Warning = {
    render: (args) => `
        <labs-badge 
            label="${args.label || 'Badge'}"
            variant="${args.variant || 'warning'}"
        ></labs-badge>
    `,
    args: {
        label: "Warning",
        variant: "warning",
    }
};



