'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge/Badge';
import { TagListProps } from './TagList.type';

export const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="w-[400px] py-2">
      <p className="text-xl font-bold mb-3">Popular Tags</p>
      {tags?.map((tag, index) => (
        <Badge key={index} variant="outline" className="mr-1">
          {tag}
        </Badge>
      ))}
    </div>
  );
};
