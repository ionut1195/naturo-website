import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ProductType } from "../products/products";

type StoreType = {
  itemsInCart: ProductType[];
  setItemsInCart: (item: ProductType) => void;
  removeItemCategoryFromCart: (item: ProductType) => void;
  emptyCart: () => void;
};

export const useCartItemsStore = create<StoreType>()(
  devtools(
    persist(
      (set) => ({
        itemsInCart: [],
        setItemsInCart: (item) =>
          set((state) => ({
            itemsInCart:
              state.itemsInCart.findIndex((it) => it.name === item.name) === -1
                ? state.itemsInCart.concat(item)
                : state.itemsInCart.map((it) =>
                    it.name === item.name
                      ? {
                          ...it,
                          qty: it.qty + item.qty,
                        }
                      : it
                  ),
          })),
        removeItemCategoryFromCart: (item) =>
          set((state) => ({
            itemsInCart: state.itemsInCart.filter(
              (it) => it.name !== item.name
            ),
          })),
        emptyCart: () =>
          set((state) => ({
            itemsInCart: [],
          })),
      }),
      {
        name: "cart-storage",
      }
    )
  )
);
