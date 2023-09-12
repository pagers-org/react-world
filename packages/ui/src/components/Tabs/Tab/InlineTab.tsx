"use client";

import { ReactNode, forwardRef } from "react";
import { useTabs } from "../Tabs";

export interface InlineTabProps {
  label: ReactNode;
  value: string;
}

const InlineTab = forwardRef<HTMLDivElement, InlineTabProps>(
  ({ label, value }, ref) => {
    const { onChange, selectedValue } = useTabs();
    const activation = selectedValue === value ? "active" : "inactive";

    return (
      <div
        ref={ref}
        className={`py-8 px-16 cursor-pointer ${style[activation]}`}
        onClick={() => onChange(value)}
      >
        {label}
      </div>
    );
  }
);

export default InlineTab;

const style = {
  active: "border-b-[2px] border-green600 text-green600",
  inactive: "text-gray-400 hover:text-black",
};
