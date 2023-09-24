import { PropsWithChildren } from "react";
import { user_profile_card } from "@/styles/user_profile.css";

export default function UserProfileCard(props: PropsWithChildren<{}>) {
  const { children } = props;

  return <div className={user_profile_card}>{children}</div>;
}
