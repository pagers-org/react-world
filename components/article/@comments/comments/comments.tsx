import { CommentItem } from "../comment-item";

export const Comments = () => {
  return (
    <ul className="flex flex-col">
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </ul>
  );
};
