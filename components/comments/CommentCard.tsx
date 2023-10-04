'use client';

import { TrashIcon } from '@/composables/icons';
import { commentContent, commentFormFooter, commnetCard } from '@/styles/comments.css';
import { circle, flexCenter } from '@/styles/common.css';
import { Comment } from '@/types';
import { formatDate } from '@/utils';
import Image from 'next/image';
type Props = {
  comment: Comment;
};
const CommentCard = ({ comment }: Props) => {
  const handleTrashClick = () => {
    console.log('쓰레기 클릭');
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
        <TrashIcon onClick={handleTrashClick} />
      </div>
    </div>
  );
};

export default CommentCard;
