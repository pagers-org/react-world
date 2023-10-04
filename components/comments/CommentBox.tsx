'use client';
import useUserStore from '@/stores/useUserStore';
import Link from 'next/link';
import React from 'react';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';
import { flexCenter, flexRow, textCenter } from '@/styles/common.css';
import { User } from '@/types';
import { useQuery } from '@tanstack/react-query';

const CommentBox = ({ slug }: { slug: string }) => {
  const { email } = useUserStore() as User;
  const { data: comments } = useQuery({
    queryKey: ['comments', slug],
    queryFn: async () => fetch(`/api/comments/${slug}`).then(res => res.json()),
    select: res => res.data.comments,
  });

  console.log(comments);

  return (
    <div>
      {email ? (
        <div className={`${flexRow} ${flexCenter}`}>
          <CommentForm slug={slug} />
          <div className={flexRow}>
            {comments.map(comment => (
              <CommentCard key={comment.id} comment={comment} slug={slug} />
            ))}
          </div>
        </div>
      ) : (
        <div className={textCenter}>
          <Link href="/login">Sign in</Link> or <Link href="/register">sign up</Link> to add comments on this article.
        </div>
      )}
    </div>
  );
};

export default CommentBox;
