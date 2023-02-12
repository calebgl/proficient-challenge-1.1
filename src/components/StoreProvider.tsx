import { ReactNode, useReducer } from "react";
import { storeReducer } from "~/reducer";
import { Item, StoreState } from "~/types";
import { StoreContext } from "./StoreContext";

type Props = {
  children?: ReactNode;
};

export const INITIAL_ITEMS: Item[] = [
  { id: 1, name: "Beds", quantity: 0, m2: 1.2 },
  { id: 2, name: "Refrigerator", quantity: 0, m2: 1 },
  { id: 3, name: "Furniture", quantity: 0, m2: 0.5 },
  { id: 4, name: "Oven", quantity: 0, m2: 0.6 },
  { id: 5, name: "Sofa", quantity: 0, m2: 1.5 },
  { id: 6, name: "TV", quantity: 0, m2: 0.25 },
  { id: 7, name: "Wash-dryer", quantity: 0, m2: 0.5 },
  { id: 8, name: "Dinning", quantity: 0, m2: 2 },
  { id: 9, name: "Desk", quantity: 0, m2: 0.75 },
  { id: 10, name: "Wardrobe", quantity: 0, m2: 3.2 },
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
