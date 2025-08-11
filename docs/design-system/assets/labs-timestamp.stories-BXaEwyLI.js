import"./labs-timestamp-DgxLifyK.js";const g={title:"Components/Timestamp",parameters:{docs:{description:{component:"Timestamp component matching tracker app styling. Provides consistent time and date formatting with design token integration and accessibility features."}}},argTypes:{datetime:{control:"text",description:"ISO datetime string or timestamp"},format:{control:{type:"select"},options:["time","date-header","short-date"],description:"Display format"},size:{control:{type:"select"},options:["small","normal","large"],description:"Size variant"},interactive:{control:"boolean",description:"Enable hover effects for clickable timestamps"}}},l=t=>(setTimeout(()=>{document.addEventListener("click",s=>{s.target.tagName==="LABS-TIMESTAMP"&&console.log("Timestamp clicked:",s.target.getFormattedText())})},100),`
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
        datetime="${t.datetime||new Date().toISOString()}"
        format="${t.format||"time"}"
        size="${t.size||"normal"}"
        ${t.interactive?"interactive":""}
      ></labs-timestamp>
    </div>
  `),e=l.bind({});e.args={datetime:new Date().toISOString(),format:"time",size:"normal",interactive:!1};e.parameters={docs:{description:{story:"Time format matching tracker app style: H:MM AM/PM (e.g., 4:42 PM). Uses non-padded hours for natural reading."}}};const a=l.bind({});a.args={datetime:new Date().toISOString(),format:"date-header",size:"normal",interactive:!1};a.parameters={docs:{description:{story:"Date header format matching tracker app: Weekday, Month Day, Year (e.g., Monday, January 15, 2024). Bold and centered styling."}}};const i=l.bind({});i.args={datetime:new Date().toISOString(),format:"short-date",size:"normal",interactive:!1};i.parameters={docs:{description:{story:"Short date format for compact display: Month Day (e.g., Jan 15). Useful for task lists and compact interfaces."}}};const p=()=>{const t=new Date,s=new Date(t.getFullYear(),t.getMonth(),t.getDate(),9,15),d=new Date(t.getFullYear(),t.getMonth(),t.getDate(),14,30),c=new Date(t.getFullYear(),t.getMonth(),t.getDate(),21,45),r=new Date(t);r.setDate(r.getDate()-1);const m=new Date(t);return m.setDate(m.getDate()+7),setTimeout(()=>{document.addEventListener("click",o=>{o.target.tagName==="LABS-TIMESTAMP"&&console.log("Timestamp clicked:",o.target.getFormattedText(),o.target.getDateTime())})},100),`
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
            <labs-timestamp datetime="${s.toISOString()}" format="time" size="small"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Normal</div>
            <labs-timestamp datetime="${d.toISOString()}" format="time" size="normal"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Large</div>
            <labs-timestamp datetime="${c.toISOString()}" format="time" size="large"></labs-timestamp>
          </div>
        </div>
      </div>
      
      <div class="variant-section">
        <h3>Date Header Variants</h3>
        <p class="description">Date headers for section organization, matching tracker styling</p>
        <div class="timestamp-group">
          <div class="timestamp-item">
            <div class="label">Today</div>
            <labs-timestamp datetime="${t.toISOString()}" format="date-header" size="normal"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Yesterday</div>
            <labs-timestamp datetime="${r.toISOString()}" format="date-header" size="normal"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Next Week</div>
            <labs-timestamp datetime="${m.toISOString()}" format="date-header" size="small"></labs-timestamp>
          </div>
        </div>
      </div>

      <div class="variant-section">
        <h3>Short Date Variants</h3>
        <p class="description">Compact date display for task lists and tight layouts</p>
        <div class="timestamp-group">
          <div class="timestamp-item">
            <div class="label">Small</div>
            <labs-timestamp datetime="${r.toISOString()}" format="short-date" size="small"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Normal</div>
            <labs-timestamp datetime="${t.toISOString()}" format="short-date" size="normal"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Large</div>
            <labs-timestamp datetime="${m.toISOString()}" format="short-date" size="large"></labs-timestamp>
          </div>
        </div>
      </div>

      <div class="variant-section">
        <h3>Interactive Usage Example</h3>
        <p class="description">How timestamps work in a typical task list with interactive elements</p>
        <div class="task-list-demo">
          <labs-timestamp datetime="${t.toISOString()}" format="date-header" size="normal"></labs-timestamp>
          
          <div class="task-item">
            <span class="task-text">Morning standup meeting</span>
            <labs-timestamp datetime="${s.toISOString()}" format="time" size="small" interactive></labs-timestamp>
          </div>
          
          <div class="task-item">
            <span class="task-text">Project review session</span>
            <labs-timestamp datetime="${d.toISOString()}" format="time" size="small" interactive></labs-timestamp>
          </div>
          
          <div class="task-item">
            <span class="task-text">Team retrospective</span>
            <labs-timestamp datetime="${c.toISOString()}" format="time" size="small" interactive></labs-timestamp>
          </div>
        </div>
      </div>
    </div>
  `},n=p.bind({});n.parameters={docs:{description:{story:"Complete showcase of timestamp variants showing all formats, sizes, and interactive states. Demonstrates real-world usage patterns in task lists and time tracking interfaces."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    document.addEventListener('click', e => {
      if (e.target.tagName === 'LABS-TIMESTAMP') {
        console.log('Timestamp clicked:', e.target.getFormattedText());
      }
    });
  }, 100);
  return \`
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
        datetime="\${args.datetime || new Date().toISOString()}"
        format="\${args.format || 'time'}"
        size="\${args.size || 'normal'}"
        \${args.interactive ? 'interactive' : ''}
      ></labs-timestamp>
    </div>
  \`;
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    document.addEventListener('click', e => {
      if (e.target.tagName === 'LABS-TIMESTAMP') {
        console.log('Timestamp clicked:', e.target.getFormattedText());
      }
    });
  }, 100);
  return \`
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
        datetime="\${args.datetime || new Date().toISOString()}"
        format="\${args.format || 'time'}"
        size="\${args.size || 'normal'}"
        \${args.interactive ? 'interactive' : ''}
      ></labs-timestamp>
    </div>
  \`;
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    document.addEventListener('click', e => {
      if (e.target.tagName === 'LABS-TIMESTAMP') {
        console.log('Timestamp clicked:', e.target.getFormattedText());
      }
    });
  }, 100);
  return \`
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
        datetime="\${args.datetime || new Date().toISOString()}"
        format="\${args.format || 'time'}"
        size="\${args.size || 'normal'}"
        \${args.interactive ? 'interactive' : ''}
      ></labs-timestamp>
    </div>
  \`;
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
    document.addEventListener('click', e => {
      if (e.target.tagName === 'LABS-TIMESTAMP') {
        console.log('Timestamp clicked:', e.target.getFormattedText(), e.target.getDateTime());
      }
    });
  }, 100);
  return \`
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
            <labs-timestamp datetime="\${morning.toISOString()}" format="time" size="small"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Normal</div>
            <labs-timestamp datetime="\${afternoon.toISOString()}" format="time" size="normal"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Large</div>
            <labs-timestamp datetime="\${evening.toISOString()}" format="time" size="large"></labs-timestamp>
          </div>
        </div>
      </div>
      
      <div class="variant-section">
        <h3>Date Header Variants</h3>
        <p class="description">Date headers for section organization, matching tracker styling</p>
        <div class="timestamp-group">
          <div class="timestamp-item">
            <div class="label">Today</div>
            <labs-timestamp datetime="\${now.toISOString()}" format="date-header" size="normal"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Yesterday</div>
            <labs-timestamp datetime="\${yesterday.toISOString()}" format="date-header" size="normal"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Next Week</div>
            <labs-timestamp datetime="\${nextWeek.toISOString()}" format="date-header" size="small"></labs-timestamp>
          </div>
        </div>
      </div>

      <div class="variant-section">
        <h3>Short Date Variants</h3>
        <p class="description">Compact date display for task lists and tight layouts</p>
        <div class="timestamp-group">
          <div class="timestamp-item">
            <div class="label">Small</div>
            <labs-timestamp datetime="\${yesterday.toISOString()}" format="short-date" size="small"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Normal</div>
            <labs-timestamp datetime="\${now.toISOString()}" format="short-date" size="normal"></labs-timestamp>
          </div>
          <div class="timestamp-item">
            <div class="label">Large</div>
            <labs-timestamp datetime="\${nextWeek.toISOString()}" format="short-date" size="large"></labs-timestamp>
          </div>
        </div>
      </div>

      <div class="variant-section">
        <h3>Interactive Usage Example</h3>
        <p class="description">How timestamps work in a typical task list with interactive elements</p>
        <div class="task-list-demo">
          <labs-timestamp datetime="\${now.toISOString()}" format="date-header" size="normal"></labs-timestamp>
          
          <div class="task-item">
            <span class="task-text">Morning standup meeting</span>
            <labs-timestamp datetime="\${morning.toISOString()}" format="time" size="small" interactive></labs-timestamp>
          </div>
          
          <div class="task-item">
            <span class="task-text">Project review session</span>
            <labs-timestamp datetime="\${afternoon.toISOString()}" format="time" size="small" interactive></labs-timestamp>
          </div>
          
          <div class="task-item">
            <span class="task-text">Team retrospective</span>
            <labs-timestamp datetime="\${evening.toISOString()}" format="time" size="small" interactive></labs-timestamp>
          </div>
        </div>
      </div>
    </div>
  \`;
}`,...n.parameters?.docs?.source}}};const f=["TimeFormat","DateHeader","ShortDate","TimestampVariants"];export{a as DateHeader,i as ShortDate,e as TimeFormat,n as TimestampVariants,f as __namedExportsOrder,g as default};
