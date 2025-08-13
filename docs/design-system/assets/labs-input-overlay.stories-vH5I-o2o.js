import"./labs-input-overlay-bbrbA_Lz.js";import"./labs-button-BCzBXzvm.js";import"./labs-icon-BWc3JKvc.js";import"./labs-input-D7o3KkaA.js";import"./button-configs-BVqnbxg1.js";const l={title:"Patterns/Input Overlay",component:"labs-input-overlay",tags:["autodocs"],argTypes:{active:{control:"boolean",description:"Whether the overlay is active/visible"},title:{control:"text",description:"Overlay title text"},placeholder:{control:"text",description:"Input placeholder text"}},parameters:{docs:{description:{component:"Modal input overlay pattern for task creation and editing. Features automatic focus, keyboard shortcuts (Enter to submit, Escape to close), and icon-only close button. Commonly used for adding/editing tasks in productivity apps."}}}},n=o=>`
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
      
      <labs-input-overlay ${o.active?"active":""}></labs-input-overlay>
      
      <script>
        setTimeout(() => {
          const overlay = document.querySelector('labs-input-overlay');
          
          // Add event listeners for demo purposes
          overlay.addEventListener('task-save', (e) => {
            console.log('Task saved:', e.detail);
            alert('Task saved: "' + e.detail.text + '"');
          });
          
          // If pre-opened, open it with demo content
          ${o.active?"overlay.open('Edit Task', 'Enter your task...', 'Sample task content');":""}
        }, 100);
      <\/script>
    </div>
  `,e=n.bind({});e.args={active:!1,title:"Add Task",placeholder:"Enter your task..."};e.parameters={docs:{description:{story:"Input overlay in opened state. Click the trigger button to test the interaction flow with automatic input focus, keyboard shortcuts (Enter to submit, Escape to close), and icon-only close button."}}};const t=n.bind({});t.args={active:!1};t.parameters={docs:{description:{story:"Closed/inactive state. Click the trigger button to open the overlay and test the interaction flow."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
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
}`,...t.parameters?.docs?.source}}};const c=["Opened","Closed"];export{t as Closed,e as Opened,c as __namedExportsOrder,l as default};
