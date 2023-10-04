import { create } from 'zustand';

type CurrentTabState = {
  tab: string;
  setTab: (tab: string) => void;
};

const useCurrentTab = create<CurrentTabState>(set => ({
  tab: 'global',
  setTab: (tab: string) => set(() => ({ tab })),
}));

export default useCurrentTab;
