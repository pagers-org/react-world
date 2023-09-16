import { QueryClient, dehydrate } from '@tanstack/react-query';

import {
  ARTICLE_LIMIT_PER_PAGE,
  INITIAL_PAGE,
} from '@/features/article/constants';
import { articleApiService } from '@/features/article/services/ArticleApiService';

import { QUERY_KEY } from '@/src/constants/query';

export async function prefetchGetArticleListQuery(queryClient: QueryClient) {
  const searchParams = new URLSearchParams();
  searchParams.set('offset', String(ARTICLE_LIMIT_PER_PAGE * INITIAL_PAGE));

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY.ARTICLE.LIST(INITIAL_PAGE),
    queryFn: () => articleApiService.getArticles({ searchParams }),
  });

  return dehydrate(queryClient);
}
