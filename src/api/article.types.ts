export interface MultipleArticles {
  articles: Article[];
  articlesCount: number;
}

export type GetArticleList = (params: {
  offset: string;
  limit: string;
}) => Promise<MultipleArticles>;

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
