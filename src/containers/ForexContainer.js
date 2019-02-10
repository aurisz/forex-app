import React, { Component } from 'react';
import { Container } from 'reactstrap';

import ForexBaseInput from '../components/ForexBaseInput';
import ForexAddCurrency from '../components/ForexAddCurrency';
import ForexDisplayList from '../components/ForexDisplayList';

import { formatCurrencyOptions } from '../utils';

class ForexContainer extends Component {
  state = {
    error: null,
    isLoaded: false,
    baseValue: 10.0,
    currencyRates: {},
    currencyDisplays: ['IDR', 'EUR', 'GBP', 'SGD'],
    selectedNewCurrency: '',
    isAddMoreCurrency: false
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

    // special case for base value input
    let inputValue = value;
    if (name === 'baseValue') {
      inputValue = parseFloat(value) || '';
    }

    this.setState({ [name]: inputValue });
  };

  handleClickAddMoreCurrency = () => {
    this.setState({ isAddMoreCurrency: true });
  };

  handleAddCurrency = () => {
    const { currencyDisplays, selectedNewCurrency } = this.state;

    this.setState({
      currencyDisplays: [...currencyDisplays, selectedNewCurrency],
      selectedNewCurrency: '',
      isAddMoreCurrency: false
    });
  };

  handleDeleteCurrency = deletedCurrency => {
    const { currencyDisplays } = this.state;

    // remove deleted currency from displayed currency state
    const filteredCurrency = currencyDisplays.filter(
      v => v !== deletedCurrency
    );

    this.setState({
      currencyDisplays: filteredCurrency
    });
  };

  render() {
    const {
      error,
      isLoaded,
      baseValue,
      currencyRates,
      currencyDisplays,
      selectedNewCurrency,
      isAddMoreCurrency
    } = this.state;

    return (
      <Container>
        <ForexBaseInput
          value={baseValue}
          onInputChange={this.handleInputChange}
        />

        <ForexDisplayList
          error={error}
          isLoaded={isLoaded}
          baseValue={baseValue}
          currencies={currencyDisplays}
          rates={currencyRates}
          handleDeleteCurrency={this.handleDeleteCurrency}
        />

        <ForexAddCurrency
          options={formatCurrencyOptions(currencyRates, currencyDisplays)}
          value={selectedNewCurrency}
          isAddMoreCurrency={isAddMoreCurrency}
          onInputChange={this.handleInputChange}
          onSubmitAddCurrency={this.handleAddCurrency}
          onClickAddMoreCurrency={this.handleClickAddMoreCurrency}
        />
      </Container>
    );
  }
}

export default ForexContainer;
