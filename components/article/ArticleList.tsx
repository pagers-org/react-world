'use client';
import { ArticleAPI } from '@/services/articles';
import ArticlePreview from './ArticlePreview';
import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';

const ArticleList = () => {
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['articles'],
    queryFn: ({ pageParam = 1 }) => ArticleAPI.all(pageParam),
    getNextPageParam: (lastPage, pages) => {
      return true;
    },
    retry: false,
  });

  return (
    <div>
      <button onClick={() => fetchNextPage()}>다음</button>
      {data?.pages.map((group, i) => (
        <div key={i}>
          {group.articles.map(article => (
            <ArticlePreview key={article.slug} article={article} />
          ))}
        </div>
      ))}
    </div>
  );

  // return <div>{articles?.map(article => <ArticlePreview key={article.slug} article={article} />)}</div>;
};

export default ArticleList;
