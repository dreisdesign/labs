import "../components/labs-timestamp.js";

export default {
    title: "Patterns/Date Lists",
    parameters: {
        docs: {
            description: {
                component: "Date list patterns showing how timestamp components organize content by date. Features bold centered date headers matching tracker app styling with grouped content sections.",
            },
        },
    },
};

const DateListTemplate = () => {
    // Create sample data for different days
    const now = new Date();
    const today = new Date(now);

    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);

    const twoDaysAgo = new Date(now);
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    // Sample time entries for each day
    const todayEntries = [
        { time: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 15), text: "Morning standup" },
        { time: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30), text: "Design review" },
        { time: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 45), text: "Development session" },
        { time: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 16, 20), text: "Team sync" },
    ];

    const yesterdayEntries = [
        { time: new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 8, 45), text: "Daily planning" },
        { time: new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 13, 15), text: "Client call" },
        { time: new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 17, 30), text: "Code review" },
    ];

    const twoDaysAgoEntries = [
        { time: new Date(twoDaysAgo.getFullYear(), twoDaysAgo.getMonth(), twoDaysAgo.getDate(), 10, 0), text: "Sprint planning" },
        { time: new Date(twoDaysAgo.getFullYear(), twoDaysAgo.getMonth(), twoDaysAgo.getDate(), 15, 45), text: "Architecture discussion" },
    ];

    setTimeout(() => {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('time-entry')) {
                console.log('Time entry clicked:', e.target.textContent);
            }
        });
    }, 100);

    return `
    <style>
      .date-list-demo {
        max-width: 500px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .date-section {
        margin-bottom: 2rem;
      }
      
      .date-header {
        margin-top: 1rem;
        margin-bottom: 0.75rem;
      }
      
      .time-entries {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        align-items: center;
      }
      
      .time-entry {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem;
        background: var(--color-surface);
        border-radius: 0.7rem;
        width: 75%;
        max-width: 85%;
        box-sizing: border-box;
        cursor: pointer;
        transition: transform 0.3s ease-out, opacity 0.15s ease-out;
        border: 1px solid var(--color-outline-variant);
        text-align: center;
        color: var(--color-on-surface);
        text-decoration: none;
      }
      
      .time-entry:hover {
        transform: scale(1.02);
        background: var(--color-surface-container-high);
      }
      
      .time-entry:active {
        transform: scale(0.95);
        transition-duration: 0.05s;
      }
      
      .entry-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-xs);
      }
      
      .entry-text {
        font-size: var(--font-size-body);
        font-weight: 500;
        margin-bottom: var(--space-xs);
      }
      
      .stats-header {
        text-align: center;
        margin-bottom: 2rem;
        padding: var(--space-lg);
        background: var(--color-surface-container);
        border-radius: var(--border-radius-lg);
        border: 1px solid var(--color-outline-variant);
      }
      
      .stats-title {
        font-size: var(--font-size-h3);
        font-weight: 600;
        color: var(--color-on-surface);
        margin-bottom: var(--space-sm);
      }
      
      .stats-count {
        font-size: var(--font-size-body);
        color: var(--color-on-surface-variant);
      }

      .empty-state {
        text-align: center;
        color: var(--color-on-surface-variant);
        font-style: italic;
        padding: var(--space-xl);
      }
    </style>
    
    <div class="date-list-demo">
      <div class="stats-header">
        <div class="stats-title">Activity Timeline</div>
        <div class="stats-count">${todayEntries.length + yesterdayEntries.length + twoDaysAgoEntries.length} total entries</div>
      </div>
      
      <div class="date-section">
        <div class="date-header">
          <labs-timestamp datetime="${today.toISOString()}" format="date-header" size="normal"></labs-timestamp>
        </div>
        <div class="time-entries">
          ${todayEntries.map(entry => `
            <div class="time-entry">
              <div class="entry-content">
                <div class="entry-text">${entry.text}</div>
                <labs-timestamp datetime="${entry.time.toISOString()}" format="time" size="normal"></labs-timestamp>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="date-section">
        <div class="date-header">
          <labs-timestamp datetime="${yesterday.toISOString()}" format="date-header" size="normal"></labs-timestamp>
        </div>
        <div class="time-entries">
          ${yesterdayEntries.map(entry => `
            <div class="time-entry">
              <div class="entry-content">
                <div class="entry-text">${entry.text}</div>
                <labs-timestamp datetime="${entry.time.toISOString()}" format="time" size="normal"></labs-timestamp>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="date-section">
        <div class="date-header">
          <labs-timestamp datetime="${twoDaysAgo.toISOString()}" format="date-header" size="normal"></labs-timestamp>
        </div>
        <div class="time-entries">
          ${twoDaysAgoEntries.map(entry => `
            <div class="time-entry">
              <div class="entry-content">
                <div class="entry-text">${entry.text}</div>
                <labs-timestamp datetime="${entry.time.toISOString()}" format="time" size="normal"></labs-timestamp>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
};

export const ActivityTimeline = DateListTemplate.bind({});
ActivityTimeline.parameters = {
    docs: {
        description: {
            story: "Activity timeline showing how date headers organize time entries. Matches tracker app styling with bold centered date headers and clickable time entries.",
        },
    },
};

const TaskListByDateTemplate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    const todayTasks = [
        "Review design system updates",
        "Implement timestamp component",
        "Update Storybook documentation",
        "Team standup meeting"
    ];

    const tomorrowTasks = [
        "Begin Bundle 3 development",
        "Dark mode icon fixes",
        "Header component design"
    ];

    const nextWeekTasks = [
        "Sprint retrospective",
        "Plan next iteration"
    ];

    return `
    <style>
      .task-list-demo {
        max-width: 450px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .date-section {
        margin-bottom: 2rem;
      }
      
      .date-header {
        margin-bottom: 1rem;
      }
      
      .task-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }
      
      .task-item {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        padding: var(--space-md);
        background: var(--color-surface);
        border-radius: var(--border-radius-md);
        border: 1px solid var(--color-outline-variant);
        transition: background-color 0.2s ease;
      }
      
      .task-item:hover {
        background: var(--color-surface-container-high);
      }
      
      .task-checkbox {
        width: 20px;
        height: 20px;
        border: 2px solid var(--color-outline);
        border-radius: var(--border-radius-sm);
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .task-checkbox:hover {
        border-color: var(--color-primary);
      }
      
      .task-text {
        flex: 1;
        color: var(--color-on-surface);
        font-size: var(--font-size-body);
      }
      
      .task-due {
        font-size: var(--font-size-body-sm);
        color: var(--color-on-surface-variant);
      }
      
      .section-stats {
        text-align: center;
        margin-bottom: 1rem;
        font-size: var(--font-size-body-sm);
        color: var(--color-on-surface-variant);
      }
    </style>
    
    <div class="task-list-demo">
      <div class="date-section">
        <div class="date-header">
          <labs-timestamp datetime="${today.toISOString()}" format="date-header" size="normal"></labs-timestamp>
        </div>
        <div class="section-stats">${todayTasks.length} tasks today</div>
        <div class="task-list">
          ${todayTasks.map(task => `
            <div class="task-item">
              <div class="task-checkbox"></div>
              <div class="task-text">${task}</div>
              <div class="task-due">
                <labs-timestamp datetime="${today.toISOString()}" format="short-date" size="small"></labs-timestamp>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="date-section">
        <div class="date-header">
          <labs-timestamp datetime="${tomorrow.toISOString()}" format="date-header" size="normal"></labs-timestamp>
        </div>
        <div class="section-stats">${tomorrowTasks.length} tasks scheduled</div>
        <div class="task-list">
          ${tomorrowTasks.map(task => `
            <div class="task-item">
              <div class="task-checkbox"></div>
              <div class="task-text">${task}</div>
              <div class="task-due">
                <labs-timestamp datetime="${tomorrow.toISOString()}" format="short-date" size="small"></labs-timestamp>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="date-section">
        <div class="date-header">
          <labs-timestamp datetime="${nextWeek.toISOString()}" format="date-header" size="normal"></labs-timestamp>
        </div>
        <div class="section-stats">${nextWeekTasks.length} tasks planned</div>
        <div class="task-list">
          ${nextWeekTasks.map(task => `
            <div class="task-item">
              <div class="task-checkbox"></div>
              <div class="task-text">${task}</div>
              <div class="task-due">
                <labs-timestamp datetime="${nextWeek.toISOString()}" format="short-date" size="small"></labs-timestamp>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
};

export const TasksByDate = TaskListByDateTemplate.bind({});
TasksByDate.parameters = {
    docs: {
        description: {
            story: "Task list organized by date headers. Shows how timestamp components create clear visual hierarchy for planning and organization interfaces.",
        },
    },
};
