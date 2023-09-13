'use client';

import React from 'react';
import { ArticleListItem } from '..';
import { ArticleListPagination } from '@/features/article';
import { getItemIndex } from '@/shared/utils/array';
import { useGetArticles } from '@/shared/api/realworld/endpoints/articles/articles';

interface ArticleListProps {}

const LIMIT = 10;

const ArticleList = ({}: ArticleListProps) => {
  const { data: articlesResponse } = useGetArticles();
  const { articles, articlesCount } = articlesResponse ?? {
    articles: [],
    articlesCount: 0,
  };

  const lastPage = getLastPage(LIMIT, articlesCount);

  return (
    <>
      {articles?.map((articleProps, index, array) => {
        const itemIndex = getItemIndex(index, array);

        return (
          <>
            <div key={articleProps.slug} className={`py-[1.5rem] max- border-black/10 ${style[itemIndex]}`}>
              <ArticleListItem {...articleProps} />
            </div>
          </>
        );
      })}
      <ArticleListPagination lastPage={lastPage} currentPage={1} />
    </>
  );
};

export default ArticleList;

const getLastPage = (limit: number, totalCount: number) => Math.ceil(totalCount / limit);

const style = {
  firstItem: 'border-y-1',
  otherItem: 'border-b-1',
  lastItem: 'border-none',
};
