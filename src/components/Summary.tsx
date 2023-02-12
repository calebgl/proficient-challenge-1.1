import { useStore } from "~/hooks/useStore";
import { formatCurrency, formatNumber } from "~/utils";

export default function Summary() {
  const { summary } = useStore();
  return (
    <section className="summary">
      <header>
        <h2>Summary</h2>
      </header>
      <div className="details">
        <div className="row">
          <div>Total Items</div>
          <div>{formatNumber(summary.totalItems)}</div>
        </div>
        <div className="row">
          <div>
            Total M<sup>2</sup>
          </div>
          <div>{formatNumber(summary.totalM2)}</div>
        </div>
        <div className="row">
          <div>Subtotal</div>
          <div>{formatCurrency(summary.subtotal)}</div>
        </div>
        <div className="row">
          <div>Tax</div>
          <div>{formatCurrency(summary.tax)}</div>
        </div>
        <div className="row total-price">
          <div>Total</div>
          <div>{formatCurrency(summary.total)}</div>
        </div>
        <div className="row total-price">
          <div>Due Today 50%</div>
          <div>{formatCurrency(summary.dueToday)}</div>
        </div>
      </div>
    </section>
  );
}
