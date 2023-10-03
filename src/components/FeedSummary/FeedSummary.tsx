'use client';

import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

import { format } from 'date-fns';

import { Article } from '@/gen';

import {
  feedSummary,
  avatar,
  userInfo,
  username,
  createdAt,
  feedSummaryHeader,
  likeCount,
  feedTitle,
  feedDescription,
  feedSummaryFooter,
  readMore,
  feedTags,
  feedTag,
} from './FeedSummary.css';

interface FeedSummaryProps {
  feed: Article;
}

export function FeedSummary({ feed }: FeedSummaryProps) {
  return (
    <div className={feedSummary}>
      <div className={feedSummaryHeader}>
        <div className={userInfo}>
          <img
            src={feed.author.image}
            alt={`${feed.author.username}'s avatar`}
            className={avatar}
          />
          <div>
            <div className={username}>{feed.author.username}</div>
            <div className={createdAt}>
              {format(feed.createdAt, 'MMMM d, yyyy')}
            </div>
          </div>
        </div>
        <div className={likeCount}>
          <AiFillHeart />
          {feed.favoritesCount}
        </div>
      </div>
      <div>
        <h1 className={feedTitle}>{feed.title}</h1>
        <p className={feedDescription}>{feed.description}</p>
      </div>
      <div className={feedSummaryFooter}>
        <div className={readMore}>Read more...</div>
        <div className={feedTags}>
          {feed.tagList.map((tag) => (
            <div key={tag} className={feedTag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
