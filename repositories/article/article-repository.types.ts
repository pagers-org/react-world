import type { ArticleAttrs } from "models/article";

export type ArticlesResponse = {
  articles: ArticleAttrs[];
  articlesCount: number;
};

export type ArticlesParams = {
  tag?: string;
  author?: string;
  favorited?: string;
  offset?: number;
  limit?: number;
};
