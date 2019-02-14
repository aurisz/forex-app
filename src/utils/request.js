import axios from 'axios';

export const getCurrencyRates = () => {
  return axios.get('https://api.exchangeratesapi.io/latest?base=USD');
};

export const getCurrencyNames = () => {
  return axios.get('https://openexchangerates.org/api/currencies.json');
};
