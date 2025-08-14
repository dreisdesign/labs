# [ARCHIVED] This document is no longer maintained. See [../DEVELOPMENT.md](../DEVELOPMENT.md) for current documentation.
# Dark & Light Mode Implementation Plan

## 1. CSS Variables & Theme Classes

- Define all color tokens (background, foreground, etc.) as CSS variables.
- Create `.theme-light` and `.theme-dark` classes that set these variables.

## 2. Storybook Integration

- Install and configure `@storybook/addon-themes` in `.storybook/main.js` and `.storybook/preview.js`.
- Register your themes with names, colors, and classes (`theme-light`, `theme-dark`).
- Ensure your component CSS uses the variables, so switching the class changes the theme.

## 3. Demo Page Integration

- Add a `theme-light` or `theme-dark` class to `<body>` or `<html>`.
- Add a toggle button to switch themes (JS toggles the class).
- Optionally, auto-detect system preference with `prefers-color-scheme`.

## 4. CSS Example

```css
.theme-light {
  --background: #fff;
  --foreground: #222;
  /* ... */
}
.theme-dark {
  --background: #222;
  --foreground: #fff;
  /* ... */
}
body {
  background: var(--background);
  color: var(--foreground);
}
```

## 5. Demo Page Theme Toggle Example (with UI State)

It’s best practice to separate the button’s UI state (icon/text) from the actual theme change logic. The button should update its appearance based on the current theme, but the theme change itself should be handled by toggling a class on `<body>` or `<html>`.

```html
<button id="theme-toggle">
  <labs-icon id="theme-icon" name="bedtime"></labs-icon>
  <span id="theme-label">Turn on Dark Mode</span>
</button>
<script>
  const btn = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const label = document.getElementById("theme-label");
  function updateThemeButton() {
    const isDark = document.body.classList.contains("theme-dark");
    icon.setAttribute("name", isDark ? "bedtime_off" : "bedtime");
    label.textContent = isDark ? "Turn off Dark Mode" : "Turn on Dark Mode";
  }
  btn.onclick = () => {
    document.body.classList.toggle("theme-dark");
    document.body.classList.toggle("theme-light");
    updateThemeButton();
  };
  // Optional: auto-detect system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
  }
  updateThemeButton();
</script>
```

**Tip:** In Storybook stories, you can use a similar button for demo purposes that only changes its own state, or you can wire it to actually toggle the theme for the preview. Keeping the UI state and the theme logic separate makes your code more reusable and testable.

## 6. Best Practices

- Use only CSS variables for all color and themeable values.
- Keep theme classes at the root (body or html).
- Test all components in both modes in Storybook and the demo.
