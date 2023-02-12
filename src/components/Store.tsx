import { ChangeEvent, useContext } from "react";
import { StoreContext } from "./StoreContext";
import StoreFooter from "./StoreFooter";
import StoreHeader from "./StoreHeader";
import { StoreItem } from "./StoreItem";

export default function Store() {
  const { storeState, clearStore } = useContext(StoreContext);
  const { items } = storeState;
  return (
    <section className="store">
      <StoreHeader />
      <ul className="store-items">
        {items.map((item) => (
          <StoreItem key={item.id} item={item} />
        ))}
      </ul>
      <StoreFooter clear={clearStore} />
    </section>
  );
}
