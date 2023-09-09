import ky from 'ky';

import { ARTICLE_LIMIT_PER_PAGE } from '@/features/article/constants';
import { Article } from '@/features/article/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface GetArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

class ArticleApiService {
  private readonly instance;

  constructor() {
    this.instance = ky.create({ prefixUrl: API_BASE_URL });
  }

  async getArticles(page = 1): Promise<GetArticlesResponse> {
    const searchParams = new URLSearchParams();
    searchParams.set('offset', String(page * ARTICLE_LIMIT_PER_PAGE));

    return await this.instance
      .get('articles', {
        searchParams,
      })
      .json();
  }
}

export const articleApiService = new ArticleApiService();
