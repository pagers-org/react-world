import type { Article, RichArticle } from "models/article";

export type ArticlesResponse = {
  articles: Article[];
  articlesCount: number;
};

export type ArticlesParams = {
  tag?: string;
  author?: string;
  favorited?: string;
  offset?: number;
  limit?: number;
};

export type ArticleResponse = {
  article: RichArticle;
};
