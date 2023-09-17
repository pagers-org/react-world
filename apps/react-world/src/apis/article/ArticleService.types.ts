import type { ArticleAuthor } from './ArticlePreviewService.types';

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
