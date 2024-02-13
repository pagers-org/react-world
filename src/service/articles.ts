'use client';

import { ARTICLE_LIMIT_PER_PAGE, TAB } from '@/constants';
import { QUERY_KEY } from '@/constants/query';
import { Article } from '@/types/articles';
import { API_BASE_URL } from '@/utils';
import { getCookieValue } from '@/utils/cookies';
import { useQuery } from '@tanstack/react-query';

export interface FetchArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

const getArticles = async (
  page: number,
  tab: number,
): Promise<FetchArticlesResponse> => {
  const endpoint = tab === TAB.GLOBAL ? 'articles' : 'articles/feed';
  const url = `${API_BASE_URL}/${endpoint}?offset=${page}&limit=${ARTICLE_LIMIT_PER_PAGE}`;
  const userToken = getCookieValue('token')
  
  const headers: Record<string, string> = {};

  if (userToken) {
    headers.Authorization = `Bearer ${userToken}`;
  }

  const res = userToken ? await fetch(url, { headers }) : await fetch(url);
  return res.json();
};

export const useGetAllArticlesQuery = (page: number, tab: number) => {
  return useQuery(QUERY_KEY.ARTICLE.LIST(page, tab), () =>
    getArticles(page, tab),
  );
};
