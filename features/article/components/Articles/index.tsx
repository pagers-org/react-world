'use client';

import { useState } from 'react';

import Pagination from '@/src/components/Pagination';

import { ARTICLE_LIMIT_PER_PAGE } from '@/features/article/constants';
import ArticleCard from '@/features/article/components/ArticleCard';
import { useGetArticleListQuery } from '@/features/article/hooks/queries/useGetArticleListQuery';

export default function Articles() {
  const [page, setPage] = useState(1);

  const { data } = useGetArticleListQuery({ page });

  const totalPage = Math.floor(data?.articlesCount! / ARTICLE_LIMIT_PER_PAGE);

  const handleClickPage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <ul>
        {data?.articles.map((article) => {
          return <ArticleCard key={article.slug} {...article} />;
        })}
      </ul>
      <Pagination
        currentPage={page}
        totalPage={totalPage}
        onClickPage={handleClickPage}
      />
    </>
  );
}
