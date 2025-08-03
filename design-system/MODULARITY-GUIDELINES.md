# Labs Design System - Modularity Guidelines

## Core Principle: Modularity First

Every component in the Labs Design System should be **fully modular** - self-contained, portable, and configurable without external dependencies.

## Component Architecture Standards

### 1. Self-Contained Styling
✅ **DO**: Include all styles within the component's shadow DOM
```javascript
render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* All component styles here */
        .component { /* styles */ }
      </style>
      <!-- component HTML -->
    `;
}
```

❌ **DON'T**: Rely on external CSS files or global styles
```javascript
// Bad - external dependency
@import url('../main.css');
```

### 2. CSS Custom Properties for Configuration
✅ **DO**: Use CSS custom properties with sensible defaults
```css
.component {
  background: var(--component-bg, #fff);
  padding: var(--component-padding, 1rem);
  border-radius: var(--component-radius, 8px);
}
```

❌ **DON'T**: Hard-code values that users might want to customize
```css
.component {
  background: #fff; /* Not configurable */
}
```

### 3. Shadow DOM Encapsulation
✅ **DO**: Use shadow DOM to prevent style conflicts
```javascript
constructor() {
    super();
    this.attachShadow({ mode: "open" });
}
```

❌ **DON'T**: Render directly into document (breaks encapsulation)
```javascript
document.body.appendChild(element); // Breaks modularity
```

### 4. Import Resolution
✅ **DO**: Use relative imports that work in all environments
```javascript
import "./labs-button.js"; // Works from component directory
```

❌ **DON'T**: Use absolute paths or assume specific directory structures
```javascript
import "/labs/design-system/components/labs-button.js"; // Too specific
```

## Testing Modularity

A component is truly modular if it passes these tests:

### 1. **Drop-in Test**
Can you copy just the component file to a new project and use it immediately?

### 2. **Zero Dependencies Test**
Does the component work without loading any external CSS or fonts?

### 3. **Configuration Test**
Can you customize the component's appearance using only CSS custom properties?

### 4. **Isolation Test**
Does the component work correctly when multiple instances exist on the same page?

## Component Template

Use this template for new components:

```javascript
class LabsComponentName extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          /* Host element styling */
        }
        
        .component {
          /* Use CSS custom properties with defaults */
          background: var(--component-bg, #fff);
          color: var(--component-color, #333);
          padding: var(--component-padding, 1rem);
          border-radius: var(--component-radius, 8px);
          font-family: var(--component-font, system-ui);
        }
        
        /* All component styles self-contained here */
      </style>
      
      <!-- Component HTML -->
      <div class="component">
        <slot></slot>
      </div>
    `;
    
    // Event listeners and logic
    }
}

customElements.define("labs-component-name", LabsComponentName);
```

## Documentation Requirements

Every modular component must include:

1. **Usage example** with just the import and HTML
2. **Customization guide** listing all CSS custom properties
3. **Modularity statement** confirming self-contained nature
4. **Benefits section** explaining why modularity matters

## Migration Strategy

For existing components that aren't fully modular:

1. **Audit dependencies** - What external styles/scripts are required?
2. **Inline critical styles** - Move essential CSS into shadow DOM
3. **Add custom properties** - Make hard-coded values configurable
4. **Test isolation** - Ensure component works independently
5. **Update documentation** - Reflect new modular nature

## Benefits of This Approach

- **Portability**: Components work in any project/framework
- **Maintainability**: No hidden dependencies or conflicts
- **Customizability**: Extensive theming without code changes
- **Reliability**: Components can't break due to missing external files
- **Performance**: No external CSS files to load
- **Developer Experience**: Components work immediately after import

---

**Modularity is not optional - it's the foundation of a scalable design system.**
