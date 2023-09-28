import { BASE_HEADER, BASE_URL } from '@/constants/auth';

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
    },
  });
};

export { getProfile };
