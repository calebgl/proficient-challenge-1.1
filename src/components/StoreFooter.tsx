import { useContext } from "react";
import { StoreContext } from "./StoreContext";

export default function StoreFooter() {
  const { clearStore } = useContext(StoreContext);
  return (
    <footer className="store-buttons">
      <button className="btn clear" onClick={clearStore}>
        Clear
      </button>
      <button className="btn">Calculate</button>
    </footer>
  );
}
