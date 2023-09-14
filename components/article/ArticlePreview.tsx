'use client';
import { articleDescription, articleMeta, articlePreview, articleReadMore, articleTitle } from '@/styles/article.css';
import UserBox from '../user/UserBox';
import TagList from '../tags/TagList';
import { useRouter } from 'next/navigation';
import { FillHeartIcon } from '@/composables/icons';
import { fillGreenButton, flex, flexBetween, greenButton } from '@/styles/common.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { favoriteAPI, unFavoriteAPI } from '@/services/articles';

type Props = {
  article: any;
};
const ArticlePreview = ({
  article: { title, description, favorited, favoritesCount, tagList, author, createdAt, slug },
}: Props) => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: favorited ? favoriteAPI : unFavoriteAPI,
    onError: err => {
      console.error(err);
    },
    onSuccess: res => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
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
