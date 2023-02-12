import { ChangeEvent } from "react";
import { Item } from "~/types";

type Props = {
  item: Item;
  decrement(itemId: number): void;
  increment(itemId: number): void;
  set(itemId: number, event: ChangeEvent<HTMLInputElement>): void;
};
export function StoreItem(props: Props) {
  const { item, decrement, increment, set } = props;
  return (
    <li className="item">
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
  );
}
