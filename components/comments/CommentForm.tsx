'use client';

import { commentForm, commentFormFooter, commentSubmitButton, commentTextarea } from '@/styles/comments.css';
import { circle, fillGreenButton, flexCenter } from '@/styles/common.css';
import Image from 'next/image';

const CommentForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className={flexCenter}>
      <form onSubmit={handleSubmit} className={commentForm}>
        <textarea rows={3} className={commentTextarea} placeholder="Write a comment..."></textarea>
        <div className={commentFormFooter}>
          <Image
            src={'https://api.realworld.io/images/smiley-cyrus.jpeg'}
            className={circle}
            width={30}
            height={30}
            alt="iamge"
          />
          <input type="submit" className={`${fillGreenButton} ${commentSubmitButton}`} value="Post Comment" />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
