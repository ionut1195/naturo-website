import { create } from "zustand";
import { devtools } from "zustand/middleware";

type StoreType = {
  openCart: boolean;
  setOpenCart: (val: boolean) => void;
};

export const useOpenCartStore = create<StoreType>()(
  devtools((set) => ({
    openCart: false,
    setOpenCart: (val) => set({ openCart: val }),
  }))
);
