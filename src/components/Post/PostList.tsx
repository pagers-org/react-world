'use client';
import React, { MouseEvent } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Article, useGetAllPosts } from '../../service/post';
import PostCard from './PostCard';
import * as styles from './PostList.css';
import Pagination from '../Pagination';
import Tab from '../Tab';

export default function PostList() {
  const [selectedPage, setSelectedPage] = useState('1');
  const { posts, isLoading, error } = useGetAllPosts(selectedPage);

  const handlePagination = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedPage(e.currentTarget.name);
  };

  const reFetchGlobalFeed = () => {
    setSelectedPage('1');
  };

  return (
    <div className={styles.postsContainer}>
      <Tab onClick={reFetchGlobalFeed}>{'Global Feed'}</Tab>
      {isLoading && <div>Loading....</div>}
      {error && <div>Error!!!</div>}
      {posts && (
        <>
          {posts.articles.map((post: Article) => (
            <PostCard key={uuidv4()} post={post} />
          ))}
          <Pagination
            handlePagination={handlePagination}
            articlesCount={posts.articlesCount}
            selectedPage={selectedPage}
          />
        </>
      )}
    </div>
  );
}
