import { ArticleQueryParams } from "@/types/articles";
import { create } from "zustand";

interface TabState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useTabsStore = create<TabState>((set) => ({
  activeTab: "Global Feed",
  setActiveTab: (newTab: string) => set({ activeTab: newTab }),
}));

const defaultArticlesState = {
  tag: "",
  author: "",
  favorited: "",
  offset: 0,
  limit: 10,
};

interface ArticlesState {
  articlesParams: ArticleQueryParams;
  setSelectedTag: (tag: string) => void;
  resetSelectedTag: () => void;
  setCurrentPage: (selectedPage: number) => void;
  resetCurrentPage: () => void;
}

export const useArticlesParamsStore = create<ArticlesState>((set) => ({
  articlesParams: defaultArticlesState,
  setSelectedTag: (newTag: string) =>
    set((prev) => ({ ...prev, articlesParams: { ...prev.articlesParams, tag: newTag } })),
  resetSelectedTag: () => set((prev) => ({ ...prev, tag: "" })),
  setCurrentPage: (selectedPage: number) =>
    set((prev) => ({ ...prev, articlesParams: { ...prev.articlesParams, offset: (selectedPage - 1) * 10 } })),
  resetCurrentPage: () => set((prev) => ({ ...prev, articlesParams: { ...prev.articlesParams, offset: 0 } })),
  resetArticlesParams: () => set({ articlesParams: defaultArticlesState }),
}));
