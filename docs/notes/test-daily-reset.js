/**
 * Daily Reset Logic Test
 * Tests that old notes are cleaned up when the app loads
 */

console.log('🧪 Daily Reset Logic Test\n');

// Mock localStorage
const mockStorage = {};

const mockLocalStorage = {
    getItem: (key) => mockStorage[key] || null,
    setItem: (key, value) => { mockStorage[key] = value; },
    removeItem: (key) => { delete mockStorage[key]; },
    get length() { return Object.keys(mockStorage).length; },
    key: (index) => Object.keys(mockStorage)[index]
};

// Override Object.keys for mockLocalStorage to return only mockStorage keys
const originalKeys = Object.keys;
Object.keys = function (obj) {
    if (obj === mockLocalStorage) {
        return originalKeys(mockStorage);
    }
    return originalKeys(obj);
};// Override with mock
const originalLS = global.localStorage;
global.localStorage = mockLocalStorage;

// Simulate the cleanup function
function cleanupOldNotes() {
    const today = new Date().toISOString().split('T')[0];
    const keys = Object.keys(localStorage);
    console.log(`  Debug: today = ${today}`);
    console.log(`  Debug: checking keys: ${keys.join(', ')}`);
    keys.forEach(key => {
        const isNoteKey = key.startsWith('note-');
        const isNotToday = key !== `note-${today}`;
        const isNotLabel = key !== 'note-label';
        const isNotFlavor = key !== 'note-flavor';
        const isNotTheme = key !== 'note-theme';
        const shouldRemove = isNoteKey && isNotToday && isNotLabel && isNotFlavor && isNotTheme;
        console.log(`  Debug: ${key} => noteKey:${isNoteKey}, notToday:${isNotToday}, notLabel:${isNotLabel}, notFlavor:${isNotFlavor}, notTheme:${isNotTheme} => remove:${shouldRemove}`);
        if (shouldRemove) {
            localStorage.removeItem(key);
        }
    });
}// Test 1: Old notes are removed
console.log('📝 Test 1: Old notes from previous days are removed');
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const yesterdayStr = yesterday.toISOString().split('T')[0];

const dayBeforeYesterday = new Date();
dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);
const dayBeforeYesterdayStr = dayBeforeYesterday.toISOString().split('T')[0];

mockStorage[`note-${dayBeforeYesterdayStr}`] = 'Old note 1';
mockStorage[`note-${yesterdayStr}`] = 'Old note 2';
mockStorage['note-label'] = 'Custom Label (should persist)';
mockStorage['note-flavor'] = 'blueberry (should persist)';
mockStorage['note-theme'] = 'light (should persist)';

const today = new Date().toISOString().split('T')[0];
const keyBefore = `note-${today}`;

console.log(`  Before cleanup: ${Object.keys(mockStorage).length} keys`);
Object.keys(mockStorage).forEach(k => console.log(`    - ${k}`));

cleanupOldNotes();

console.log(`  After cleanup: ${Object.keys(mockStorage).length} keys`);
Object.keys(mockStorage).forEach(k => console.log(`    - ${k}`));

const hasOldNote1 = `note-${dayBeforeYesterdayStr}` in mockStorage;
const hasOldNote2 = `note-${yesterdayStr}` in mockStorage;
const hasLabel = 'note-label' in mockStorage;
const hasFlavor = 'note-flavor' in mockStorage;
const hasTheme = 'note-theme' in mockStorage;

if (!hasOldNote1 && !hasOldNote2 && hasLabel && hasFlavor && hasTheme) {
    console.log('  ✅ Old notes removed, settings preserved\n');
} else {
    console.log('  ❌ Cleanup failed');
    console.log(`     - Old note 1 removed: ${!hasOldNote1}`);
    console.log(`     - Old note 2 removed: ${!hasOldNote2}`);
    console.log(`     - Label preserved: ${hasLabel}`);
    console.log(`     - Flavor preserved: ${hasFlavor}`);
    console.log(`     - Theme preserved: ${hasTheme}\n`);
}// Test 2: Empty storage doesn't break
console.log('📝 Test 2: Cleanup works with empty storage');
mockStorage.clear?.() || Object.keys(mockStorage).forEach(k => delete mockStorage[k]);
try {
    cleanupOldNotes();
    console.log('  ✅ No errors with empty storage\n');
} catch (e) {
    console.log(`  ❌ Error: ${e.message}\n`);
}

// Test 3: Only note-* keys are processed
console.log('📝 Test 3: Non-note keys are not affected');
mockStorage['other-key'] = 'some value';
mockStorage['note-label'] = 'Label';
mockStorage['note-2025-01-01'] = 'Old note';
mockStorage['random'] = 'another value';

cleanupOldNotes();

if ('other-key' in mockStorage && 'random' in mockStorage && 'note-label' in mockStorage && !('note-2025-01-01' in mockStorage)) {
    console.log('  ✅ Non-note keys preserved, old note-* keys cleaned\n');
} else {
    console.log('  ❌ Key filtering failed\n');
}

// Restore original localStorage
global.localStorage = originalLS;
Object.keys = originalKeys;

console.log('✨ Daily Reset Tests Complete');
