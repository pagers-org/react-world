import React from 'react';
import { Comment } from '@/entities/comment';
import { Profile } from '@/shared/api/realworld/models';
import { UserProfileAvatar } from '@/entities/user';

interface UserCommentProps {
  body: string;
  author: Profile;
  createdAt: string;
}

const UserComment = ({ body, author, createdAt }: UserCommentProps) => {
  return (
    <Comment body={body}>
      <UserProfileAvatar author={author} createdAt={createdAt} />
    </Comment>
  );
};

export default UserComment;
