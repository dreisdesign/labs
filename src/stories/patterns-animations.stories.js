import { html } from 'lit-html';
import '../components/labs-checkmark.js';

export default {
    title: 'Patterns/Animations',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: { type: 'range', min: 24, max: 128, step: 1 },
            defaultValue: 64
        },
        color: {
            control: 'color',
            defaultValue: '#10b981'
        },
        trigger: {
            control: 'boolean',
            defaultValue: false
        }
    },
};

const Template = ({ size, color, trigger }) => html`
  <style>
    .demo-container {
      padding: var(--space-lg, 2rem);
      background: var(--color-background, #f9fafb);
      border-radius: var(--radius-lg, 12px);
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .demo-section {
      margin-bottom: var(--space-xl, 3rem);
    }
    
    .demo-title {
      font-size: var(--font-size-h3, 1.25rem);
      font-weight: var(--font-weight-semibold, 600);
      color: var(--color-text-primary, #111827);
      margin-bottom: var(--space-md, 1rem);
    }
    
    .demo-description {
      font-size: var(--font-size-base, 1rem);
      color: var(--color-text-secondary, #6b7280);
      margin-bottom: var(--space-lg, 2rem);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }
    
    .checkmark-showcase {
      display: flex;
      gap: var(--space-lg, 2rem);
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: var(--space-lg, 2rem);
    }
    
    .trigger-button {
      background: var(--color-primary, #3b82f6);
      color: var(--color-on-primary, #ffffff);
      border: none;
      padding: var(--space-sm, 0.5rem) var(--space-md, 1rem);
      border-radius: var(--radius-md, 8px);
      font-size: var(--font-size-base, 1rem);
      font-weight: var(--font-weight-medium, 500);
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    
    .trigger-button:hover {
      background: var(--color-primary-dark, #1e40af);
    }
    
    .trigger-button:active {
      transform: translateY(1px);
    }
    
    .code-example {
      background: var(--color-surface-secondary, #f8fafc);
      border: 1px solid var(--color-border, #e5e7eb);
      border-radius: var(--radius-md, 8px);
      padding: var(--space-md, 1rem);
      margin-top: var(--space-lg, 2rem);
      text-align: left;
      font-family: var(--font-family-mono, 'Monaco', 'Menlo', 'Ubuntu Mono', monospace);
      font-size: var(--font-size-small, 0.875rem);
      color: var(--color-text-primary, #111827);
      line-height: 1.5;
    }
    
    .modularity-note {
      background: var(--color-success-5, #f0fdf4);
      border: 1px solid var(--color-success-25, #bbf7d0);
      border-radius: var(--radius-md, 8px);
      padding: var(--space-md, 1rem);
      margin-top: var(--space-lg, 2rem);
      font-size: var(--font-size-small, 0.875rem);
      color: var(--color-success-dark, #166534);
    }
  </style>
  
  <div class="demo-container">
    <div class="demo-section">
      <h2 class="demo-title">Checkmark Animation</h2>
      <p class="demo-description">
        A fully modular, self-contained checkmark animation component perfect for success states, 
        form confirmations, and completion indicators. Uses shadow DOM encapsulation and CSS custom properties for complete modularity.
      </p>
      
      <div class="checkmark-showcase">
        <labs-checkmark 
          size="${size}" 
          color="${color}" 
          ${trigger ? 'trigger' : ''}
          style="--checkmark-size: ${size}px; --checkmark-color: ${color};">
        </labs-checkmark>
      </div>
      
      <button class="trigger-button" onclick="this.previousElementSibling.querySelector('labs-checkmark').animate()">
        Trigger Animation
      </button>
      
      <div class="code-example">
        <strong>Basic Usage:</strong><br/>
        &lt;labs-checkmark size="64" color="#10b981"&gt;&lt;/labs-checkmark&gt;<br/><br/>
        <strong>With CSS Custom Properties:</strong><br/>
        &lt;labs-checkmark style="--checkmark-size: 80px; --checkmark-color: #ef4444;"&gt;&lt;/labs-checkmark&gt;<br/><br/>
        <strong>Trigger Animation:</strong><br/>
        document.querySelector('labs-checkmark').animate();
      </div>
      
      <div class="modularity-note">
        <strong>✅ Fully Modular:</strong> This component includes all styles in shadow DOM, 
        has no external dependencies, and can be dropped into any project. 
        Customize appearance using CSS custom properties without touching the component code.
      </div>
    </div>
  </div>
`;

export const Checkmark = Template.bind({});
Checkmark.args = {
    size: 64,
    color: '#10b981',
    trigger: false,
};

Checkmark.parameters = {
    docs: {
        description: {
            story: 'A fully modular checkmark animation component following Labs Design System modularity guidelines. Self-contained with shadow DOM encapsulation and configurable through CSS custom properties.'
        }
    }
};
