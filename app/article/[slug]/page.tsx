import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

import { ROUTES } from '@/src/constants/route';

import Banner from '@/src/components/layout/Banner';

import { DUMMY_ARTICLES } from '@/src/fixtures/article';

import * as styles from '@/app/article/[slug]/page.css';

export default function ArticleDetail() {
  const article = DUMMY_ARTICLES.articles[0];

  return (
    <div>
      <Banner title={article.title} background="black">
        <div className={styles.bannerContent}>
          <div className={styles.author}>
            <div>
              <Image
                className={styles.authorImage}
                src={article.author.image}
                alt="author"
                width={32}
                height={32}
              />
            </div>
            <div>
              <div>{article.author.username}</div>
              <div className={styles.createdDate}>
                {format(new Date(article.createdAt), 'yyyy-MM-dd')}
              </div>
            </div>
          </div>

          <div>
            <button className={styles.followButton} type="button">
              + Follow {article.author.username}
            </button>
            <button className={styles.favoriteButton} type="button">
              ♥ Favorite Article {article.favoritesCount}
            </button>
          </div>
        </div>
      </Banner>

      <div className={styles.body}>
        <div className={styles.content}>{article.body}</div>

        <div className={styles.tag}>
          {article.tagList.map((tag) => {
            return (
              <button type="button" className={styles.chip} key={tag}>
                {tag}
              </button>
            );
          })}
        </div>

        <div className={styles.horizontalLine} />

        <div className={styles.footerContent}>
          <div className={styles.author}>
            <div>
              <Image
                className={styles.authorImage}
                src={article.author.image}
                alt="author"
                width={32}
                height={32}
              />
            </div>
            <div>
              <div>{article.author.username}</div>
              <div className={styles.createdDate}>
                {format(new Date(article.createdAt), 'yyyy-MM-dd')}
              </div>
            </div>
          </div>

          <div>
            <button className={styles.followButton} type="button">
              + Follow {article.author.username}
            </button>
            <button className={styles.favoriteButton} type="button">
              ♥ Favorite Article {article.favoritesCount}
            </button>
          </div>
        </div>

        <div className={styles.footerDescription}>
          <Link href={ROUTES.LOGIN} className={styles.linkText}>
            Sign in
          </Link>
          or
          <Link href={ROUTES.REGISTER} className={styles.linkText}>
            sign up
          </Link>
          to add comments on this article.
        </div>
      </div>
    </div>
  );
}
