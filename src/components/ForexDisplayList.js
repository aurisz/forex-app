import React from 'react';
import PropTypes from 'prop-types';

import ForexDisplayCard from './ForexDisplayCard';

const ForexDisplayList = ({
  error,
  isLoaded,
  currencies,
  rates,
  baseValue,
  handleDeleteCurrency
}) => {
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="forex-display-list">
      {currencies.map(currency => (
        <ForexDisplayCard
          key={currency}
          baseValue={baseValue}
          currency={currency}
          exchangeValue={rates[currency]}
          onDeleteCurrency={handleDeleteCurrency}
        />
      ))}
    </div>
  );
};

ForexDisplayList.propTypes = {
  isLoaded: PropTypes.bool,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  baseValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  rates: PropTypes.objectOf(PropTypes.number).isRequired,
  handleDeleteCurrency: PropTypes.func.isRequired
};

ForexDisplayList.defaultProps = {
  isLoaded: false
};

export default ForexDisplayList;
