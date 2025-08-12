import "../components/labs-alert.js";
import "../components/labs-button.js";

export default {
    title: "Components/Alert",
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: "Comprehensive toast-style notification component. Shows success, error, or info messages with auto-dismiss functionality. Use controls to explore all variants or 'Show code' for implementation.",
            },
        },
    },
    argTypes: {
        message: {
            control: "text",
            description: "Message shown in the alert"
        },
        variant: {
            control: { type: "select" },
            options: ["success", "error", "warning", "info"],
            description: "Alert style variant"
        },
        timeout: {
            control: "number",
            description: "Auto-dismiss timeout in milliseconds"
        },
    },
};

const Template = (args) => {
    // Use customElements.whenDefined to ensure proper component loading
    customElements.whenDefined('labs-alert').then(() => {
        customElements.whenDefined('labs-button').then(() => {
            setTimeout(() => {
                const alert = document.querySelector('labs-alert');
                const triggerButton = document.querySelector('.trigger-alert');

                if (!triggerButton || triggerButton._listenerAdded) return;
                triggerButton._listenerAdded = true;

                triggerButton.addEventListener('click', () => {
                    if (alert && alert.show) {
                        alert.show(args.message, args.variant, args.timeout);
                    }
                });
            }, 100);
        });
    });

    return `
        <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <h3 style="margin: 0 0 2rem 0;">Click button to trigger alert</h3>
            
            <labs-button class="trigger-alert" variant="primary" label="Show ${args.variant || 'success'} Alert" icon="${args.variant === 'error' ? 'cancel' : args.variant === 'warning' ? 'warning' : args.variant === 'info' ? 'change_circle' : 'check'}"></labs-button>

            <p style="margin: 2rem 0 0 0; color: var(--color-text-secondary); font-size: var(--font-size-small); text-align: center; max-width: 400px;">
                Alerts appear at the bottom center of the screen and auto-dismiss after the specified timeout. 
                Use controls to test different variants, messages, and timeouts.
            </p>
        </div>
        
        <!-- Alert component instance -->
        <labs-alert></labs-alert>
    `;
};

export const Success = Template.bind({});
Success.args = {
    message: "Task completed successfully!",
    variant: "success",
    timeout: 3000,
};
Success.parameters = {
    docs: {
        description: {
            story: "Success alert with interactive controls. Use controls to explore different messages and timeout durations.",
        },
    },
};

export const Error = Template.bind({});
Error.args = {
    message: "Something went wrong. Please try again.",
    variant: "error",
    timeout: 4000,
};

export const Warning = Template.bind({});
Warning.args = {
    message: "Warning: Please check your input.",
    variant: "warning",
    timeout: 3000,
};

export const Info = Template.bind({});
Info.args = {
    message: "Here's some helpful information for you.",
    variant: "info",
    timeout: 3000,
};
