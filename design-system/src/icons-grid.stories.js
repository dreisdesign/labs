import './components/labs-icon.js';
export default {
    title: 'Icons/Preview',
    parameters: { docs: { page: null } },
};

// 📝 Edit the icon list in '../components/icons-list.js' to add/remove icons
import iconNames from './components/icons-list.js';

export const Grid = () => {
    const grid = document.createElement('div');
    // 📝 Edit grid layout below
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(6, 1fr)'; // Number of columns
    grid.style.gap = '24px'; // Gap between icons

    iconNames.forEach(name => {
        const cell = document.createElement('div');
        cell.style.textAlign = 'center';

        const icon = document.createElement('labs-icon');
        icon.setAttribute('name', name);
        icon.setAttribute('style', 'width:32px; height:32px;');

        const label = document.createElement('div');
        label.textContent = name;

        const link = document.createElement('div');
        link.innerHTML = `<a href="./?path=/story/icons-default--default&args=name:${name}" target="_parent">View in story</a>`;

        cell.appendChild(icon);
        cell.appendChild(label);
        cell.appendChild(link);
        grid.appendChild(cell);
    });

    return grid;
};
