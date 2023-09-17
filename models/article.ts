import { z } from 'zod';
import { AuthorSchema } from './author';

export const ArticleSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  body: z.string(),
  tagList: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
  favorited: z.boolean(),
  favoritesCount: z.number(),
  author: AuthorSchema,
});

export const ArticleListSchema = z.object({
  articles: z.array(ArticleSchema),
  articlesCount: z.number(),
});

export type Article = z.infer<typeof ArticleSchema>;
