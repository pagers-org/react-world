import { ProfileResponse } from './profile';

export type Comment = {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: ProfileResponse['profile'];
};

export type CommentsResponse = {
  comments: Comment[];
};

export type CommentPayload = {
  comment: {
    body: string;
  };
};

export type CommentResponse = {
  comment: CommentResponse['comment'][number];
};
