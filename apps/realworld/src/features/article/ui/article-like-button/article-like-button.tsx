'use client';
import { useCreateArticleFavorite } from '@/shared/api/realworld/apis';
import { Button } from '@packages/ui';
import React from 'react';

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
    <Button variant={variant} color={'primary'} size={'s'} onClick={handleLikeButtonClick}>
      {label}
    </Button>
  );
};

export default ArticleLikeButton;

const getButtonVariant = (favorited: boolean) => {
  return favorited ? 'fill' : 'outlined';
};
