import { FavoritesResponse } from '@/types/api/favorites';

import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getCookie } from '@/utils/cookie';

import { httpClient } from './http/httpClient';

// Favorites an article (Auth Required)
export const postFavorite = ({
  slug,
  headers = {},
  options = {},
}: {
  slug: string;
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<FavoritesResponse> => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return httpClient
    .post(`/articles/${slug}/favorite`, {
      ...options,
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Unfavorite an article (Auth Required)
export const deleteFavorite = ({
  slug,
  headers = {},
  options = {},
}: {
  slug: string;
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<FavoritesResponse> => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return httpClient
    .delete(`/articles/${slug}/favorite`, {
      ...options,
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};
