// Dynamic icon loading - Vite-friendly approach
// Use the correct base path for both local dev and GitHub Pages
// Icons are served under design-system/icons/ for local dev, icons/ for Storybook
const ICON_BASE = (() => {
  const path = window.location.pathname;
  const hostname = window.location.hostname;

  // GitHub Pages production - always use full path
  if (hostname === 'dreisdesign.github.io') {
    return "/labs/design-system/icons/";
  }

  // Local Storybook development - use relative path
  if (path.includes('iframe.html') || path.includes('storybook') || window.parent !== window) {
    return "/icons/";
  }

  // Default for other local development
  return "/design-system/icons/";
})();
const icons = {
    add: ICON_BASE + 'add--labs-icons.svg',
    add_circle: ICON_BASE + 'add_circle--labs-icons.svg',
    add_comment: ICON_BASE + 'add_comment--labs-icons.svg',
    apps: ICON_BASE + 'apps--labs-icons.svg',
    bedtime: ICON_BASE + 'bedtime--labs-icons.svg',
    bedtime_off: ICON_BASE + 'bedtime_off--labs-icons.svg',
    build: ICON_BASE + 'build--labs-icons.svg',
    cancel: ICON_BASE + 'cancel--labs-icons.svg',
    change_circle: ICON_BASE + 'change_circle--labs-icons.svg',
    check: ICON_BASE + 'check--labs-icons.svg',
    check_box: ICON_BASE + 'check_box--labs-icons.svg',
    check_box_outline_blank: ICON_BASE + 'check_box_outline_blank--labs-icons.svg',
    check_indeterminate_small: ICON_BASE + 'check_indeterminate_small--labs-icons.svg',
    close: ICON_BASE + 'close--labs-icons.svg',
    code: ICON_BASE + 'code--labs-icons.svg',
    colors: ICON_BASE + 'colors--labs-icons.svg',
    comment: ICON_BASE + 'comment--labs-icons.svg',
    content_copy: ICON_BASE + 'content_copy--labs-icons.svg',
    delete_forever: ICON_BASE + 'delete_forever--labs-icons.svg',
    edit: ICON_BASE + 'edit--labs-icons.svg',
    history: ICON_BASE + 'history--labs-icons.svg',
    indeterminate_check_box: ICON_BASE + 'indeterminate_check_box--labs-icons.svg',
    open_in_new: ICON_BASE + 'open_in_new--labs-icons.svg',
    published_with_changes: ICON_BASE + 'published_with_changes--labs-icons.svg',
    rate_review: ICON_BASE + 'rate_review--labs-icons.svg',
    settings: ICON_BASE + 'settings--labs-icons.svg',
    star: ICON_BASE + 'star--labs-icons.svg',
    undo: ICON_BASE + 'undo--labs-icons.svg'
};

class LabsIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name", "width", "height", "color", "style"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  connectedCallback() {
    this.render();

    // Listen for theme changes to re-render when CSS variables change
    this.themeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' &&
          (mutation.attributeName === 'class' &&
            (mutation.target.classList.contains('theme-dark') ||
              mutation.target.classList.contains('theme-light')))) {
          // Theme changed, re-render to update CSS variable resolution
          this.render();
        }
      });
    });

    // Watch for class changes on document.documentElement (where theme classes are applied)
    this.themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  disconnectedCallback() {
    // Clean up theme observer
    if (this.themeObserver) {
      this.themeObserver.disconnect();
    }
  }

  async render() {
    // Modular icon sizing and alignment for design system integration
    const styleBlock = `
      <style>
        :host {
          display: inline-block;
          width: 1em;
          height: 1em;
          vertical-align: middle;
        }
        svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        div {
          width: 100%;
          height: 100%;
          display: block;
        }
      </style>
    `;

    const iconName = this.getAttribute("name");
    let url = icons[iconName];
    // console.log('[labs-icon] render:', { iconName, url, icons });

    if (!url) {
      this.shadowRoot.innerHTML = styleBlock;
      return;
    }

    const style = window.getComputedStyle(this);
    const rawWidth = this.getAttribute("width") || style.width || "1em";
    const rawHeight = this.getAttribute("height") || style.height || "1em";

    // Ensure width and height are never "auto" or invalid values
    const width = (rawWidth === "auto" || !rawWidth || rawWidth === "0px") ? "1em" : rawWidth.replace("px", "");
    const height = (rawHeight === "auto" || !rawHeight || rawHeight === "0px") ? "1em" : rawHeight.replace("px", "");

    // Color handling with theme awareness
    let color = this.getAttribute("color") || "var(--color-on-surface)";

    // If color is a CSS variable (token), resolve it to a real value
    if (color.startsWith('var(')) {
      // Create a temp element to resolve the variable with current theme
      const temp = document.createElement('div');
      temp.style.color = color;
      temp.style.position = 'absolute';
      temp.style.visibility = 'hidden';
      document.body.appendChild(temp);
      const computedColor = getComputedStyle(temp).color;
      document.body.removeChild(temp);

      // Only use computed color if it's valid (not transparent or empty)
      if (computedColor && computedColor !== 'rgba(0, 0, 0, 0)' && computedColor !== 'transparent') {
        color = computedColor;
      } else {
        // Fallback based on current theme using semantic tokens
        const isDark = document.documentElement.classList.contains('theme-dark');
        color = isDark ? getComputedStyle(document.documentElement).getPropertyValue('--color-on-primary')?.trim() || '#fff'
          : getComputedStyle(document.documentElement).getPropertyValue('--color-on-background')?.trim() || '#000';
      }
    }

    // Handle currentColor by checking theme
    if (color === "currentColor") {
      const isDark = document.documentElement.classList.contains('theme-dark');
      color = isDark ? getComputedStyle(document.documentElement).getPropertyValue('--color-on-primary')?.trim() || '#fff'
        : getComputedStyle(document.documentElement).getPropertyValue('--color-on-background')?.trim() || '#000';
    }

    // Try to fetch and inline the SVG
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("SVG fetch failed");
      let svg = await response.text();

      // Simple approach: just set the color directly on fill attributes
      svg = svg.replace(/fill="#[^"]*"/gi, `fill="${color}"`);
      svg = svg.replace(/fill='#[^']*'/gi, `fill='${color}'`);

      // Set width and height with proper pixel values
      svg = svg.replace(/width="[^"]*"/gi, `width="${width}"`);
      svg = svg.replace(/height="[^"]*"/gi, `height="${height}"`);

      this.shadowRoot.innerHTML = styleBlock + svg;
      return;
    } catch (e) {
      // Fallback to mask if fetch fails
      this.shadowRoot.innerHTML = styleBlock + `
        <div style="
          width: 100%;
          height: 100%;
          background-color: ${color};
          mask: url('${url}') no-repeat center / contain;
          -webkit-mask: url('${url}') no-repeat center / contain;
        "></div>
      `;
    }
  }
}
customElements.define("labs-icon", LabsIcon);
