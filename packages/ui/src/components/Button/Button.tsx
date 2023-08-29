import React, { forwardRef, HTMLAttributes, ReactNode, Ref } from "react";

import { button } from "./Button.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}

const Button = forwardRef(
  ({ children, className, color }: ButtonProps, fowardRef) => {
    return (
      <button
        ref={fowardRef as Ref<HTMLButtonElement> | undefined}
        className={button()}
      >
        {children}
      </button>
    );
  }
);

export default Button;
