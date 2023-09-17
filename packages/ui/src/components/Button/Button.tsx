import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import {
  getColorStyle,
  getDisabledStyle,
  getStartIcon,
  getWidthStyle,
} from "./util";
import { sizeStyle } from "./style";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: {
    start: ReactNode;
  };
  variant: "outlined" | "fill";
  color: "primary" | "gray" | "error";
  size: "s" | "m" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = "primary",
      variant = "outlined",
      size = "m",
      icon,
      fullWidth = false,
      className,
      disabled = false,
      ...rest
    }: ButtonProps,
    ref
  ) => {
    const colorStyle = getColorStyle({ color, variant });
    const startIcon = getStartIcon({ icon });
    const widthStyle = getWidthStyle(fullWidth);
    const disabledStyle = getDisabledStyle(disabled);
    return (
      <button
        className={twMerge(
          `flex items-center gap-4 w-fit cursor-pointer ${sizeStyle[size]} ${colorStyle} ${widthStyle}`,
          disabledStyle,
          className
        )}
        ref={ref}
        disabled={disabled}
        {...rest}
      >
        {startIcon} {children}
      </button>
    );
  }
);

export default Button;
