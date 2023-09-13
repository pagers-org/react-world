import Image from 'next/image';
import * as styles from './PostCard.css';
import Link from 'next/link';
import { Article } from '../../service/post';
import { convertISOToEngFormat } from '../../utils/date';
import LikeButton from '../LikeButton';
import TagList from '../TagList/TagList';

type PostCardProps = {
  post: Article;
};

export default function PostCard({ post }: PostCardProps) {
  const {
    author,
    description,
    createdAt,
    title,
    favoritesCount,
    tagList,
    slug,
  } = post;
  return (
    <div className={styles.postCard}>
      <div className={styles.articleMeta}>
        <Link href={`/user/${author.username}`}>
          <div className={styles.postInfo}>
            <Image
              src={author.image}
              alt="Picture of the author"
              width={32}
              height={32}
              className={styles.profilePic}
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
        <Link href={`detail/${slug}`}>
          <div className={styles.title}>{title}</div>
          <div className={styles.content}>{description}</div>
          <span className={styles.readMore}>Read more...</span>
          <TagList tagList={tagList} />
        </Link>
      </div>
    </div>
  );
}
