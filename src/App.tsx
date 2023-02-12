import StoreProvider from "./components/StoreProvider";
import Store from "./components/Store";
import Summary from "./components/Summary";
import "./App.css";

export default function App() {
  return (
    <main className="App">
      <StoreProvider>
        <Store />
        <Summary />
      </StoreProvider>
    </main>
  );
}
