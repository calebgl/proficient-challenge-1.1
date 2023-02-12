import { ChangeEvent } from "react";
import { useStore } from "~/hooks/useStore";
import { Item } from "~/types";

type Props = {
  item: Item;
};
export function StoreItem(props: Props) {
  const { item } = props;
  const { decrement, increment, set } = useStore();

  function handleIncrement() {
    increment(item.id);
  }

  function handleDecrement() {
    decrement(item.id);
  }

  function handleSet(event: ChangeEvent<HTMLInputElement>) {
    const quantity = Number(event.currentTarget.value);

    if (isNaN(quantity)) {
      return;
    }

    set(item.id, quantity);
  }

  return (
    <li className="item">
      <div className="item-icon">{item.name}</div>
      <div className="item-inputs">
        <button onClick={handleDecrement}>−</button>
        <input
          type="text"
          inputMode="numeric"
          aria-label={`quantity of item ${item.id}`}
          value={item.quantity}
          onChange={handleSet}
        />
        <button onClick={handleIncrement}>+</button>
      </div>
    </li>
  );
}
