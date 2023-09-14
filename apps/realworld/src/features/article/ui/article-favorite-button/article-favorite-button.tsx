'use client';
import { useCreateArticleFavorite } from '@/shared/api/realworld/endpoints/favorites/favorites';
import { Button } from '@packages/ui';
import React from 'react';
import { IoIosHeart } from 'react-icons/io';

interface ArticleFavoriteButtonProps {
  slug: string;
  favoritesCount: number;
}

const ArticleFavoriteButton = ({ slug, favoritesCount }: ArticleFavoriteButtonProps) => {
  const { mutateAsync: createArticleFavorite } = useCreateArticleFavorite();

  const handleFavoriteButtonClick = () => {
    createArticleFavorite({ slug });
    // TODO: validate queries
  };

  return (
    <Button
      variant="fill"
      color={'primary'}
      size={'s'}
      onClick={handleFavoriteButtonClick}
      icon={{
        start: <IoIosHeart />,
      }}
    >
      Favorite Article ({favoritesCount})
    </Button>
  );
};

export default ArticleFavoriteButton;
