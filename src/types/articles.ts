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

export interface ArticleResponseType {
  articles: Article[];
  articleCount: number;
}
