import { QueryClient, dehydrate } from '@tanstack/react-query';

import { articleApiService } from '@/features/article/services/ArticleApiService';

import { QUERY_KEY } from '@/src/constants/query';

export async function prefetchGetArticleListQuery(queryClient: QueryClient) {
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY.ARTICLE.LIST(1),
    queryFn: () => articleApiService.getArticles(1),
  });

  return dehydrate(queryClient);
}
