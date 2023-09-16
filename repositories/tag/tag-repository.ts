import { request } from "lib/request";

import type { TagsResponse } from "./tag-repository.types";

class TagRepository {
  findAll(): Promise<TagsResponse> {
    return request.get<TagsResponse>("/tags");
  }
}

export const tagRepository = new TagRepository();
