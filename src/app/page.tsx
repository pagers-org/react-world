import React from 'react';
import { PostCardList } from '@/components/home/PostCardList';
import { TagList } from '@/components/home/TagList';
import { TEMP_TAGS } from '@/constants';

const RootPage = () => {
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
