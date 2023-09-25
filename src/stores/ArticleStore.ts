import { Article } from "@/types/articles";
import { create } from "zustand";

interface ArticleState {
  article: Article | null;
  setArticle: (selectedArticle: Article) => void;
}

export const useArticleStore = create<ArticleState>((set) => ({
  article: null,
  setArticle: (selectedArticle: Article) => set({ article: selectedArticle }),
}));
