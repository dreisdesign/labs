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
  args: {
    title: "",
    subtitle: "",
    variant: "default",
    width: "constrained"
  },
  render: (args) => `
    <div style="display: flex; justify-content: center; padding: 2rem; min-height: 200px;">
      <labs-card 
        ${args.title ? `title="${args.title}"` : ''} 
        ${args.subtitle ? `subtitle="${args.subtitle}"` : ''} 
        variant="${args.variant}" 
        width="${args.width}"
      >
        <slot>
          <p>This is default card content. Use the controls above to add title/subtitle, or replace this content with your own components and patterns.</p>
        </slot>
      </labs-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Default empty card with slot content. Use controls to configure title, subtitle, variant, and width. Content goes in the default slot.",
      },
    },
  },
};

export const Elevated = {
  render: () => `
    <div style="display: flex; justify-content: center; padding: 2rem;">
      <labs-card title="Elevated Card" subtitle="With shadow elevation" variant="elevated" width="constrained">
        <p>Clean white background with shadow, ideal for important content that needs to stand out from the page.</p>
      </labs-card>
    </div>
  `,
};

export const Stats = {
  render: () => `
    <div style="display: flex; justify-content: center; padding: 2rem;">
      <labs-card title="Stats Dashboard" subtitle="Data display variant" variant="stats" width="constrained">
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
    </div>
  `,
};

export const Clickable = {
  render: () => `
    <div style="display: flex; justify-content: center; padding: 2rem;">
      <labs-card title="Clickable Card" subtitle="Interactive with hover effects" variant="clickable" width="constrained" onclick="alert('Card clicked!')">
        <p>Hover effects and click events. Perfect for navigation cards or action items that lead to other pages.</p>
      </labs-card>
    </div>
  `,
};

export const Header = {
  args: {
    title: "Header Card",
    subtitle: "Page section header",
    variant: "header",
    width: "full",
    fontSize: "large"
  },
  argTypes: {
    fontSize: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Header title font size'
    }
  },
  render: (args) => `
    <div style="display: flex; justify-content: center; padding: 2rem;">
      <labs-card title="${args.title}" subtitle="${args.subtitle}" variant="${args.variant}" width="${args.width}" style="--card-title-size: var(--font-size-h${args.fontSize === 'small' ? '5' : args.fontSize === 'medium' ? '4' : args.fontSize === 'large' ? '3' : '2'});">
        <p style="text-align: center; color: var(--color-on-surface-variant);">
          Centered title and subtitle, ideal for page sections or dashboard headers that organize content.
        </p>
      </labs-card>
    </div>
  `,
};

