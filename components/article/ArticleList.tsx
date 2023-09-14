'use client';
import { getArticlesAPI } from '@/services/articles';
import ArticlePreview from './ArticlePreview';
import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import { flexCenter, greenButton } from '@/styles/common.css';

const ArticleList = () => {
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['articles'],
    queryFn: ({ pageParam = 1 }) => getArticlesAPI(pageParam),
    getNextPageParam: (lastPage, pages) => {
      return true;
    },
    retry: false,
  });

  return (
    <div>
      {data?.pages.map((group, i) => (
        <div key={i}>
          {group.articles.map(article => (
            <ArticlePreview key={article.slug} article={article} />
          ))}
        </div>
      ))}
      <div className={flexCenter}>
        <button onClick={() => fetchNextPage()} className={greenButton}>
          다음
        </button>
      </div>
    </div>
  );

  // return <div>{articles?.map(article => <ArticlePreview key={article.slug} article={article} />)}</div>;
};

export default ArticleList;
