import { ChangeEvent, useState } from "react";
import "./App.css";
import Store from "./components/Store";
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

function formatNumber(value: number, locales: string | string[] = "en-US") {
  return Intl.NumberFormat(locales).format(value);
}

function formatCurrency(
  value: number,
  locales: string | string[] = "en-US",
  currency: string = "USD"
) {
  return Intl.NumberFormat(locales, { style: "currency", currency }).format(
    value
  );
}

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
      <section className="summary">
        <header>
          <h2>Summary</h2>
        </header>
        <div className="details">
          <div className="row">
            <div>Total Items</div>
            <div>{formatNumber(totalItems)}</div>
          </div>
          <div className="row">
            <div>
              Total M<sup>2</sup>
            </div>
            <div>{formatNumber(totalM2)}</div>
          </div>
          <div className="row">
            <div>Subtotal</div>
            <div>{formatCurrency(subtotal)}</div>
          </div>
          <div className="row">
            <div>Tax</div>
            <div>{formatCurrency(tax)}</div>
          </div>
          <div className="row total-price">
            <div>Total</div>
            <div>{formatCurrency(total)}</div>
          </div>
          <div className="row total-price">
            <div>Due Today 50%</div>
            <div>{formatCurrency(dueToday)}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
