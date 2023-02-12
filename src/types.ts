import { ReactNode } from "react";

export type StoreState = {
  items: Item[];
};

export type StoreAction =
  | { type: "increment_item"; payload: { id: number } }
  | { type: "decrement_item"; payload: { id: number } }
  | { type: "set_item"; payload: { id: number; quantity: number } }
  | { type: "clear_store" };

export type StoreContextProps = {
  storeState: StoreState;
  incrementItem(id: number): void;
  decrementItem(id: number): void;
  setItem(id: number, quantity: number): void;
  clearStore(): void;
};

export type Item = {
  id: number;
  name: string;
  quantity: number;
  m2: number;
  icon: ReactNode;
};

export type Total = {
  totalItems: number;
  totalM2: number;
};
