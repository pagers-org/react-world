import { PathBuilder } from '@/shared/utils/routes';
import { Tag } from '@packages/ui';
import Link from 'next/link';
import React from 'react';

interface ArticleTagListProps {
  tagList: string[];
  slug?: string;
}
const ArticleTagList = ({ tagList, slug }: ArticleTagListProps) => {
  if (slug) {
    return (
      <Link className="flex gap-2 cursor-pointer" href={PathBuilder.buildArticle().addSlug(slug).getPath()}>
        {tagList.map(label => (
          <Tag key={label} label={label} variant="outlined" />
        ))}
      </Link>
    );
  }
  return (
    <div className="flex gap-2 ">
      {tagList.map(label => (
        <Tag key={label} label={label} variant="outlined" />
      ))}
    </div>
  );
};

export default ArticleTagList;
