
import * as S from "./button.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  type?: "contained" | "outlined" | "link";
  // color?: "primary" | "secondary";
  htmlType?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: string;
  label: string;
}

export const Button = ({
  block = false,
  disabled = false,
  onClick,
  size = "sm",
  type = "contained",
  // color = "primary",
  label,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = [S.button];
  const typeClasses = {
    contained: S.buttonContained,
    outlined: S.buttonOutlined,
    link: S.buttonLink,
  };
  // const colorClasses = {
  //   primary: S.buttonPrimary,
  //   secondary: S.buttonSecondary,
  // };

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
    // colorClasses[color],
    block && S.buttonWFull,
  ].filter(Boolean);

  console.log("classes", classes);
  return (
    <span className={[S.buttonContainer, block && S.buttonWFull].join(" ")}>
      <button
        className={classes.join(" ")}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {label}
        {children}
      </button>
    </span>
  );
};
