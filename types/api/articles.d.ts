import { Profile } from './profile';

export type Article = {
  slug?: string;
  title: string;
  description?: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updateAt?: string;
  favorited?: boolean;
  favoritesCount: number;
  author: Profile;
};

export type NewArticle = Pick<Article, 'title' | 'description' | 'body' | 'tagList'>;

export type UpdateArticle = Pick<Article, 'title' | 'description' | 'body'>;
