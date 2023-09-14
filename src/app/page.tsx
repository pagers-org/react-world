import React from 'react';
import { PostCardList } from '@/components/home/PostCardList';
import { TagList } from '@/components/home/TagList';

const RootPage = () => {
  const TEMP_TAGS = ['programming', 'react', 'javascript', 'typescript'];
  return (
    <div>
      <div className="flex">
        <PostCardList />
        <TagList tags={TEMP_TAGS} />
      </div>
    </div>
  );
};

export default RootPage;
