'use client';
import { articleDescription, articleMeta, articlePreview, articleReadMore, articleTitle } from '@/styles/article.css';
import UserBox from '../user/UserBox';
import TagList from '../tags/TagList';
import { useRouter } from 'next/navigation';
import { FillHeartIcon } from '@/composables/icons';
import { fillGreenButton, flex, flexBetween } from '@/styles/common.css';
type Props = {
  article: any;
};
const ArticlePreview = ({
  article: { title, description, favorited, favoritesCount, tagList, author, createdAt, slug },
}: Props) => {
  const router = useRouter();
  return (
    <div className={articlePreview}>
      <div className={articleMeta}>
        <UserBox author={author} createdAt={createdAt} />
        <button className={favorited ? `${fillGreenButton}` : `${fillGreenButton}`}>
          <div className={flex}>
            <FillHeartIcon /> &nbsp;
            {favoritesCount}
          </div>
        </button>
      </div>
      <div onClick={() => router.push(`/article/${slug}`)}>
        <div className={articleTitle}>{title}</div>
        <div className={articleDescription}>{description}</div>
        <div className={flexBetween}>
          <span className={articleReadMore}>Read more...</span>
          <TagList tags={tagList} />
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
