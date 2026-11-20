import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // Sites serves at the root; GitHub Pages serves this repository at /portfolio/.
  base: mode === 'github-pages' ? '/portfolio/' : './',
  build: { outDir: 'dist' },
}));
