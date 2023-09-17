export interface ArticlesResponse {
  articles: Articles[];
  articlesCount: number;
}

export interface Articles {
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
  bio: undefined | null;
  image: string;
  following: boolean;
}
