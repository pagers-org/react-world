import { getArticlesWithTagAPI } from '@/services/articles';
import { useQuery } from '@tanstack/react-query';

export const useArticlesByTag = (tag: string) => {
  return useQuery({
    queryKey: ['articles-tag', tag],
    queryFn: () => getArticlesWithTagAPI(tag),
    enabled: !!tag,
  });
};
