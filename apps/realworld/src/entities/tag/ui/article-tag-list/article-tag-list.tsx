import { Tag } from '@packages/ui';
import Link from 'next/link';
import React from 'react';

interface ArticleTagListProps {
  tagList: string[];
  slug: string;
}
const ArticleTagList = ({ tagList, slug }: ArticleTagListProps) => {
  return (
    <Link className="flex gap-2 cursor-pointer" href={`/article/${slug}`}>
      {tagList.map(label => (
        <Tag key={label} label={label} variant="outlined" />
      ))}
    </Link>
  );
};

export default ArticleTagList;
