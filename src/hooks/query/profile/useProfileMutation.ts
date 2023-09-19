import { queryKeys } from '@/react-query/queryKeys';
import { useMutation } from '@tanstack/react-query';

import { deleteUnfollowUser, postFollowUser } from '@/api/profile';

export const usePostFollowUserMutation = () => {
  const { mutate, isLoading, isSuccess, isError } = useMutation(
    [queryKeys.PostFollowUser],
    postFollowUser,
  );

  return { mutate, isLoading, isSuccess, isError };
};

export const useDeleteUnFollowUserMutation = () => {
  const { mutate, isLoading, isSuccess, isError } = useMutation(
    [queryKeys.DeleteUnfollowUser],
    deleteUnfollowUser,
  );

  return { mutate, isLoading, isSuccess, isError };
};
