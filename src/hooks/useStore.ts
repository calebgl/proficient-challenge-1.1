import { useContext } from "react";
import { StoreContext } from "~/components/StoreContext";
import { Total } from "~/types";

const INITIAL_TOTAL: Total = {
  totalItems: 0,
  totalM2: 0,
};

export function useStore(
  m2Price: number = 200,
  taxPercentage: number = 16,
  dueTodayPercentage: number = 50
) {
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
  const subtotal = m2Price * totalM2;
  const tax = (taxPercentage / 100) * subtotal;
  const total = subtotal + tax;
  const dueToday = (dueTodayPercentage / 100) * total;

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
