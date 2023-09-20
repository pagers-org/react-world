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

  const totalPage =
    data?.articlesCount! &&
    Math.ceil(data.articlesCount / ARTICLE_LIMIT_PER_PAGE);

  const handlePagination = (page: number) => {
    setSelectedPage(page);
    scrollTo(0, 0);
  };

  const handleRefetchTab = (
    event: React.MouseEvent<HTMLButtonElement>,
    tab: typeof TAB.MY_FEED | typeof TAB.GLOBAL,
  ) => {
    setSelectedTab(tab);
  };

  return (
    <div className={styles.articleContainer}>
      <div className={styles.tabContainer}>
        {userToken && (
          <Tab
            handleRefetch={handleRefetchTab}
            isSelected={selectedTab === 1}
            tabValue={TAB.MY_FEED}
          >
            MY FEED
          </Tab>
        )}
        <Tab
          handleRefetch={handleRefetchTab}
          isSelected={selectedTab === 2}
          tabValue={TAB.GLOBAL}
        >
          Global Feed
        </Tab>
      </div>
      {isLoading && <div>Loading....</div>}
      {error instanceof Error && <div>{error.message}</div>}
      {!isLoading && articles! && (
        <>
          {articles?.map((article) => (
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
      {!isLoading && articles?.length === 0 && <div>아티클이 없어용..</div>}
    </div>
  );
}
