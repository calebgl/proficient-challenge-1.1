import { ReactNode, useReducer } from "react";
import { storeReducer } from "~/reducer";
import { Item, StoreState } from "~/types";
import { StoreContext } from "./StoreContext";

type Props = {
  children?: ReactNode;
};

export const INITIAL_ITEMS: Item[] = [
  { id: 1, name: "beds", quantity: 0, m2: 1.2 },
  { id: 2, name: "refrigerator", quantity: 0, m2: 1 },
  { id: 3, name: "furniture", quantity: 0, m2: 0.5 },
  { id: 4, name: "oven", quantity: 0, m2: 0.6 },
  { id: 5, name: "sofa", quantity: 0, m2: 1.5 },
];

export const INITIAL_STATE: StoreState = {
  items: INITIAL_ITEMS,
};

export default function StoreProvider(props: Props) {
  const { children } = props;
  const [storeState, dispatch] = useReducer(storeReducer, INITIAL_STATE);

  function incrementItem(id: number) {
    dispatch({ type: "increment_item", payload: { id } });
  }

  function decrementItem(id: number) {
    dispatch({ type: "decrement_item", payload: { id } });
  }

  function setItem(id: number, quantity: number) {
    dispatch({ type: "set_item", payload: { id, quantity } });
  }

  function clearStore() {
    dispatch({ type: "clear_store" });
  }

  return (
    <StoreContext.Provider
      value={{ storeState, incrementItem, decrementItem, setItem, clearStore }}
    >
      {children}
    </StoreContext.Provider>
  );
}
