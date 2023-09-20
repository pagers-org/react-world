import { Tag, tagsSchema } from '@/features/tag/types';

import { HttpClient } from '@/src/services/HttpClient';

interface GetTagsResponse {
  tags: Tag[];
}

class TagApiService extends HttpClient {
  async getTags(): Promise<GetTagsResponse> {
    const { data } = await this.instance.get<GetTagsResponse>('tags');

    tagsSchema.parse(data.tags);

    return data;
  }
}

export const tagApiService = new TagApiService();
