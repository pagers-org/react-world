import { QueryClient, dehydrate } from '@tanstack/react-query';

import { tagApiService } from '@/features/tag/services/TagApiService';

import { QUERY_KEY } from '@/src/constants/query';

export async function prefetchGetTagListQuery(queryClient: QueryClient) {
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY.TAG.LIST,
    queryFn: () => tagApiService.getTags(),
  });

  return dehydrate(queryClient);
}
