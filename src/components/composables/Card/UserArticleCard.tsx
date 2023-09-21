import { PropsWithChildren } from "react";
import { user_article_card } from "@/styles/user_article.css";

export default function UserArticleCard(props: PropsWithChildren<{}>) {
  const { children } = props;
  return <div className={user_article_card}>{children}</div>;
}
