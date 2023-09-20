"use client";

import Link from "next/link";
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

  const isLogin = false;

  return (
    <div className="article-page">
      {data ? (
        <>
          <ArticleBanner article={data} />
          <div className="container page">
            <ArticleContent article={data} />
            <ArticleAction article={data} />

            {/* TODO : 로그인 구현 후 코멘트 상태 만들기 */}
            {isLogin ? (
              <ArticleComment />
            ) : (
              <div>
                <Link href="/login">Sign in&nbsp;</Link>
                or&nbsp;
                <Link href="/register">sign up&nbsp;</Link>
                to add comments on this article.
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
