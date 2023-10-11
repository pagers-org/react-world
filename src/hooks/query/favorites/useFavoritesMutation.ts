import { queryKeys } from '@/react-query/queryKeys';
import { useMutation } from '@tanstack/react-query';

import { deleteFavorite, postFavorite } from '@/api/favorites';

export const usePostFavoriteMutation = (options = {}) => {
  const mutation = useMutation([queryKeys.PostFavorite], postFavorite, options);

  return mutation;
};

export const useDeleteFavoriteMutation = (options = {}) => {
  const mutation = useMutation(
    [queryKeys.DeleteFavorite],
    deleteFavorite,
    options,
  );

  return mutation;
};
