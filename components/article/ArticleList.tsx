// 'use client';
import { ArticleAPI, fetchArticles } from '@/services/articles';
import ArticlePreview from './ArticlePreview';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useRef } from 'react';

const ArticleList = async () => {
  const { articles } = await ArticleAPI.all(1);

  // const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
  //   queryKey: ['articles'],
  //   queryFn: ({ pageParam = 1 }) => ArticleAPI.all(pageParam),
  //   getNextPageParam: (lastPage, pages) => {
  //     if (5 > page.current) {
  //       return page.current;
  //     }
  //     return undefined;
  //   },
  //   retry: false,
  //   onSuccess: () => {
  //     console.log('성공' + page.current);

  //     page.current++;
  //   },
  //   onError: () => {},
  // });

  // return (
  //   <div>
  //     <button onClick={() => fetchNextPage()}>다음</button>
  //     {data?.pages.map((group, i) => (
  //       <div key={i}>
  //         {group.articles.map(article => (
  //           <ArticlePreview key={article.slug} article={article} />
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );

  return <div>{articles?.map(article => <ArticlePreview key={article.slug} article={article} />)}</div>;
};

export default ArticleList;
