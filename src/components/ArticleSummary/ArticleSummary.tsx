'use client';

import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

import { format } from 'date-fns';

import { Article } from '@/gen';

import {
  articleSummary,
  avatar,
  userInfo,
  username,
  createdAt,
  articleSummaryHeader,
  likeCount,
  articleTitle,
  articleDescription,
  articleSummaryFooter,
  readMore,
  articleTags,
  articleTag,
} from './ArticleSummary.css';

interface ArticleSummaryProps {
  article: Article;
}

export function ArticleSummary({ article }: ArticleSummaryProps) {
  return (
    <div className={articleSummary}>
      <div className={articleSummaryHeader}>
        <div className={userInfo}>
          <img
            src={article.author.image}
            alt={`${article.author.username}'s avatar`}
            className={avatar}
          />
          <div>
            <div className={username}>{article.author.username}</div>
            <div className={createdAt}>
              {format(article.createdAt, 'MMMM d, yyyy')}
            </div>
          </div>
        </div>
        <div className={likeCount}>
          <AiFillHeart />
          {article.favoritesCount}
        </div>
      </div>
      <div>
        <h1 className={articleTitle}>{article.title}</h1>
        <p className={articleDescription}>{article.description}</p>
      </div>
      <div className={articleSummaryFooter}>
        <div className={readMore}>Read more...</div>
        <div className={articleTags}>
          {article.tagList.map((tag) => (
            <div key={tag} className={articleTag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
