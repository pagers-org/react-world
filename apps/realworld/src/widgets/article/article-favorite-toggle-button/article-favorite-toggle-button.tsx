import { ArticleFavoriteButton, ArticleUnfavoriteButton } from '@/features/article';
import React from 'react';

interface ArticleFavoriteToggleButtonProps {
  favorited: boolean;
  slug: string;
  favoritesCount: number;
}

const ArticleFavoriteToggleButton = ({ favorited, favoritesCount, slug }: ArticleFavoriteToggleButtonProps) => {
  return favorited ? (
    <ArticleUnfavoriteButton slug={slug} favoritesCount={favoritesCount} />
  ) : (
    <ArticleFavoriteButton slug={slug} favoritesCount={favoritesCount} />
  );
};

export default ArticleFavoriteToggleButton;
