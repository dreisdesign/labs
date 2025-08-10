import "../components/labs-button.js";
import "../components/labs-icon.js";
import "../styles/components/settings-overlay.css";
import "../styles/tokens/spacing.css";
import "../styles/tokens/typography.css";
import { createButton, createIconButton, buttonConfigs, iconOnlyButtons } from "../tokens/button-configs.js";

export default {
  title: "Patterns",
  parameters: {
    docs: {
      description: {
        component: "Interactive component catalog pattern for browsing and implementing design system components. This pattern includes instant copy functionality, live configuration controls, and categorized component showcases. Can be adapted for any component type.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Button text content"
    },
    iconLeft: {
      control: "boolean",
      name: "Left Icon",
      description: "Show icon on the left side"
    },
    icon: {
      control: { type: "select" },
      name: "Left Icon Name",
      description: "Icon name from Labs icon system",
      options: [
        "",
        "add",
        "add_comment",
        "apps",
        "bedtime",
        "bedtime_off",
        "cancel",
        "change_circle",
        "check",
        "close",
        "comment",
        "delete_forever",
        "edit",
        "rate_review",
        "settings",
        "undo",
      ],
    },
    iconRight: {
      control: "boolean",
      name: "Right Icon",
      description: "Show icon on the right side"
    },
    iconRightName: {
      control: { type: "select" },
      name: "Right Icon Name",
      description: "Icon name from Labs icon system",
      options: [
        "",
        "add",
        "add_comment",
        "apps",
        "bedtime",
        "bedtime_off",
        "cancel",
        "change_circle",
        "check",
        "close",
        "comment",
        "delete_forever",
        "edit",
        "rate_review",
        "settings",
        "undo",
      ],
    },
    checkmark: {
      control: "boolean",
      name: "Success Animation",
      description: "Show checkmark animation on click"
    },
    variant: {
      control: { type: "select" },
      description: "Button variant/style",
      options: [
        "primary",
        "secondary",
        "danger",
        "success",
        "transparent",
        "icon",
        "container",
        "container-danger",
      ],
    },
  },
};

const Template = ({
  label,
  iconLeft,
  icon,
  iconRight,
  iconRightName,
  checkmark,
  variant,
}) => {
  let leftIcon = iconLeft ? icon || "undo" : "";
  let rightIcon = iconRight ? iconRightName || "settings" : "";

  return `
    <labs-button
      label="${label || ""}"
      ${leftIcon ? `icon="${leftIcon}"` : ""}
      ${rightIcon ? `icon-right="${rightIcon}"` : ""}
      ${checkmark ? "checkmark" : ""}
      variant="${variant || "primary"}"
    ></labs-button>
  `;
};

export const Buttons = Template.bind({});
Buttons.args = {
  label: "Add",
  iconLeft: true,
  icon: "add",
  iconRight: false,
  iconRightName: "",
  checkmark: true,
  variant: "primary",
};

Buttons.decorators = [
  (story, context) => {
    const currentArgs = context.args;

    // Function to check if current args match a config
    const matchesConfig = (configName, isIcon = false) => {
      const config = isIcon ? iconOnlyButtons[configName] : buttonConfigs[configName];
      if (!config) return false;

      const labelMatch = config.label === currentArgs.label || (!config.label && !currentArgs.label);
      const iconMatch = config.icon === currentArgs.icon || (!config.icon && !currentArgs.icon);
      const variantMatch = (config.variant || 'primary') === currentArgs.variant;
      const checkmarkMatch = !!config.checkmark === !!currentArgs.checkmark;
      const iconLeftMatch = !!currentArgs.iconLeft === !!config.icon; // iconLeft should be true when icon exists

      return labelMatch && iconMatch && variantMatch && checkmarkMatch && iconLeftMatch;
    };

    // Get actual config details for display
    const getConfigDetails = (configName, isIcon = false) => {
      const config = isIcon ? iconOnlyButtons[configName] : buttonConfigs[configName];
      if (!config) return [];

      const details = [];
      if (config.label && !isIcon) details.push(`label: "${config.label}"`);
      if (config.icon) details.push(`icon: "${config.icon}"`);
      if (config.variant && config.variant !== 'primary') details.push(`variant: "${config.variant}"`);
      if (config.checkmark) details.push('checkmark: true');
      if (config.iconRight) details.push(`iconRight: "${config.iconRight}"`);
      if (config.iconLeft) details.push('iconLeft: true');
      if (config.iconcolor) details.push('custom icon color');
      if (config['aria-label']) details.push(`aria-label: "${config['aria-label']}"`);

      return details;
    };

    // Get URL parameters for configure link (no spaces, no quotes)
    const getUrlParams = (configName, isIcon = false) => {
      const config = isIcon ? iconOnlyButtons[configName] : buttonConfigs[configName];
      if (!config) return [];

      const params = [];
      if (config.label && !isIcon) params.push(`label:${config.label}`);
      if (config.icon) {
        params.push(`icon:${config.icon}`);
        params.push('iconLeft:true');
      }
      if (config.variant && config.variant !== 'primary') params.push(`variant:${config.variant}`);
      if (config.checkmark) params.push('checkmark:true');
      if (config.iconRight) params.push(`iconRight:${config.iconRight}`);
      if (config.iconcolor) params.push('iconcolor:custom');
      if (config['aria-label']) params.push(`aria-label:${config['aria-label']}`);

      return params;
    };

    // Create button card with config details and active state
    const createButtonCard = (config, description, variant = 'primary', isIcon = false) => {
      const buttonHTML = isIcon ? createIconButton(config) : createButton(config);
      const configDetails = getConfigDetails(config, isIcon);
      const urlParams = getUrlParams(config, isIcon);
      const isActive = matchesConfig(config, isIcon);

      // Create copyable config text
      const copyText = configDetails.length > 0 ? configDetails.join(', ') : 'Icon-only button';

      return `
        <div style="background: var(--color-surface, white); padding: var(--space-lg, 1.5rem); border-radius: 8px; border: ${isActive ? '2px solid var(--color-primary, #3b82f6)' : '1px solid var(--color-border, #e5e7eb)'}; box-shadow: ${isActive ? '0 4px 12px var(--shadow-primary, rgba(59, 130, 246, 0.15))' : 'var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1))'}; position: relative;"
             onmouseenter="this.querySelector('.hover-actions').style.opacity = '1'"
             onmouseleave="this.querySelector('.hover-actions').style.opacity = '0'">
          
          <!-- Active Badge -->
          ${isActive ? '<div style="position: absolute; top: -1px; right: -1px; background: var(--color-primary, #3b82f6); color: var(--color-on-primary, white); font-size: var(--font-size-tiny, 0.625rem); padding: var(--space-xs, 0.25rem) var(--space-sm, 0.5rem); border-radius: 0 6px 0 6px; font-weight: var(--font-weight-semibold, 600); z-index: 3;">ACTIVE</div>' : ''}
          
          <!-- Hover Actions -->
          <div class="hover-actions" style="position: absolute; top: var(--space-sm, 0.5rem); right: var(--space-sm, 0.5rem); display: flex; gap: var(--space-xs, 0.25rem); opacity: 0; transition: opacity 0.2s ease; z-index: 2;">
            <div 
              data-action="copy"
              data-copy-text="${copyText.replace(/"/g, '&quot;')}"
              style="width: 20px; height: 20px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-action, 0 2px 4px rgba(0,0,0,0.1)); overflow: hidden;"
            >
              <!-- Icon will be inserted here -->
            </div>
            <div 
              data-action="edit"
              data-edit-params="${urlParams.join(';')}"
              style="width: 20px; height: 20px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-action, 0 2px 4px rgba(0,0,0,0.1)); overflow: hidden;"
            >
              <!-- Icon will be inserted here -->
            </div>
          </div>
          
          <div style="margin-bottom: var(--space-md, 1rem); text-align: center;">${buttonHTML}</div>
          <div style="margin-bottom: var(--space-md, 1rem); font-size: var(--font-size-small, 0.875rem); color: var(--color-text-secondary, #6b7280); line-height: 1.4;">${description}</div>
          
          <!-- Config Details -->
          <div style="padding: var(--space-sm, 0.75rem); background: ${isActive ? 'var(--color-primary-5, #eff6ff)' : 'var(--color-surface-secondary, #f8fafc)'}; border-radius: 6px; border: 1px solid ${isActive ? 'var(--color-primary-25, #bfdbfe)' : 'var(--color-border-light, #e2e8f0)'};">
            <div style="font-size: var(--font-size-tiny, 0.75rem); color: ${isActive ? 'var(--color-primary-dark, #1e40af)' : 'var(--color-text-tertiary, #64748b)'}; font-weight: var(--font-weight-normal, 500); margin-bottom: var(--space-sm, 0.5rem);">Configuration:</div>
            <code style="font-size: var(--font-size-tiny, 0.6875rem); color: ${isActive ? 'var(--color-primary-darker, #1d4ed8)' : 'var(--color-text-code, #475569)'}; background: ${isActive ? 'var(--color-primary-10, #dbeafe)' : 'var(--color-code-bg, #f1f5f9)'}; padding: var(--space-xs, 0.25rem) var(--space-sm, 0.375rem); border-radius: 3px; display: block;">
              ${configDetails.length > 0 ? configDetails.join(', ') : 'Icon-only button'}
            </code>
          </div>
        </div>
      `;
    };

    // Create main container
    const container = document.createElement("div");
    container.style.cssText = `
      padding: var(--space-md, 1rem); 
      background: var(--color-background, #f9fafb); 
      max-width: 1400px; 
      font-family: var(--font-family-base, system-ui, -apple-system, sans-serif);
      color: var(--color-on-background, #111827);
      
      @media (min-width: 768px) {
        padding: var(--space-lg, 2rem);
      }
    `;

    container.innerHTML = `

      <div style="margin-bottom: var(--space-xl, 3rem); text-align: center;">
        <h1 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-background, #111827); font-size: var(--font-size-h1, 1.75rem); font-weight: var(--font-weight-bold, 700);">Buttons</h1>
        <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-large, 1.125rem); line-height: 1.6; max-width: 600px; margin-left: auto; margin-right: auto;">
          Common button configurations ready to copy and use. Active configuration highlighted in blue.
        </p>
      </div>

      <!-- Button Categories -->
      <div style="display: flex; flex-direction: column; gap: var(--space-xl, 3rem);">
        
        <!-- Primary Actions -->
        <div style="background: var(--color-surface, white); padding: var(--space-lg, 2rem); border-radius: 12px; border: 1px solid var(--color-border, #e5e7eb); box-shadow: var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1));">
          <h3 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-surface, #111827); font-size: var(--font-size-h2, 1.5rem); font-weight: var(--font-weight-semibold, 600);">Primary Actions</h3>
          <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.5;">
            Main actions with icon left and checkmark animation on click.
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: var(--space-lg, 1.5rem);">
            ${createButtonCard("add", "Universal add button with plus icon and checkmark animation.")}
            ${createButtonCard("save", "Form submission button with check icon and success feedback.")}
            ${createButtonCard("addNote", "Specialized add button for note-taking interfaces.")}
          </div>
        </div>

        <!-- Secondary Actions -->
        <div style="background: var(--color-surface, white); padding: var(--space-lg, 2rem); border-radius: 12px; border: 1px solid var(--color-border, #e5e7eb); box-shadow: var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1));">
          <h3 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-surface, #111827); font-size: var(--font-size-h2, 1.5rem); font-weight: var(--font-weight-semibold, 600);">Secondary Actions</h3>
          <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.5;">
            Supporting actions with secondary styling and border outlines.
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: var(--space-lg, 1.5rem);">
            ${createButtonCard("edit", "Modification action with pencil icon for content editing workflows.", "secondary")}
            ${createButtonCard("undo", "Reverse action button with undo icon for workflow correction.", "secondary")}
            ${createButtonCard("addComment", "Comment creation button with comment bubble icon.", "secondary")}
          </div>
        </div>

        <!-- Minimal Actions -->
        <div style="background: var(--color-surface, white); padding: var(--space-lg, 2rem); border-radius: 12px; border: 1px solid var(--color-border, #e5e7eb); box-shadow: var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1));">
          <h3 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-surface, #111827); font-size: var(--font-size-h2, 1.5rem); font-weight: var(--font-weight-semibold, 600);">Minimal Actions</h3>
          <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.5;">
            Subtle transparent buttons for navigation and system controls.
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: var(--space-lg, 1.5rem);">
            ${createButtonCard("close", "UI control for closing dialogs, modals, and expandable sections.", "transparent")}
            ${createButtonCard("settings", "System configuration access with gear icon.", "transparent")}
            ${createButtonCard("themeToggle", "Dynamic theme switcher with adaptive icon and label.", "transparent")}
          </div>
        </div>

        <!-- Destructive Actions -->
        <div style="background: var(--color-surface, white); padding: var(--space-lg, 2rem); border-radius: 12px; border: 1px solid var(--color-border, #e5e7eb); box-shadow: var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1));">
          <h3 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-surface, #111827); font-size: var(--font-size-h2, 1.5rem); font-weight: var(--font-weight-semibold, 600);">Destructive Actions</h3>
          <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.5;">
            Warning-styled buttons for delete operations and data clearing actions.
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: var(--space-lg, 1.5rem);">
            ${createButtonCard("delete", "Standard deletion action with trash icon and danger styling.", "danger")}
            ${createButtonCard("resetAllData", "Complete data reset with warning styling for clearing user data.", "danger")}
          </div>
        </div>

        <!-- Icon-Only Buttons -->
        <div style="background: var(--color-surface, white); padding: var(--space-lg, 2rem); border-radius: 12px; border: 1px solid var(--color-border, #e5e7eb); box-shadow: var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1));">
          <h3 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-surface, #111827); font-size: var(--font-size-h2, 1.5rem); font-weight: var(--font-weight-semibold, 600);">Icon-Only Buttons</h3>
          <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.5;">
            Compact icon buttons for toolbars, navigation, and space-constrained interfaces.
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: var(--space-lg, 1.5rem);">
            ${createButtonCard("settingsIcon", "Compact settings button with just the gear icon.", "icon", true)}
            ${createButtonCard("appsIcon", "Compact apps launcher with just the grid icon.", "icon", true)}
            ${createButtonCard("deleteIcon", "Compact delete action with just the trash icon.", "icon", true)}
            ${createButtonCard("editIcon", "Compact edit button with just the pencil icon.", "icon", true)}
            ${createButtonCard("closeIcon", "Compact close button with just the X icon.", "icon", true)}
          </div>
        </div>

      </div>

      <!-- Developer Documentation -->
      <div style="margin-top: var(--space-xl, 3rem); background: var(--color-surface, white); padding: var(--space-lg, 2rem); border-radius: 12px; border: 1px solid var(--color-border, #e5e7eb); box-shadow: var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1));">
        <h3 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-surface, #111827); font-size: var(--font-size-h2, 1.5rem); font-weight: var(--font-weight-semibold, 600);">🛠️ Developer Guide</h3>
        <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.5;">
          Technical implementation details and configuration reference for developers.
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: var(--space-lg, 2rem);">
          <div>
            <h4 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-text-primary, #374151); font-size: var(--font-size-base, 1rem); font-weight: var(--font-weight-semibold, 600);">📋 Quick Copy</h4>
            <p style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.4;">
              Hover over any button card and click the copy icon to instantly copy the configuration to your clipboard.
            </p>
          </div>
          
          <div>
            <h4 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-text-primary, #374151); font-size: var(--font-size-base, 1rem); font-weight: var(--font-weight-semibold, 600);">⚙️ Live Edit</h4>
            <p style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.4;">
              Click the edit icon to load that configuration into the controls below and experiment with modifications.
            </p>
          </div>
          
          <div>
            <h4 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-text-primary, #374151); font-size: var(--font-size-base, 1rem); font-weight: var(--font-weight-semibold, 600);">🎯 Active State</h4>
            <p style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.4;">
              The currently selected configuration is highlighted with a blue border and "ACTIVE" badge.
            </p>
          </div>
        </div>
      </div>
    `;

    // Add event listeners for hover actions
    container.addEventListener('click', (e) => {
      const target = e.target.closest('[data-action]');
      if (!target) return;

      const action = target.dataset.action;

      if (action === 'copy') {
        const copyText = target.dataset.copyText;
        navigator.clipboard.writeText(copyText).then(() => {
          // Visual feedback
          target.style.background = 'var(--color-success, #10b981)';
          setTimeout(() => {
            target.style.background = 'var(--color-surface-elevated, rgba(255,255,255,0.95))';
          }, 800);
        });
      } else if (action === 'edit') {
        const editParams = target.dataset.editParams;

        // Save current scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Update URL using history API
        const currentUrl = window.location.href;
        const urlObj = new window.URL(currentUrl);
        urlObj.searchParams.set('args', editParams);

        // Use history.pushState to avoid page reload
        window.history.pushState(
          { scrollTop },
          '',
          urlObj.toString()
        );

        // Manually trigger Storybook's args update
        setTimeout(() => {
          // Parse the new args and update Storybook
          const argsString = urlObj.searchParams.get('args');
          if (argsString) {
            try {
              const newArgs = {};
              argsString.split(';').forEach(param => {
                const [key, value] = param.split('=');
                if (key && value !== undefined) {
                  // Handle boolean values
                  if (value === 'true') newArgs[key] = true;
                  else if (value === 'false') newArgs[key] = false;
                  else newArgs[key] = decodeURIComponent(value);
                }
              });

              // Update Storybook args if API is available
              if (window.__STORYBOOK_ADDONS_CHANNEL__ && window.__STORYBOOK_STORY_ID__) {
                window.__STORYBOOK_ADDONS_CHANNEL__.emit('updateStoryArgs', {
                  storyId: window.__STORYBOOK_STORY_ID__,
                  updatedArgs: newArgs
                });

                // Restore scroll position after args update
                setTimeout(() => {
                  window.scrollTo(0, scrollTop);
                }, 100);
              } else {
                // Fallback: reload page but preserve scroll
                sessionStorage.setItem('button-shop-scroll', scrollTop.toString());
                window.location.search = urlObj.search;
              }
            } catch (e) {
              console.warn('Could not update Storybook args:', e);
              // Fallback to page reload with scroll preservation
              sessionStorage.setItem('button-shop-scroll', scrollTop.toString());
              window.location.search = urlObj.search;
            }
          }
        }, 50);
      }
    });

    // Force icon rendering after DOM insertion
    setTimeout(() => {
      // Restore scroll position if page was reloaded
      const savedScroll = sessionStorage.getItem('button-shop-scroll');
      if (savedScroll) {
        window.scrollTo(0, parseInt(savedScroll));
        sessionStorage.removeItem('button-shop-scroll');
      }

      const hoverActions = container.querySelectorAll('.hover-actions');
      hoverActions.forEach(actions => {
        const copyAction = actions.querySelector('[data-action="copy"]');
        const editAction = actions.querySelector('[data-action="edit"]');

        if (copyAction) {
          // Create labs-button with icon variant for copy
          copyAction.innerHTML = '';
          const copyButton = document.createElement('labs-button');
          copyButton.setAttribute('icon', 'content_copy');
          copyButton.setAttribute('variant', 'icon');
          copyButton.style.cssText = `
            --labs-button-icon-color: var(--color-text-secondary, #6b7280);
            transform: scale(0.45);
            transform-origin: center;
          `;
          copyAction.appendChild(copyButton);
        }

        if (editAction) {
          // Create labs-button with icon variant for edit
          editAction.innerHTML = '';
          const editButton = document.createElement('labs-button');
          editButton.setAttribute('icon', 'edit');
          editButton.setAttribute('variant', 'icon');
          editButton.style.cssText = `
            --labs-button-icon-color: var(--color-on-surface, white);
            transform: scale(0.45);
            transform-origin: center;
            background: var(--color-action-bg, #6b7280) !important;
          `;
          editAction.appendChild(editButton);
        }
      });
    }, 100);

    return container;
  }
];

Buttons.parameters = {
  controls: { expanded: true },
  docs: {
    description: {
      story: "Interactive button catalog for browsing and implementing button components. Each button includes instant copy functionality and live configuration controls. The currently active configuration is highlighted with a blue border.",
    },
  },
};

Buttons.storyName = "Buttons";

// Form Variants Pattern
const FormVariantsTemplate = () => {
  setTimeout(() => {
    document.addEventListener('labs-click', (e) => {
      console.log('Button clicked:', e.detail);
    });
  }, 100);

  return `
    <style>
      .form-variants-demo {
        max-width: 600px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .variant-section {
        margin-bottom: 2rem;
        padding: 1.5rem;
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--border-radius-lg);
        background: var(--color-surface-container);
      }
      
      .variant-section h3 {
        margin-bottom: 1rem;
        color: var(--color-on-surface);
        font-size: var(--font-size-h4);
      }
      
      .button-group {
        display: flex;
        gap: var(--space-md);
        flex-wrap: wrap;
        align-items: center;
      }
      
      .description {
        color: var(--color-on-surface-variant);
        font-size: var(--font-size-body-sm);
        margin-bottom: 1rem;
      }
    </style>
    
    <div class="form-variants-demo">
      <div class="variant-section">
        <h3>Pill Buttons</h3>
        <p class="description">Fully rounded buttons ideal for forms and compact interfaces</p>
        <div class="button-group">
          <labs-button label="Save" icon="check" variant="pill" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Cancel" variant="pill-secondary" iconcolor="var(--color-primary)"></labs-button>
          <labs-button label="Add Task" icon="add" variant="pill" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Edit" icon="edit" variant="pill-secondary" iconcolor="var(--color-primary)"></labs-button>
        </div>
      </div>
      
      <div class="variant-section">
        <h3>Rounded Rectangle Buttons</h3>
        <p class="description">Softly rounded buttons perfect for overlays and modal interfaces</p>
        <div class="button-group">
          <labs-button label="Save Changes" icon="check" variant="rounded" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Cancel" variant="rounded-secondary" iconcolor="var(--color-primary)"></labs-button>
          <labs-button label="Delete Item" icon="delete_forever" variant="rounded" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Undo" icon="undo" variant="rounded-secondary" iconcolor="var(--color-primary)"></labs-button>
        </div>
      </div>
      
      <div class="variant-section">
        <h3>Container Buttons (Full-Width for Overlays)</h3>
        <p class="description">Full-width buttons designed for settings overlays and panels</p>
        <div style="max-width: 300px;">
          <div style="display: flex; flex-direction: column; gap: var(--space-sm);">
            <labs-button label="Settings" icon-right="settings" variant="container" iconcolor="var(--color-primary-75)"></labs-button>
            <labs-button label="All Apps" icon="apps" variant="container" iconcolor="var(--color-primary-75)"></labs-button>
            <labs-button label="Reset All Data" icon="delete_forever" variant="container-danger" iconcolor="var(--color-error)"></labs-button>
          </div>
        </div>
      </div>
      
      <div class="variant-section">
        <h3>Form Integration Example</h3>
        <p class="description">How these variants work together in typical form scenarios</p>
        <div style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--border-radius-md); border: 1px solid var(--color-outline-variant);">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: var(--color-on-surface);">Task Description</label>
            <input type="text" placeholder="Enter task details..." style="width: 100%; padding: 0.75rem; border: 2px solid var(--color-outline-variant); border-radius: var(--border-radius-md); font-size: var(--font-size-body);" />
          </div>
          <div class="button-group" style="justify-content: flex-end;">
            <labs-button label="Cancel" variant="pill-secondary" iconcolor="var(--color-primary)"></labs-button>
            <labs-button label="Save Task" icon="check" variant="pill" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const FormVariants = FormVariantsTemplate.bind({});
FormVariants.parameters = {
  docs: {
    description: {
      story: "Comprehensive button variants for form interfaces including pill buttons (fully rounded), rounded rectangle buttons (softly rounded), and container buttons (full-width). These variants provide better visual hierarchy and modern styling for overlay forms, input dialogs, and compact interfaces.",
    },
  },
};
FormVariants.storyName = "Form Variants";
