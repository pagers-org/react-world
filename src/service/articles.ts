import { ARTICLE_LIMIT_PER_PAGE } from '@/constants';
import { QUERY_KEY } from '@/constants/query';
import { Article } from '@/types/articles';
import { API_BASE_URL } from '@/utils';
import { useQuery } from '@tanstack/react-query';

interface FetchArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

const getArticles = async (page: number): Promise<FetchArticlesResponse> => {
  const res = await fetch(
    `${API_BASE_URL}/articles?offset=${page}&limit=${ARTICLE_LIMIT_PER_PAGE}`,
  );
  const data = await res.json();
  return data;
};

export const useGetAllArticlesQuery = (page: number) => {
  const { data, ...rest } = useQuery(QUERY_KEY.ARTICLE.LIST(page), () =>
    getArticles(page),
  );

  return { articles: data, ...rest };
};

