import { ButtonHTMLAttributes } from "react";
import { popularTagBtnStyles, selectedPopularTagStyles } from "./styles/popularTagBtn.css";

interface PopularTagBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

const PopularTagBtn = ({ children, selected, ...props }: PopularTagBtnProps) => {
  return (
    <button {...props} className={selected ? selectedPopularTagStyles : popularTagBtnStyles}>
      {children}
    </button>
  );
};
export default PopularTagBtn;
