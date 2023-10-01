import { getArticlesAPI, getArticlesWithTagAPI } from '@/services/articles';
import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { RefObject } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const useArticles = (ref: RefObject<HTMLElement>, tab: string) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['articles', tab],
    queryFn: async ({ pageParam = 0 }) => {
      switch (tab) {
        case 'global':
          return await getArticlesAPI(pageParam);
        case 'your':
          return fetch(`/api/articles/feed?page=${pageParam}`).then(res => res.json());
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
  });

  const { mutate } = useMutation({
    mutationFn: async (slug: string) => {
      return fetch(`/api/articles/favorite/${slug}`).then(res => res.json());
    },
    onSuccess: data => {
      console.log('성공');
      console.log(data);
    },
    onError: err => {
      console.log('Error 발생');
      console.log(err);
    },
  });

  const nextPage = () => {
    if (!hasNextPage || isFetchingNextPage) {
      return;
    }
    fetchNextPage();
  };

  useIntersectionObserver(nextPage, ref);

  return { data, mutate };
};

export default useArticles;
