import { PathBuilder } from '@/shared/utils/routes';
import Link from 'next/link';
import React from 'react';

interface ArticlePreviewProps {
  title: string;
  description: string;
  slug: string;
}

const ArticlePreview = ({ description, title, slug }: ArticlePreviewProps) => {
  return (
    <Link className="flex flex-col gap-4" href={PathBuilder.buildArticle().addSlug(slug).getPath()}>
      <p className="font-semibold text-[1.5rem]">{title}</p>
      <p className="text-[1rem] text-gray1400">{description}</p>
    </Link>
  );
};

export default ArticlePreview;
