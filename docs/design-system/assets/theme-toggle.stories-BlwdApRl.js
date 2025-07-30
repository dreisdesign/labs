import"./labs-button-CTm3BRv_.js";import"./labs-icon-8279HnLw.js";const s={title:"Components/Theme/ThemeToggleButton",parameters:{docs:{description:{component:"A theme toggle button using <labs-button> and <labs-icon> that manages only its own UI state."}}}},t=()=>{const o=document.createElement("div");o.innerHTML=`
    <labs-button id="theme-toggle-btn" icon="bedtime" variant="primary" label="Turn on Dark Mode" iconcolor="var(--color-on-primary)"></labs-button>
  `;const e=o.querySelector("#theme-toggle-btn");let n=!1;function r(){e.setAttribute("icon",n?"bedtime_off":"bedtime"),e.setAttribute("label",n?"Turn off Dark Mode":"Turn on Dark Mode"),e.setAttribute("iconcolor","var(--color-on-primary)")}return e.addEventListener("click",()=>{n=!n,r()}),r(),o};t.storyName="Theme Toggle Button";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  // Create a wrapper div to isolate state
  const wrapper = document.createElement('div');
  wrapper.innerHTML = \`
    <labs-button id="theme-toggle-btn" icon="bedtime" variant="primary" label="Turn on Dark Mode" iconcolor="var(--color-on-primary)"></labs-button>
  \`;
  const btn = wrapper.querySelector('#theme-toggle-btn');
  let isDark = false;
  function updateButton() {
    btn.setAttribute('icon', isDark ? 'bedtime_off' : 'bedtime');
    btn.setAttribute('label', isDark ? 'Turn off Dark Mode' : 'Turn on Dark Mode');
    btn.setAttribute('iconcolor', 'var(--color-on-primary)');
  }
  btn.addEventListener('click', () => {
    isDark = !isDark;
    updateButton();
  });
  updateButton();
  return wrapper;
}`,...t.parameters?.docs?.source}}};const l=["ThemeToggleButton"];export{t as ThemeToggleButton,l as __namedExportsOrder,s as default};
