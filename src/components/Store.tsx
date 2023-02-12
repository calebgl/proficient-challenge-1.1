import { useStore } from "~/hooks/useStore";
import StoreFooter from "./StoreFooter";
import StoreHeader from "./StoreHeader";
import { StoreItem } from "./StoreItem";

export default function Store() {
  const { items } = useStore();
  return (
    <section className="store">
      <StoreHeader />
      <ul className="store-items">
        {items.map((item) => (
          <StoreItem key={item.id} item={item} />
        ))}
      </ul>
      <StoreFooter />
    </section>
  );
}
