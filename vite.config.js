import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { copyFileSync, existsSync } from 'node:fs';

// Projeto sem pastas: estes arquivos ficam na raiz e são copiados para o build.
const STATIC_FILES = ['robots.txt', 'sitemap.xml', '_redirects', '.htaccess', 'og-viva4you.jpg'];

const copyStatic = () => ({
  name: 'copy-static-files',
  apply: 'build',
  closeBundle() {
    for (const f of STATIC_FILES) if (existsSync(f)) copyFileSync(f, `dist/${f}`);
  },
});

// `npm run build`          → build de produção (dist/)
// `npm run build:preview`  → HTML único para apresentação (dist-preview/)
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'single' ? [viteSingleFile()] : [copyStatic()])],
  publicDir: false,
  build: { outDir: mode === 'single' ? 'dist-preview' : 'dist' },
}));
