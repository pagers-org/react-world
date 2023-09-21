import { PropsWithChildren } from "react";
import { comment_card } from "@/styles/comment.css";

export default function CommentCard(props: PropsWithChildren<{}>) {
  const { children } = props;

  return <div className={comment_card}>{children}</div>;
}
