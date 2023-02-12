import { ChangeEvent } from "react";
import { Item } from "~/types";
import StoreFooter from "./StoreFooter";
import StoreHeader from "./StoreHeader";
import { StoreItem } from "./StoreItem";

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
      <StoreHeader />
      <ul className="store-items">
        {items.map((item) => (
          <StoreItem
            key={item.id}
            item={item}
            decrement={decrement}
            increment={increment}
            set={set}
          />
        ))}
      </ul>
      <StoreFooter clear={clear} />
    </section>
  );
}
