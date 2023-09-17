import type { Comment } from "models/comment";

import { CommentItem } from "../comment-item";

type Props = {
  comments: Comment[];
};

export const Comments = ({ comments }: Props) => {
  return (
    <ul className="flex flex-col">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};
