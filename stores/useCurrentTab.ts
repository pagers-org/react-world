import { create } from 'zustand';

const useCurrentTab = create(set => ({
  tab: 'global',
  setTab: (tab: string) => set(() => ({ tab })),
}));

export default useCurrentTab;
