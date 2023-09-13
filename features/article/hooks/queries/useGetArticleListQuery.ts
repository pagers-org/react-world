import { useQuery } from '@tanstack/react-query';

import { articleApiService } from '@/features/article/services/ArticleApiService';

import { QUERY_KEY } from '@/src/constants/query';

interface UseGetArticleListQuery {
  page: number;
}

export function useGetArticleListQuery({ page = 1 }: UseGetArticleListQuery) {
  return useQuery({
    queryKey: QUERY_KEY.ARTICLE.LIST(page),
    queryFn: () => articleApiService.getArticles(page),
  });
}
