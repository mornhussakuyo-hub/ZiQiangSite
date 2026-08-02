import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['公告', '学术', '动态']),
    author: z.string(),
    source: z.string(),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    attachment: z.string().optional(),
    attachmentLabel: z.string().optional(),
  }),
});

export const collections = { news };
