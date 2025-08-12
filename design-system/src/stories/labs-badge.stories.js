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
                "success",
                "warning",
                "danger"
            ],
        },
        size: {
            control: { type: "select" },
            description: "Badge size variant",
            options: ["small", "medium", "large"],
        },
        color: {
            control: "color",
            description: "Custom background color (overrides variant)"
        },
    },
};

const Template = ({ label, variant, color, size }) => {
    return `
        <labs-badge 
            label="${label || 'Badge'}"
            variant="${variant || 'default'}"
            ${size ? `size="${size}"` : ''}
            ${color ? `color="${color}"` : ''}
        ></labs-badge>
    `;
};

export const Default = Template.bind({});
Default.args = {
    label: "New",
    variant: "primary",
    size: "medium",
};
Default.parameters = {
    docs: {
        description: {
            story: "Default badge with comprehensive controls. Explore all variants, sizes, and configurations using the controls panel.",
        },
    },
};

export const Primary = Template.bind({});
Primary.args = {
    label: "Important",
    variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Draft",
    variant: "secondary",
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

export const Danger = Template.bind({});
Danger.args = {
    label: "Failed",
    variant: "danger",
};


