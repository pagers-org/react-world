'use client';
import { useDeleteArticleFavorite } from '@/shared/api/realworld/endpoints/favorites/favorites';
import { Button } from '@packages/ui';
import React from 'react';
import { IoIosHeart } from 'react-icons/io';

interface ArticleUnfavoriteButtonProps {
  slug: string;
  favoritesCount: number;
}

const ArticleUnfavoriteButton = ({ slug, favoritesCount }: ArticleUnfavoriteButtonProps) => {
  const { mutateAsync: deleteArticleFavorite } = useDeleteArticleFavorite();

  const handleUnfavoriteButtonClick = () => {
    deleteArticleFavorite({ slug });
    // TODO: validate queries
  };
  return (
    <Button
      variant="outlined"
      color={'primary'}
      size={'s'}
      onClick={handleUnfavoriteButtonClick}
      icon={{
        start: <IoIosHeart />,
      }}
    >
      Unfavorite Article ({favoritesCount})
    </Button>
  );
};

export default ArticleUnfavoriteButton;
