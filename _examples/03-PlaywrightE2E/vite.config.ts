import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    reporters: ['default', 'junit', 'vitest-sonar-reporter'],
    outputFile: {
      junit: 'test-results/results-unit.xml',
      'vitest-sonar-reporter': 'test-results/sonar-report.xml',
    },
    include: ['./tests/**/*.spec.ts'],
  },
}));
