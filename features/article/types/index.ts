import { z } from 'zod';

import { tagsSchema } from '@/features/tag/types';

export const authorSchema = z.object({
  username: z.string(),
  bio: z.string().nullish(),
  image: z.string(),
  following: z.boolean(),
});

export const articleSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  body: z.string(),
  tagList: tagsSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  favorited: z.boolean(),
  favoritesCount: z.number(),
  author: authorSchema,
});

export type Article = z.infer<typeof articleSchema>;
export type Author = z.infer<typeof authorSchema>;
