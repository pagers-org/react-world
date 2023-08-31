import { create } from 'zustand'

interface Bears {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
}

const useStore = create<Bears>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export default useStore;