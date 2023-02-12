export type StoreState = {
  items: Item[];
};

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
};

export type Total = {
  totalItems: number;
  totalM2: number;
};
