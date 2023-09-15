import { useInfiniteQuery } from '@tanstack/react-query';
import useIntersectionObserver from './useIntersectionObserver';
import { RefObject } from 'react';

const useInfiniteScroll = (fetcher: (page: any) => any, ref: RefObject<HTMLElement>) => {
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['articles'],
    queryFn: ({ pageParam = 1 }) => {
      console.log(pageParam);

      return fetcher(pageParam);
    },
    getNextPageParam: (lastPage, pages) => {
      console.log('getNextPageParam 발동');

      const totalPage = Math.ceil(lastPage.articlesCount / 10);
      let currentPage = pages.length;
      if (totalPage < pages.length) {
        console.log('그만');

        return undefined;
      }
      // console.log(totalPage);
      // console.log(currentPage);

      return currentPage++;
    },
    retry: false,
    refetchOnWindowFocus: false,
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
