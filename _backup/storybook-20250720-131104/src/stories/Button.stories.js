import '../tokens/index.css';
import '../components/button.css';

// Button component factory
function createButton({
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    fullWidth = false,
    icon = false,
    text = 'Button',
    onClick = () => console.log('Button clicked'),
    ...args
}) {
    const button = document.createElement('button');

    // Base classes
    const classes = ['labs-button'];

    // Variant classes
    classes.push(`labs-button--${variant}`);

    // Size classes
    if (size !== 'md') {
        classes.push(`labs-button--${size}`);
    }

    // Modifier classes
    if (fullWidth) classes.push('labs-button--full');
    if (icon) classes.push('labs-button--icon');
    if (loading) classes.push('labs-button--loading');

    button.className = classes.join(' ');
    button.textContent = text;
    button.disabled = disabled || loading;

    if (onClick) {
        button.addEventListener('click', onClick);
    }

    return button;
}

export default {
    title: 'Components/Button',
    tags: ['autodocs'],
    render: ({ ...args }) => {
        return createButton(args);
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'error', 'outline', 'ghost'],
            description: 'Button variant/style'
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Button size'
        },
        text: {
            control: { type: 'text' },
            description: 'Button text content'
        },
        disabled: {
            control: { type: 'boolean' },
            name: 'Inactive',
            description: 'Inactive state'
        },
        loading: {
            control: { type: 'boolean' },
            description: 'Loading state with spinner'
        },
        fullWidth: {
            control: { type: 'boolean' },
            description: 'Full width button'
        },
        icon: {
            control: { type: 'boolean' },
            description: 'Icon-only button (circular)'
        },
        onClick: { action: 'clicked' }
    },
    parameters: {
        docs: {
            description: {
                component: 'Primary interactive element based on Labs design system. Supports multiple variants, sizes, and states extracted from the Tracker app patterns.'
            }
        }
    }
};

// Default story
export const Default = {
    args: {
        text: 'Default Button',
        variant: 'primary',
        size: 'md'
    }
};

// Variant stories
export const Primary = {
    args: {
        text: 'Primary Button',
        variant: 'primary'
    }
};

export const Secondary = {
    args: {
        text: 'Secondary Button',
        variant: 'secondary'
    }
};

export const Success = {
    args: {
        text: 'Success Button',
        variant: 'success'
    }
};

export const Error = {
    args: {
        text: 'Error Button',
        variant: 'error'
    }
};

export const Outline = {
    args: {
        text: 'Outline Button',
        variant: 'outline'
    }
};

export const Ghost = {
    args: {
        text: 'Ghost Button',
        variant: 'ghost'
    }
};

// Size stories
export const Small = {
    args: {
        text: 'Small Button',
        size: 'sm'
    }
};

export const Large = {
    args: {
        text: 'Large Button',
        size: 'lg'
    }
};

// State stories
export const Inactive = {
    args: {
        text: 'Inactive Button',
        disabled: true
    }
}; export const Loading = {
    args: {
        text: 'Loading Button',
        loading: true
    }
};

export const FullWidth = {
    args: {
        text: 'Full Width Button',
        fullWidth: true
    }
};

export const IconButton = {
    args: {
        text: '×',
        icon: true,
        variant: 'ghost'
    }
};

// Interactive playground
export const Playground = {
    args: {
        text: 'Playground Button',
        variant: 'primary',
        size: 'md',
        disabled: false,
        loading: false,
        fullWidth: false,
        icon: false
    }
};

// Button group example
export const ButtonGroup = {
    render: () => {
        const container = document.createElement('div');
        container.className = 'labs-button-group';

        const button1 = createButton({ text: 'Save', variant: 'primary' });
        const button2 = createButton({ text: 'Cancel', variant: 'outline' });

        container.appendChild(button1);
        container.appendChild(button2);

        return container;
    },
    parameters: {
        docs: {
            description: {
                story: 'Buttons can be grouped together using the `labs-button-group` class.'
            }
        }
    }
};
