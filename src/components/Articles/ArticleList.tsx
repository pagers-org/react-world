'use client';

import { ARTICLE_LIMIT_PER_PAGE } from '@/constants';
import { useGetAllArticlesQuery } from '@/service/articles';
import { useState } from 'react';

import Pagination from '../Pagination/Pagination';
import Tab from '../Tab';
import ArticleCard from './ArticleCard';
import * as styles from './ArticleList.css';

export default function ArticleList() {
  const [selectedPage, setSelectedPage] = useState(1);
  const { articles, isLoading, error } = useGetAllArticlesQuery(selectedPage);

  const handlePagination = (page: number) => {
    setSelectedPage(page);
    scrollTo(0, 0);
  };

  const totalPage =
    articles?.articlesCount! &&
    Math.ceil(articles.articlesCount / ARTICLE_LIMIT_PER_PAGE);

  return (
    <div className={styles.articleContainer}>
      <Tab handleRefetch={() => setSelectedPage(1)}>Global Feed</Tab>
      {isLoading && <div>Loading....</div>}
      {error instanceof Error && <div>{error.message}</div>}
      {articles && (
        <>
          {articles.articles.map((article) => (
            <ArticleCard
              key={`${article.title}${article.author.username}${article.createdAt}`}
              article={article}
            />
          ))}
          <Pagination
            totalPage={totalPage}
            selectedPage={selectedPage}
            handlePagination={handlePagination}
          />
        </>
      )}
    </div>
  );
}
