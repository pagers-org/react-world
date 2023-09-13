import React from 'react';
import UserComment from './user-comment';
import { Comment } from '@/shared/api/realworld/models/comment';

interface UserCommentListProps {
  commentList: Comment[];
}

const UserCommentList = ({ commentList }: UserCommentListProps) => {
  if (!Boolean(commentList.length)) {
    return null;
  }
  return (
    <div className="flex flex-col gap-12">
      {commentList.map(props => (
        <UserComment key={props.id} {...props} />
      ))}
    </div>
  );
};

export default UserCommentList;
