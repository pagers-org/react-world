import { isAxiosError } from 'axios';
import { api } from '../apiInstances';
import type { ArticlePreviewResponse } from './ArticlePreviewService.types';

export const ARTICLE_PREVIEW_FETCH_LIMIT = 10;

class ArticleService {
  static async fetchArticlePreviews(
    pageIndex: number,
  ): Promise<ArticlePreviewResponse> {
    try {
      const calculatedOffset = pageIndex * ARTICLE_PREVIEW_FETCH_LIMIT;
      const offset = calculatedOffset >= 0 ? calculatedOffset : 0; // offset이 0보다 작으면 0으로 설정

      const response = await api.get('/articles', {
        params: {
          offset,
          ARTICLE_PREVIEW_FETCH_LIMIT,
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
