interface ArticlePostRequestType {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
}

interface AuthorType {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

interface ArticleType {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: AuthorType;
}
interface FeedResponseType {
  articles: ArticleType[];
  articlesCount: number;
}

export type {
  FeedResponseType,
  ArticlePostRequestType,
  ArticleType,
  AuthorType,
};
