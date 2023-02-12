import { useContext } from "react";
import { Item } from "~/types";
import { StoreContext } from "./StoreContext";

type Props = {
  item: Item;
};
export function StoreItem(props: Props) {
  const { item } = props;
  const { decrementItem, incrementItem, setItem } = useContext(StoreContext);
  return (
    <li className="item">
      <div className="item-icon">{item.name}</div>
      <div className="item-inputs">
        <button onClick={() => decrementItem(item.id)}>−</button>
        <input
          type="text"
          value={item.quantity}
          onChange={(event) =>
            setItem(item.id, Number(event.currentTarget.value))
          }
        />
        <button onClick={() => incrementItem(item.id)}>+</button>
      </div>
    </li>
  );
}
