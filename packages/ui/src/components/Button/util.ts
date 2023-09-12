import { match } from "ts-pattern";
import { colorStyle } from "./style";
import { ButtonProps } from "./Button";

// prettier-ignore
export const getColorStyle = ({
    color,
    variant,
  }: Pick<ButtonProps, "color" | "variant">) =>
    match({ color, variant })
      .with({ color: "primary", variant: "fill" },() => colorStyle["primary-fill"])
      .with({ color: "gray", variant: "fill" }, () => colorStyle["gray-fill"])
      .with({ color: "error", variant: "fill" }, () => colorStyle["error-fill"])
      .with({ color: "primary", variant: "outlined" },() => colorStyle["primary-outlined"])
      .with({ color: "gray", variant: "outlined" },() => colorStyle["gray-outlined"])
      .with({ color: "error", variant: "outlined" },() => colorStyle["error-outlined"])
      .exhaustive();

export const getStartIcon = ({ icon }: Pick<ButtonProps, "icon">) => {
  if (!icon) {
    return undefined;
  }
  return icon.start;
};
