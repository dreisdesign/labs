const today = new Date().toISOString().split('T')[0];
const key = `note-${today}`;

console.log(`Testing storage for key: ${key}`);
console.log(`Clearing any existing data...`);
localStorage.removeItem(key);

console.log(`Current value: "${localStorage.getItem(key)}"`);
console.log(`Setting to "test save 1"...`);
localStorage.setItem(key, 'test save 1');
console.log(`After set: "${localStorage.getItem(key)}"`);

console.log(`Setting to "test save 2"...`);
localStorage.setItem(key, 'test save 2');
console.log(`After set: "${localStorage.getItem(key)}"`);

console.log(`Setting to empty string...`);
localStorage.setItem(key, '');
console.log(`After set: "${localStorage.getItem(key)}"`);

console.log(`Clearing storage...`);
localStorage.removeItem(key);
console.log(`After clear: "${localStorage.getItem(key) || '(empty)'}"`);

console.log('✅ Storage test complete - localStorage is working');
