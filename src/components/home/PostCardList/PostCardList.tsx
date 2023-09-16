'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PostCard } from '../PostCard';

export const PostCardList = () => {
  // TODO: 폴더명 및 파일명 변경 post -> article
  const [posts, setPosts] = useState<Article[]>([]);
  const getData = async () => {
    // TODO: error handling
    try {
      const { data } = await axios.get('/articles');
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="space-y-20">
      {posts?.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};
