import { assignInlineVars } from "@vanilla-extract/dynamic";
import type { PropsWithChildren } from "react";
import { darkenColor } from "utils/darkenColor";

import * as S from "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  icon?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "contained" | "outlined" | "link";
  backgroundColor?: string;
  textColor?: string;
  label: string;
}

export const Button = ({
  block = false,
  disabled = false,
  onClick,
  size = "sm",
  variant = "contained",
  label,
  children,
  textColor = "white",
  backgroundColor = "green",
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const baseClasses = [S.button];
  const typeClasses = {
    contained: S.buttonContained,
    outlined: S.buttonOutlined,
    link: S.buttonLink,
  };

  const sizeClasses = {
    xs: S.buttonXs,
    sm: S.buttonSm,
    md: S.buttonMd,
    lg: S.buttonLg,
  };

  const classes = [
    ...baseClasses,
    typeClasses[variant],
    sizeClasses[size],
    block && S.buttonWFull,
  ].filter(Boolean);

  const hoverColor = backgroundColor ? darkenColor(backgroundColor) : undefined;

  console.log("@@@darkenColor", hoverColor);

  return (
    <span className={[S.buttonContainer, block && S.buttonWFull].join(" ")}>
      <button
        className={classes.join(" ")}
        onClick={onClick}
        disabled={disabled}
        {...props}
        style={assignInlineVars(S.themeVars, {
          color: {
            textColor: textColor!,
            backgroundColor: backgroundColor!,
            hoverColor: hoverColor!,
          },
        })}
      >
        {label}
        {children}
      </button>
    </span>
  );
};
