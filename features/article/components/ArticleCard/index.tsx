import Image from 'next/image';
import React from 'react';
import { format } from 'date-fns';

import * as styles from '@/features/article/components/ArticleCard/index.css';

import { Article } from '@/features/article/types';
import Link from 'next/link';

interface Props extends Article {}

export default function ArticleCard(props: Props) {
  const { title, description, tagList, favoritesCount, createdAt, author } =
    props;

  return (
    <div className={styles.articleCard}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <div>
            <Image
              className={styles.authorImage}
              src={author.image}
              alt="author"
              width={32}
              height={32}
            />
          </div>
          <div>
            <div className={styles.authorName}>{author.username}</div>
            <div className={styles.createdDate}>
              {format(new Date(createdAt), 'yyyy-MM-dd')}
            </div>
          </div>
        </div>
        <div>
          <button className={styles.favoriteButton} type="button">
            ♥ {favoritesCount}
          </button>
        </div>
      </div>

      <Link href="/article/임시" className={styles.content}>
        <div className={styles.articleTitle}>{title}</div>
        <div className={styles.articleDescription}>{description}</div>
      </Link>

      <div className={styles.bottom}>
        <div>Read more...</div>
        <ul className={styles.bottomTagList}>
          {tagList.map((tag) => {
            return (
              <li key={tag} className={styles.bottomTag}>
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
