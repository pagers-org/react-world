import { useInfiniteQuery } from '@tanstack/react-query';
import useIntersectionObserver from './useIntersectionObserver';
import { RefObject } from 'react';

const useInfiniteScroll = (fetcher: (page: any) => any, ref: RefObject<HTMLElement>) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['articles'],
    queryFn: ({ pageParam = 1 }) => {
      return fetcher(pageParam);
    },
    getNextPageParam: (lastPage, pages) => {
      const totalPage = Math.ceil(lastPage.articlesCount / 10);
      let currentPage = pages.length;
      if (totalPage < pages.length) {
        return undefined;
      }

      return currentPage++;
    },
  });

  const nextPage = () => {
    if (!hasNextPage || isFetchingNextPage) {
      return;
    }
    fetchNextPage();
  };

  useIntersectionObserver(nextPage, ref);

  return { data };
};

export default useInfiniteScroll;
