// Dynamic icon loading - Vite-friendly approach
// Use the correct base path for both local dev and GitHub Pages
// Icons are served under icons/ in both environments
const ICON_BASE = window.location.pathname.includes("/labs/")
  ? "/labs/design-system/icons/"
  : "icons/";
const icons = {
  add: ICON_BASE + "add--labs-icons.svg",
  add_comment: ICON_BASE + "add_comment--labs-icons.svg",
  bedtime: ICON_BASE + "bedtime--labs-icons.svg",
  bedtime_off: ICON_BASE + "bedtime_off--labs-icons.svg",
  cancel: ICON_BASE + "cancel--labs-icons.svg",
  change_circle: ICON_BASE + "change_circle--labs-icons.svg",
  check: ICON_BASE + "check--labs-icons.svg",
  close: ICON_BASE + "close--labs-icons.svg",
  comment: ICON_BASE + "comment--labs-icons.svg",
  delete_forever: ICON_BASE + "delete_forever--labs-icons.svg",
  edit: ICON_BASE + "edit--labs-icons.svg",
  rate_review: ICON_BASE + "rate_review--labs-icons.svg",
  settings: ICON_BASE + "settings--labs-icons.svg",
  undo: ICON_BASE + "undo--labs-icons.svg",
};

class LabsIcon extends HTMLElement {
  static get observedAttributes() {
    return ["name", "style"];
  }
  
  constructor() {
    super();
    this.svgCache = new Map();
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
  
  connectedCallback() {
    this.render();
  }
  
  async loadSvg(url) {
    if (this.svgCache.has(url)) {
      return this.svgCache.get(url);
    }
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to load icon: ${response.status}`);
      const svgText = await response.text();
      this.svgCache.set(url, svgText);
      return svgText;
    } catch (error) {
      console.error('Error loading icon:', error);
      return null;
    }
  }
  
  async render() {
    const iconName = this.getAttribute("name");
    let url = icons[iconName];

    if (url) {
      const style = window.getComputedStyle(this);
      const width = this.getAttribute("width") || style.width || "24px";
      const height = this.getAttribute("height") || style.height || "24px";
      const color = this.style.color || style.color || "#000";

      console.log(`Icon render: ${iconName}, URL: ${url}, Color: ${color}`);

      // Try to load SVG content directly first
      const svgContent = await this.loadSvg(url);
      
      if (svgContent) {
        console.log(`SVG loaded for ${iconName}, content length: ${svgContent.length}`);
        // Inject SVG directly with color styling
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
        const svgElement = svgDoc.querySelector('svg');
        
        if (svgElement) {
          svgElement.style.width = width;
          svgElement.style.height = height;
          
          // Set color on all paths with currentColor
          const paths = svgElement.querySelectorAll('[fill="currentColor"]');
          paths.forEach(path => path.setAttribute('fill', color));
          
          console.log(`SVG element prepared for ${iconName}, paths found: ${paths.length}`);
          this.innerHTML = svgElement.outerHTML;
          return;
        } else {
          console.log(`No SVG element found for ${iconName}`);
        }
      } else {
        console.log(`Failed to load SVG for ${iconName}`);
      }
      
      // Fallback to mask-image approach
      console.log(`Using mask-image fallback for ${iconName}`);
      this.innerHTML = `
        <div style="
          width: ${width};
          height: ${height};
          background-color: ${color};
          mask-image: url(${url});
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-image: url(${url});
          -webkit-mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
        "></div>
      `;
    } else {
      console.log(`No URL found for icon: ${iconName}`);
      this.innerHTML = "";
    }
  }
}
customElements.define("labs-icon", LabsIcon);
