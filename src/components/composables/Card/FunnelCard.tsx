import { form_container } from "@/styles/form.css";
import { myStyle } from "@/styles/container.css";
import { PropsWithChildren } from "react";

type FunnelCardType = {
  animation?: string;
};

export default function FunnelCard(props: PropsWithChildren<FunnelCardType>) {
  const { children } = props;

  return (
    <>
      <div className={`${form_container} ${myStyle}`}>{children}</div>
    </>
  );
}
