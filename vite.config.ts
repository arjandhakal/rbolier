/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    exclude: ['./e2e-tests', 'node_modules', 'dist', '.idea', '.git', '.cache']
  }
});
