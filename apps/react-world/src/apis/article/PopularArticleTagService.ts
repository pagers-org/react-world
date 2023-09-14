import { isAxiosError } from 'axios';
import { api } from '../apiInstances';
import type { PopularArticleTagsResponse } from './PopularArticleTagService.types';

class PopularArticleTagService {
  static async fetchPopularArticleTags(): Promise<PopularArticleTagsResponse> {
    try {
      const response = await api.get('/tags');
      return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw error.response.data;
      }
      throw error;
    }
  }
}

export default PopularArticleTagService;
