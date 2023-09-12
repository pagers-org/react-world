import { z } from "zod";

export interface ArticlesQueryParamsType {
  tag?: string;
  author?: string;
  favorited?: string;
  offset?: number;
  limit?: number;
}

export const ArticleAuthorSchema = z.object({
  username: z.string(),
  bio: z.nullable(z.string()),
  image: z.string(),
  following: z.boolean(),
});

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
  author: ArticleAuthorSchema,
});

export const ArticlesResponseSchema = z.object({
  articles: z.array(ArticleSchema),
  articlesCount: z.number(),
});

export type ArticlesDTO = z.infer<typeof ArticlesResponseSchema>;
