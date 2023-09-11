'use client';

import { TrashIcon } from '@/composables/icons';
import { commentContent, commentFormFooter, commnetCard } from '@/styles/comments.css';
import { circle, flexCenter } from '@/styles/common.css';
import Image from 'next/image';
type Props = {
  author: any;
};
const CommentCard = ({ author }: Props) => {
  const handleTrashClick = () => {
    console.log('쓰레기 클릭');
  };
  return (
    <div className={commnetCard}>
      <div className={commentContent}>ㅋㅋㅋ</div>
      <div className={commentFormFooter}>
        <div className={flexCenter}>
          <Image
            src={'https://api.realworld.io/images/smiley-cyrus.jpeg'}
            className={circle}
            width={20}
            height={20}
            alt="iamge"
          />
          &nbsp; hyeon9782 September 12, 2023
        </div>
        <TrashIcon onClick={handleTrashClick} />
      </div>
    </div>
  );
};

export default CommentCard;
