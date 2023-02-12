import { ReactNode, useState } from "react";
import { Item, StoreState } from "~/types";
import { StoreContext } from "./StoreContext";

type Props = {
  children?: ReactNode;
};

const INITIAL_ITEMS: Item[] = [
  { id: 1, name: "beds", quantity: 0, m2: 1.2 },
  { id: 2, name: "refrigerator", quantity: 0, m2: 1 },
  { id: 3, name: "furniture", quantity: 0, m2: 0.5 },
  { id: 4, name: "oven", quantity: 0, m2: 0.6 },
  { id: 5, name: "sofa", quantity: 0, m2: 1.5 },
];

const INITIAL_STATE: StoreState = {
  items: INITIAL_ITEMS,
};

export default function StoreProvider(props: Props) {
  const { children } = props;
  const [storeState, setStoreState] = useState<StoreState>(INITIAL_STATE);

  function incrementItem(id: number) {
    const items = storeState.items.map((item) => {
      const quantity = item.quantity + (item.id === id ? 1 : 0);
      return { ...item, quantity };
    });
    setStoreState((currentState) => ({
      ...currentState,
      items,
    }));
  }

  function decrementItem(id: number) {
    const items = storeState.items.map((item) => {
      if (item.quantity === 0) {
        return item;
      }
      const quantity = item.quantity - (item.id === id ? 1 : 0);
      return { ...item, quantity };
    });
    setStoreState((currentState) => ({
      ...currentState,
      items,
    }));
  }

  function setItem(id: number, quantity: number) {
    const items = storeState.items.map((item) => {
      const newQuantity = item.id === id ? quantity : item.quantity;
      return { ...item, quantity: newQuantity };
    });
    setStoreState((currentState) => ({
      ...currentState,
      items,
    }));
  }

  function clearStore() {
    setStoreState(INITIAL_STATE);
  }

  return (
    <StoreContext.Provider
      value={{ storeState, incrementItem, decrementItem, setItem, clearStore }}
    >
      {children}
    </StoreContext.Provider>
  );
}
