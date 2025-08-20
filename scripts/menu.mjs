#!/usr/bin/env node
// Always run from workspace root
process.chdir("/Users/danielreis/labs");
// Interactive menu for Labs build, deploy, and preview workflows (ESM version)
import inquirer from "inquirer";
import { execSync, exec } from "child_process";

const openUrls = (urls) => {
  urls.forEach((url) => {
    console.log(`Opening or focusing ${url} in Chrome...`);
    try {
      if (process.platform === "darwin") {
        // Try to open with Google Chrome specifically
        try {
          execSync(`open -a "Google Chrome" "${url}"`);
        } catch (e) {
          // Fallback: try Chromium or default browser
          try {
            execSync(`open -a "Chromium" "${url}"`);
          } catch (e2) {
            console.error(`Chrome not found. Opening in default browser.`);
            execSync(`open "${url}"`);
          }
        }
      } else if (process.platform === "win32") {
        // Windows: start chrome
        try {
          execSync(`start chrome "${url}"`);
        } catch (e) {
          console.error(`Chrome not found. Opening in default browser.`);
          execSync(`start "" "${url}"`);
        }
      } else {
        // Linux: try google-chrome, chromium-browser, or fallback
        let opened = false;
        try {
          execSync(`google-chrome "${url}"`);
          opened = true;
        } catch (e) { }
        if (!opened) {
          try {
            execSync(`chromium-browser "${url}"`);
            opened = true;
          } catch (e2) { }
        }
        if (!opened) {
          try {
            execSync(`xdg-open "${url}"`);
            opened = true;
          } catch (e3) {
            console.error(`Failed to open ${url}: Chrome not found. Please open it manually.`);
          }
        }
      }
    } catch (e) {
      console.error(
        `Failed to open ${url}: ${e.message}. Please open it manually.`,
      );
    }
  });
};

async function main() {
  try {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          {
            name: "Build, preview, and serve Storybook (local, for dev)",
            value: "serveStorybook",
          },
          {
            name: "Run Storybook theme checks (build static + run checks)",
            value: "runThemeChecks",
          },
          {
            name: "Sync design system to docs (dev workflow)",
            value: "devSync",
          },
          {
            name: "Build & Deploy (publishes, then preview demo)",
            value: "deploy",
          },
          { name: "Exit", value: "exit" },
        ],
      },
    ]);

    if (action === "serveStorybook") {
      // Always update the Storybook sitemap before building
      execSync("node design-system/scripts/generate-storybook-sitemap.js", {
        stdio: "inherit",
      });
      console.log("\nBuilding Storybook...");
      execSync("npm run build-storybook", {
        cwd: "./design-system",
        stdio: "inherit",
      });
      console.log("\nBuild complete. Starting server...");

      const port = 6006; // Default Storybook port
      let portInUse = false;
      try {
        // Check if port is in use
        execSync(`lsof -i :${port} | grep LISTEN`);
        portInUse = true;
      } catch (e) {
        // Port is not in use
      }

      const storybookUrl = `http://localhost:${port}`;

      if (portInUse) {
        console.log(`\nStorybook is already running on port ${port}.`);
        openUrls([storybookUrl]);
      } else {
        console.log("\nStarting the Storybook dev server...");
        // Run storybook in the background
        const storybookProcess = exec("npm run storybook", {
          cwd: "./design-system",
        });

        storybookProcess.stdout.on("data", (data) => {
          console.log(data.toString());
        });

        storybookProcess.stderr.on("data", (data) => {
          console.error(data.toString());
        });


        // Wait for the server to be up before opening the browser (prevents double open)
        const waitForPort = async (port, callback, retries = 20, interval = 250) => {
          const net = (await import('net'));
          let attempts = 0;
          const check = () => {
            const socket = net.createConnection(port, '127.0.0.1');
            socket.on('connect', () => {
              socket.end();
              callback();
            });
            socket.on('error', () => {
              socket.destroy();
              if (++attempts < retries) {
                setTimeout(check, interval);
              } else {
                console.error(`Timed out waiting for port ${port} to open.`);
              }
            });
          };
          check();
        };

        waitForPort(port, () => openUrls([storybookUrl]));
        // --- Keypress handler: Press 'q' to exit preview menu ---
        if (process.stdin.isTTY) {
          process.stdin.setRawMode(true);
          process.stdin.resume();
          process.stdin.setEncoding('utf8');
          process.stdin.on('data', (key) => {
            if (key === 'q' || key === 'Q') {
              console.log('\nPreview closed by user.');
              process.exit(0);
            }
          });
        }

        console.log(
          "\nStorybook dev server is starting in the background. It may take a moment.",
        );
        console.log(
          "You can close this menu. The server will continue to run.",
        );
      }
    } else if (action === "devSync") {
      console.log("\n🔄 Syncing design system files to docs for localhost development...");
      execSync("./scripts/dev-sync.sh", { stdio: "inherit" });
      console.log("\n✅ Design system files synced successfully!");
      console.log("📝 Your localhost:8080 apps should now reflect the latest changes.");

      // Optionally open the demo pages
      const localUrls = [
        "http://localhost:8080/docs/demo/",
        "http://localhost:8080/docs/today-list/"
      ];

      console.log("\n🌐 Testing URLs:");
      localUrls.forEach(url => console.log(`   ${url}`));

      const { openPages } = await inquirer.prompt([{
        type: "confirm",
        name: "openPages",
        message: "Open test pages in browser?",
        default: true
      }]);

      if (openPages) {
        openUrls(localUrls);
      }
    } else if (action === "deploy") {
      // Always update the Storybook sitemap before deploying
      execSync("node design-system/scripts/generate-storybook-sitemap.js", {
        stdio: "inherit",
      });
      console.log(
        "\nBuilding and deploying to GitHub Pages, and updating demo...",
      );
      execSync("npm run deploy", { stdio: "inherit" });

      // Define URLs
      const storybookUrl = "https://dreisdesign.github.io/labs/design-system/";
      const demoUrl = "https://dreisdesign.github.io/labs/demo/";

      openUrls([storybookUrl, demoUrl]);
    } else if (action === "exit") {
      console.log("Goodbye!");
      process.exit(0);
    } else if (action === "runThemeChecks") {
      console.log('\n🔬 Running Storybook theme checks (static build)...');
      // update sitemap
      execSync("node design-system/scripts/generate-storybook-sitemap.js", { stdio: 'inherit' });
      console.log('\nBuilding static Storybook...');
      execSync("npm run build-storybook", { cwd: "./design-system", stdio: 'inherit' });

      const port = 6007; // serve static on a different port to avoid clashes
      const storybookUrl = `http://localhost:${port}`;

      // start a simple static server for the built output
      console.log(`\nServing static Storybook at ${storybookUrl} ...`);
      const storybookStaticProcess = exec("python3 -m http.server 6007", {
        cwd: "./design-system/storybook-static",
      });

      storybookStaticProcess.stdout.on('data', (d) => console.log(d.toString()));
      storybookStaticProcess.stderr.on('data', (d) => console.error(d.toString()));

      // wait for port to be available (re-use waitForPort logic)
      const waitForPort = async (port, callback, retries = 40, interval = 250) => {
        const net = (await import('net'));
        let attempts = 0;
        const check = () => {
          const socket = net.createConnection(port, '127.0.0.1');
          socket.on('connect', () => {
            socket.end();
            callback();
          });
          socket.on('error', () => {
            socket.destroy();
            if (++attempts < retries) {
              setTimeout(check, interval);
            } else {
              console.error(`Timed out waiting for port ${port} to open.`);
            }
          });
        };
        check();
      };

      await waitForPort(port, () => console.log(`Static Storybook is up at ${storybookUrl}`));

      try {
        // run the theme check script against an authoritative tokens story iframe
        console.log('\nRunning theme check script against tokens Colors story...');
        execSync(`node scripts/check-storybook-theme.js 'http://localhost:${port}/iframe.html?id=tokens-colors--colors'`, { stdio: 'inherit' });
        console.log('\nTheme checks completed successfully.');
      } catch (e) {
        console.error('\nTheme checks failed or returned an error.');
      } finally {
        try {
          storybookStaticProcess.kill();
          console.log('\nStopped static Storybook server.');
        } catch (e) { }
      }
    }
  } catch (error) {
    if (error.message.includes("User force closed the prompt")) {
      console.log("\nMenu closed.");
      process.exit(0);
    } else {
      console.error("\nAn unexpected error occurred:", error);
      process.exit(1);
    }
  }
}

main();
