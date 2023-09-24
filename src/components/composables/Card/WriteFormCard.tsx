import { PropsWithChildren } from "react";
import { user_write_card } from "@/styles/user_write.css";

export default function WriteFormCard(props: PropsWithChildren<{}>) {
  const { children } = props;

  return <div className={user_write_card}>{children}</div>;
}
