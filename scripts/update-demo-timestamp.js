// Update the timestamp comment at the top of docs/demo/index.html
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../docs/demo/index.html');
const now = new Date();
const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\{\{timestamp\}\}/g, timestamp);
fs.writeFileSync(file, content, 'utf8');
console.log('Updated demo timestamp:', timestamp);
