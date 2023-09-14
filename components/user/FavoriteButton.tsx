'use client';
import Button from '@/composables/Button';
import { FillHeartIcon } from '@/composables/icons';

const FavoriteButton = ({ favoritesCount }: { favoritesCount: number }) => {
  return (
    <Button onClick={() => console.log('클릭')} type="green">
      <FillHeartIcon />
      Favorite Article ({favoritesCount})
    </Button>
  );
};

export default FavoriteButton;
