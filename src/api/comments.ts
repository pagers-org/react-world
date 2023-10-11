import {
  CommentPayload,
  CommentResponse,
  CommentsResponse,
} from '@/types/api/comments';

import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getCookie } from '@/utils/cookie';

import { httpClient } from './http/httpClient';

// Get comments for an article (Auth Optional)
export const getComments = ({
  slug,
  headers = {},
  options = {},
}: {
  slug: string;
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<CommentsResponse> => {
  return httpClient
    .get(`/articles/${slug}/comments`, {
      ...options,
      headers,
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Create a comment for an article (Auth Required)
export const postComment = ({
  slug,
  payload,
  headers = {},
  options = {},
}: {
  slug: string;
  payload: CommentPayload;
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<CommentResponse> => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return httpClient
    .post(`/articles/${slug}/comments`, {
      ...options,
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Delete a comment for an article (Auth Required)
export const deleteComment = ({
  slug,
  id,
  headers = {},
  options = {},
}: {
  slug: string;
  id: number;
  headers?: HeadersInit;
  options?: RequestInit;
}) => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return httpClient
    .delete(`/articles/${slug}/comments/${id}`, {
      ...options,
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};
