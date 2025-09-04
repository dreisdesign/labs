var i=Object.freeze,b=Object.defineProperty;var n=(e,t)=>i(b(e,"raw",{value:i(t||e.slice())}));import{x as r}from"./iframe-Cc9enzfm.js";import"./labs-footer-hgNsOeDx.js";import"./labs-overlay-86ltjSj6.js";import"./preload-helper-D9Z9MdNV.js";const g={title:"Patterns/Footer with Overlay",parameters:{docs:{description:{component:"Demonstrates how Footer and Overlay components work together to create common app patterns."}}}};var s;const o={render:()=>{const e="today-list-settings";return r(s||(s=n([`
      <div style="height: 400px; padding: 20px; border: 1px dashed var(--color-outline, #ccc); display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 16px;">
        <h3 style="margin: 0 0 16px 0; color: var(--color-on-surface);">Today List Content</h3>
        <p style="margin: 0; color: var(--color-on-surface); opacity: 0.8; text-align: center;">
          This represents the main content area.<br>
          The footer below contains the Add Item button and Settings.
        </p>
      </div>

      <labs-footer elevated safe-area>
        <labs-button slot="center" id="add-item-btn" variant="primary">
          <labs-icon slot="icon-left" name="add"></labs-icon>
          Add Item
        </labs-button>
        <labs-button slot="right" id="settings-trigger" variant="icon" aria-label="Settings">
          <labs-icon slot="icon-left" name="settings"></labs-icon>
        </labs-button>
      </labs-footer>

      <labs-overlay id="`,`" size="medium">
        <div style="padding: 24px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
            <h3 style="margin: 0; color: var(--color-on-surface);">Settings</h3>
            <labs-button id="close-settings" variant="icon" aria-label="Close">
              <labs-icon slot="icon-left" name="close"></labs-icon>
            </labs-button>
          </div>

          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <h4 style="margin: 0 0 8px 0; color: var(--color-on-surface);">Theme</h4>
              <div style="display: flex; gap: 8px;">
                <labs-button variant="primary" size="small">Light</labs-button>
                <labs-button variant="outlined" size="small">Dark</labs-button>
              </div>
            </div>

            <div>
              <h4 style="margin: 0 0 8px 0; color: var(--color-on-surface);">Auto-save</h4>
              <label style="display: flex; align-items: center; gap: 8px; color: var(--color-on-surface);">
                <input type="checkbox" checked />
                Automatically save changes
              </label>
            </div>

            <div>
              <h4 style="margin: 0 0 8px 0; color: var(--color-on-surface);">Clear Data</h4>
              <labs-button variant="outlined" size="small" style="--color-primary: #d32f2f;">
                <labs-icon slot="icon-left" name="delete_forever"></labs-icon>
                Clear All Items
              </labs-button>
            </div>
          </div>
        </div>
      </labs-overlay>

      <script>
        (() => {
          const settingsTrigger = document.getElementById('settings-trigger');
          const overlay = document.getElementById('`,`');
          const closeBtn = document.getElementById('close-settings');
          const addItemBtn = document.getElementById('add-item-btn');

          if (settingsTrigger && overlay) {
            settingsTrigger.addEventListener('click', () => overlay.open());
          }
          if (closeBtn && overlay) {
            closeBtn.addEventListener('click', () => overlay.close());
          }
          if (addItemBtn) {
            addItemBtn.addEventListener('click', () => {
              alert('Add Item clicked! (This would trigger the add item functionality)');
            });
          }
        })();
      <\/script>
    `])),e,e)}};var c;const a={render:()=>{const e="nav-menu",t="user-profile";return r(c||(c=n([`
      <div style="height: 350px; padding: 20px; border: 1px dashed var(--color-outline, #ccc); display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 16px;">
        <h3 style="margin: 0 0 16px 0; color: var(--color-on-surface);">App Content</h3>
        <p style="margin: 0; color: var(--color-on-surface); opacity: 0.8; text-align: center;">
          Main application content goes here.<br>
          Footer provides navigation and user actions.
        </p>
      </div>

      <labs-footer elevated>
        <labs-button slot="left" id="menu-trigger" variant="text">
          <labs-icon slot="icon-left" name="apps"></labs-icon>
          Menu
        </labs-button>
        <labs-button slot="center" variant="primary">
          <labs-icon slot="icon-left" name="add"></labs-icon>
          Create
        </labs-button>
        <labs-button slot="right" id="profile-trigger" variant="icon" aria-label="Profile">
          <labs-icon slot="icon-left" name="account_circle"></labs-icon>
        </labs-button>
      </labs-footer>

      <!-- Menu Overlay -->
      <labs-overlay id="`,`" size="small">
        <div style="padding: 20px;">
          <h3 style="margin: 0 0 20px 0; color: var(--color-on-surface);">Menu</h3>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="home"></labs-icon>
              Home
            </labs-button>
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="folder"></labs-icon>
              Projects
            </labs-button>
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="favorite"></labs-icon>
              Favorites
            </labs-button>
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="settings"></labs-icon>
              Settings
            </labs-button>
          </div>
        </div>
      </labs-overlay>

      <!-- Profile Overlay -->
      <labs-overlay id="`,`" size="small">
        <div style="padding: 24px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary, #2196f3); display: flex; align-items: center; justify-content: center; color: var(--color-on-primary, white); font-weight: bold;">
              JD
            </div>
            <div>
              <div style="font-weight: bold; color: var(--color-on-surface);">John Doe</div>
              <div style="font-size: 14px; color: var(--color-on-surface); opacity: 0.7;">john@example.com</div>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="account_circle"></labs-icon>
              Edit Profile
            </labs-button>
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="notifications"></labs-icon>
              Notifications
            </labs-button>
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="help"></labs-icon>
              Help & Support
            </labs-button>
            <hr style="border: none; border-top: 1px solid var(--color-outline, #e0e0e0); margin: 8px 0;" />
            <labs-button variant="text" style="justify-content: flex-start; --color-primary: #d32f2f;">
              <labs-icon slot="icon-left" name="logout"></labs-icon>
              Sign Out
            </labs-button>
          </div>
        </div>
      </labs-overlay>

      <script>
        (() => {
          const menuTrigger = document.getElementById('menu-trigger');
          const menuOverlay = document.getElementById('`,`');
          const profileTrigger = document.getElementById('profile-trigger');
          const profileOverlay = document.getElementById('`,`');

          if (menuTrigger && menuOverlay) {
            menuTrigger.addEventListener('click', () => menuOverlay.open());
          }
          if (profileTrigger && profileOverlay) {
            profileTrigger.addEventListener('click', () => profileOverlay.open());
          }
        })();
      <\/script>
    `])),e,t,e,t)}};var d;const l={render:()=>{const e="confirm-action";return r(d||(d=n([`
      <div style="height: 300px; padding: 20px; border: 1px dashed var(--color-outline, #ccc); display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 16px;">
        <h3 style="margin: 0 0 16px 0; color: var(--color-on-surface);">Document Editor</h3>
        <p style="margin: 0; color: var(--color-on-surface); opacity: 0.8; text-align: center;">
          Document content would be here.<br>
          Footer provides save/cancel actions.
        </p>
      </div>

      <labs-footer elevated compact>
        <labs-button slot="left" variant="text">Cancel</labs-button>
        <labs-button slot="right" id="save-trigger" variant="primary">Save Changes</labs-button>
      </labs-footer>

      <labs-overlay id="`,`" size="small" close-on-backdrop="false">
        <div style="padding: 24px; text-align: center;">
          <labs-icon name="check_circle" style="color: var(--color-primary, #4caf50); font-size: 48px; margin-bottom: 16px;"></labs-icon>
          <h3 style="margin: 0 0 8px 0; color: var(--color-on-surface);">Changes Saved!</h3>
          <p style="margin: 0 0 20px 0; color: var(--color-on-surface); opacity: 0.8;">
            Your document has been saved successfully.
          </p>
          <labs-button id="close-confirm" variant="primary">OK</labs-button>
        </div>
      </labs-overlay>

      <script>
        (() => {
          const saveTrigger = document.getElementById('save-trigger');
          const overlay = document.getElementById('`,`');
          const closeBtn = document.getElementById('close-confirm');

          if (saveTrigger && overlay) {
            saveTrigger.addEventListener('click', () => overlay.open());
          }
          if (closeBtn && overlay) {
            closeBtn.addEventListener('click', () => overlay.close());
          }
        })();
      <\/script>
    `])),e,e)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const overlayId = 'today-list-settings';
    return html\`
      <div style="height: 400px; padding: 20px; border: 1px dashed var(--color-outline, #ccc); display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 16px;">
        <h3 style="margin: 0 0 16px 0; color: var(--color-on-surface);">Today List Content</h3>
        <p style="margin: 0; color: var(--color-on-surface); opacity: 0.8; text-align: center;">
          This represents the main content area.<br>
          The footer below contains the Add Item button and Settings.
        </p>
      </div>

      <labs-footer elevated safe-area>
        <labs-button slot="center" id="add-item-btn" variant="primary">
          <labs-icon slot="icon-left" name="add"></labs-icon>
          Add Item
        </labs-button>
        <labs-button slot="right" id="settings-trigger" variant="icon" aria-label="Settings">
          <labs-icon slot="icon-left" name="settings"></labs-icon>
        </labs-button>
      </labs-footer>

      <labs-overlay id="\${overlayId}" size="medium">
        <div style="padding: 24px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
            <h3 style="margin: 0; color: var(--color-on-surface);">Settings</h3>
            <labs-button id="close-settings" variant="icon" aria-label="Close">
              <labs-icon slot="icon-left" name="close"></labs-icon>
            </labs-button>
          </div>

          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <h4 style="margin: 0 0 8px 0; color: var(--color-on-surface);">Theme</h4>
              <div style="display: flex; gap: 8px;">
                <labs-button variant="primary" size="small">Light</labs-button>
                <labs-button variant="outlined" size="small">Dark</labs-button>
              </div>
            </div>

            <div>
              <h4 style="margin: 0 0 8px 0; color: var(--color-on-surface);">Auto-save</h4>
              <label style="display: flex; align-items: center; gap: 8px; color: var(--color-on-surface);">
                <input type="checkbox" checked />
                Automatically save changes
              </label>
            </div>

            <div>
              <h4 style="margin: 0 0 8px 0; color: var(--color-on-surface);">Clear Data</h4>
              <labs-button variant="outlined" size="small" style="--color-primary: #d32f2f;">
                <labs-icon slot="icon-left" name="delete_forever"></labs-icon>
                Clear All Items
              </labs-button>
            </div>
          </div>
        </div>
      </labs-overlay>

      <script>
        (() => {
          const settingsTrigger = document.getElementById('settings-trigger');
          const overlay = document.getElementById('\${overlayId}');
          const closeBtn = document.getElementById('close-settings');
          const addItemBtn = document.getElementById('add-item-btn');

          if (settingsTrigger && overlay) {
            settingsTrigger.addEventListener('click', () => overlay.open());
          }
          if (closeBtn && overlay) {
            closeBtn.addEventListener('click', () => overlay.close());
          }
          if (addItemBtn) {
            addItemBtn.addEventListener('click', () => {
              alert('Add Item clicked! (This would trigger the add item functionality)');
            });
          }
        })();
      <\/script>
    \`;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const menuOverlayId = 'nav-menu';
    const profileOverlayId = 'user-profile';
    return html\`
      <div style="height: 350px; padding: 20px; border: 1px dashed var(--color-outline, #ccc); display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 16px;">
        <h3 style="margin: 0 0 16px 0; color: var(--color-on-surface);">App Content</h3>
        <p style="margin: 0; color: var(--color-on-surface); opacity: 0.8; text-align: center;">
          Main application content goes here.<br>
          Footer provides navigation and user actions.
        </p>
      </div>

      <labs-footer elevated>
        <labs-button slot="left" id="menu-trigger" variant="text">
          <labs-icon slot="icon-left" name="apps"></labs-icon>
          Menu
        </labs-button>
        <labs-button slot="center" variant="primary">
          <labs-icon slot="icon-left" name="add"></labs-icon>
          Create
        </labs-button>
        <labs-button slot="right" id="profile-trigger" variant="icon" aria-label="Profile">
          <labs-icon slot="icon-left" name="account_circle"></labs-icon>
        </labs-button>
      </labs-footer>

      <!-- Menu Overlay -->
      <labs-overlay id="\${menuOverlayId}" size="small">
        <div style="padding: 20px;">
          <h3 style="margin: 0 0 20px 0; color: var(--color-on-surface);">Menu</h3>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="home"></labs-icon>
              Home
            </labs-button>
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="folder"></labs-icon>
              Projects
            </labs-button>
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="favorite"></labs-icon>
              Favorites
            </labs-button>
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="settings"></labs-icon>
              Settings
            </labs-button>
          </div>
        </div>
      </labs-overlay>

      <!-- Profile Overlay -->
      <labs-overlay id="\${profileOverlayId}" size="small">
        <div style="padding: 24px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary, #2196f3); display: flex; align-items: center; justify-content: center; color: var(--color-on-primary, white); font-weight: bold;">
              JD
            </div>
            <div>
              <div style="font-weight: bold; color: var(--color-on-surface);">John Doe</div>
              <div style="font-size: 14px; color: var(--color-on-surface); opacity: 0.7;">john@example.com</div>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="account_circle"></labs-icon>
              Edit Profile
            </labs-button>
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="notifications"></labs-icon>
              Notifications
            </labs-button>
            <labs-button variant="text" style="justify-content: flex-start;">
              <labs-icon slot="icon-left" name="help"></labs-icon>
              Help & Support
            </labs-button>
            <hr style="border: none; border-top: 1px solid var(--color-outline, #e0e0e0); margin: 8px 0;" />
            <labs-button variant="text" style="justify-content: flex-start; --color-primary: #d32f2f;">
              <labs-icon slot="icon-left" name="logout"></labs-icon>
              Sign Out
            </labs-button>
          </div>
        </div>
      </labs-overlay>

      <script>
        (() => {
          const menuTrigger = document.getElementById('menu-trigger');
          const menuOverlay = document.getElementById('\${menuOverlayId}');
          const profileTrigger = document.getElementById('profile-trigger');
          const profileOverlay = document.getElementById('\${profileOverlayId}');

          if (menuTrigger && menuOverlay) {
            menuTrigger.addEventListener('click', () => menuOverlay.open());
          }
          if (profileTrigger && profileOverlay) {
            profileTrigger.addEventListener('click', () => profileOverlay.open());
          }
        })();
      <\/script>
    \`;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const confirmOverlayId = 'confirm-action';
    return html\`
      <div style="height: 300px; padding: 20px; border: 1px dashed var(--color-outline, #ccc); display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 16px;">
        <h3 style="margin: 0 0 16px 0; color: var(--color-on-surface);">Document Editor</h3>
        <p style="margin: 0; color: var(--color-on-surface); opacity: 0.8; text-align: center;">
          Document content would be here.<br>
          Footer provides save/cancel actions.
        </p>
      </div>

      <labs-footer elevated compact>
        <labs-button slot="left" variant="text">Cancel</labs-button>
        <labs-button slot="right" id="save-trigger" variant="primary">Save Changes</labs-button>
      </labs-footer>

      <labs-overlay id="\${confirmOverlayId}" size="small" close-on-backdrop="false">
        <div style="padding: 24px; text-align: center;">
          <labs-icon name="check_circle" style="color: var(--color-primary, #4caf50); font-size: 48px; margin-bottom: 16px;"></labs-icon>
          <h3 style="margin: 0 0 8px 0; color: var(--color-on-surface);">Changes Saved!</h3>
          <p style="margin: 0 0 20px 0; color: var(--color-on-surface); opacity: 0.8;">
            Your document has been saved successfully.
          </p>
          <labs-button id="close-confirm" variant="primary">OK</labs-button>
        </div>
      </labs-overlay>

      <script>
        (() => {
          const saveTrigger = document.getElementById('save-trigger');
          const overlay = document.getElementById('\${confirmOverlayId}');
          const closeBtn = document.getElementById('close-confirm');

          if (saveTrigger && overlay) {
            saveTrigger.addEventListener('click', () => overlay.open());
          }
          if (closeBtn && overlay) {
            closeBtn.addEventListener('click', () => overlay.close());
          }
        })();
      <\/script>
    \`;
  }
}`,...l.parameters?.docs?.source}}};const f=["TodayListPattern","AppWithNavigation","SimpleActionFooter"];export{a as AppWithNavigation,l as SimpleActionFooter,o as TodayListPattern,f as __namedExportsOrder,g as default};
