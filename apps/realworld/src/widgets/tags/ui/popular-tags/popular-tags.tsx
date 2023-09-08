'use client';

import { useGetTags } from '@/shared/api/realworld/apis';
import { ClickToMoveTag } from '@/entities/tag';
import React from 'react';

const PopularTags = () => {
  const { data: tags } = useGetTags({
    query: {
      select: data => {
        return data.data.tags;
      },
    },
  });

  return <ul className="flex flex-wrap gap-4">{tags?.map(label => <ClickToMoveTag key={label} label={label} />)}</ul>;
};

export default PopularTags;
