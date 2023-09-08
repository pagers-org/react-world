import ArticleTags from '@/entities/tag/ui/article-tag-list/article-tag-list';
import ArticleLikeButton from '@/features/article/ui/article-like-button/article-like-button';
import React from 'react';
import ArticlePreview from '@/entities/article/ui/article-preview/article-preview';
import { UserProfileAvatar } from '@/entities/user';
import { Article } from '@/shared/api/realworld/models';
import { ReadMoreButton } from '@/entities/article';

const ArticleListItem = ({
  author,
  createdAt,
  description,
  favorited,
  favoritesCount,
  slug,
  tagList,
  title,
}: Article) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-between w-full">
        <UserProfileAvatar author={author} createdAt={createdAt} />
        <ArticleLikeButton label={favoritesCount} favorited={favorited} slug={slug} />
      </div>
      <ArticlePreview title={title} description={description} slug={slug} />
      <div className="flex justify-between w-full">
        <ReadMoreButton slug={slug} />

        <ArticleTags tagList={tagList} slug={slug} />
      </div>
    </div>
  );
};

export default ArticleListItem;
