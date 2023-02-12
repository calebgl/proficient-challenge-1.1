import { formatCurrency, formatNumber } from "~/utils";

type Props = {
  totalItems: number;
  totalM2: number;
  subtotal: number;
  tax: number;
  total: number;
  dueToday: number;
};

export default function Summary(props: Props) {
  const { totalItems, totalM2, subtotal, tax, total, dueToday } = props;
  return (
    <section className="summary">
      <header>
        <h2>Summary</h2>
      </header>
      <div className="details">
        <div className="row">
          <div>Total Items</div>
          <div>{formatNumber(totalItems)}</div>
        </div>
        <div className="row">
          <div>
            Total M<sup>2</sup>
          </div>
          <div>{formatNumber(totalM2)}</div>
        </div>
        <div className="row">
          <div>Subtotal</div>
          <div>{formatCurrency(subtotal)}</div>
        </div>
        <div className="row">
          <div>Tax</div>
          <div>{formatCurrency(tax)}</div>
        </div>
        <div className="row total-price">
          <div>Total</div>
          <div>{formatCurrency(total)}</div>
        </div>
        <div className="row total-price">
          <div>Due Today 50%</div>
          <div>{formatCurrency(dueToday)}</div>
        </div>
      </div>
    </section>
  );
}
