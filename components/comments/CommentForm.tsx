'use client';

import { commentForm, commentFormFooter, commentSubmitButton, commentTextarea } from '@/styles/comments.css';
import { circle, fillGreenButton } from '@/styles/common.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';

const CommentForm = ({ slug }: { slug: string }) => {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState('');
  const { mutate } = useMutation({
    mutationFn: async (comment: string) =>
      fetch(`/api/comments/${slug}`, { method: 'POST', body: JSON.stringify({ comment: { body: comment } }) }).then(
        res => res.json()
      ),
    onSuccess: () => {
      alert('성공!');
      queryClient.invalidateQueries(['comments', slug]);
    },
    onError: () => {
      alert('실패');
    },
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(comment);

    mutate(e.target.comment.value);
    setComment('');
  };
  return (
    <form onSubmit={handleSubmit} className={commentForm}>
      <textarea
        rows={3}
        name="comment"
        className={commentTextarea}
        placeholder="Write a comment..."
        onChange={e => setComment(e.target.value)}
      ></textarea>
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
  );
};

export default CommentForm;
