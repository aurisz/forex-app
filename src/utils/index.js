export const currencyFormatter = currency => {
  let maxDigits = 2;

  // check if value is below 2 digits
  if (Math.floor(currency) < 100) {
    maxDigits = 4;
  }

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: maxDigits
  }).format(currency);
};

// convert currencies object property into array of currencies name
export const getCurrencyNames = (currencies = {}) => Object.keys(currencies);

// function to remove selected currency from appearing in currencies dropdown
export const filterCurrencies = (source = [], target = []) => {
  const filtered = source.filter(v => !target.includes(v));

  return filtered;
};

export const formatCurrencyOptions = (curr = {}, selectedArray = []) => {
  const currencyArray = getCurrencyNames(curr);

  return filterCurrencies(currencyArray, selectedArray);
};

// calculate exchange rates
export const getExchangeRates = (base, exchange) => {
  const baseValue = base === '' ? 0 : base;
  const converted = baseValue * exchange;

  return currencyFormatter(converted);
};
