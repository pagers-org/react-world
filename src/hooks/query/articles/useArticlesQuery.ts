import { queryKeys } from '@/react-query/queryKeys';
import { FeedQueryStrings } from '@/types/api/articles';
import { useQuery } from '@tanstack/react-query';

import { getGlobalFeeds } from '@/api/articles';

export const useArticlesQuery = (
  queryStrings: FeedQueryStrings = {
    limit: '20',
  },
  headers: HeadersInit = {},
  options: RequestInit = {},
) => {
  const query = useQuery([queryKeys.GetArticles, queryStrings], () =>
    getGlobalFeeds(queryStrings, headers, options),
  );

  return query;
};
