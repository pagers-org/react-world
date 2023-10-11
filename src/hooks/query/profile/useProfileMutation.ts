import { queryKeys } from '@/react-query/queryKeys';
import { useMutation } from '@tanstack/react-query';

import { deleteUnfollowUser, postFollowUser } from '@/api/profile';

export const usePostFollowUserMutation = (options = {}) => {
  const mutation = useMutation(
    [queryKeys.PostFollowUser],
    postFollowUser,
    options,
  );

  return mutation;
};

export const useDeleteUnFollowUserMutation = (options = {}) => {
  const mutation = useMutation(
    [queryKeys.DeleteUnfollowUser],
    deleteUnfollowUser,
    options,
  );

  return mutation;
};
