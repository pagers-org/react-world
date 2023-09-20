'use client';

import { ARTICLE_LIMIT_PER_PAGE, TAB } from '@/constants';
import { QUERY_KEY } from '@/constants/query';
import { Article } from '@/types/articles';
import { API_BASE_URL } from '@/utils';
import { useQuery } from '@tanstack/react-query';

export interface FetchArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

const getArticles = async (
  page: number,
  tab: number,
): Promise<FetchArticlesResponse> => {
  const userToken = document.cookie.replace('token=', '');
  const res = await fetch(
    `${API_BASE_URL}/articles${
      tab === TAB.GLOBAL ? '' : '/feed'
    }?offset=${page}&limit=${ARTICLE_LIMIT_PER_PAGE}`,
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    },
  );
  const data = await res.json();
  return data;
};

export const useGetAllArticlesQuery = (page: number, tab: number) => {
  const { data, ...rest } = useQuery(QUERY_KEY.ARTICLE.LIST(page, tab), () =>
    getArticles(page, tab),
  );

  return { data, ...rest };
};
