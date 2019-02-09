import React, { Component } from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import CurrencyInput from './components/CurrencyInput';
import CurrencyAdd from './components/CurrencyAdd';
import CurrencyDetail from './components/currencyDetail';

import { formatCurrencyOptions } from './utils';

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    usdValue: 10,
    currencyRates: {},
    currencyList: ['IDR', 'EUR', 'GBP', 'SGD'],
    selectedNewCurrency: ''
  };

  componentDidMount() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            currencyRates: result.rates
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleInputChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleAddCurrency = () => {
    const { currencyList, selectedNewCurrency } = this.state;

    this.setState({
      currencyList: [...currencyList, selectedNewCurrency],
      selectedNewCurrency: ''
    });
  };

  handleDeleteCurrency = deletedCurrency => {
    const { currencyList } = this.state;

    const filteredCurrency = currencyList.filter(v => v !== deletedCurrency);

    this.setState({
      currencyList: filteredCurrency
    });
  };

  render() {
    const {
      error,
      isLoaded,
      usdValue,
      currencyRates,
      currencyList,
      selectedNewCurrency
    } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container>
          <CurrencyInput value={usdValue} onChange={this.handleInputChange} />

          <hr />

          {currencyList.map(currency => (
            <CurrencyDetail
              key={currency}
              usdValue={usdValue}
              currency={currency}
              value={currencyRates[currency]}
              handleDeleteCurrency={this.handleDeleteCurrency}
            />
          ))}

          <br />

          <CurrencyAdd
            options={formatCurrencyOptions(currencyRates, currencyList)}
            value={selectedNewCurrency}
            onInputChange={this.handleInputChange}
            onAddCurrency={this.handleAddCurrency}
          />
        </Container>
      );
    }
  }
}

export default App;
