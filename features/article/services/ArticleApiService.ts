import { ARTICLE_LIMIT_PER_PAGE } from '@/features/article/constants';
import { Article } from '@/features/article/types';

import { ApiService } from '@/src/services/ApiService';

interface GetArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

class ArticleApiService extends ApiService {
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
