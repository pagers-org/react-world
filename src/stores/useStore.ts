import { create } from "zustand";

interface TabState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useTabsStore = create<TabState>((set) => ({
  activeTab: "Global Feed",
  setActiveTab: (newTab: string) => set({ activeTab: newTab }),
}));

interface TagState {
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
}

export const useTagsStore = create<TagState>((set) => ({
  selectedTag: "",
  setSelectedTag: (newTag: string) => set({ selectedTag: newTag }),
}));
