import { PropsWithChildren } from "react";
import { category_card } from "@/styles/category.css";

export default function ArticleCategoryCard(props: PropsWithChildren<{}>) {
  const { children } = props;
  return <div className={category_card}>{children}</div>;
}
