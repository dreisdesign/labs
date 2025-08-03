// Generate a Storybook sitemap/index for your design system
// Usage: node scripts/generate-storybook-sitemap.js

const fs = require("fs");
const path = require("path");

const STORIES_DIR = path.join(__dirname, "../src/stories");
const OUTPUT_FILE = path.join(__dirname, "../../STORYBOOK_SITEMAP.md");

function getStoryFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".stories.js"))
    .map((f) => path.join(dir, f));
}

function parseStoryFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  // Get the title from the default export
  const titleMatch = content.match(
    /export default \{[^}]*title:\s*['"]([^'"]+)['"]/,
  );
  const title = titleMatch ? titleMatch[1] : "(no title)";
  // Get all named exports (stories)
  const exports = Array.from(content.matchAll(/export const (\w+)/g)).map(
    (m) => m[1],
  );
  return { file: path.basename(filePath), title, exports };
}

function generateSitemap() {
  const files = getStoryFiles(STORIES_DIR);
  // Generate timestamp in 12-hour format
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const dateStr = now.toLocaleDateString();
  const timeStr = `${hours}:${minutes} ${ampm}`;
  const timestamp = `> _Last generated: ${dateStr} ${timeStr}_\n\n`;
  let md = "# Storybook Sitemap\n" + timestamp;
  files.forEach((filePath) => {
    const { file, title, exports } = parseStoryFile(filePath);
    md += `## ${title}\n`;
    md += `*File:* \`src/stories/${file}\`\n`;
    md += `<!-- Stories from: ${file} -->\n`;
    exports.forEach((exp) => {
      md += `- **${exp}**\n`;
    });
    md += "\n";
  });
  fs.writeFileSync(OUTPUT_FILE, md);
  console.log("Storybook sitemap generated at", OUTPUT_FILE);
}

generateSitemap();
