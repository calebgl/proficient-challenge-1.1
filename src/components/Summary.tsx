import { useContext } from "react";
import { Total } from "~/types";
import { formatCurrency, formatNumber } from "~/utils";
import { StoreContext } from "./StoreContext";

const INITIAL_TOTAL: Total = {
  totalItems: 0,
  totalM2: 0,
};

export default function Summary() {
  const { storeState } = useContext(StoreContext);
  const { items } = storeState;
  const { totalItems, totalM2 } = items.reduce<Total>(
    (acc, curr) => ({
      totalItems: acc.totalItems + curr.quantity,
      totalM2: acc.totalM2 + curr.quantity * curr.m2,
    }),
    INITIAL_TOTAL
  );
  const subtotal = 200 * totalM2;
  const tax = 0.16 * subtotal;
  const total = subtotal + tax;
  const dueToday = 0.5 * total;

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
