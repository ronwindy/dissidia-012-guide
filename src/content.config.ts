import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guide = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/guide' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    order: z.number(),
  }),
});

export const collections = { guide };
