import"./labs-input-overlay-287kZ68B.js";import"./labs-button-DEUKwH7W.js";import"./labs-icon-BgHZyyah.js";import"./labs-input-D7o3KkaA.js";import"./button-configs-CUB_r__D.js";const c={title:"Components/Input Overlay",component:"labs-input-overlay",argTypes:{active:{control:"boolean",description:"Whether the overlay is active/visible"}},parameters:{docs:{description:{component:"Input overlay component for text input dialogs. Used for adding and editing tasks."}}}},a=e=>`
    <div style="position: relative; height: 400px; background: var(--color-surface); padding: 20px; border-radius: 8px;">
      <h3>Input Overlay Demo</h3>
      <p>Click the button below to open the input overlay.</p>
      
      <button 
        onclick="document.querySelector('labs-input-overlay').open('Add Task', 'Enter your task...')"
        style="
          padding: 12px 24px;
          background: var(--color-primary);
          color: var(--color-on-primary);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        "
      >
        Open Input Overlay
      </button>
      
      <labs-input-overlay ${e.active?"active":""}></labs-input-overlay>
      
      <script>
        setTimeout(() => {
          const overlay = document.querySelector('labs-input-overlay');
          
          // Add event listeners for demo purposes
          overlay.addEventListener('task-save', (e) => {
            console.log('Task saved:', e.detail);
            alert('Task saved: "' + e.detail.text + '"');
          });
          
          // If pre-opened, open it with demo content
          ${e.active?"overlay.open('Edit Task', 'Enter your task...', 'Sample task content');":""}
        }, 100);
      <\/script>
    </div>
  `,n=a.bind({});n.args={active:!1};const t=a.bind({});t.args={active:!0};const o=()=>{const e=document.createElement("labs-input-overlay");return e.addEventListener("task-save",r=>{console.log("Task edited:",r.detail),alert(`Task edited: "${r.detail.text}"`)}),`
    <div style="position: relative; height: 400px; background: var(--color-surface); padding: 20px; border-radius: 8px;">
      <h3>Edit Mode Demo</h3>
      <p>This shows the overlay pre-filled with text for editing.</p>
      
      <button 
        onclick="document.querySelector('labs-input-overlay').open('Edit Task', 'Edit your task...', 'Existing task text', 0)"
        style="
          padding: 12px 24px;
          background: var(--color-secondary);
          color: var(--color-on-secondary);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        "
      >
        Edit Existing Task
      </button>
      
      ${e.outerHTML}
    </div>
  `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return \`
    <div style="position: relative; height: 400px; background: var(--color-surface); padding: 20px; border-radius: 8px;">
      <h3>Input Overlay Demo</h3>
      <p>Click the button below to open the input overlay.</p>
      
      <button 
        onclick="document.querySelector('labs-input-overlay').open('Add Task', 'Enter your task...')"
        style="
          padding: 12px 24px;
          background: var(--color-primary);
          color: var(--color-on-primary);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        "
      >
        Open Input Overlay
      </button>
      
      <labs-input-overlay \${args.active ? 'active' : ''}></labs-input-overlay>
      
      <script>
        setTimeout(() => {
          const overlay = document.querySelector('labs-input-overlay');
          
          // Add event listeners for demo purposes
          overlay.addEventListener('task-save', (e) => {
            console.log('Task saved:', e.detail);
            alert('Task saved: "' + e.detail.text + '"');
          });
          
          // If pre-opened, open it with demo content
          \${args.active ? \`overlay.open('Edit Task', 'Enter your task...', 'Sample task content');\` : ''}
        }, 100);
      <\/script>
    </div>
  \`;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return \`
    <div style="position: relative; height: 400px; background: var(--color-surface); padding: 20px; border-radius: 8px;">
      <h3>Input Overlay Demo</h3>
      <p>Click the button below to open the input overlay.</p>
      
      <button 
        onclick="document.querySelector('labs-input-overlay').open('Add Task', 'Enter your task...')"
        style="
          padding: 12px 24px;
          background: var(--color-primary);
          color: var(--color-on-primary);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        "
      >
        Open Input Overlay
      </button>
      
      <labs-input-overlay \${args.active ? 'active' : ''}></labs-input-overlay>
      
      <script>
        setTimeout(() => {
          const overlay = document.querySelector('labs-input-overlay');
          
          // Add event listeners for demo purposes
          overlay.addEventListener('task-save', (e) => {
            console.log('Task saved:', e.detail);
            alert('Task saved: "' + e.detail.text + '"');
          });
          
          // If pre-opened, open it with demo content
          \${args.active ? \`overlay.open('Edit Task', 'Enter your task...', 'Sample task content');\` : ''}
        }, 100);
      <\/script>
    </div>
  \`;
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const overlay = document.createElement('labs-input-overlay');

  // Add event listeners
  overlay.addEventListener('task-save', e => {
    console.log('Task edited:', e.detail);
    alert(\`Task edited: "\${e.detail.text}"\`);
  });
  return \`
    <div style="position: relative; height: 400px; background: var(--color-surface); padding: 20px; border-radius: 8px;">
      <h3>Edit Mode Demo</h3>
      <p>This shows the overlay pre-filled with text for editing.</p>
      
      <button 
        onclick="document.querySelector('labs-input-overlay').open('Edit Task', 'Edit your task...', 'Existing task text', 0)"
        style="
          padding: 12px 24px;
          background: var(--color-secondary);
          color: var(--color-on-secondary);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        "
      >
        Edit Existing Task
      </button>
      
      \${overlay.outerHTML}
    </div>
  \`;
}`,...o.parameters?.docs?.source}}};const u=["Default","PreOpened","EditMode"];export{n as Default,o as EditMode,t as PreOpened,u as __namedExportsOrder,c as default};
