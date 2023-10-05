import { ArticlePostRequestType, FeedResponseType } from '@/types/article';

import { BASE_HEADER, BASE_URL } from '@/constants/auth';

const accessToken = JSON.parse(window.localStorage.getItem('user'))?.token;

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
): Promise<Response> => {
  return await fetch(`${BASE_URL}/articles/feed`, {
    ...options,
    method: 'get',
    headers: {
      ...BASE_HEADER,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const postArticleRegister = async (
  request: ArticlePostRequestType,
  options: RequestInit = {},
): Promise<FeedResponseType> => {
  return await fetch(`${BASE_URL}/articles`, {
    ...options,
    method: 'post',
    headers: {
      ...BASE_HEADER,
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(request),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const getFavorited = async (
  slug: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<Response> => {
  return await fetch(
    `${BASE_URL}/articles?favorited=${slug}&limit=5&offset=0`,
    {
      ...options,
      method: 'get',
      headers: {
        ...BASE_HEADER,
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
};

const getAuthorArticle = async (
  author: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<Response> => {
  return await fetch(`${BASE_URL}/articles?author=${author}&limit=5&offset=0`, {
    ...options,
    method: 'get',
    headers: {
      ...BASE_HEADER,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const getArticleDetail = async (
  slug: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<Response> => {
  return await fetch(`${BASE_URL}/articles/${slug}`, {
    ...options,
    method: 'get',
    headers: {
      ...BASE_HEADER,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const favoriteUser = async (
  slug: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<Response> => {
  return await fetch(`${BASE_URL}/articles/${slug}/favorite`, {
    ...options,
    method: 'post',
    headers: {
      ...BASE_HEADER,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const unFavoriteUser = async (
  slug: string,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<Response> => {
  return await fetch(`${BASE_URL}/articles/${slug}/favorite`, {
    ...options,
    method: 'delete',
    headers: {
      ...BASE_HEADER,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export {
  getGlobalFeed,
  getMyFeed,
  postArticleRegister,
  getFavorited,
  getAuthorArticle,
  favoriteUser,
  unFavoriteUser,
  getArticleDetail,
};
