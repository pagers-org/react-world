import { isAxiosError } from 'axios';
import { api } from '../apiInstances';
import type {
  ArticleDetailResponse,
  ArticleDetailErrorResponse,
} from './ArticleService.types';

class ArticleService {
  static async fetchArticleDetail(
    slug: string,
  ): Promise<ArticleDetailResponse> {
    try {
      const response = await api.get(`/articles/${slug}`);
      return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        console.error('Axios error occurred:', error.response.data);
        throw error.response.data as ArticleDetailErrorResponse;
      }
      console.error('An unexpected error occurred:', error);
      throw error;
    }
  }
}

export default ArticleService;
