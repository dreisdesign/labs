import "../components/labs-timestamp.js";

export default {
  title: "Components/Timestamp",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "Timestamp component matching tracker app styling. Provides consistent time and date formatting with design token integration and accessibility features.",
      },
    },
  },
  argTypes: {
    datetime: {
      control: "text",
      description: "ISO datetime string or timestamp"
    },
    format: {
      control: { type: "select" },
      options: ["time", "date-header", "short-date"],
      description: "Display format"
    },
    size: {
      control: { type: "select" },
      options: ["small", "normal", "large"],
      description: "Size variant"
    },
    interactive: {
      control: "boolean",
      description: "Enable hover effects for clickable timestamps"
    },
  },
};

const Template = (args) => {
  setTimeout(() => {
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'LABS-TIMESTAMP') {
        console.log('Timestamp clicked:', e.target.getFormattedText());
      }
    });
  }, 100);

  return `
    <style>
      .timestamp-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
        text-align: center;
      }
    </style>
    
    <div class="timestamp-demo">
      <labs-timestamp 
        datetime="${args.datetime || new Date().toISOString()}"
        format="${args.format || 'time'}"
        size="${args.size || 'normal'}"
        ${args.interactive ? 'interactive' : ''}
      ></labs-timestamp>
    </div>
  `;
};

export const Default = Template.bind({});
Default.args = {
  datetime: new Date().toISOString(),
  format: "time",
  size: "normal",
  interactive: false,
};
Default.parameters = {
  docs: {
    description: {
      story: "Default timestamp component. Use controls to explore all formats (time, date-header, short-date), sizes (small, normal, large), and interactive states. Matches tracker app styling.",
    },
  },
};

export const FormatExamples = () => {
  const now = new Date();
  const morning = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 15);

  return `
    <div style="display: flex; gap: 2rem; justify-content: center; align-items: center; flex-wrap: wrap; padding: 2rem;">
      <div style="text-align: center; padding: 1rem; border: 1px solid var(--color-outline); border-radius: 8px;">
        <div style="margin-bottom: 0.5rem; font-weight: bold;">Time Format</div>
        <labs-timestamp datetime="${morning.toISOString()}" format="time"></labs-timestamp>
        <div style="font-size: var(--font-size-small); color: var(--color-text-secondary); margin-top: 0.5rem;">H:MM AM/PM</div>
      </div>
      
      <div style="text-align: center; padding: 1rem; border: 1px solid var(--color-outline); border-radius: 8px;">
        <div style="margin-bottom: 0.5rem; font-weight: bold;">Date Header</div>
        <labs-timestamp datetime="${now.toISOString()}" format="date-header"></labs-timestamp>
        <div style="font-size: var(--font-size-small); color: var(--color-text-secondary); margin-top: 0.5rem;">Full date</div>
      </div>
      
      <div style="text-align: center; padding: 1rem; border: 1px solid var(--color-outline); border-radius: 8px;">
        <div style="margin-bottom: 0.5rem; font-weight: bold;">Short Date</div>
        <labs-timestamp datetime="${now.toISOString()}" format="short-date"></labs-timestamp>
        <div style="font-size: var(--font-size-small); color: var(--color-text-secondary); margin-top: 0.5rem;">Month Day</div>
      </div>
    </div>
  `;
};
FormatExamples.parameters = {
  docs: {
    description: {
      story: "Quick comparison of all timestamp formats: time (H:MM AM/PM), date-header (full date), and short-date (Month Day). Each format serves specific UI needs.",
    },
  },
};

const TimestampVariantsTemplate = () => {
  // Create sample times throughout the day
  const now = new Date();
  const morning = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 15);
  const afternoon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30);
  const evening = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21, 45);

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);

  const nextWeek = new Date(now);
  nextWeek.setDate(nextWeek.getDate() + 7);

  setTimeout(() => {
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'LABS-TIMESTAMP') {
        console.log('Timestamp clicked:', e.target.getFormattedText(), e.target.getDateTime());
      }
    });
  }, 100);

  return `
    <style>
      .variants-demo {
        max-width: 600px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .variant-section {
        margin-bottom: 2rem;
        padding: 1.5rem;
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--border-radius-lg);
        background: var(--color-surface-container);
      }
      
      .variant-section h3 {
        margin-bottom: 1rem;
        color: var(--color-on-surface);
        font-size: var(--font-size-h4);
      }
      
      .timestamp-group {
        display: flex;
        gap: var(--space-lg);
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
      }
      
      .timestamp-item {
        text-align: center;
        padding: var(--space-md);
        border-radius: var(--border-radius-md);
        background: var(--color-surface);
        border: 1px solid var(--color-outline-variant);
        min-width: 120px;
      }
      
      .timestamp-item .label {
        font-size: var(--font-size-body-sm);
        color: var(--color-on-surface-variant);
        margin-bottom: var(--space-sm);
      }
      
      .description {
        color: var(--color-on-surface-variant);
        font-size: var(--font-size-body-sm);
        margin-bottom: 1rem;
      }

      .task-list-demo {
        background: var(--color-surface);
        border-radius: var(--border-radius-md);
        padding: var(--space-lg);
        border: 1px solid var(--color-outline-variant);
      }

      .task-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-md);
        border-bottom: 1px solid var(--color-outline-variant);
      }

      .task-item:last-child {
        border-bottom: none;
      }

      .task-text {
        color: var(--color-on-surface);
      }
    </style>
    
    <div class="variants-demo">
      <div class="variant-section">
        <h3>Time Format Variants</h3>
        <p class="description">Time display in tracker app style with different sizes</p>
        <div class="timestamp-group">
          <div class="timestamp-item">
            <div class="label">Small</div>
            <labs-timestamp datetime="${morning.toISOString()}" format="time" size="small"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Normal</div>
            <labs-timestamp datetime="${afternoon.toISOString()}" format="time" size="normal"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Large</div>
            <labs-timestamp datetime="${evening.toISOString()}" format="time" size="large"></labs-timestamp>
          </div>
        </div>
      </div>
      
      <div class="variant-section">
        <h3>Date Header Variants</h3>
        <p class="description">Date headers for section organization, matching tracker styling</p>
        <div class="timestamp-group">
          <div class="timestamp-item">
            <div class="label">Today</div>
            <labs-timestamp datetime="${now.toISOString()}" format="date-header" size="normal"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Yesterday</div>
            <labs-timestamp datetime="${yesterday.toISOString()}" format="date-header" size="normal"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Next Week</div>
            <labs-timestamp datetime="${nextWeek.toISOString()}" format="date-header" size="small"></labs-timestamp>
          </div>
        </div>
      </div>

      <div class="variant-section">
        <h3>Short Date Variants</h3>
        <p class="description">Compact date display for task lists and tight layouts</p>
        <div class="timestamp-group">
          <div class="timestamp-item">
            <div class="label">Small</div>
            <labs-timestamp datetime="${yesterday.toISOString()}" format="short-date" size="small"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Normal</div>
            <labs-timestamp datetime="${now.toISOString()}" format="short-date" size="normal"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Large</div>
            <labs-timestamp datetime="${nextWeek.toISOString()}" format="short-date" size="large"></labs-timestamp>
          </div>
        </div>
      </div>

      <div class="variant-section">
        <h3>Interactive Usage Example</h3>
        <p class="description">How timestamps work in a typical task list with interactive elements</p>
        <div class="task-list-demo">
          <labs-timestamp datetime="${now.toISOString()}" format="date-header" size="normal"></labs-timestamp>
          
          <div class="task-item">
            <span class="task-text">Morning standup meeting</span>
            <labs-timestamp datetime="${morning.toISOString()}" format="time" size="small" interactive></labs-timestamp>
          </div>
          
          <div class="task-item">
            <span class="task-text">Project review session</span>
            <labs-timestamp datetime="${afternoon.toISOString()}" format="time" size="small" interactive></labs-timestamp>
          </div>
          
          <div class="task-item">
            <span class="task-text">Team retrospective</span>
            <labs-timestamp datetime="${evening.toISOString()}" format="time" size="small" interactive></labs-timestamp>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const AllVariants = TimestampVariantsTemplate.bind({});
AllVariants.parameters = {
  docs: {
    description: {
      story: "Complete showcase of timestamp variants showing all formats, sizes, and interactive states. Demonstrates real-world usage patterns in task lists and time tracking interfaces matching the tracker app.",
    },
  },
};
