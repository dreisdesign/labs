import { html } from 'lit';
import './labs-footer.js';
import './labs-button.js';
import './labs-icon.js';

export default {
  title: 'Components/Footer',
  component: 'labs-footer',
  parameters: {
    docs: {
      description: {
        component: 'A flexible footer component with slots for left, center, and right content. Supports various positioning modes and responsive behavior.',
      },
    },
  },
  argTypes: {
    sticky: {
      control: 'boolean',
      description: 'Makes the footer stick to the bottom of the viewport when scrolling',
    },
    fixed: {
      control: 'boolean',
      description: 'Fixes the footer to the bottom of the viewport',
    },
    elevated: {
      control: 'boolean',
      description: 'Adds shadow elevation instead of border',
    },
    compact: {
      control: 'boolean',
      description: 'Reduces padding for a more compact appearance',
    },
    safeArea: {
      control: 'boolean',
      description: 'Adds safe area padding for mobile devices',
    },
  },
};

// Helper function to render attributes
const renderAttributes = (args) => {
  const attrs = [];
  if (args.sticky) attrs.push('sticky');
  if (args.fixed) attrs.push('fixed');
  if (args.elevated) attrs.push('elevated');
  if (args.compact) attrs.push('compact');
  if (args.safeArea) attrs.push('safe-area');
  return attrs.join(' ');
};

export const Default = {
  args: {
    sticky: false,
    fixed: false,
    elevated: false,
    compact: false,
    safeArea: false,
  },
  render: (args) => html`
    <div style="height: 200px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <p style="color: var(--color-on-surface, #666); margin: 0;">Content above footer</p>
    </div>
    <labs-footer ${renderAttributes(args)}>
      <span slot="left">Left content</span>
      <span slot="center">Center content</span>
      <span slot="right">Right content</span>
    </labs-footer>
  `,
};

export const WithButtons = {
  args: {
    sticky: false,
    fixed: false,
    elevated: true,
    compact: false,
    safeArea: false,
  },
  render: (args) => html`
    <div style="height: 200px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <p style="color: var(--color-on-surface, #666); margin: 0;">Content above footer</p>
    </div>
    <labs-footer ${renderAttributes(args)}>
      <labs-button slot="left" variant="text">
        <labs-icon slot="icon-left" name="apps"></labs-icon>
        Menu
      </labs-button>
      <labs-button slot="center" variant="primary">
        <labs-icon slot="icon-left" name="add"></labs-icon>
        Add Item
      </labs-button>
      <labs-button slot="right" variant="icon" aria-label="Settings">
        <labs-icon slot="icon-left" name="settings"></labs-icon>
      </labs-button>
    </labs-footer>
  `,
};

export const TodayListFooter = {
  args: {
    sticky: true,
    fixed: false,
    elevated: true,
    compact: false,
    safeArea: true,
  },
  render: (args) => html`
    <div style="height: 300px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <p style="color: var(--color-on-surface, #666); margin: 0;">Today List content would go here</p>
    </div>
    <labs-footer ${renderAttributes(args)}>
      <labs-button slot="center" variant="primary">
        <labs-icon slot="icon-left" name="add"></labs-icon>
        Add Item
      </labs-button>
      <labs-button slot="right" variant="icon" aria-label="Settings">
        <labs-icon slot="icon-left" name="settings"></labs-icon>
      </labs-button>
    </labs-footer>
  `,
};

export const MinimalFooter = {
  args: {
    sticky: false,
    fixed: false,
    elevated: false,
    compact: true,
    safeArea: false,
  },
  render: (args) => html`
    <div style="height: 150px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <p style="color: var(--color-on-surface, #666); margin: 0;">Minimal content</p>
    </div>
    <labs-footer ${renderAttributes(args)}>
      <span slot="center">© 2025 Labs</span>
    </labs-footer>
  `,
};

export const FixedFooter = {
  args: {
    sticky: false,
    fixed: true,
    elevated: true,
    compact: false,
    safeArea: true,
  },
  render: (args) => html`
    <div style="height: 400px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <div style="text-align: center; color: var(--color-on-surface, #666);">
        <p style="margin: 0 0 8px 0;">This footer is fixed to the bottom</p>
        <p style="margin: 0; font-size: 14px; opacity: 0.7;">Scroll to see the effect</p>
      </div>
    </div>
    <labs-footer ${renderAttributes(args)}>
      <labs-button slot="left" variant="text">Back</labs-button>
      <labs-button slot="center" variant="primary">Action</labs-button>
      <labs-button slot="right" variant="icon" aria-label="More options">
        <labs-icon slot="icon-left" name="more_vert"></labs-icon>
      </labs-button>
    </labs-footer>
  `,
};
