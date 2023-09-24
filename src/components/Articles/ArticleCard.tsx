import { ROUTE } from '@/constants/route';
import { Article } from '@/types/articles';
import { convertISOToEngFormat } from '@/utils/date';
import Image from 'next/image';
import Link from 'next/link';

import LikeButton from '../LikeButton/LikeButton';
import TagList from '../TagList/TagList';
import * as styles from './ArticleCard.css';

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  const {
    author,
    description,
    createdAt,
    title,
    favoritesCount,
    tagList,
    slug,
  } = article;
  return (
    <div className={styles.articleCard}>
      <div className={styles.articleMeta}>
        <Link href={`${ROUTE.USER_ARTICLE_PAGE(author.username)}`}>
          <div className={styles.articleInfo}>
            <Image
              src={author.image}
              alt="Picture of the author"
              width={32}
              height={32}
              className={styles.profilePicture}
            />
            <div className={styles.info}>
              <p className={styles.authorName}>{author.username}</p>
              <p className={styles.date}>{convertISOToEngFormat(createdAt)}</p>
            </div>
          </div>
        </Link>
        <LikeButton favoritesCount={favoritesCount} />
      </div>
      <div className={styles.contentWrapper}>
        <Link href={`${ROUTE.ARTICLE_DETAIL(slug)}`}>
          <div className={styles.title}>{title}</div>
          <div className={styles.content}>{description}</div>
          <span className={styles.readMore}>Read more...</span>
          <TagList tagList={tagList} />
        </Link>
      </div>
    </div>
  );
}
