import "../components/labs-theme-toggle-button.js";

export default {
    title: "Components/Theme Toggle Button",
    parameters: {
        docs: {
            description: {
                component: "Reusable theme toggle button wrapping shared setupThemeToggle logic. Supports transparent, container, and icon variants.",
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["transparent", "container", "icon"],
            description: "Visual style of the toggle button",
        },
    },
};

const Template = ({ variant }) => {
    return `<labs-theme-toggle-button variant="${variant || 'transparent'}"></labs-theme-toggle-button>`;
};

export const Transparent = Template.bind({});
Transparent.args = { variant: "transparent" };

export const Container = Template.bind({});
Container.args = { variant: "container" };

export const Icon = Template.bind({});
Icon.args = { variant: "icon" };
