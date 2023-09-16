import { CommentForm } from "components/article/@comments/comment-form";
import { Comments } from "components/article/@comments/comments";

const CommentsPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <CommentForm />
      <Comments />
    </div>
  );
};

export default CommentsPage;
