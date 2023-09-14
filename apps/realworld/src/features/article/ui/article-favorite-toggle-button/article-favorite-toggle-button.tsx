import {
  useDeleteArticleFavorite,
  useCreateArticleFavorite,
} from '@/shared/api/realworld/endpoints/favorites/favorites';
import { Button } from '@packages/ui';
import React, { ReactNode } from 'react';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';

interface ArticleFavoriteToggleButtonProps {
  favorited: boolean;
  slug: string;
  children: ReactNode;
}
// 파랑: 어짜피 따로 못 쓰는 버튼들인데 뭐하러 ArticleUnfavoriteButton / ArticleFavoriteButton로 분리해서 개발해 ?

const ArticleFavoriteToggleButton = ({ favorited, slug, children }: ArticleFavoriteToggleButtonProps) => {
  const { mutateAsync: deleteArticleFavorite } = useDeleteArticleFavorite();
  const { mutateAsync: createArticleFavorite } = useCreateArticleFavorite();

  const handleUnfavoriteButtonClick = () => {
    deleteArticleFavorite({ slug });
    // TODO: invalidate queries
  };

  const handleFavoriteButtonClick = () => {
    createArticleFavorite({ slug });
    // TODO: invalidate queries
  };

  return (
    <Button
      variant={favorited ? 'fill' : 'outlined'}
      color="primary"
      size="s"
      onClick={() => {
        favorited ? handleUnfavoriteButtonClick() : handleFavoriteButtonClick();
      }}
      icon={{
        start: favorited ? <IoIosHeart /> : <IoIosHeartEmpty />,
      }}
    >
      {children}
    </Button>
  );
};

export default ArticleFavoriteToggleButton;
