import { ChangeEvent } from "react";
import { Item } from "~/types";

type Props = {
  items: Item[];
  decrement(itemId: number): void;
  increment(itemId: number): void;
  set(itemId: number, event: ChangeEvent<HTMLInputElement>): void;
  clear(): void;
};
export default function Store(props: Props) {
  const { items, decrement, increment, set, clear } = props;
  return (
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
              <button onClick={() => decrement(item.id)}>−</button>
              <input
                type="text"
                value={item.quantity}
                onChange={(event) => set(item.id, event)}
              />
              <button onClick={() => increment(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <footer className="store-buttons">
        <button className="btn clear" onClick={clear}>
          Clear
        </button>
        <button className="btn">Calculate</button>
      </footer>
    </section>
  );
}
