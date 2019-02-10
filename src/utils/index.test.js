import {
  currencyFormatter,
  getCurrencyNames,
  filterCurrencies,
  formatCurrencyOptions,
  getExchangeRates
} from './index';

const ratesExample = {
  IDR: 13965.0008813679,
  EUR: 0.881367883,
  GBP: 0.7711087608,
  SGD: 1.3551912568
};
const selectedCurrencyExample = ['IDR', 'GBP'];
const selectedCurrencyExample2 = [];
const selectedCurrencyExample3 = ['IDR', 'EUR', 'GBP', 'SGD'];

test('if currency >= 100 should have 2 fraction digits', () => {
  expect(currencyFormatter(ratesExample.IDR)).toBe('13,965.00');
});

test('if currency < 100 should have 4 fraction digits', () => {
  expect(currencyFormatter(ratesExample.EUR)).toBe('0.8814');
  expect(currencyFormatter(ratesExample.GBP)).toBe('0.7711');
  expect(currencyFormatter(ratesExample.SGD)).toBe('1.3552');
});

test('currency rates object to currency names should be array', () => {
  expect(getCurrencyNames(ratesExample)).toEqual(['IDR', 'EUR', 'GBP', 'SGD']);
  expect(getCurrencyNames({})).toEqual([]);
});

test('filter currencies should be array', () => {
  const sourceArray = getCurrencyNames(ratesExample);

  expect(filterCurrencies(sourceArray, selectedCurrencyExample)).toEqual([
    'EUR',
    'SGD'
  ]);
  expect(filterCurrencies(sourceArray, selectedCurrencyExample2)).toEqual(
    selectedCurrencyExample3
  );
  expect(filterCurrencies(sourceArray, selectedCurrencyExample3)).toEqual([]);
});

test('format currency options should be array', () => {
  expect(formatCurrencyOptions(ratesExample, selectedCurrencyExample)).toEqual([
    'EUR',
    'SGD'
  ]);
  expect(formatCurrencyOptions(ratesExample, selectedCurrencyExample2)).toEqual(
    selectedCurrencyExample3
  );
  expect(formatCurrencyOptions(ratesExample, selectedCurrencyExample3)).toEqual(
    []
  );
});

test('exchange rates should accept integer', () => {
  expect(getExchangeRates(10, ratesExample.IDR)).toEqual('139,650.01');
});

test('exchange rates base value should accept float', () => {
  expect(getExchangeRates(0.5, ratesExample.EUR)).toEqual('0.4407');
});

test('if base value is empty string should return 0', () => {
  expect(getExchangeRates('', ratesExample.GBP)).toEqual('0.00');
});

test('if base value is 0 string should return 0', () => {
  expect(getExchangeRates(0, ratesExample.SGD)).toEqual('0.00');
});
