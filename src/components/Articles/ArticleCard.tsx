import Image from 'next/image';
import * as styles from './ArticleCard.css';
import Link from 'next/link';
import { convertISOToEngFormat } from '../../utils/date';
import TagList from '../TagList/TagList';
import { ROUTES } from '../../constants/routes';
import LikeButton from '../LikeButton/LikeButton';
import { Article } from '../../types/articles';

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
        <Link href={`${ROUTES.USERARTICLEPAGE(author.username).href}`}>
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
        <Link href={`${ROUTES.ARTICLEDETAIL(slug).href}`}>
          <div className={styles.title}>{title}</div>
          <div className={styles.content}>{description}</div>
          <span className={styles.readMore}>Read more...</span>
          <TagList tagList={tagList} />
        </Link>
      </div>
    </div>
  );
}
