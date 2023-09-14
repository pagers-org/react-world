export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

interface Author {
  username: string;
  bio: null;
  image: string;
  following: boolean;
}

export interface ArticleQueryParams {
  tag: string;
  author: string;
  favorited: string;
  offset: number;
  limit: number;
}

export interface ArticleResponseType {
  articles: Article[];
  articlesCount: number;
}

export interface GetArticlesInputParams {
  tag: string;
  author: string;
  favorited: string;
  offset: number;
  limit: number;
}
