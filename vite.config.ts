import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative assets so the build works from any GitHub Pages subpath.
  base: './',
});
