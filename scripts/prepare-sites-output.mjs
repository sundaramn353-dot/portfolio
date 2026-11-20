import { cpSync, rmSync } from 'node:fs';

// Keep the existing Vite output for GitHub Pages; mirror it for Sites hosting.
const source = new URL('../src/dist/', import.meta.url);
const output = new URL('../dist/', import.meta.url);
rmSync(output, { recursive: true, force: true });
cpSync(source, output, { recursive: true });
