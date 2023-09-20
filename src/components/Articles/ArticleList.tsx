'use client';

import { ARTICLE_LIMIT_PER_PAGE, TAB } from '@/constants';
import { useGetAllArticlesQuery } from '@/service/articles';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

import Pagination from '../Pagination/Pagination';
import Tab from '../Tab';
import ArticleCard from './ArticleCard';
import * as styles from './ArticleList.css';

export default function ArticleList() {
  const [cookies] = useCookies(['token']);
  const userToken = cookies.token;

  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(
    userToken ? TAB.MY_FEED : TAB.GLOBAL,
  );

  const { data, isLoading, error } = useGetAllArticlesQuery(
    selectedPage,
    selectedTab,
  );
  const articles = data?.articles;
  const totalPage = (data?.articlesCount &&
    Math.ceil(data.articlesCount / ARTICLE_LIMIT_PER_PAGE)) as number;

  const handleRefetch = (tab: typeof TAB.MY_FEED | typeof TAB.GLOBAL) => {
    setSelectedTab(tab);
    setSelectedPage(1);
  };

  if (isLoading) return <div>Loading....</div>;
  if (error) return error instanceof Error && <div>{error.message}</div>;
  if (!articles?.length) return <div>아티클이 없어용..</div>;

  return (
    <div className={styles.articleContainer}>
      <div className={styles.tabContainer}>
        {userToken && (
          <Tab
            handleRefetch={handleRefetch}
            isSelected={selectedTab === TAB.MY_FEED}
            tabValue={TAB.MY_FEED}
            label="MY FEED"
          />
        )}
        <Tab
          handleRefetch={handleRefetch}
          isSelected={selectedTab === TAB.GLOBAL}
          tabValue={TAB.GLOBAL}
          label="Global Feed"
        />
      </div>
      {articles.map((article) => (
        <ArticleCard
          key={`${article.title}${article.author.username}${article.createdAt}`}
          article={article}
        />
      ))}
      <Pagination
        totalPage={totalPage}
        selectedPage={selectedPage}
        handlePagination={(page) => {
          setSelectedPage(page);
          scrollTo(0, 0);
        }}
      />
    </div>
  );
}
