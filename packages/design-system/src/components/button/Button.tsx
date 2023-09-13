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
  colors?: string;
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
  colors,
  backgroundColor,
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

  let initialColor;
  let initialBackgroundColor;
  let initialHoverColor;

  switch (variant) {
    case "contained": {
      initialColor = "#fff";
      initialBackgroundColor = "#5CB85B";
      initialHoverColor = "#4CA34C";
      break;
    }
    case "outlined": {
      initialColor = "#5CB85B";
      initialBackgroundColor = "transparent";
      break;
    }
    case "link": {
      initialColor = "#5CB85B";
      initialBackgroundColor = "";
      break;
    }
    default: {
      break;
    }
  }

  return (
    <span className={[S.buttonContainer, block && S.buttonWFull].join(" ")}>
      <button
        className={classes.join(" ")}
        onClick={onClick}
        disabled={disabled}
        {...props}
        style={assignInlineVars(S.themeVars, {
          colors: {
            color: colors || initialColor!,
            backgroundColor: backgroundColor || initialBackgroundColor!,
            hoverColor: hoverColor || initialHoverColor!,
          },
        })}
      >
        {label}
        {children}
      </button>
    </span>
  );
};
