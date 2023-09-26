import { create } from 'zustand';

const useCurrentTag = create(set => ({
  tag: '',
  setTag: (tag: string) => set(() => ({ tag })),
}));

export default useCurrentTag;
