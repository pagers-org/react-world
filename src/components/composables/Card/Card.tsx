import { card } from "@/styles/card.css";

type Children = {
  children: React.ReactNode;
};

export default function Card({ children }: Children) {
  return <div className={card}>{children}</div>;
}
