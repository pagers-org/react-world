import { labelContainer, labelText } from "./Label.css";

interface Props {
  wrapperClass?: string;
  text: string;
}

const Label = ({ wrapperClass = "", text }: Props) => {
  return (
    <div className={`${labelContainer} ${wrapperClass}`}>
      <span className={labelText}>{text}</span>
    </div>
  );
};

export default Label;
