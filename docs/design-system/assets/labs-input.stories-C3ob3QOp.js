import"./labs-input-D7o3KkaA.js";const o={title:"Components/Input",tags:["autodocs"],parameters:{docs:{description:{component:"Reusable input component with design system integration. Features consistent styling, focus states, accessibility, and event forwarding for parent components."}}},argTypes:{placeholder:{control:"text",description:"Placeholder text shown when input is empty"},value:{control:"text",description:"Initial value of the input"},maxlength:{control:"number",description:"Maximum number of characters allowed"},type:{control:{type:"select"},options:["text","email","password","search","url"],description:"Input type attribute"},inactive:{control:"boolean",description:"Whether the input is inactive"}}},a=n=>(setTimeout(()=>{document.addEventListener("labs-input",e=>{console.log("Input changed:",e.detail.value)}),document.addEventListener("labs-keydown",e=>{e.detail.key==="Enter"&&console.log("Enter pressed with value:",e.detail.value)}),document.addEventListener("labs-focus",e=>{console.log("Input focused")}),document.addEventListener("labs-blur",e=>{console.log("Input blurred")})},100),`
    <style>
      .input-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
    </style>
    
    <div class="input-demo">
      <labs-input 
        placeholder="${n.placeholder||""}"
        value="${n.value||""}"
        maxlength="${n.maxlength||"100"}"
        type="${n.type||"text"}"
        ${n.inactive?"disabled":""}
      ></labs-input>
    </div>
  `),t=a.bind({});t.args={placeholder:"Enter text here...",value:"",maxlength:100,type:"text",inactive:!1};t.parameters={docs:{description:{story:"Default input component with design system styling. Use controls to explore all input types (text, email, password, search, url), states, and attributes. Forwards all standard input events."}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
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
        \${args.inactive ? 'disabled' : ''}
      ></labs-input>
    </div>
  \`;
}`,...t.parameters?.docs?.source}}};const l=["Default"];export{t as Default,l as __namedExportsOrder,o as default};
