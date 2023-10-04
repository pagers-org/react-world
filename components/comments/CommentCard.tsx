'use client';

import { TrashIcon } from '@/composables/icons';
import useUserStore from '@/stores/useUserStore';
import { commentContent, commentFormFooter, commnetCard } from '@/styles/comments.css';
import { circle, flexCenter } from '@/styles/common.css';
import { Comment, User } from '@/types';
import { formatDate } from '@/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
type Props = {
  comment: Comment;
  slug: string;
};
const CommentCard = ({ comment, slug }: Props) => {
  const queryClient = useQueryClient();
  const { username } = useUserStore() as User;
  const { mutate } = useMutation({
    mutationFn: async (slug: string) =>
      fetch(`/api/comments/${slug}?id=${comment.id}`, { method: 'DELETE' }).then(res => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', slug]);
    },
  });
  const handleTrashClick = (slug: string) => {
    mutate(slug);
  };
  return (
    <div className={commnetCard}>
      <div className={commentContent}>{comment.body}</div>
      <div className={commentFormFooter}>
        <div className={flexCenter}>
          <Image
            src={'https://api.realworld.io/images/smiley-cyrus.jpeg'}
            className={circle}
            width={20}
            height={20}
            alt="iamge"
          />
          &nbsp; {comment.author.username} {formatDate(comment.createAt)}
        </div>
        {comment.author.username === username && <TrashIcon onClick={() => handleTrashClick(slug)} />}
      </div>
    </div>
  );
};

export default CommentCard;
