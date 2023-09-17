import type { Author } from "./author";

export type Comment = {
  id: number;
  body: string;
  author: Author;
  createdAt: Date;
  updatedAt: Date;
};
