import CommentBox from '@/components/comments/CommentBox';
import Banner from '@/components/layouts/Banner';
import TagList from '@/components/tags/TagList';
import FavoriteButton from '@/components/user/FavoriteButton';
import FollowButton from '@/components/user/FollowButton';
import UserBox from '@/components/user/UserBox';
import { getArticleAPI } from '@/services/articles';
import { articleContent, articleDetailTitle } from '@/styles/article.css';
import { container, flex, justifyCenter, paddingTB } from '@/styles/common.css';
import React from 'react';
type Props = {
  params: { slug: string };
};
const ArticlePage = async ({ params: { slug } }: Props) => {
  const {
    article: { title, author, createdAt, body, tagList, favoritesCount },
  } = await getArticleAPI(slug);

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
      </div>
      <CommentBox />
    </section>
  );
};

export default ArticlePage;
