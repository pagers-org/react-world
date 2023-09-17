import { ProfileResponse } from './profile';

export type FeedQueryStrings = Partial<{
  tag: string;
  author: string; // username
  favorited: string; // username
  offset: string;
  limit: string;
}>;

export type FeedResponse = {
  article: {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: ProfileResponse['profile'];
  };
  errors?: unknown;
};

export type FeedsResponse = {
  articles: Array<FeedResponse['article']>;
  articlesCount: number;
};

export type PostArticlePayload = {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
};

export type PutArticlePayload = {
  article: Omit<PostArticlePayload['article'], 'tagList'>;
};

export type ArticleResponse = FeedResponse;
