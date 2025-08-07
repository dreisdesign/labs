import "../components/labs-app-footer.js";

export default {
    title: "Patterns/Footer with Settings",
    component: "labs-app-footer",
    parameters: {
        docs: {
            description: {
                component: `
A footer pattern that combines the footer and settings overlay components for complete functionality.

## Features
- **Pre-composed**: Footer + Settings Overlay already connected
- **Zero Setup**: Just add to your page and handle events
- **Two Variants**: Default glassmorphic and floating styles
- **Event Forwarding**: Forwards all events from child components
- **Simple API**: Minimal attributes, maximum functionality

## Usage
\`\`\`html
<!-- Default footer with settings -->
<labs-app-footer></labs-app-footer>

<!-- Floating variant with custom label -->
<labs-app-footer add-label="Create" variant="floating"></labs-app-footer>
\`\`\`

## Events
- \`add-click\`: Fired when the add button is clicked
- \`action-click\`: Fired when any settings action is clicked (detail.action contains the action)

## When to Use
- **Complete Footer**: When you need footer + settings functionality
- **Quick Setup**: Get full footer experience with minimal code
- **Standard Apps**: Most common footer use case

## When to Use Basic Footer Instead
- **No Settings**: Use \`labs-footer\` component directly when you don't need settings
- **Custom Settings**: Use separate components for non-standard settings overlay
- **Performance Critical**: Use separate components for fine-grained control
        `,
            },
        },
    },
    argTypes: {
        "add-label": {
            control: "text",
            description: "Label for the primary add button",
            defaultValue: "+ Add",
        },
        "variant": {
            control: { type: "select" },
            options: ["default", "floating"],
            description: "Footer variant style",
            defaultValue: "default",
        },
    },
};

export const DefaultFooter = (args) => {
    const appFooter = document.createElement("labs-app-footer");

    if (args["add-label"]) {
        appFooter.setAttribute("add-label", args["add-label"]);
    }

    if (args["variant"]) {
        appFooter.setAttribute("variant", args["variant"]);
    }

    // Demo container
    const container = document.createElement("div");
    container.style.cssText = `
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
  `;

    container.innerHTML = `
    <div style="text-align: center; max-width: 500px; padding: 2rem;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Footer with Settings</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Complete footer with settings overlay pre-connected. Click the settings button to see the overlay in action.
      </p>
    </div>
  `;

    container.appendChild(appFooter);

    // Handle events with error checking
    if (appFooter) {
        appFooter.addEventListener('add-click', () => {
            alert('Add button clicked from app footer pattern!');
        });

        appFooter.addEventListener('action-click', (e) => {
            const action = e.detail.action;

            // Only show alerts for non-theme actions (theme toggle is handled by component)
            if (action !== 'theme-toggle') {
                alert(`Settings action: ${action}`);
            }
        });
    }

    return container;
};

export const FloatingFooter = () => {
    const appFooter = document.createElement("labs-app-footer");
    appFooter.setAttribute("variant", "floating");
    appFooter.setAttribute("add-label", "Create New");

    const container = document.createElement("div");
    container.style.cssText = `
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
  `;

    container.innerHTML = `
    <div style="text-align: center; max-width: 500px; padding: 2rem;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Floating Footer with Settings</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Floating variant with enhanced shadows and custom spacing
      </p>
    </div>
  `;

    container.appendChild(appFooter);

    if (appFooter) {
        appFooter.addEventListener('add-click', () => {
            alert('Create New clicked!');
        });

        appFooter.addEventListener('action-click', (e) => {
            const action = e.detail.action;

            if (action !== 'theme-toggle') {
                alert(`Settings action: ${action}`);
            }
        });
    }

    return container;
};
