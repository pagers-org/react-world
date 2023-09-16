import { Options } from 'ky';

import { HttpClient } from '@/src/services/HttpClient';

import { Article, articlesSchema } from '@/features/article/types';

interface GetArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

class ArticleApiService extends HttpClient {
  async getArticles(options?: Options): Promise<GetArticlesResponse> {
    const res = (await this.instance
      .get('articles', {
        ...options,
      })
      .json()) as GetArticlesResponse;

    articlesSchema.parse(res.articles);

    return res;
  }
}

export const articleApiService = new ArticleApiService();
