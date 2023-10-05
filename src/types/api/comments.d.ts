import { ProfileResponse } from './profile';

export type CommentsResponse = {
  comments: Array<{
    id: number;
    createdAt: string;
    updatedAt: string;
    body: string;
    author: ProfileResponse['profile'];
  }>;
};

export type CommentPayload = {
  comment: {
    body: string;
  };
};

export type CommentResponse = {
  comment: CommentResponse['comment'][number];
};
