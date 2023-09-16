import { useQuery } from '@tanstack/react-query';

import {
  ARTICLE_LIMIT_PER_PAGE,
  INITIAL_PAGE,
} from '@/features/article/constants';
import { articleApiService } from '@/features/article/services/ArticleApiService';

import { QUERY_KEY } from '@/src/constants/query';

interface UseGetArticleListQueryParams {
  page: number;
}

export function useGetArticleListQuery({
  page = INITIAL_PAGE,
}: UseGetArticleListQueryParams) {
  const searchParams = new URLSearchParams();
  searchParams.set('offset', String(page * ARTICLE_LIMIT_PER_PAGE));

  return useQuery({
    queryKey: QUERY_KEY.ARTICLE.LIST(page),
    queryFn: () => articleApiService.getArticles({ searchParams }),
  });
}
