interface CurrencyOptions {
  negative?: string;
  symbol?: boolean;
}

export const toIDR = (value: number, options: CurrencyOptions) => {
  const { symbol = false } = options;
  return new Intl.NumberFormat("id-ID", {
    style: symbol ? "currency" : "decimal",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const toUSD = (value: number, options: CurrencyOptions) => {
  const { symbol = false } = options;
  return new Intl.NumberFormat("en-US", {
    style: symbol ? "currency" : "decimal",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
