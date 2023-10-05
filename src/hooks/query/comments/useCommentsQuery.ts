import { queryKeys } from '@/react-query/queryKeys';
import { useQuery } from '@tanstack/react-query';

import { getComments } from '@/api/comments';

export const useCommentsQuery = ({
  slug,
  headers = {},
  options = {},
}: {
  slug: string;
  headers?: HeadersInit;
  options?: RequestInit;
}) => {
  const query = useQuery([queryKeys.GetComments], () =>
    getComments({ slug, headers, options }),
  );

  return query;
};
