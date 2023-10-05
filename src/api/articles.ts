import {
  ArticleResponse,
  FeedQueryStrings,
  FeedResponse,
  FeedsResponse,
  PostArticlePayload,
  PutArticlePayload,
} from '@/types/api/articles';

import { FEED_PER_PAGE } from '@/constants/api';
import { ERROR } from '@/constants/error';
import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getCookie } from '@/utils/cookie';

import { httpClient } from './http/httpClient';

// Create an article (Auth Required)
export const postArticle = ({
  payload,
  headers = {},
  options = {},
}: {
  payload: PostArticlePayload;
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<ArticleResponse> => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return httpClient
    .post('/articles', {
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

// Update an article (Auth Required)
export const putArticle = ({
  slug,
  payload,
  headers = {},
  options = {},
}: {
  slug: string;
  payload: PutArticlePayload;
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<ArticleResponse> => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return httpClient
    .put(`/articles/${slug}`, {
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

// Delete an article (Auth Required)
export const deleteArticle = ({
  slug,
  headers = {},
  options = {},
}: {
  slug: string;
  headers?: HeadersInit;
  options?: RequestInit;
}) => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return httpClient
    .delete(`/articles/${slug}`, {
      ...options,
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Get recent articles from users you follow (Auth Required)
export const getMyFeeds = ({
  queryStrings = {
    limit: FEED_PER_PAGE,
  },
  headers = {},
  options = {},
}: {
  queryStrings?: FeedQueryStrings;
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<FeedsResponse> => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);
  const qs = new URLSearchParams(queryStrings).toString();

  return httpClient
    .get(`/articles/feed?${qs}`, {
      ...options,
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Get recent articles globally (Auth Optional)
export const getGlobalFeeds = ({
  queryStrings = {
    limit: FEED_PER_PAGE,
  },
  headers = {},
  options = {},
}: {
  queryStrings?: FeedQueryStrings;
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<FeedsResponse> => {
  const qs = new URLSearchParams(queryStrings).toString();

  return httpClient
    .get(`/articles?${qs}`, {
      ...options,
      headers,
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Get an article (Auth Optional)
export const getArticle = ({
  slug,
  headers = {},
  options = {},
}: {
  slug: string;
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<FeedResponse | void> => {
  return httpClient
    .get(`/articles/${slug}`, {
      ...options,
      headers,
    })
    .then((res) => res.json())
    .then((res: FeedResponse) => {
      if (res?.errors || res?.status === 'error') {
        throw new Error(ERROR.ARTICLE_DETAIL);
      }
      return res;
    })
    .catch((err) => console.error(err));
};
