import { HTMLAttributes, forwardRef } from "react";

interface Tag extends HTMLAttributes<HTMLElement> {
  label: string;
  variant?: "outlined" | "pill";
}

const Tag = forwardRef<HTMLDivElement, Tag>(
  ({ label, variant = "pill", ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={`inline-block py-[0.1rem] px-[0.4em] text-xs rounded-full whitespace-nowrap text-center ${style.variant[variant]}`}
      >
        {label}
      </div>
    );
  }
);
export default Tag;

const style = {
  variant: {
    pill: "bg-gray1300 text-white hover:bg-gray1500",
    outlined: "border border-gray800 text-gray1300 font-light",
  },
};
