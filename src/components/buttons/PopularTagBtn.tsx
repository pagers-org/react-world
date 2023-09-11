import { ButtonHTMLAttributes, ReactNode } from "react";
import { popularTagBtnStyles } from "./styles/popularTagBtn.css";

interface PopularTagBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const PopularTagBtn = ({ children, ...props }: PopularTagBtnProps) => {
  return (
    <button {...props} className={popularTagBtnStyles}>
      {children}
    </button>
  );
};
export default PopularTagBtn;
