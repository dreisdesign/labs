import"./labs-input-D7o3KkaA.js";const p={title:"Components/Input",tags:["autodocs"],parameters:{docs:{description:{component:"Reusable input component with design system integration. Features consistent styling, focus states, accessibility, and event forwarding for parent components."}}},argTypes:{placeholder:{control:"text",description:"Placeholder text shown when input is empty"},value:{control:"text",description:"Initial value of the input"},maxlength:{control:"number",description:"Maximum number of characters allowed"},type:{control:{type:"select"},options:["text","email","password","search","url"],description:"Input type attribute"},disabled:{control:"boolean",description:"Whether the input is disabled"}}},o=e=>(setTimeout(()=>{document.addEventListener("labs-input",n=>{console.log("Input changed:",n.detail.value)}),document.addEventListener("labs-keydown",n=>{n.detail.key==="Enter"&&console.log("Enter pressed with value:",n.detail.value)}),document.addEventListener("labs-focus",n=>{console.log("Input focused")}),document.addEventListener("labs-blur",n=>{console.log("Input blurred")})},100),`
    <style>
      .input-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
    </style>
    
    <div class="input-demo">
      <labs-input 
        placeholder="${e.placeholder||""}"
        value="${e.value||""}"
        maxlength="${e.maxlength||"100"}"
        type="${e.type||"text"}"
        ${e.disabled?"disabled":""}
      ></labs-input>
    </div>
  `),a=o.bind({});a.args={placeholder:"Enter text here...",value:"",maxlength:100,type:"text",disabled:!1};const s=o.bind({});s.args={placeholder:"Enter text here...",value:"Pre-filled value",maxlength:100,type:"text",disabled:!1};const t=o.bind({});t.args={placeholder:"Enter task description...",value:"",maxlength:200,type:"text",disabled:!1};t.parameters={docs:{description:{story:"Input configured for task entry with appropriate placeholder and length limits."}}};const l=o.bind({});l.args={placeholder:"This input is disabled",value:"Cannot edit this text",maxlength:100,type:"text",disabled:!0};const r=()=>(setTimeout(()=>{document.addEventListener("labs-input",e=>{console.log("Input changed:",e.detail.value)}),document.addEventListener("labs-keydown",e=>{e.detail.key==="Enter"&&console.log("Enter pressed on:",e.target.getAttribute("placeholder"))})},100),`
    <style>
      .variants-demo {
        max-width: 500px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .input-group {
        margin-bottom: 1.5rem;
      }
      
      .input-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--color-on-surface);
        font-weight: var(--font-weight-medium);
      }
      
      .input-group .description {
        font-size: var(--font-size-body-sm);
        color: var(--color-on-surface-variant);
        margin-top: 0.5rem;
      }
    </style>
    
    <div class="variants-demo">
      <div class="input-group">
        <label>Task Description</label>
        <labs-input placeholder="Enter task details..." maxlength="200"></labs-input>
        <div class="description">Used for task entry in overlays and forms</div>
      </div>
      
      <div class="input-group">
        <label>Search</label>
        <labs-input type="search" placeholder="Search tasks..." maxlength="100"></labs-input>
        <div class="description">Search variant with appropriate semantics</div>
      </div>
      
      <div class="input-group">
        <label>Email Address</label>
        <labs-input type="email" placeholder="user@example.com" maxlength="100"></labs-input>
        <div class="description">Email input with validation support</div>
      </div>
      
      <div class="input-group">
        <label>Website URL</label>
        <labs-input type="url" placeholder="https://example.com" maxlength="200"></labs-input>
        <div class="description">URL input for web addresses</div>
      </div>
      
      <div class="input-group">
        <label>Notes (Disabled State)</label>
        <labs-input placeholder="Notes are not editable" value="This field is read-only" disabled></labs-input>
        <div class="description">Disabled state for read-only content</div>
      </div>
    </div>
  `),i=r.bind({});i.parameters={docs:{description:{story:"Different input variants and use cases showing the component's flexibility for various data types and contexts."}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    document.addEventListener('labs-input', e => {
      console.log('Input changed:', e.detail.value);
    });
    document.addEventListener('labs-keydown', e => {
      if (e.detail.key === 'Enter') {
        console.log('Enter pressed with value:', e.detail.value);
      }
    });
    document.addEventListener('labs-focus', e => {
      console.log('Input focused');
    });
    document.addEventListener('labs-blur', e => {
      console.log('Input blurred');
    });
  }, 100);
  return \`
    <style>
      .input-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
    </style>
    
    <div class="input-demo">
      <labs-input 
        placeholder="\${args.placeholder || ''}"
        value="\${args.value || ''}"
        maxlength="\${args.maxlength || '100'}"
        type="\${args.type || 'text'}"
        \${args.disabled ? 'disabled' : ''}
      ></labs-input>
    </div>
  \`;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    document.addEventListener('labs-input', e => {
      console.log('Input changed:', e.detail.value);
    });
    document.addEventListener('labs-keydown', e => {
      if (e.detail.key === 'Enter') {
        console.log('Enter pressed with value:', e.detail.value);
      }
    });
    document.addEventListener('labs-focus', e => {
      console.log('Input focused');
    });
    document.addEventListener('labs-blur', e => {
      console.log('Input blurred');
    });
  }, 100);
  return \`
    <style>
      .input-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
    </style>
    
    <div class="input-demo">
      <labs-input 
        placeholder="\${args.placeholder || ''}"
        value="\${args.value || ''}"
        maxlength="\${args.maxlength || '100'}"
        type="\${args.type || 'text'}"
        \${args.disabled ? 'disabled' : ''}
      ></labs-input>
    </div>
  \`;
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    document.addEventListener('labs-input', e => {
      console.log('Input changed:', e.detail.value);
    });
    document.addEventListener('labs-keydown', e => {
      if (e.detail.key === 'Enter') {
        console.log('Enter pressed with value:', e.detail.value);
      }
    });
    document.addEventListener('labs-focus', e => {
      console.log('Input focused');
    });
    document.addEventListener('labs-blur', e => {
      console.log('Input blurred');
    });
  }, 100);
  return \`
    <style>
      .input-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
    </style>
    
    <div class="input-demo">
      <labs-input 
        placeholder="\${args.placeholder || ''}"
        value="\${args.value || ''}"
        maxlength="\${args.maxlength || '100'}"
        type="\${args.type || 'text'}"
        \${args.disabled ? 'disabled' : ''}
      ></labs-input>
    </div>
  \`;
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    document.addEventListener('labs-input', e => {
      console.log('Input changed:', e.detail.value);
    });
    document.addEventListener('labs-keydown', e => {
      if (e.detail.key === 'Enter') {
        console.log('Enter pressed with value:', e.detail.value);
      }
    });
    document.addEventListener('labs-focus', e => {
      console.log('Input focused');
    });
    document.addEventListener('labs-blur', e => {
      console.log('Input blurred');
    });
  }, 100);
  return \`
    <style>
      .input-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
    </style>
    
    <div class="input-demo">
      <labs-input 
        placeholder="\${args.placeholder || ''}"
        value="\${args.value || ''}"
        maxlength="\${args.maxlength || '100'}"
        type="\${args.type || 'text'}"
        \${args.disabled ? 'disabled' : ''}
      ></labs-input>
    </div>
  \`;
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  setTimeout(() => {
    document.addEventListener('labs-input', e => {
      console.log('Input changed:', e.detail.value);
    });
    document.addEventListener('labs-keydown', e => {
      if (e.detail.key === 'Enter') {
        console.log('Enter pressed on:', e.target.getAttribute('placeholder'));
      }
    });
  }, 100);
  return \`
    <style>
      .variants-demo {
        max-width: 500px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .input-group {
        margin-bottom: 1.5rem;
      }
      
      .input-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--color-on-surface);
        font-weight: var(--font-weight-medium);
      }
      
      .input-group .description {
        font-size: var(--font-size-body-sm);
        color: var(--color-on-surface-variant);
        margin-top: 0.5rem;
      }
    </style>
    
    <div class="variants-demo">
      <div class="input-group">
        <label>Task Description</label>
        <labs-input placeholder="Enter task details..." maxlength="200"></labs-input>
        <div class="description">Used for task entry in overlays and forms</div>
      </div>
      
      <div class="input-group">
        <label>Search</label>
        <labs-input type="search" placeholder="Search tasks..." maxlength="100"></labs-input>
        <div class="description">Search variant with appropriate semantics</div>
      </div>
      
      <div class="input-group">
        <label>Email Address</label>
        <labs-input type="email" placeholder="user@example.com" maxlength="100"></labs-input>
        <div class="description">Email input with validation support</div>
      </div>
      
      <div class="input-group">
        <label>Website URL</label>
        <labs-input type="url" placeholder="https://example.com" maxlength="200"></labs-input>
        <div class="description">URL input for web addresses</div>
      </div>
      
      <div class="input-group">
        <label>Notes (Disabled State)</label>
        <labs-input placeholder="Notes are not editable" value="This field is read-only" disabled></labs-input>
        <div class="description">Disabled state for read-only content</div>
      </div>
    </div>
  \`;
}`,...i.parameters?.docs?.source}}};const u=["Default","WithValue","TaskInput","Disabled","InputVariants"];export{a as Default,l as Disabled,i as InputVariants,t as TaskInput,s as WithValue,u as __namedExportsOrder,p as default};
