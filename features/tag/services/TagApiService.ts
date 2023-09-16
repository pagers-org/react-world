import { Tag, tagsSchema } from '@/features/tag/types';

import { HttpClient } from '@/src/services/HttpClient';

interface GetTagsResponse {
  tags: Tag[];
}

class TagApiService extends HttpClient {
  async getTags(): Promise<GetTagsResponse> {
    const response = (await this.instance
      .get('tags')
      .json()) as GetTagsResponse;

    tagsSchema.parse(response.tags);

    return response;
  }
}

export const tagApiService = new TagApiService();
