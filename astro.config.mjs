import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { readFileSync } from 'node:fs';
import remarkGlossary from './src/lib/remark-glossary.mjs';

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
    smartypants: false,
    remarkPlugins: [remarkGlossary],
  },
  integrations: [mdx()],
});
