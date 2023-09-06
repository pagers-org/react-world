import Image from 'next/image';
import React from 'react';
import { format } from 'date-fns';

import Banner from '@/src/components/layout/Banner';

import { DUMMY_ARTICLES } from '@/src/fixtures/article';

import {
  author,
  authorImage,
  bannerContent,
  body,
  chip,
  content,
  createdDate,
  favoriteButton,
  followButton,
  footerContent,
  footerDescription,
  horizontalLine,
  linkText,
  tag,
} from '@/app/article/[slug]/page.css';
import Link from 'next/link';

export default function ArticleDetail() {
  const article = DUMMY_ARTICLES.articles[0];

  return (
    <div>
      <Banner style="secondary" title={article.title}>
        <div className={bannerContent}>
          <div className={author}>
            <div>
              <Image
                className={authorImage}
                src={article.author.image}
                alt="author"
                width={32}
                height={32}
              />
            </div>
            <div>
              <div>{article.author.username}</div>
              <div className={createdDate}>
                {format(new Date(article.createdAt), 'yyyy-MM-dd')}
              </div>
            </div>
          </div>

          <div>
            <button className={followButton} type="button">
              + Follow {article.author.username}
            </button>
            <button className={favoriteButton} type="button">
              ♥ Favorite Article {article.favoritesCount}
            </button>
          </div>
        </div>
      </Banner>

      <div className={body}>
        <div className={content}>{article.body}</div>

        <div className={tag}>
          {article.tagList.map((tag) => {
            return (
              <button type="button" className={chip} key={tag}>
                {tag}
              </button>
            );
          })}
        </div>

        <div className={horizontalLine} />

        <div className={footerContent}>
          <div className={author}>
            <div>
              <Image
                className={authorImage}
                src={article.author.image}
                alt="author"
                width={32}
                height={32}
              />
            </div>
            <div>
              <div>{article.author.username}</div>
              <div className={createdDate}>
                {format(new Date(article.createdAt), 'yyyy-MM-dd')}
              </div>
            </div>
          </div>

          <div>
            <button className={followButton} type="button">
              + Follow {article.author.username}
            </button>
            <button className={favoriteButton} type="button">
              ♥ Favorite Article {article.favoritesCount}
            </button>
          </div>
        </div>

        <div className={footerDescription}>
          <Link href="/login" className={linkText}>
            Sign in
          </Link>
          or
          <Link href="/register" className={linkText}>
            sign up
          </Link>
          to add comments on this article.
        </div>
      </div>
    </div>
  );
}
