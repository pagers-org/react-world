import { isAxiosError } from 'axios';
import { api } from '../apiInstances';
import type { ArticlePreviewResponse } from './ArticlePreviewService.types';

class ArticleService {
  static async fetchArticlePreviews(
    pageNumber: number,
  ): Promise<ArticlePreviewResponse> {
    try {
      const limit = 10;
      const calculatedOffset = (pageNumber - 1) * limit;
      const offset = calculatedOffset >= 0 ? calculatedOffset : 0; // offset이 0보다 작으면 0으로 설정

      const response = await api.get('/articles', {
        params: {
          offset,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw error.response.data;
      }
      throw error;
    }
  }
}

export default ArticleService;
