import { assignInlineVars } from "@vanilla-extract/dynamic";
import { darkenColor } from "utils/darkenColor";

import * as S from "./button.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  type?: "contained" | "outlined" | "link";
  htmlType?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: string;
  textColor?: string;
  label: string;
}

export const Button = ({
  block = false,
  disabled = false,
  onClick,
  size = "sm",
  type = "contained",
  label,
  children,
  textColor,
  backgroundColor,
  ...props
}: ButtonProps) => {
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
    typeClasses[type],
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
