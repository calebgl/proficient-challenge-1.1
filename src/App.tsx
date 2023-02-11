import { useState } from "react";
import "./App.css";

type Item = {
  id: number;
  name: string;
  quantity: number;
  m2: number;
};

const INITIAL_ITEMS: Item[] = [
  { id: 1, name: "beds", quantity: 0, m2: 1.2 },
  { id: 2, name: "refrigerator", quantity: 0, m2: 1 },
  { id: 3, name: "furniture", quantity: 0, m2: 0.5 },
  { id: 4, name: "oven", quantity: 0, m2: 0.6 },
  { id: 5, name: "sofa", quantity: 0, m2: 1.5 },
];

export default function App() {
  const [items, setItems] = useState<Item[]>(INITIAL_ITEMS);

  function increment(itemId: number) {
    setItems((currentItems) =>
      currentItems.map((item) => {
        const quantity = item.quantity + (item.id === itemId ? 1 : 0);
        return { ...item, quantity };
      })
    );
  }

  return (
    <main className="App">
      <section className="store">
        <header>
          <h2 className="">What items to store?</h2>
          <p>
            Select which items you wish to store before moving to your new home.
            We'll keep'em safe!
          </p>
        </header>
        <ul className="store-items">
          {items.map((item) => (
            <li key={item.id} className="item">
              <div className="item-icon">{item.name}</div>
              <div className="item-inputs">
                <button>−</button>
                <input type="text" value={item.quantity} />
                <button onClick={() => increment(item.id)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <footer className="store-buttons">
          <button className="btn clear">Clear</button>
          <button className="btn">Calculate</button>
        </footer>
      </section>
      <section className="summary">
        <header>
          <h2>Summary</h2>
        </header>
        <div className="details">
          <div className="row">
            <div>Total Items</div>
            <div>12</div>
          </div>
          <div className="row">
            <div>
              Total M<sup>2</sup>
            </div>
            <div>8.55</div>
          </div>
          <div className="row">
            <div>Subtotal</div>
            <div>$1710</div>
          </div>
          <div className="row">
            <div>Tax</div>
            <div>$273.5</div>
          </div>
          <div className="row total-price">
            <div>Total</div>
            <div>1,983.6</div>
          </div>
          <div className="row total-price">
            <div>Due Today 50%</div>
            <div>$991.8</div>
          </div>
        </div>
      </section>
    </main>
  );
}
