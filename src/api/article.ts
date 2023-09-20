import { FeedResponseType } from '@/types/article';

import { BASE_HEADER, BASE_URL } from '@/constants/auth';

const getGlobalFeed = async (
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<FeedResponseType> => {
  return await fetch(`${BASE_URL}/articles`, {
    ...options,
    method: 'get',
    headers: {
      ...BASE_HEADER,
      ...headers,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const getMyFeed = async (
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<FeedResponseType> => {
  return await fetch(`${BASE_URL}/articles/feed`, {
    ...options,
    method: 'get',
    headers: {
      ...BASE_HEADER,
      ...headers,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export { getGlobalFeed, getMyFeed };
