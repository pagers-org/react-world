import Link from 'next/link';
import React from 'react';

interface ArticleListItemProps {
  title: string;
  description: string;
  id: string;
}

const ArticleListItem = ({ description, title, id }: ArticleListItemProps) => {
  return (
    <Link className="flex flex-col gap-4" href={`/article/${title}-${id}`}>
      <p className="font-semibold text-[1.5rem]">{title}</p>
      <p className="text-[1rem] text-gray1400">{description}</p>
    </Link>
  );
};

export default ArticleListItem;
