import"./labs-button-Dqex62K2.js";import"./labs-icon-DLo6WOme.js";const i={title:"Components/Theme/ThemeToggleButton",parameters:{docs:{description:{component:"A theme toggle button using <labs-button> and <labs-icon> that manages only its own UI state."}}}},t=()=>{const r=document.createElement("div");r.innerHTML=`
    <labs-button id="theme-toggle-btn" icon="bedtime" variant="primary" label="Turn on Dark Mode" iconcolor="var(--color-on-primary)"></labs-button>
  `;const o=r.querySelector("#theme-toggle-btn");let e=document.body.classList.contains("theme-dark");function n(){o.setAttribute("icon",e?"bedtime_off":"bedtime"),o.setAttribute("label",e?"Turn off Dark Mode":"Turn on Dark Mode"),o.setAttribute("iconcolor","var(--color-on-primary)")}function s(){e=!e,e?(document.body.classList.add("theme-dark"),document.body.classList.remove("theme-light")):(document.body.classList.add("theme-light"),document.body.classList.remove("theme-dark")),n(),localStorage.setItem("preferred-theme",e?"dark":"light")}o.addEventListener("click",s);const a=localStorage.getItem("preferred-theme"),d=window.matchMedia("(prefers-color-scheme: dark)").matches;return a==="dark"||!a&&d?(e=!0,document.body.classList.add("theme-dark"),document.body.classList.remove("theme-light")):(e=!1,document.body.classList.add("theme-light"),document.body.classList.remove("theme-dark")),n(),r};t.storyName="Theme Toggle Button";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  // Create a wrapper div to isolate state
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
    <labs-button id="theme-toggle-btn" icon="bedtime" variant="primary" label="Turn on Dark Mode" iconcolor="var(--color-on-primary)"></labs-button>
  \`;
  const btn = wrapper.querySelector("#theme-toggle-btn");

  // Get current theme from document body
  let isDark = document.body.classList.contains("theme-dark");
  function updateButton() {
    btn.setAttribute("icon", isDark ? "bedtime_off" : "bedtime");
    btn.setAttribute("label", isDark ? "Turn off Dark Mode" : "Turn on Dark Mode");
    btn.setAttribute("iconcolor", "var(--color-on-primary)");
  }
  function toggleTheme() {
    isDark = !isDark;

    // Toggle theme class on body
    if (isDark) {
      document.body.classList.add("theme-dark");
      document.body.classList.remove("theme-light");
    } else {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
    }

    // Update button appearance
    updateButton();

    // Store preference
    localStorage.setItem("preferred-theme", isDark ? "dark" : "light");
  }
  btn.addEventListener("click", toggleTheme);

  // Initialize theme from localStorage or system preference
  const storedTheme = localStorage.getItem("preferred-theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (storedTheme === "dark" || !storedTheme && systemPrefersDark) {
    isDark = true;
    document.body.classList.add("theme-dark");
    document.body.classList.remove("theme-light");
  } else {
    isDark = false;
    document.body.classList.add("theme-light");
    document.body.classList.remove("theme-dark");
  }
  updateButton();
  return wrapper;
}`,...t.parameters?.docs?.source}}};const l=["ThemeToggleButton"];export{t as ThemeToggleButton,l as __namedExportsOrder,i as default};
