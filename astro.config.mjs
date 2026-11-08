import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { readFileSync } from 'node:fs';

const project = JSON.parse(readFileSync(new URL('./project.config.json', import.meta.url), 'utf8'));

// https://astro.build/config
export default defineConfig({
  site: project.site,
  base: project.base,
  output: 'static',
  build: {
    format: 'file'
  },
  // Keep quotes, dashes and ellipses exactly as typed.
  markdown: {
    smartypants: false
  },
  integrations: [mdx()],
});
