import { queryKeys } from '@/react-query/queryKeys';
import { useMutation } from '@tanstack/react-query';

import { deleteComment, postComment } from '@/api/comments';

export const usePostCommentMutation = () => {
  const mutation = useMutation([queryKeys.PostComment], postComment);

  return mutation;
};

export const useDeleteCommentMutation = () => {
  const mutation = useMutation([queryKeys.DeleteComment], deleteComment);

  return mutation;
};
