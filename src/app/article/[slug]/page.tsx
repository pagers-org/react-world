'use client';

import { ArticleType } from '@/types/article';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { getArticleDetail } from '@/api/article';

import { ParseGetLocalStorage } from '@/utils/browserStorage';

import FavoriteContainer from './components/FavoriteContainer';
import UserBanner from './components/UserBanner';

const Page = () => {
  const [article, setArticle] = useState<undefined | ArticleType>();

  const pathname = usePathname();
  const pathnameIncludeOnlySlug = pathname?.substring(9);

  const fetchArticleDetail = async (slug: string) => {
    try {
      const response = await getArticleDetail(slug);
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data: { article: ArticleType } = await fetchArticleDetail(
          pathnameIncludeOnlySlug,
        );
        setArticle(data.article);
        // 여기서 data 변수에 접근 가능
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticle();
  }, []);

  if (!article) return <div>글을 불러오는 중입니다...</div>;

  console.log(article);
  const userNameReplaceSpaceToPercent = article.author.username.replaceAll(
    ' ',
    '%',
  );

  const isMyArticle =
    ParseGetLocalStorage('user')?.username === article.author.username;

  return (
    <div className="article-page">
      <UserBanner
        isMyArticle={isMyArticle}
        setArticle={setArticle}
        article={article}
        userNameReplaceSpaceToPercent={userNameReplaceSpaceToPercent}
      />
      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{article.description}</p>
            <ul className="tag-list">
              {article.tagList.map((tag) => (
                <li key={tag} className="tag-default tag-pill tag-outline">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <FavoriteContainer
          isMyArticle={isMyArticle}
          setArticle={setArticle}
          article={article}
          userNameReplaceSpaceToPercent={userNameReplaceSpaceToPercent}
        />
      </div>
    </div>
  );
};

export default Page;
