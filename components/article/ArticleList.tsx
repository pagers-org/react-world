'use client';
import { getArticlesAPI } from '@/services/articles';
import ArticlePreview from './ArticlePreview';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';
import { flexCenter, greenButton } from '@/styles/common.css';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const ArticleList = () => {
  const targetRef = useRef(null);

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['articles'],
    queryFn: ({ pageParam = 1 }) => {
      console.log(pageParam);

      return getArticlesAPI(pageParam);
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

  useIntersectionObserver(nextPage, targetRef);

  return (
    <div>
      {data?.pages.map((group, i) => (
        <div key={i}>
          {group.articles.map(article => (
            <ArticlePreview key={article.slug} article={article} />
          ))}
        </div>
      ))}
      <div className={flexCenter} ref={targetRef}></div>
    </div>
  );
};

export default ArticleList;
