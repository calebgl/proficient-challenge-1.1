import { ReactNode, useReducer } from "react";
import { storeReducer } from "~/reducer";
import { Item, StoreState } from "~/types";
import {
  Beds,
  Desk,
  Dining,
  Furniture,
  Oven,
  Refrigerator,
  Sofa,
  Tv,
  Wardrobe,
  WasherDryer,
} from "./icons";
import { StoreContext } from "./StoreContext";

type Props = {
  children?: ReactNode;
};

export const INITIAL_ITEMS: Item[] = [
  { id: 1, name: "Beds", quantity: 0, m2: 1.2, icon: <Beds /> },
  { id: 2, name: "Refrigerator", quantity: 0, m2: 1, icon: <Refrigerator /> },
  { id: 3, name: "Furniture", quantity: 0, m2: 0.5, icon: <Furniture /> },
  { id: 4, name: "Oven", quantity: 0, m2: 0.6, icon: <Oven /> },
  { id: 5, name: "Sofa", quantity: 0, m2: 1.5, icon: <Sofa /> },
  { id: 6, name: "TV", quantity: 0, m2: 0.25, icon: <Tv /> },
  { id: 7, name: "Wash-dryer", quantity: 0, m2: 0.5, icon: <WasherDryer /> },
  { id: 8, name: "Dining", quantity: 0, m2: 2, icon: <Dining /> },
  { id: 9, name: "Desk", quantity: 0, m2: 0.75, icon: <Desk /> },
  { id: 10, name: "Wardrobe", quantity: 0, m2: 3.2, icon: <Wardrobe /> },
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
