import '../components/labs-card.js';
import { createButton } from '../tokens/button-configs.js';

export default {
  title: 'Components/Card',
  component: 'labs-card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Flexible container component for grouping related content. Features multiple variants, responsive width options, and theme integration. Use controls to explore all variants or 'Show code' for implementation.`,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title (optional)'
    },
    subtitle: {
      control: 'text',
      description: 'Card subtitle (optional)'
    },
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'stats', 'header', 'compact', 'outline', 'clickable'],
      description: 'Visual style variant - each serves different content types'
    },
    width: {
      control: 'select',
      options: ['auto', 'full', 'constrained', '300px', '400px', '500px'],
      description: 'Card width constraint for different layout needs'
    }
  }
};

// Basic Examples
export const Default = {
  render: (args) => `
    <div class="card">
      <p>This is a default card using the design system styling. Clean, minimal, and uses CSS custom properties for theming.</p>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Default card component with design system styling. Uses CSS custom properties for theming and consistent spacing/borders.",
      },
    },
  },
};

const CardVariantsTemplate = () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
      <labs-card title="Default" subtitle="Standard styling" variant="default" width="full">
        <p style="margin: 0;">Subtle background with border, perfect for general content.</p>
      </labs-card>
      
      <labs-card title="Elevated" subtitle="Shadow elevation" variant="elevated" width="full">
        <p style="margin: 0;">Clean white background with shadow, ideal for important content.</p>
      </labs-card>
      
      <labs-card title="Stats" subtitle="Data display" variant="stats" width="full">
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem;">
          <div style="text-align: center;">
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary);">24</div>
            <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Completed</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-secondary);">8</div>
            <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">In Progress</div>
          </div>
        </div>
      </labs-card>
      
      <labs-card title="Clickable Card" subtitle="Interactive" variant="clickable" width="full" onclick="alert('Card clicked!')">
        <p style="margin: 0;">Hover effects and click events. Perfect for navigation or actions.</p>
      </labs-card>
    </div>
    
    <labs-card title="Header Card" subtitle="Page section header" variant="header" width="full">
      <p style="margin: 0; text-align: center; color: var(--color-on-surface-variant);">
        Centered title and subtitle, ideal for page sections or dashboard headers.
      </p>
    </labs-card>
`;
CardVariantsTemplate.parameters = {
  docs: {
    description: {
      story: "All card variants showcasing different visual styles: default (subtle), elevated (shadow), stats (data display), clickable (interactive), and header (section titles).",
    },
  },
};

export const AllVariants = CardVariantsTemplate.bind({});
AllVariants.parameters = {
  docs: {
    description: {
      story: "Card component variants showing different states (default, elevated, outline) and content types. Each variant serves specific UI purposes with consistent spacing and theming.",
    },
  },
};

export const LayoutPatterns = () => `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin-bottom: 1rem;">Width Options</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <labs-card title="Auto Width" subtitle="Adapts to content" variant="default" width="auto">
            <p style="margin: 0;">This card uses auto width and adapts to its content.</p>
          </labs-card>
          
          <labs-card title="Full Width" subtitle="100% container width" variant="elevated" width="full">
            <p style="margin: 0;">This card takes the full width of its container.</p>
          </labs-card>
          
          <labs-card title="Constrained Width" subtitle="Max 500px responsive" variant="outline" width="constrained">
            <p style="margin: 0;">This card is constrained to max 500px but responsive on smaller screens.</p>
          </labs-card>
        </div>
      </div>
      
      <div>
        <h3 style="margin-bottom: 1rem;">Dashboard Grid Example</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <labs-card title="Quick Stats" variant="stats" width="full">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 0.75rem;">
              <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary);">156</div>
                <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">This Week</div>
              </div>
              <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-secondary);">24</div>
                <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Today</div>
              </div>
            </div>
          </labs-card>
          
          <labs-card title="Quick Actions" variant="elevated" width="full">
            <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.75rem;">
              ${createButton('add', { label: 'Add New Item' })}
              ${createButton('settings', { label: 'Open Settings' })}
            </div>
          </labs-card>
        </div>
      </div>
    </div>
`;
LayoutPatterns.parameters = {
  docs: {
    description: {
      story: "Real-world layout patterns showing width constraints and dashboard grid usage. Demonstrates responsive behavior and practical card combinations for applications.",
    },
  },
};