'use client';
import { getArticlesAPI } from '@/services/articles';
import ArticlePreview from './ArticlePreview';
import React, { useRef } from 'react';
import { flexCenter } from '@/styles/common.css';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useQueryClient } from '@tanstack/react-query';
import useCurrentTag from '@/stores/useCurrentTag';

const ArticleList = () => {
  const targetRef = useRef(null);
  const { tag } = useCurrentTag();

  const { data } = useInfiniteScroll(getArticlesAPI, targetRef);

  const queryClient = useQueryClient();
  const query = queryClient.getQueryData(['articles-tag', tag]);
  console.log(query);

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
