import { queryKeys } from '@/react-query/queryKeys';
import { useMutation } from '@tanstack/react-query';

import { deleteFavorite, postFavorite } from '@/api/favorites';

export const usePostFavoriteMutation = () => {
  const mutation = useMutation([queryKeys.PostFavorite], postFavorite);

  return mutation;
};

export const useDeleteFavoriteMutation = () => {
  const mutation = useMutation([queryKeys.DeleteFavorite], deleteFavorite);

  return mutation;
};
