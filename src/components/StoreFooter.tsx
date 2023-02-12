type Props = {
  clear(): void;
};
export default function StoreFooter(props: Props) {
  const { clear } = props;
  return (
    <footer className="store-buttons">
      <button className="btn clear" onClick={clear}>
        Clear
      </button>
      <button className="btn">Calculate</button>
    </footer>
  );
}
