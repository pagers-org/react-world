import type { PropsWithChildren } from "react";

import * as S from "./chip.css";

interface ChipProps {
  variant: "contained" | "outlined";
  icon?: React.ReactNode;
}

export const Chip = ({
  variant,
  children,
  icon,
}: PropsWithChildren<ChipProps>) => {
  return (
    <>
      <span
        className={[
          S.chipContainer,
          variant === "contained" ? S.contained : S.outlined,
        ].join(" ")}
      >
        {icon}
        {children}
      </span>
    </>
  );
};
