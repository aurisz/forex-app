import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ForexDisplayCard from './ForexDisplayCard';

const ForexDisplayList = ({
  isLoaded,
  currencies,
  rates,
  baseValue,
  handleDeleteCurrency
}) => (
  <div className="forex-display-list">
    {isLoaded ? (
      <Fragment>
        {currencies.map(currency => (
          <ForexDisplayCard
            key={currency}
            baseValue={baseValue}
            currency={currency}
            exchangeValue={rates[currency]}
            onDeleteCurrency={handleDeleteCurrency}
          />
        ))}
      </Fragment>
    ) : (
      <div className="loading">Loading...</div>
    )}
  </div>
);

ForexDisplayList.propTypes = {
  isLoaded: PropTypes.bool,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  baseValue: PropTypes.number.isRequired,
  rates: PropTypes.objectOf(PropTypes.number).isRequired,
  handleDeleteCurrency: PropTypes.func.isRequired
};

ForexDisplayList.defaultProps = {
  isLoaded: false
};

export default ForexDisplayList;
