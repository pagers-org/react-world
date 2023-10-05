import { queryClient } from '@/react-query/queryClient';
import { queryKeys } from '@/react-query/queryKeys';
import { useMutation } from '@tanstack/react-query';

import { deleteComment, postComment } from '@/api/comments';

export const usePostCommentMutation = () => {
  const mutation = useMutation([queryKeys.PostComment], postComment, {
    onSuccess: () => queryClient.invalidateQueries([queryKeys.GetComments]),
  });

  return mutation;
};

export const useDeleteCommentMutation = () => {
  const mutation = useMutation([queryKeys.DeleteComment], deleteComment, {
    onSuccess: () => queryClient.invalidateQueries([queryKeys.GetComments]),
  });

  return mutation;
};
