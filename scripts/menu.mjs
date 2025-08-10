#!/usr/bin/env node
// Always run from workspace root
process.chdir("/Users/danielreis/labs");
// Interactive menu for Labs build, deploy, and preview workflows (ESM version)
import inquirer from "inquirer";
import { execSync, exec } from "child_process";

const openUrls = (urls) => {
  urls.forEach((url) => {
    console.log(`Opening or focusing ${url} ...`);
    try {
      if (process.platform === "darwin") {
        execSync(`open "${url}"`);
      } else if (process.platform === "win32") {
        execSync(`start chrome "${url}"`);
      } else {
        execSync(`xdg-open "${url}"`);
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
          // A better check would be to see if the server is connectable
          if (data.toString().includes("Storybook started")) {
            openUrls([storybookUrl]);
          }
        });

        storybookProcess.stderr.on("data", (data) => {
          console.error(data.toString());
        });

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
