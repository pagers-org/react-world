import { popularTagBtnStyles } from "./styles/popularTagBtn.css";

const PopularTagBtn = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <button {...props} className={popularTagBtnStyles}>
      {children}
    </button>
  );
};
export default PopularTagBtn;
