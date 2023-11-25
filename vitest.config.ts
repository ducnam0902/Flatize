import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setup-test.ts',
    alias: {
      '@flatize': path.resolve(__dirname, './src')
    }
  }
});
