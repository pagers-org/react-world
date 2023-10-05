import { TagsResponse } from '@/types/api/tags';

import { httpClient } from './http/httpClient';

// Get tags (Auth Optional)
export const getTags = ({
  headers = {},
  options = {},
}: {
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<TagsResponse> => {
  return httpClient
    .get(`/tags`, {
      ...options,
      headers,
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};
