import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    topic: z.string(),
    area: z.string(),
    tags: z.array(z.string()),
    summary: z.string().optional(),
    // Garden metadata. Both are optional so every pre-existing post still validates:
    // stage is how mature a note is, updated is when it was last tended.
    stage: z.enum(['seedling', 'growing', 'evergreen']).default('seedling'),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { posts };
