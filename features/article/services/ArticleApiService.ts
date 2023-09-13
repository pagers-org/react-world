import { Options } from 'ky';

import { ApiService } from '@/src/services/ApiService';

import { Article } from '@/features/article/types';

interface GetArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

class ArticleApiService extends ApiService {
  async getArticles(options?: Options): Promise<GetArticlesResponse> {
    return await this.instance
      .get('articles', {
        ...options,
      })
      .json();
  }
}

export const articleApiService = new ArticleApiService();
