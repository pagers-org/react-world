import { getArticlesWithTagAPI } from '@/services/articles';
import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { RefObject } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const useArticles = ({
  targetRef,
  tab = 'global',
  username = '',
  onSuccess,
  onError,
}: {
  targetRef?: RefObject<HTMLElement> | undefined;
  tab?: string;
  username?: string;
  onSuccess?: (res?: any) => void;
  onError?: (err?: any) => void;
}) => {
  const {
    data: articlesData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['articles', tab],
    queryFn: async ({ pageParam = 0 }) => {
      switch (tab) {
        case 'global':
          return await fetch(`http://localhost:3000/api/articles?page=${pageParam}`).then(res => res.json());
        case 'my':
          return await fetch(`http://localhost:3000/api/articles/my?username=${username}&page=${pageParam}`).then(res =>
            res.json()
          );
        case 'favorited':
          return await fetch(`http://localhost:3000/api/articles?username=${username}&page=${pageParam}`).then(res =>
            res.json()
          );
        case 'your':
          return await fetch(`http://localhost:3000/api/articles/feed?page=${pageParam}`).then(res => res.json());
        default:
          return await getArticlesWithTagAPI(tab, pageParam);
      }
    },
    getNextPageParam: (lastPage, pages) => {
      const totalPage = Math.ceil(lastPage.articlesCount / 10);
      let currentPage = pages.length;
      if (lastPage.articlesCount < 11 || totalPage < pages.length) {
        return undefined;
      }

      return currentPage++;
    },
    enabled: !!targetRef,
  });

  const { mutate: favorite } = useMutation({
    mutationFn: async (slug: string) => {
      return await fetch(`/api/articles/favorite/${slug}`, { method: 'POST' }).then(res => res.json());
    },
    onSuccess,
    onError,
  });

  const { mutate: unFavorite } = useMutation({
    mutationFn: async (slug: string) => {
      return await fetch(`/api/articles/favorite/${slug}`, { method: 'DELETE' }).then(res => res.json());
    },
    onSuccess,
    onError,
  });

  const nextPage = () => {
    if (!hasNextPage || isFetchingNextPage) {
      return;
    }
    fetchNextPage();
  };

  useIntersectionObserver(nextPage, targetRef);

  return { articlesData, favorite, unFavorite };
};

export default useArticles;
