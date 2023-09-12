'use client';
import { useCreateArticleFavorite } from '@/shared/api/realworld/endpoints/favorites/favorites';
import { Button } from '@packages/ui';
import React from 'react';
import { IoIosHeart } from 'react-icons/io';

interface ArticleLikeButtonProps {
  label: number;
  favorited: boolean;
  slug: string;
}

const ArticleLikeButton = ({ label, favorited, slug }: ArticleLikeButtonProps) => {
  const variant = getButtonVariant(favorited);
  const { mutateAsync: createArticleFavorite } = useCreateArticleFavorite();

  const handleLikeButtonClick = () => {
    createArticleFavorite({ slug });
    // TODO: validate queries
  };

  return (
    <Button
      variant={variant}
      color={'primary'}
      size={'s'}
      onClick={handleLikeButtonClick}
      icon={{
        start: <IoIosHeart />,
      }}
    >
      {label}
    </Button>
  );
};

export default ArticleLikeButton;

const getButtonVariant = (favorited: boolean) => {
  return favorited ? 'fill' : 'outlined';
};
