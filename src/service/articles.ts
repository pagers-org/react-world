import { useQuery } from '@tanstack/react-query';
import { PAGE_LIMIT } from '../constants';
import { Article } from '../types/articles';

const fetchArticles = async (
  page: number,
): Promise<{ articles: Article[]; articlesCount: number }> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}articles?offset=${page}&limit=${PAGE_LIMIT}`,
  );
  const data = await res.json();
  return data;
};

export const useGetAllArticlesQuery = (page: number) => {
  const { data, ...rest } = useQuery(['posts', page], () =>
    fetchArticles(page),
  );

  return { articles: data, ...rest };
};
