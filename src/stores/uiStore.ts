import { create } from "zustand";

type UIState = {
  isProductModalOpen: boolean;
  openProductModal: () => void;
  closeProductModal: () => void;
  search: string;
  setSearch: (s: string) => void;
};

export const useUIStore = create<UIState>((set) => ({
  isProductModalOpen: false,
  openProductModal: () => set({ isProductModalOpen: true }),
  closeProductModal: () => set({ isProductModalOpen: false }),
  search: "",
  setSearch: (s) => set({ search: s }),
}));
