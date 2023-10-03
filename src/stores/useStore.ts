import { ArticleQueryParams } from "@/types/articles";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
interface TabState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

type ArticlesState = {
  articlesParams: ArticleQueryParams;
};

type ArticlesStoreActions = {
  setSelectedTag: (tag: string) => void;
  resetSelectedTag: () => void;
  setCurrentPage: (selectedPage: number) => void;
  resetCurrentPage: () => void;
};

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

export const useArticlesParamsStore = create(
  immer<ArticlesState & ArticlesStoreActions>((set) => ({
    articlesParams: defaultArticlesState,
    setSelectedTag: (newTag: string) =>
      set((state) => {
        state.articlesParams.tag = newTag;
      }),
    resetSelectedTag: () =>
      set((state) => {
        state.articlesParams.tag = "";
      }),
    setCurrentPage: (selectedPage: number) =>
      set((state) => {
        state.articlesParams.offset = (selectedPage - 1) * 10;
      }),
    resetCurrentPage: () =>
      set((state) => {
        state.articlesParams.offset = 0;
      }),
    resetArticlesParams: () => set({ articlesParams: defaultArticlesState }),
  })),
);
