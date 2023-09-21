import { PropsWithChildren } from "react";
import { slug_article_card } from "@/styles/slug_article.css";

export default function SlugArticleCard(props: PropsWithChildren<{}>) {
  const { children } = props;

  return <div className={slug_article_card}> {children}</div>;
}
