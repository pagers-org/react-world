import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { getColorStyle } from "./util";
import { sizeStyle } from "./style";
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: {
    start: ReactNode;
  };
  variant: "outlined" | "fill";
  color: "primary" | "gray" | "error";
  size: "s" | "m" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = "primary",
      variant = "outlined",
      size = "m",
      icon,
    }: ButtonProps,
    ref
  ) => {
    const colorStyle = getColorStyle({ color, variant });

    return (
      <button className={`${sizeStyle[size]} ${colorStyle}`} ref={ref}>
        {children}
      </button>
    );
  }
);

export default Button;
