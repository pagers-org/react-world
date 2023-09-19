import { ProfileResponse } from '@/types/api/profile';

import { COMMON_HEADERS, HTTP_METHOD } from '@/constants/api';
import { API_BASE_URL } from '@/constants/env';
import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getCookie } from '@/utils/cookie';

/* Client Side APIs */

// Follow a user
export const postFollowUser = (
  username: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<ProfileResponse> => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return fetch(`${API_BASE_URL}/profiles/${username}/follow`, {
    ...options,
    method: HTTP_METHOD.POST,
    headers: {
      ...COMMON_HEADERS,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Unfollow a user
export const deleteUnfollowUser = (
  username: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<ProfileResponse> => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return fetch(`${API_BASE_URL}/profiles/${username}/follow`, {
    ...options,
    method: HTTP_METHOD.DELETE,
    headers: {
      ...COMMON_HEADERS,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// -----------------------------------------------------------------------------------------------------

/* Server Side APIs for Next 13 APP Router extended fetch api */

// Get a Profile (Auth Optional)
export const getProfile = (
  username: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<ProfileResponse> => {
  return fetch(`${API_BASE_URL}/profiles/${username}`, {
    ...options,
    method: HTTP_METHOD.GET,
    headers: {
      ...COMMON_HEADERS,
      ...headers,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};
