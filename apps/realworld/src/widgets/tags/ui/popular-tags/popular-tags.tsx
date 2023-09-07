'use client';

import ClikcToMoveTag from '@/features/tags/ui/clikc-to-move-tag/click-to-move-tag';
import { useGetTags } from '@/shared/api/realworld/apis';
import React from 'react';

const PopularTags = () => {
  const { data: tags } = useGetTags({
    query: {
      select: data => {
        return data.data.tags;
      },
    },
  });

  return <ul className="flex flex-wrap gap-4">{tags?.map(label => <ClikcToMoveTag key={label} label={label} />)}</ul>;
};

export default PopularTags;
