// Storybook preview config for a11y addon (added manually after failed automigration)
export default {
  parameters: {
    a11y: {
      test: "todo"
    },
    options: {
      storySort: (a, b) => {
        // Always put 'Docs' first, then default alpha order
        const docsFirst = (title) => title.toLowerCase().startsWith('docs');
        if (docsFirst(a[1].title) && !docsFirst(b[1].title)) return -1;
        if (!docsFirst(a[1].title) && docsFirst(b[1].title)) return 1;
        return a[1].title.localeCompare(b[1].title, undefined, { numeric: true });
      }
    }
  }
};
