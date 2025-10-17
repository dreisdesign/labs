// Storybook preview config for a11y addon (added manually after failed automigration)
export default {
  parameters: {
    a11y: {
      test: "todo"
    },
    options: {
      // Simple, stable alphabetical sorting for story groups and stories.
      // Sort first by full title (group/subgroup), then by story name.
      // About story will appear first alphabetically so it loads by default
      storySort: (a, b) => {
        const aTitle = (a[1] && a[1].title) || (a[1] && a[1].kind) || '';
        const bTitle = (b[1] && b[1].title) || (b[1] && b[1].kind) || '';
        const cmp = aTitle.localeCompare(bTitle, undefined, { numeric: true, sensitivity: 'base' });
        if (cmp !== 0) return cmp;
        const aName = (a[1] && a[1].name) || '';
        const bName = (b[1] && b[1].name) || '';
        return aName.localeCompare(bName, undefined, { numeric: true, sensitivity: 'base' });
      }
    }
  }
};
