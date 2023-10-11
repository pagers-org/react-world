import { queryKeys } from '@/react-query/queryKeys';
import { FeedQueryStrings } from '@/types/api/articles';
import { useQuery } from '@tanstack/react-query';

import { FEED_PER_PAGE } from '@/constants/api';

import { getGlobalFeeds, getMyFeeds } from '@/api/articles';

export const useArticlesQuery = ({
  queryStrings = {
    limit: FEED_PER_PAGE,
  },
  headers = {},
  options = {},
}: {
  queryStrings?: FeedQueryStrings;
  headers?: HeadersInit;
  options?: RequestInit;
}) => {
  const query = useQuery([queryKeys.GetArticles, queryStrings], () =>
    getGlobalFeeds({ queryStrings, headers, options }),
  );

  return query;
};

export const useMyFeedArticlesQuery = ({
  queryStrings = {
    limit: FEED_PER_PAGE,
  },
  headers = {},
  options = {},
}: {
  queryStrings?: FeedQueryStrings;
  headers?: HeadersInit;
  options?: RequestInit;
}) => {
  const query = useQuery([queryKeys.GetMyFeedArticles, queryStrings], () =>
    getMyFeeds({ queryStrings, headers, options }),
  );

  return query;
};
