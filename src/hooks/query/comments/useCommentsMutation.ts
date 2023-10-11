import { queryKeys } from '@/react-query/queryKeys';
import { useMutation } from '@tanstack/react-query';

import { deleteComment, postComment } from '@/api/comments';

export const usePostCommentMutation = (options = {}) => {
  const mutation = useMutation([queryKeys.PostComment], postComment, options);

  return mutation;
};

export const useDeleteCommentMutation = (options = {}) => {
  const mutation = useMutation(
    [queryKeys.DeleteComment],
    deleteComment,
    options,
  );

  return mutation;
};
