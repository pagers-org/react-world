import { CommentForm } from "components/article/@comments/comment-form";
import { Comments } from "components/article/@comments/comments";
import { commentRepository } from "repositories/comment/comment-repository";

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

const CommentsPage = async ({ params: { slug } }: Props) => {
  const { comments } = await commentRepository.findAll(slug);

  return (
    <div className="flex flex-col gap-3">
      <CommentForm />
      <Comments comments={comments} />
    </div>
  );
};

export default CommentsPage;
