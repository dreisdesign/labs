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
                "default",
                "primary",
                "secondary",
                "success",
                "warning",
                "danger",
                "active",
                "outline"
            ],
        },
        color: {
            control: "color",
            description: "Custom background color (overrides variant)"
        },
    },
};

const Template = ({ label, variant, color }) => {
    return `
        <labs-badge 
            label="${label || 'Badge'}"
            variant="${variant || 'default'}"
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

export const Error = Template.bind({});
Error.args = {
  label: "Failed",
  variant: "error",
};

export const Small = Template.bind({});
Small.args = {
  label: "Small",
  variant: "primary",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  label: "Large",
  variant: "primary",
  size: "large",
};const BadgeVariantsTemplate = () => {
    return `
        <style>
            .badge-demo {
                max-width: 600px;
                margin: 0 auto;
                font-family: var(--font-family-primary);
            }
            
            .badge-section {
                margin-bottom: 2rem;
                padding: 1.5rem;
                border: 1px solid var(--color-outline-variant);
                border-radius: var(--border-radius-lg);
                background: var(--color-surface-container);
            }
            
            .badge-section h3 {
                margin-bottom: 1rem;
                color: var(--color-on-surface);
                font-size: var(--font-size-h4);
            }
            
            .badge-group {
                display: flex;
                gap: var(--space-sm);
                flex-wrap: wrap;
                align-items: center;
            }
            
            .description {
                color: var(--color-on-surface-variant);
                font-size: var(--font-size-body-sm);
                margin-bottom: 1rem;
            }
        </style>
        
        <div class="badge-demo">
            <div class="badge-section">
                <h3>Status Badges</h3>
                <p class="description">Common status indicators for system states and user feedback</p>
                <div class="badge-group">
                    <labs-badge label="New" variant="primary"></labs-badge>
                    <labs-badge label="Active" variant="success"></labs-badge>
                    <labs-badge label="Pending" variant="warning"></labs-badge>
                    <labs-badge label="Error" variant="danger"></labs-badge>
                    <labs-badge label="Draft" variant="secondary"></labs-badge>
                </div>
            </div>
            
            <div class="badge-section">
                <h3>Category Labels</h3>
                <p class="description">Content categorization and organizational badges</p>
                <div class="badge-group">
                    <labs-badge label="Design" variant="primary"></labs-badge>
                    <labs-badge label="Development" variant="secondary"></labs-badge>
                    <labs-badge label="Testing" variant="outline"></labs-badge>
                    <labs-badge label="Documentation" variant="default"></labs-badge>
                </div>
            </div>
            
            <div class="badge-section">
                <h3>Custom Colors</h3>
                <p class="description">Badge with custom background colors and automatic contrast</p>
                <div class="badge-group">
                    <labs-badge label="Purple" color="#8b5cf6"></labs-badge>
                    <labs-badge label="Orange" color="#f97316"></labs-badge>
                    <labs-badge label="Teal" color="#0d9488"></labs-badge>
                    <labs-badge label="Pink" color="#ec4899"></labs-badge>
                </div>
            </div>
            
            <div class="badge-section">
                <h3>Usage in Card Headers</h3>
                <p class="description">How badges integrate with other components for status indication</p>
                <div style="background: var(--color-surface); padding: 1rem; border-radius: var(--border-radius-md); border: 1px solid var(--color-outline-variant);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <h4 style="margin: 0; color: var(--color-on-surface);">Button Component</h4>
                        <labs-badge label="Active" variant="active"></labs-badge>
                    </div>
                    <p style="margin: 0; color: var(--color-on-surface-variant); font-size: var(--font-size-body-sm);">Primary button component with full interaction support</p>
                </div>
            </div>
        </div>
    `;
};

export const AllVariants = BadgeVariantsTemplate.bind({});
AllVariants.parameters = {
    docs: {
        description: {
            story: "Comprehensive showcase of all badge variants in real-world usage patterns including status indicators, category labels, and component integration examples.",
        },
    },
};
