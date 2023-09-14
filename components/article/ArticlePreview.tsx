'use client';
import { articleDescription, articleMeta, articlePreview, articleReadMore, articleTitle } from '@/styles/article.css';
import UserBox from '../user/UserBox';
import TagList from '../tags/TagList';
import { useRouter } from 'next/navigation';
import { FillHeartIcon } from '@/composables/icons';
import { fillGreenButton, flex, flexBetween, greenButton } from '@/styles/common.css';
import { useMutation } from '@tanstack/react-query';
import { favoriteArticleAPI, unFavoriteArticleAPI } from '@/services/favorites';
type Props = {
  article: any;
};
const ArticlePreview = ({
  article: { title, description, favorited, favoritesCount, tagList, author, createdAt, slug },
}: Props) => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: favorited ? unFavoriteArticleAPI : favoriteArticleAPI,
    onError: err => {
      console.error(err);
    },
    onSuccess: res => {
      console.log(res);

      console.log('좋아요!');
    },
  });
  return (
    <div className={articlePreview}>
      <div className={articleMeta}>
        <UserBox author={author} createdAt={createdAt} />
        <button onClick={() => mutate(slug)} className={favorited ? `${fillGreenButton}` : `${greenButton}`}>
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
