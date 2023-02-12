import { ChangeEvent, useState } from "react";
import "./App.css";
import Store from "./components/Store";
import Summary from "./components/Summary";
import { Item, Total } from "./types";

const INITIAL_ITEMS: Item[] = [
  { id: 1, name: "beds", quantity: 0, m2: 1.2 },
  { id: 2, name: "refrigerator", quantity: 0, m2: 1 },
  { id: 3, name: "furniture", quantity: 0, m2: 0.5 },
  { id: 4, name: "oven", quantity: 0, m2: 0.6 },
  { id: 5, name: "sofa", quantity: 0, m2: 1.5 },
];

const INITIAL_TOTAL: Total = {
  totalItems: 0,
  totalM2: 0,
};

export default function App() {
  const [items, setItems] = useState<Item[]>(INITIAL_ITEMS);
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

  function increment(itemId: number) {
    setItems((currentItems) =>
      currentItems.map((item) => {
        const quantity = item.quantity + (item.id === itemId ? 1 : 0);
        return { ...item, quantity };
      })
    );
  }

  function decrement(itemId: number) {
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (item.quantity === 0) {
          return item;
        }
        const quantity = item.quantity - (item.id === itemId ? 1 : 0);
        return { ...item, quantity };
      })
    );
  }

  function set(itemId: number, event: ChangeEvent<HTMLInputElement>) {
    // TODO: debounce implementation
    // TODO: verify that is in fact a number
    const newQuantity = Number(event.currentTarget.value);
    setItems((currentItems) =>
      currentItems.map((item) => {
        const quantity = item.id === itemId ? newQuantity : item.quantity;
        return { ...item, quantity };
      })
    );
  }

  function clear() {
    setItems(INITIAL_ITEMS);
  }

  return (
    <main className="App">
      <Store
        items={items}
        increment={increment}
        decrement={decrement}
        set={set}
        clear={clear}
      />
      <Summary
        totalItems={totalItems}
        totalM2={totalM2}
        subtotal={subtotal}
        tax={tax}
        total={total}
        dueToday={dueToday}
      />
    </main>
  );
}
