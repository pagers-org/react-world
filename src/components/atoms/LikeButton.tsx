interface Props {
  likes: number;
}

const LikeButton = ({ likes, ...props }: Props) => {
  return (
    <button {...props} className="border border-primary rounded-md text-primary text-sm p-1">
      ♥ {likes}
    </button>
  );
};
export default LikeButton;
