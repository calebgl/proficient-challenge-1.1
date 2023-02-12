import { useStore } from "~/hooks/useStore";

export default function StoreFooter() {
  const { clear } = useStore();
  return (
    <footer className="store-buttons">
      <button className="btn clear" onClick={clear}>
        Clear
      </button>
      <button className="btn">Calculate</button>
    </footer>
  );
}
