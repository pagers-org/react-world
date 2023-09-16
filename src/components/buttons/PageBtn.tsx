import { ButtonHTMLAttributes, ReactNode } from "react";
import { activePageBtnStyle, inactivePageBtnStyle } from "./styles/pageBtn.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive: boolean;
}

const PageBtn = ({ children, isActive, ...props }: Props) => {
  return (
    <button {...props} className={isActive ? activePageBtnStyle : inactivePageBtnStyle}>
      {children}
    </button>
  );
};
export default PageBtn;
