export type MultipleArticles = {
  articles: Article[];
  articlesCount: number;
};

export type GetArticle = (params: { slug: string }) => Promise<{ article: Article }>;

export type GetArticleList = (params: {
  offset?: string;
  limit?: string;
}) => Promise<MultipleArticles>;

export type Article = {
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
};

export type Author = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};
