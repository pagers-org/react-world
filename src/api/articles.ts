import {
  ArticleResponse,
  FeedQueryStrings,
  FeedResponse,
  FeedsResponse,
  PostArticlePayload,
  PutArticlePayload,
} from '@/types/api/articles';

import { COMMON_HEADERS, HTTP_METHOD } from '@/constants/api';
import { API_BASE_URL } from '@/constants/env';

/* Client Side APIs */

// Create an article (Auth Required)
export const postArticle = (
  payload: PostArticlePayload,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<ArticleResponse> => {
  return fetch(`${API_BASE_URL}/articles`, {
    ...options,
    method: HTTP_METHOD.POST,
    headers: {
      ...COMMON_HEADERS,
      ...headers,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Update an article (Auth Required)
export const putArticle = (
  slug: string,
  payload: PutArticlePayload,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<ArticleResponse> => {
  return fetch(`${API_BASE_URL}/articles/${slug}`, {
    ...options,
    method: HTTP_METHOD.PUT,
    headers: {
      ...COMMON_HEADERS,
      ...headers,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Delete an article (Auth Required)
export const deleteArticle = (
  slug: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
) => {
  return fetch(`${API_BASE_URL}/articles/${slug}`, {
    ...options,
    method: HTTP_METHOD.DELETE,
    headers: {
      ...COMMON_HEADERS,
      ...headers,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// -----------------------------------------------------------------------------------------------------

/* Server Side APIs for Next 13 APP Router extended fetch api */

// Get recent articles from users you follow (Auth Required)
export const getMyFeeds = (
  queryStrings: FeedQueryStrings = {
    limit: '20',
  },
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<FeedsResponse> => {
  const qs = new URLSearchParams(queryStrings).toString();

  return fetch(`${API_BASE_URL}/articles/feed?${qs}`, {
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

// Get recent articles globally (Auth Optional)
export const getGlobalFeeds = (
  queryStrings: FeedQueryStrings = {
    limit: '20',
  },
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<FeedsResponse> => {
  const qs = new URLSearchParams(queryStrings).toString();

  return fetch(`${API_BASE_URL}/articles?${qs}`, {
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

// Get an article (Auth Optional)
export const getArticle = (
  slug: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<FeedResponse> => {
  return fetch(`${API_BASE_URL}/articles/${slug}`, {
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
