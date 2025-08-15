
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
    },
};


const renderButton = (args) => {
    if (args.iconCenter) {
        const ariaLabel = args.label && args.label.trim() ? args.label : args.iconCenter;
        return `<labs-button
            icon-left="${args.iconCenter}"
            icon-right=""
            variant="icon"
            aria-label="${ariaLabel}"
        ></labs-button>`;
    }
    if (args.label === 'Turn on dark mode' || args.label === 'Turn off dark mode' || args.themeToggle) {
        const isDark = args.darkMode;
        return `<labs-button
            label="${isDark ? 'Turn off dark mode' : 'Turn on dark mode'}"
            icon="${isDark ? 'bedtime_off' : 'bedtime'}"
            variant="transparent"
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
    ></labs-button>`;
};

const safeArgs = (config) => {
    return {
        ...config,
        iconLeft: config && config.icon ? config.icon : (config && config.iconLeft ? config.iconLeft : ""),
        iconRight: config && config.iconRight ? config.iconRight : "",
    };
};

export const ThemeToggle = {
    render: renderButton,
    args: {
        label: 'Turn on dark mode',
        style: 'transparent',
        shape: 'pill',
        container: false,
        iconLeft: '',
        iconRight: '',
        iconCenter: '',
        darkMode: false,
        themeToggle: true
    },
    argTypes: {
        darkMode: {
            control: 'boolean',
            description: 'Theme toggle state (for theme toggle button only)',
            table: { category: 'State' },
        },
    },
    parameters: {
        docs: {
            description: {
                story: 'Theme toggle button. Use the darkMode control to toggle state. For real app integration, use setupThemeToggle(button) from button-configs.js.'
            }
        }
    }
};

export const Add = {
    render: renderButton,
    args: (() => { const a = safeArgs(buttonConfigs.add); if (a.icon) delete a.icon; return a; })(),
    parameters: { docs: { description: { story: "Add button preset." } } }
};

export const AllApps = {
    render: renderButton,
    args: {
        label: "All Apps",
        style: "transparent",
        shape: "pill",
        container: false,
        iconLeft: "apps",
        iconRight: ""
    },
    parameters: { docs: { description: { story: "All Apps button preset (icon centered)." } } }
};

export const Close = {
    render: renderButton,
    args: (() => { const a = safeArgs(buttonConfigs.close); if (a.icon) delete a.icon; return a; })(),
    parameters: { docs: { description: { story: "Close button preset." } } }
};

export const Delete = {
    render: renderButton,
    args: (() => { const a = safeArgs(buttonConfigs.delete); if (a.icon) delete a.icon; return a; })(),
    parameters: { docs: { description: { story: "Delete button preset." } } }
};

export const Edit = {
    render: renderButton,
    args: (() => { const a = safeArgs(buttonConfigs.edit); if (a.icon) delete a.icon; return a; })(),
    parameters: { docs: { description: { story: "Edit button preset." } } }
};

export const ResetAllData = {
    render: renderButton,
    args: (() => { const a = safeArgs(buttonConfigs.resetAllData); if (a.icon) delete a.icon; return a; })(),
    parameters: { docs: { description: { story: "Reset All Data button preset." } } }
};

export const Save = {
    render: renderButton,
    args: (() => { const a = safeArgs(buttonConfigs.save); if (a.icon) delete a.icon; return a; })(),
    parameters: { docs: { description: { story: "Save button preset." } } }
};

export const Settings = {
    render: renderButton,
    args: (() => { const a = safeArgs(buttonConfigs.settings); if (a.icon) delete a.icon; return a; })(),
    parameters: { docs: { description: { story: "Settings button preset." } } }
};

export const Undo = {
    render: renderButton,
    args: (() => { const a = safeArgs(buttonConfigs.undo); if (a.icon) delete a.icon; return a; })(),
    parameters: { docs: { description: { story: "Undo button preset." } } }
};

export const SettingsIconOnly = {
    args: {
        label: "Settings",
        style: "transparent",
        iconLeft: "settings",
        iconRight: "",
        iconCenter: "settings"
    },
    render: renderButton,
    parameters: {
        docs: {
            description: {
                story: "Settings button preset."
            }
        }
    }
};

