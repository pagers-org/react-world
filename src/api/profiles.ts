import { BASE_HEADER, BASE_URL } from '@/constants/auth';

const accessToken = JSON.parse(window.localStorage.getItem('user'))?.token;

const getProfile = async (
  username: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<Response> => {
  return await fetch(`${BASE_URL}/profiles/${username}`, {
    ...options,
    method: 'get',
    headers: {
      ...BASE_HEADER,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const followUser = async (
  username: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<Response> => {
  return await fetch(`${BASE_URL}/profiles/${username}/follow`, {
    ...options,
    method: 'post',
    headers: {
      ...BASE_HEADER,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const unFollowUser = async (
  username: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<Response> => {
  return await fetch(`${BASE_URL}/profiles/${username}/follow`, {
    ...options,
    method: 'delete',
    headers: {
      ...BASE_HEADER,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export { getProfile, followUser, unFollowUser };
