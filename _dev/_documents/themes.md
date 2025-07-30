
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

## 5. Demo Page Toggle Example
```html
<button id="theme-toggle">Toggle Theme</button>
<script>
  const btn = document.getElementById('theme-toggle');
  btn.onclick = () => {
    document.body.classList.toggle('theme-dark');
    document.body.classList.toggle('theme-light');
  };
  // Optional: auto-detect
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
  }
</script>
```

## 6. Best Practices
- Use only CSS variables for all color and themeable values.
- Keep theme classes at the root (body or html).
- Test all components in both modes in Storybook and the demo.
