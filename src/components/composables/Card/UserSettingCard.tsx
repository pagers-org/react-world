import { PropsWithChildren } from "react";

export default function UserSettingCard(props: PropsWithChildren<{}>) {
  const { children } = props;

  return <div>{children}</div>;
}
