import { useContext } from "react";
import { StoreContext } from "~/components/StoreContext";
import { Total } from "~/types";

const INITIAL_TOTAL: Total = {
  totalItems: 0,
  totalM2: 0,
};

export function useStore() {
  const { storeState, incrementItem, decrementItem, setItem, clearStore } =
    useContext(StoreContext);
  const { items } = storeState;
  const { totalItems, totalM2 } = items.reduce<Total>(
    (acc, curr) => ({
      totalItems: acc.totalItems + curr.quantity,
      totalM2: acc.totalM2 + curr.quantity * curr.m2,
    }),
    INITIAL_TOTAL
  );
  const subtotal = 200 * totalM2;
  const tax = 0.16 * subtotal;
  const total = subtotal + tax;
  const dueToday = 0.5 * total;

  return {
    ...storeState,
    increment: incrementItem,
    decrement: decrementItem,
    set: setItem,
    clear: clearStore,
    summary: {
      totalItems,
      totalM2,
      subtotal,
      tax,
      total,
      dueToday,
    },
  };
}
