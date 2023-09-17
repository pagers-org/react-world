import type { Author } from "./author";

export type RichArticle = Article & {
  body: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  tagList: string[];
  favorited: boolean;
  favoritesCount: number;
  author: Author;
  createdAt: Date;
  updatedAt: Date;
};
