import { ProfileResponse } from '@/types/api/profile';

import { ERROR } from '@/constants/error';
import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getCookie } from '@/utils/cookie';

import { httpClient } from './http/httpClient';

/* Client Side APIs */

// Follow a user
export const postFollowUser = ({
  username,
  headers = {},
  options = {},
}: {
  username: string;
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<ProfileResponse> => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return httpClient
    .post(`/profiles/${username}/follow`, {
      ...options,
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Unfollow a user
export const deleteUnfollowUser = ({
  username,
  headers = {},
  options = {},
}: {
  username: string;
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<ProfileResponse> => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return httpClient
    .delete(`/profiles/${username}/follow`, {
      ...options,
      headers: {
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
export const getProfile = ({
  username,
  headers,
  options,
}: {
  username: string;
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<ProfileResponse | void> => {
  return httpClient
    .get(`/profiles/${username}`, {
      ...options,
      headers,
    })
    .then((res) => res.json())
    .then((res: ProfileResponse) => {
      if (!res?.profile) {
        throw new Error(ERROR.PROFILE);
      }
      return res;
    })
    .catch((err) => console.error(err));
};
