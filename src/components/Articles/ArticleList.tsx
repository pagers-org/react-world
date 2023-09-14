'use client';
import { useState } from 'react';
import { useGetAllArticlesQuery } from '../../service/articles';
import * as styles from './ArticleList.css';
import Tab from '../Tab';
import Pagination from '../Pagination/Pagination';
import { PAGE_LIMIT } from '../../constants';
import ArticleCard from './ArticleCard';
import { Article } from '../../types/articles';

export default function ArticleList() {
  const [selectedPage, setSelectedPage] = useState(1);
  const { articles, isLoading, error, refetch } = useGetAllArticlesQuery(
    selectedPage,
  ) as {
    articles: { articles: Article[]; articlesCount: number };
    isLoading: boolean;
    error: Error | null;
    refetch: () => void;
  };

  const handlePagination = (page: number) => {
    setSelectedPage(page);
    scrollTo(0, 0);
  };

  const handleRefetch = () => {
    setSelectedPage(1);
    refetch();
  };

  const totalPage = articles && Math.ceil(articles.articlesCount / PAGE_LIMIT);

  return (
    <div className={styles.articleContainer}>
      <Tab handleRefetch={handleRefetch}>Global Feed</Tab>
      {isLoading && <div>Loading....</div>}
      {error && <div>Error!!!</div>}
      {articles && (
        <>
          {articles.articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
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
