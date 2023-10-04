interface Props {
  profileImg: string;
  username: string;
  createdAt: Date;
  comment: string;
}

const Comment = ({ profileImg, username, createdAt, comment }: Props) => {
  return (
    <article>
      <section>{comment}</section>
      <section></section>
    </article>
  );
};
export default Comment;
