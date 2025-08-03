import "../components/labs-button.js";
import "../components/labs-icon.js";

export default {
  title: "Components/Theme/ThemeToggleButton",
  parameters: {
    docs: {
      description: {
        component:
          "A theme toggle button using <labs-button> and <labs-icon> that manages only its own UI state.",
      },
    },
  },
};

export const ThemeToggleButton = () => {
  // Create a wrapper div to isolate state
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <labs-button id="theme-toggle-btn" icon="bedtime" variant="primary" label="Turn on Dark Mode" iconcolor="var(--color-on-primary)"></labs-button>
  `;
  const btn = wrapper.querySelector("#theme-toggle-btn");

  // Get current theme from document body
  let isDark = document.body.classList.contains("theme-dark");

  function updateButton() {
    btn.setAttribute("icon", isDark ? "bedtime_off" : "bedtime");
    btn.setAttribute(
      "label",
      isDark ? "Turn off Dark Mode" : "Turn on Dark Mode",
    );
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
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
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
};
ThemeToggleButton.storyName = "Theme Toggle Button";
