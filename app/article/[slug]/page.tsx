import CommentCard from '@/components/comments/CommentCard';
import CommentForm from '@/components/comments/CommentForm';
import Banner from '@/components/layouts/Banner';
import TagList from '@/components/tags/TagList';
import FavoriteButton from '@/components/user/FavoriteButton';
import FollowButton from '@/components/user/FollowButton';
import UserBox from '@/components/user/UserBox';
import { fetchArticle } from '@/services/articles';
import { articleContent, articleDetailTitle } from '@/styles/article.css';
import { container, flex, flexCenter, flexRow, justifyCenter, paddingTB, textCenter } from '@/styles/common.css';
import { Article } from '@/types';
import Link from 'next/link';
import React from 'react';
type Props = {
  params: { slug: string };
};
const ArticlePage = async ({ params: { slug } }: Props) => {
  const { title, author, createdAt, body, tagList, favoritesCount } = await fetchArticle<Article>(slug);
  const user = true;
  return (
    <section>
      <Banner background="black">
        <h1 className={articleDetailTitle}>{title}</h1>
        <div className={flex}>
          <UserBox author={author} createdAt={createdAt} />
          <FollowButton author={author} />
          <FavoriteButton favoritesCount={favoritesCount} />
        </div>
      </Banner>
      <div className={container}>
        <p className={articleContent}>{body}</p>
        <TagList tags={tagList} />
        <hr />
        <div className={`${justifyCenter} ${paddingTB}`}>
          <UserBox author={author} createdAt={createdAt} />
          <FollowButton author={author} /> &nbsp;
          <FavoriteButton favoritesCount={favoritesCount} />
        </div>
        <div>
          {user ? (
            <div className={`${flexRow} ${flexCenter}`}>
              <CommentForm />
              <CommentCard />
            </div>
          ) : (
            <div className={textCenter}>
              <Link href="/login">Sign in</Link> or <Link href="/register">sign up</Link> to add comments on this
              article.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
