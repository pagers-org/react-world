import { BASE_HEADER, BASE_URL } from '@/constants/auth';

const accessToken = JSON.parse(window.localStorage.getItem('user'))?.token;

const getComment = async (
  slug: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<Response> => {
  return await fetch(`${BASE_URL}/articles/${slug}/comments`, {
    ...options,
    method: 'get',
    headers: {
      ...BASE_HEADER,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const postComment = async (
  slug: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<Response> => {
  return await fetch(`${BASE_URL}/articles/${slug}/comments`, {
    ...options,
    method: 'post',
    headers: {
      ...BASE_HEADER,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const deleteComment = async (
  slug: string,
  id: number,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<Response> => {
  return await fetch(`${BASE_URL}/articles/${slug}/comments/${id}`, {
    ...options,
    method: 'delete',
    headers: {
      ...BASE_HEADER,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export { getComment, postComment, deleteComment };
