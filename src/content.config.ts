import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One entry per .mdx file. Single-file pages: `gameplay-basics`. Chapter folders:
// `part-1/00-intro`, `part-1/01-gateway-1`, ... (ids keep the folder and filename).
// Frontmatter is optional here; src/lib/guideData.ts enforces where it is required.
const guide = defineCollection({
  loader: glob({
    base: './src/content/guide',
    pattern: ['*.mdx', '*/*.mdx'],
    generateId: ({ entry }) => entry.replace(/\\/g, '/').replace(/\.mdx$/, ''),
  }),
  schema: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { guide };
