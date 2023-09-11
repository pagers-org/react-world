import { TagStyle } from "./styles/tag.css";

interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return <div className={TagStyle}>{text}</div>;
};
export default Tag;
