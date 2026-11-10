import { defineCollection, z } from 'astro:content';
import { guideLoader } from './lib/chapterLoader.mjs';

const guide = defineCollection({
  loader: guideLoader(),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    order: z.number(),
  }),
});

export const collections = { guide };
