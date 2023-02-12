export function formatNumber(
  value: number,
  locales: string | string[] = "en-US"
) {
  return Intl.NumberFormat(locales).format(value);
}

export function formatCurrency(
  value: number,
  locales: string | string[] = "en-US",
  currency: string = "USD"
) {
  return Intl.NumberFormat(locales, { style: "currency", currency }).format(
    value
  );
}
