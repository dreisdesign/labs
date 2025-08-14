
import "../components/labs-button.js";
import "../components/labs-icon.js";
import { buttonConfigs } from "../tokens/button-configs.js";
import iconList from "../components/icons-list.js";

export default {
    title: "Patterns/Buttons",
    parameters: {
        docs: {
            description: {
                component: `Pre-configured button patterns for common actions. Each story is fully interactive and can be shared or bookmarked. Use the main Button story for full customization.`,
            },
        },
    },
    argTypes: {
        label: {
            control: "text",
            description: "Button text content",
            table: { category: "Content" },
        },
        style: {
            control: { type: "select" },
            options: ["primary", "secondary", "danger", "transparent"],
            description: "Button style (color/intent)",
            table: { category: "Appearance" },
        },
        shape: {
            control: { type: "inline-radio" },
            options: ["pill", "rounded"],
            description: "Button shape",
            table: { category: "Appearance" },
        },
        container: {
            control: "boolean",
            description: "Full-width container style",
            table: { category: "Appearance" },
        },
        iconLeft: {
            control: { type: 'select' },
            options: ["", ...iconList],
            description: 'Icon name (left side)',
            table: { category: 'Icons' },
        },
        iconRight: {
            control: { type: 'select' },
            options: ["", ...iconList],
            description: 'Icon name (right side)',
            table: { category: 'Icons' },
        },
        iconCenter: {
            control: { type: 'select' },
            options: ["", ...iconList],
            description: 'Icon only (centered)',
            table: { category: 'Icons' },
        },
        checkmark: {
            control: "boolean",
            description: "Show checkmark animation on click",
            table: { category: "State" },
        },
        darkMode: {
            control: "boolean",
            description: "Theme toggle state (for theme toggle button only)",
            table: { category: "State" },
        },
    },
};

const Template = (args) => {
    // Icon-only button logic: always render icon-left, omit label, set aria-label.
    // Note: Hiding iconLeft/iconRight controls in the Storybook UI requires Storybook-level config (not possible in plain JS stories).
    if (args.iconCenter) {
        // Use label if provided, else fallback to icon name for aria-label
        const ariaLabel = args.label && args.label.trim() ? args.label : args.iconCenter;
        return `<labs-button
            icon-left="${args.iconCenter}"
            icon-right=""
            variant="icon"
            aria-label="${ariaLabel}"
            ${args.checkmark ? 'checkmark' : ''}
        ></labs-button>`;
    }
    // Theme toggle button logic
    if (args.label === 'Turn on dark mode' || args.label === 'Turn off dark mode' || args.themeToggle) {
        const isDark = args.darkMode;
        return `<labs-button
            label="${isDark ? 'Turn off dark mode' : 'Turn on dark mode'}"
            icon="${isDark ? 'bedtime_off' : 'bedtime'}"
            variant="${args.variant || 'transparent'}"
            ${args.checkmark ? 'checkmark' : ''}
        ></labs-button>`;
    }
    let variant = args.style || "primary";
    if (args.container) {
        variant = "container";
    } else if (args.shape === "rounded") {
        variant = (args.style === "secondary") ? "rounded-secondary" : "rounded";
    } else if (args.shape === "pill") {
        variant = (args.style === "secondary") ? "pill-secondary" : "pill";
    }
    return `<labs-button
        label="${args.label || ''}"
        variant="${variant}"
        icon-left="${args.iconLeft || ''}"
        icon-right="${args.iconRight || ''}"
        ${args.checkmark ? 'checkmark' : ''}
    ></labs-button>`;
}

// Dedicated Theme Toggle pattern story
export const ThemeToggle = Template.bind({});
ThemeToggle.args = {
    label: 'Turn on dark mode',
    style: 'transparent',
    shape: 'pill',
    container: false,
    iconLeft: '',
    iconRight: '',
    iconCenter: '',
    checkmark: false,
    darkMode: false,
    themeToggle: true
};
ThemeToggle.parameters = {
    docs: {
        description: {
            story: 'Theme toggle button. Use the darkMode control to toggle state. For real app integration, use setupThemeToggle(button) from button-configs.js.'
        }
    }
};

// Alphabetized pattern stories
export const Add = Template.bind({});
const safeArgs = (config) => {
    return {
        ...config,
        iconLeft: config && config.icon ? config.icon : (config && config.iconLeft ? config.iconLeft : ""),
        iconRight: config && config.iconRight ? config.iconRight : "",
    };
};

Add.args = safeArgs(buttonConfigs.add);
if (Add.args.icon) delete Add.args.icon;
Add.parameters = { docs: { description: { story: "Add button preset." } } };

export const AllApps = Template.bind({});
AllApps.args = {
    label: "All Apps",
    style: "transparent",
    shape: "pill",
    container: false,
    iconLeft: "apps",
    iconRight: "",
    checkmark: false
};
AllApps.parameters = { docs: { description: { story: "All Apps button preset (icon centered)." } } };

export const Close = Template.bind({});
Close.args = safeArgs(buttonConfigs.close);
if (Close.args.icon) delete Close.args.icon;
Close.parameters = { docs: { description: { story: "Close button preset." } } };

export const Delete = Template.bind({});
Delete.args = safeArgs(buttonConfigs.delete);
if (Delete.args.icon) delete Delete.args.icon;
Delete.parameters = { docs: { description: { story: "Delete button preset." } } };

export const Edit = Template.bind({});
Edit.args = safeArgs(buttonConfigs.edit);
if (Edit.args.icon) delete Edit.args.icon;
Edit.parameters = { docs: { description: { story: "Edit button preset." } } };

export const ResetAllData = Template.bind({});
ResetAllData.args = safeArgs(buttonConfigs.resetAllData);
if (ResetAllData.args.icon) delete ResetAllData.args.icon;
ResetAllData.parameters = { docs: { description: { story: "Reset All Data button preset." } } };

export const Save = Template.bind({});
Save.args = safeArgs(buttonConfigs.save);
if (Save.args.icon) delete Save.args.icon;
Save.parameters = { docs: { description: { story: "Save button preset." } } };

export const Settings = Template.bind({});
Settings.args = safeArgs(buttonConfigs.settings);
if (Settings.args.icon) delete Settings.args.icon;
Settings.parameters = { docs: { description: { story: "Settings button preset." } } };


export const Undo = Template.bind({});
Undo.args = safeArgs(buttonConfigs.undo);
if (Undo.args.icon) delete Undo.args.icon;
Undo.parameters = { docs: { description: { story: "Undo button preset." } } };

