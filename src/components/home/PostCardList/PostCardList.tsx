'use client';

import React from 'react';
import { TEMP_POSTS } from '@/constants';
import { PostCard } from '../PostCard';

export const PostCardList = () => {
  return (
    <div className="space-y-20">
      {TEMP_POSTS.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};
