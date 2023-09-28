'use client';
import useUserStore from '@/stores/useUserStore';
import Link from 'next/link';
import React from 'react';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';
import { flexCenter, flexRow, textCenter } from '@/styles/common.css';

const CommentBox = () => {
  const { email } = useUserStore();
  return (
    <div>
      {email ? (
        <div className={`${flexRow} ${flexCenter}`}>
          <CommentForm />
          <CommentCard />
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
