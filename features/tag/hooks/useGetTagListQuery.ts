import { useQuery } from '@tanstack/react-query';

import { tagApiService } from '@/features/tag/services/TagApiService';

import { QUERY_KEY } from '@/src/constants/query';

export function useGetTagListQuery() {
  return useQuery({
    queryKey: QUERY_KEY.TAG.LIST,
    queryFn: () => tagApiService.getTags(),
  });
}
