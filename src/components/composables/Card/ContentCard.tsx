import { content_card } from "@/styles/contentcard.css";

type Children = {
  children: React.ReactNode;
};

export default function ContentCard({ children }: Children) {
  return <div className={content_card}>{children}</div>;
}
