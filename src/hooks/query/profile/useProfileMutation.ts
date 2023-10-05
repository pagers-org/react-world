import { queryKeys } from '@/react-query/queryKeys';
import { useMutation } from '@tanstack/react-query';

import { deleteUnfollowUser, postFollowUser } from '@/api/profile';

export const usePostFollowUserMutation = () => {
  const mutation = useMutation([queryKeys.PostFollowUser], postFollowUser);

  return mutation;
};

export const useDeleteUnFollowUserMutation = () => {
  const mutation = useMutation(
    [queryKeys.DeleteUnfollowUser],
    deleteUnfollowUser,
  );

  return mutation;
};
