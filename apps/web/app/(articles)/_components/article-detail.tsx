"use client";

import { useGetArticle } from "../_hooks/use-get-article";
import { ArticleComment } from "./article-comment";
import ArticleBanner from "./article-banner";
import { ArticleAction } from "./article-action";
import { ArticleContent } from "./article-content";

interface ArticleDetailProps {
  slug: string;
}

export function ArticleDetail({ slug }: ArticleDetailProps): JSX.Element {
  const { data } = useGetArticle(slug);

  return (
    <div className="article-page">
      {data ? (
        <>
          <ArticleBanner article={data} />
          <div className="container page">
            <ArticleContent article={data} />
            <ArticleAction article={data} />
            <ArticleComment />
          </div>
        </>
      ) : null}
    </div>
  );
}
