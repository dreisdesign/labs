import "../components/labs-badge.js";

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

const Template = ({ label, variant }) => {
    return `
        <labs-badge 
            label="${label || 'Badge'}"
            variant="${variant || 'primary'}"
        ></labs-badge>
    `;
};

export const Default = Template.bind({});
Default.args = {
    label: "New",
    variant: "primary",
};
Default.parameters = {
    docs: {
        description: {
            story: "Default badge with comprehensive controls. Explore all variants, sizes, and configurations using the controls panel.",
        },
    },
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Draft",
    variant: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
    label: "Failed",
    variant: "danger",
};

export const Success = Template.bind({});
Success.args = {
    label: "Complete",
    variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
    label: "Pending",
    variant: "warning",
};


