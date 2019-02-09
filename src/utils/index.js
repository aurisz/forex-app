export const formatCurrencyOptions = (curr = {}, selectedArray = []) => {
  const currencyArray = getCurrencyNames(curr);

  return filterArray(currencyArray, selectedArray);
};

export const getCurrencyNames = (curr = {}) => {
  return Object.keys(curr);
};

export const getExchangeRates = (usd, target) => {
  const converted = usd * target;

  return currencyFormatter(converted);
};

export const currencyFormatter = currency => {
  return Number(currency.toFixed(4)).toLocaleString();
};

export const filterArray = (source, target) => {
  const filtered = source.filter(v => !target.includes(v));

  return filtered;
};
