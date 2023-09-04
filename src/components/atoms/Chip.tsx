interface Props {
  text: string;
}

const Chip = ({ text }: Props) => {
  return <div className={`text-inherit border-2 rounded-full text-xs px-1`}>{text}</div>;
};
export default Chip;
