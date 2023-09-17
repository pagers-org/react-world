import { get } from 'services/fetch-utils';
import { ArticleListSchema, SearchParams } from 'models';

class ArticleApiService {
  async getArticles({ limit = 10, offset = 0 }: Partial<SearchParams> = {}) {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    });

    return await get(`/articles?${params}`, ArticleListSchema);
  }
}

export const articleApi = new ArticleApiService();
