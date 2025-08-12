import '../components/labs-card.js';
import { createButton } from '../tokens/button-configs.js';

export default {
    title: 'Components/Card',
    component: 'labs-card',
    parameters: {
        docs: {
            description: {
                component: `
**labs-card** is a flexible container component for grouping related content. 

### Key Features:
- **Modular Design:** Self-contained with CSS custom properties
- **Multiple Variants:** Default, elevated, stats, header, compact, outline, clickable
- **Responsive Width:** Auto, full, constrained, or custom CSS values  
- **Theme Integration:** Light/dark mode support with proper contrast
- **Event Handling:** Clickable variant emits 'card-click' events
- **Accessibility:** Proper heading hierarchy and semantic structure

Perfect for dashboard widgets, content previews, settings panels, and activity timelines.
        `,
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
            description: 'Visual style variant'
        },
        width: {
            control: 'select',
            options: ['auto', 'full', 'constrained', '300px', '400px', '500px'],
            description: 'Card width constraint'
        }
    }
};

// Basic Examples
export const Default = {
    args: {
        title: "Default Card",
        subtitle: "Standard card styling with subtle background",
        variant: "default",
        width: "auto"
    },
    render: (args) => `
    <labs-card 
      title="${args.title}" 
      subtitle="${args.subtitle}"
      variant="${args.variant}"
      width="${args.width}">
      <p>This is the default card variant with a subtle background and border. Perfect for general content containers and information displays.</p>
    </labs-card>
  `
};

export const Elevated = {
    args: {
        title: "Elevated Card",
        subtitle: "Card with shadow elevation",
        variant: "elevated",
        width: "auto"
    },
    render: (args) => `
    <labs-card 
      title="${args.title}" 
      subtitle="${args.subtitle}"
      variant="${args.variant}"
      width="${args.width}">
      <p>This elevated card has a shadow and clean white background, making it stand out from the page. Great for important content or primary actions.</p>
    </labs-card>
  `
};

export const Stats = {
    args: {
        title: "Activity Stats",
        subtitle: "Today's Progress",
        variant: "stats",
        width: "constrained"
    },
    render: (args) => `
    <labs-card 
      title="${args.title}" 
      subtitle="${args.subtitle}"
      variant="${args.variant}"
      width="${args.width}">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 16px;">
        <div>
          <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);">12</div>
          <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Completed</div>
        </div>
        <div>
          <div style="font-size: 2rem; font-weight: bold; color: var(--color-secondary);">3</div>
          <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">In Progress</div>
        </div>
        <div>
          <div style="font-size: 2rem; font-weight: bold; color: var(--color-warning);">2</div>
          <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Pending</div>
        </div>
      </div>
    </labs-card>
  `
};

export const Header = {
    args: {
        title: "Page Header",
        subtitle: "Activity Timeline Overview",
        variant: "header",
        width: "full"
    },
    render: (args) => `
    <labs-card 
      title="${args.title}" 
      subtitle="${args.subtitle}"
      variant="${args.variant}"
      width="${args.width}">
      <p style="margin: 0;">This header variant centers the title and subtitle, perfect for page sections or dashboard headers. Use with full width for maximum impact.</p>
    </labs-card>
  `
};

export const Clickable = {
    args: {
        title: "Interactive Card",
        subtitle: "Click me for actions",
        variant: "clickable",
        width: "auto"
    },
    render: (args) => `
    <labs-card 
      title="${args.title}" 
      subtitle="${args.subtitle}"
      variant="${args.variant}"
      width="${args.width}"
      onclick="alert('Card clicked! Event: card-click')">
      <p>This clickable card has hover effects and emits 'card-click' events. Perfect for navigation cards, action items, or interactive content.</p>
      <div style="margin-top: 16px; padding: 12px; background: var(--color-surface-container); border-radius: 8px; font-size: 0.875rem;">
        💡 Try clicking this card to see the event handling in action!
      </div>
    </labs-card>
  `
};

// Width Variants
export const WidthExamples = {
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates different width constraint options for responsive layouts.'
            }
        }
    },
    render: () => `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <labs-card title="Auto Width" subtitle="Adapts to content" variant="default" width="auto">
        <p>This card uses auto width and adapts to its content.</p>
      </labs-card>
      
      <labs-card title="Full Width" subtitle="100% container width" variant="elevated" width="full">
        <p>This card takes the full width of its container.</p>
      </labs-card>
      
      <labs-card title="Constrained Width" subtitle="Max 500px responsive" variant="stats" width="constrained">
        <p>This card is constrained to max 500px but responsive on smaller screens.</p>
      </labs-card>
      
      <labs-card title="Fixed Width" subtitle="Custom 400px width" variant="outline" width="400px">
        <p>This card has a fixed 400px width.</p>
      </labs-card>
    </div>
  `
};

// Layout Patterns  
export const DashboardGrid = {
    parameters: {
        docs: {
            description: {
                story: 'Example dashboard layout using cards in a responsive grid.'
            }
        }
    },
    render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
      <labs-card title="Quick Stats" variant="stats" width="full">
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 12px;">
          <div style="text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);">24</div>
            <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Today</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: var(--color-secondary);">156</div>
            <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">This Week</div>
          </div>
        </div>
      </labs-card>
      
      <labs-card title="Recent Activity" subtitle="Last 7 days" variant="elevated" width="full">
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
          <div style="padding: 8px; background: var(--color-surface-container); border-radius: 6px; font-size: 0.875rem;">
            ✅ Completed daily review
          </div>
          <div style="padding: 8px; background: var(--color-surface-container); border-radius: 6px; font-size: 0.875rem;">
            📝 Updated project notes
          </div>
          <div style="padding: 8px; background: var(--color-surface-container); border-radius: 6px; font-size: 0.875rem;">
            ⏰ Focused work session
          </div>
        </div>
      </labs-card>
      
      <labs-card title="Quick Actions" variant="outline" width="full">
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px;">
          ${createButton('add', { label: 'Add New Item' })}
          ${createButton('settings', { label: 'Open Settings' })}
          ${createButton('allApps', { label: 'View All Apps' })}
        </div>
      </labs-card>
    </div>
  `
};

// Activity Timeline Pattern (Simplified)
export const ActivityTimelinePattern = {
    parameters: {
        docs: {
            description: {
                story: 'Example activity timeline pattern using cards - demonstrates real-world usage.'
            }
        }
    },
    render: () => `
    <div style="max-width: 600px;">
      <labs-card title="Activity Timeline" subtitle="Recent Activity Overview" variant="header" width="full">
        <p style="margin: 0; color: var(--color-on-surface-variant);">
          Track your daily activities and see patterns in your productivity.
        </p>
      </labs-card>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin-top: 24px;">
        <labs-card title="Today's Stats" variant="stats" width="full">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary);">8</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">Completed</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-secondary);">2</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">In Progress</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-error);">1</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">Pending</div>
            </div>
          </div>
        </labs-card>
      </div>
    </div>
  `
};