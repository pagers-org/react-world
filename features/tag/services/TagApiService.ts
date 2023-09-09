import { Tag } from '@/features/tag/types';

import { ApiService } from '@/src/services/ApiService';
import { ResponsePromise } from 'ky';

interface GetTagsResponse {
  tags: Tag[];
}

class TagApiService extends ApiService {
  async getTags(): Promise<GetTagsResponse> {
    return await this.instance.get('tags').json();
  }
}

export const tagApiService = new TagApiService();
