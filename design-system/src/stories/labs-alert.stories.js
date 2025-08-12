import "../components/labs-alert.js";

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
            options: ["success", "error", "info"],
            description: "Alert style variant"
        },
        timeout: {
            control: "number",
            description: "Auto-dismiss timeout in milliseconds"
        },
    },
};

const Template = (args) => {
    setTimeout(() => {
        const alert = document.querySelector('labs-alert');

        // Trigger buttons to show different alerts
        const successButton = document.querySelector('.trigger-success');
        const errorButton = document.querySelector('.trigger-error');
        const infoButton = document.querySelector('.trigger-info');
        const copyButton = document.querySelector('.trigger-copy');

        successButton?.addEventListener('click', () => {
            alert.show(args.message || "Action completed successfully", "success", args.timeout || 2000);
        });

        errorButton?.addEventListener('click', () => {
            alert.show("Something went wrong", "error", args.timeout || 3000);
        });

        infoButton?.addEventListener('click', () => {
            alert.show("Here's some information", "info", args.timeout || 2000);
        });

        copyButton?.addEventListener('click', () => {
            alert.show("Copied to clipboard", "success", 1500);
        });

        // Handle alert events
        document.addEventListener('labs-alert-show', (e) => {
            console.log('Alert shown:', e.detail);
        });

        document.addEventListener('labs-alert-dismiss', (e) => {
            console.log('Alert dismissed:', e.detail);
        });
    }, 100);

    return `
        <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <h3 style="margin: 0 0 2rem 0;">Click buttons to trigger alerts</h3>
            
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <labs-button class="trigger-success" variant="primary" label="Success Alert" icon="check"></labs-button>
                <labs-button class="trigger-error" variant="danger" label="Error Alert" icon="cancel"></labs-button>
                <labs-button class="trigger-info" variant="secondary" label="Info Alert" icon="info"></labs-button>
                <labs-button class="trigger-copy" variant="transparent" label="Copy Alert" icon="content_copy"></labs-button>
            </div>

            <p style="margin: 2rem 0 0 0; color: var(--color-text-secondary); font-size: var(--font-size-small); text-align: center; max-width: 400px;">
                Alerts appear at the bottom center of the screen and auto-dismiss after the specified timeout. 
                They follow the same pattern as the tracker app's success messages.
            </p>
        </div>
        
        <!-- Alert component instance -->
        <labs-alert></labs-alert>
    `;
};

export const Default = Template.bind({});
Default.args = {
    message: "Action completed successfully",
    variant: "success",
    timeout: 2000,
};
Default.parameters = {
    docs: {
        description: {
            story: "Interactive alert component with trigger buttons. Use controls to modify message, variant (success, error, info), and timeout duration. Click buttons to see alerts in action.",
        },
    },
};

export const AllVariants = () => {
    setTimeout(() => {
        // Auto-trigger all alert variants for showcase
        const alert = document.querySelector('labs-alert');

        setTimeout(() => alert?.show("Success: Action completed", "success", 2000), 500);
        setTimeout(() => alert?.show("Error: Something went wrong", "error", 3000), 2800);
        setTimeout(() => alert?.show("Info: Here's some information", "info", 2000), 6200);
    }, 100);

    return `
        <div style="padding: 2rem; text-align: center;">
            <h3 style="margin: 0 0 1rem 0;">All Alert Variants</h3>
            <p style="color: var(--color-text-secondary); margin-bottom: 2rem;">
                Watch as each variant displays automatically with proper timing
            </p>
            
            <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem;">
                <div style="padding: 1rem; border: 1px solid var(--color-outline); border-radius: 8px; text-align: left;">
                    <strong>Success:</strong> Green background, checkmark icon<br>
                    <em>Used for: Completions, saves, copies</em>
                </div>
                <div style="padding: 1rem; border: 1px solid var(--color-outline); border-radius: 8px; text-align: left;">
                    <strong>Error:</strong> Red background, cancel icon<br>
                    <em>Used for: Failures, validation errors</em>
                </div>
                <div style="padding: 1rem; border: 1px solid var(--color-outline); border-radius: 8px; text-align: left;">
                    <strong>Info:</strong> Blue background, info icon<br>
                    <em>Used for: General notifications</em>
                </div>
            </div>
            
            <labs-alert></labs-alert>
        </div>
    `;
};
AllVariants.parameters = {
    docs: {
        description: {
            story: "Automatic showcase of all alert variants (success, error, info) with their semantic meanings and use cases. Each variant has appropriate colors, icons, and timing.",
        },
    },
};
