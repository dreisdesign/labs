import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['src/**/*.test.*', 'src/**/__tests__/**/*.*'],
        environment: 'node',
        globals: false,
    },
});
