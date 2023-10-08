'use client';
import ArticleDeleteButton from '@/components/article/ArticleDeleteButton';
import ArticleEditButton from '@/components/article/ArticleEditButton';
import CommentBox from '@/components/comments/CommentBox';
import Banner from '@/components/layouts/Banner';
import TagList from '@/components/tags/TagList';
import FavoriteButton from '@/components/user/FavoriteButton';
import FollowButton from '@/components/user/FollowButton';
import UserBox from '@/components/user/UserBox';
import useUserStore from '@/stores/useUserStore';
import { articleContent, articleDetailTitle } from '@/styles/article.css';
import { container, flex, justifyCenter, paddingTB } from '@/styles/common.css';
import { User } from '@/types';
import { useQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react';
type Props = {
  params: { slug: string };
};
const ArticlePage = ({ params: { slug } }: Props) => {
  const { username } = useUserStore() as User;

  const { data: article } = useQuery({
    queryKey: ['article', slug],
    queryFn: async () => await fetch(`/api/articles/${slug}`).then(res => res.json()),
    enabled: !!slug,
    select: res => res.data.article,
  });

  const { title, author, createdAt, body, tagList, favoritesCount } = article;

  return (
    <section>
      <Suspense fallback={<div>로딩중...</div>}>
        <Banner background="black">
          <h1 className={articleDetailTitle}>{title}</h1>
          <div className={flex}>
            <UserBox author={author} createdAt={createdAt} />

            {author.username === username ? (
              <div className={flex}>
                <ArticleEditButton slug={slug} />
                <ArticleDeleteButton slug={slug} />
              </div>
            ) : (
              <div className={flex}>
                <FollowButton author={author} slug={slug} />
                <FavoriteButton favoritesCount={favoritesCount} />
              </div>
            )}
          </div>
        </Banner>
      </Suspense>
      <Suspense fallback={<div>로딩중...</div>}>
        <div className={container}>
          <p className={articleContent}>{body}</p>
          <TagList tags={tagList} />
          <hr />
          <div className={`${justifyCenter} ${paddingTB}`}>
            <UserBox author={author} createdAt={createdAt} />
            {author.username === username ? (
              <div className={flex}>
                <ArticleEditButton slug={slug} />
                <ArticleDeleteButton slug={slug} />
              </div>
            ) : (
              <div className={flex}>
                <FollowButton author={author} slug={slug} />
                <FavoriteButton favoritesCount={favoritesCount} />
              </div>
            )}
          </div>
        </div>
      </Suspense>
      <CommentBox slug={slug} />
    </section>
  );
};

export default ArticlePage;
