'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ARTICLE_LIMIT_PER_PAGE } from '@/features/article/constants';
import ArticleCard from '@/features/article/components/ArticleCard';
import { articleApiService } from '@/features/article/services/ArticleApiService';

import Pagination from '@/src/components/Pagination';

export default function Articles() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['article', page],
    queryFn: () => articleApiService.getArticles(page),
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const totalPage = Math.floor(data.articlesCount / ARTICLE_LIMIT_PER_PAGE);

  const handleClickPage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <ul>
        {data.articles.map((article) => {
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
