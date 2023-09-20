import type { ArticleAuthor } from './Article.types';

// Article Detail
export interface ArticleDetailData {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: ArticleAuthor;
}

export interface ArticleDetailResponse {
  article: ArticleDetailData;
}

export interface ArticleDetailErrorResponse {
  errors: {
    body: string[];
  };
}

// Article Comment
export interface ArticleCommentData {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: ArticleAuthor;
}

export interface ArticleCommentsResponse {
  comments: ArticleCommentData[];
}

export interface ArticleCommentsErrorResponse {
  errors: {
    body: string[];
  };
}
