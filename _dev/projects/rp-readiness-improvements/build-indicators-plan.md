# **Rebuilding the rp Development Script**

This document outlines the process of rebuilding the npm run rp script to create a more reliable and user-friendly development server startup experience. The goal was to solve issues where the browser would open before the servers were fully ready, leading to a cycle of manual refreshes and a confusing user experience.

### **Initial Problem**

The original rp script launched the Storybook and documentation servers and immediately opened browser tabs. However, the Storybook UI takes several seconds to build and hydrate after the port becomes available. This resulted in the user seeing a connection error or an unstyled page, forcing them to wait and refresh manually. Additionally, the terminal output was noisy and didn't provide clear status updates.

### **Step 1: Implementing a Basic Readiness Check**

The first step is to prevent the script from opening URLs until the servers are actually listening for connections.

1. Create a wait-for-url.sh Script:  
   This is a simple shell script that uses curl to repeatedly poll a URL until it receives a 200 OK HTTP status code. It includes a timeout to prevent it from running indefinitely.  
2. Update package.json:  
   Modify the rp script to call wait-for-url.sh for both the Storybook port (6006) and the docs preview port (8000) before running the open commands.  
* **Result:** This was an improvement, but it only solved half the problem. The script now waited for the port to be open, but it didn't account for Storybook's UI build time.

### **Step 2: Adding a Deep UI Readiness Check**

To address the UI hydration delay, a more robust check is needed that confirms the application's front-end is actually rendered.

1. Create a Playwright Checker Script (check-sb-console.mjs):  
   This script uses Playwright to launch a headless browser. Instead of just checking the port, it navigates to a specific Storybook story URL and waits for the preview iframe's DOMContentLoaded event to fire. This confirms the UI is fully loaded and interactive.  
2. Update the rp Script:  
   After the initial wait-for-url.sh check succeeds, the rp script should then execute the Playwright checker script. The browser tabs should only be opened after this "deep" check passes.  
* **Result:** This reliably closes the gap between the server being live and the UI being ready. The browser now opens to a fully loaded page.

### **Step 3: Preventing Duplicate Tabs and Race Conditions**

A new issue emerged: sometimes both the rp script and the underlying menu process it called would try to open browser tabs, resulting in duplicates. Also, the Playwright script could fail if it ran during a brief moment when the dev server restarted.

1. Introduce an Environment Variable (LABS\_NO\_AUTO\_OPEN):  
   Modify the rp script to set an environment variable (LABS\_NO\_AUTO\_OPEN=1) when it calls the menu script. The menu script is then updated to check for this variable and skip its own open command if it's set. This gives rp sole control over opening the browser.  
2. Harden the Playwright Script:  
   Update the check-sb-console.mjs script to include a retry mechanism. If the initial navigation fails (e.g., due to a net::ERR\_CONNECTION\_REFUSED error), it should wait and try again a few times with a backoff delay before failing.  
* **Result:** The duplicate tab issue is resolved, and the readiness check is more resilient to server restarts.

### **Step 4: Refining Terminal Output and Finalizing the Script**

The final step is to clean up the terminal output to provide a clean, simple, and informative experience.

1. Create a Quiet Wrapper Script (wait-for-storybook-ui.sh):  
   This script loops the Playwright checker in a "quiet mode," suppressing all error messages and retry attempts. It only prints a final success or timeout message.  
2. Modify Wait Script Messages:  
   Adjust the initial wait-for-url.sh script to print a more accurate status. Instead of "✅ Storybook is ready," it should print "⏳ Building storybook..." to indicate that the UI is not yet fully loaded.  
3. Move Logic to a Runner Script (scripts/rp.mjs):  
   To hide the long, complex command from the terminal when npm run rp is executed, move the entire chain of commands from package.json into a standalone Node.js script. The rp entry in package.json is simplified to node scripts/rp.mjs.  
4. Reorder URL Opening:  
   As a final polish, change the order of the open commands so that the documentation site opens first and Storybook, which is typically the focus, opens as the last, active tab.

### **Final Flow**

1. User runs npm run rp.  
2. The quiet runner script starts the servers in the background.  
3. Terminal prints ⏳ Building storybook... once the port is active.  
4. The script waits silently until the Playwright check confirms the UI is hydrated.  
5. Terminal prints ✅ Storybook UI is ready... and ✅ Docs Preview is ready....  
6. The browser opens the docs and Storybook tabs, perfectly timed and with no distracting output.