import "./components/labs-icon.js";
export default {
  title: "Icons/Preview",
  argTypes: {
    iconColor: {
      control: { type: "color" },
      name: "Icon Color",
      description: "Set the color of all icons in the grid",
    },
    iconSize: {
      control: { type: "range", min: 16, max: 64, step: 8 },
      name: "Icon Size",
      description: "Set the size of all icons in the grid",
    },
  },
};

// 📝 Edit the icon list in '../components/icons-list.js' to add/remove icons
import iconNames from "./components/icons-list.js";

export const Grid = ({
  iconColor = "var(--color-on-surface)",
  iconSize = 32,
}) => {
  const grid = document.createElement("div");
  // 📝 Edit grid layout below
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(6, 1fr)"; // Number of columns
  grid.style.gap = "24px"; // Gap between icons

  iconNames.forEach((name) => {
    const cell = document.createElement("div");
    cell.style.display = "flex";
    cell.style.flexDirection = "column";
    cell.style.alignItems = "center";
    cell.style.justifyContent = "center";

    const icon = document.createElement("labs-icon");
    icon.setAttribute("name", name);
    icon.setAttribute(
      "style",
      `width:${iconSize}px; height:${iconSize}px; color:${iconColor};`,
    );

    const label = document.createElement("div");
    label.textContent = name;

    const link = document.createElement("div");
    link.innerHTML = `<a href="./?path=/story/icons-default--default&args=name:${name}" target="_parent">View in story</a>`;

    cell.appendChild(icon);
    cell.appendChild(label);
    cell.appendChild(link);
    grid.appendChild(cell);
  });

  return grid;
};

Grid.args = {
  iconColor: "var(--color-on-surface)",
  iconSize: 32,
};
