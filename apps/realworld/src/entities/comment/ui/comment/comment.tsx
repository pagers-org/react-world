import React, { ReactNode } from 'react';

interface CommentProps {
  children: ReactNode;
  body: string;
}

const Comment = ({ body, children }: CommentProps) => {
  return (
    <div className="border border-gray-400 rounded-md ">
      <div className="comment-box text-[1rem] p-24">{body}</div>
      <div className="bg-gray-400 avatar-box">{children}</div>
    </div>
  );
};

export default Comment;
