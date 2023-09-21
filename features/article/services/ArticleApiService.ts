import { HttpClient } from '@/src/services/HttpClient';

import { Article, articlesSchema } from '@/features/article/types';

interface GetArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

class ArticleApiService extends HttpClient {
  async getArticles({
    searchParams,
  }: {
    searchParams: URLSearchParams;
  }): Promise<GetArticlesResponse> {
    const { data } = await this.instance.get<GetArticlesResponse>('articles', {
      params: searchParams,
    });

    articlesSchema.parse(data.articles);

    return data;
  }
}

export const articleApiService = new ArticleApiService();
