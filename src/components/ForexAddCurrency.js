import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

const ForexAddCurrency = ({
  options,
  value,
  onInputChange,
  onSubmitAddCurrency,
  onClickAddMoreCurrency,
  isAddMoreCurrency
}) => (
  <div className="forex-add-currency">
    {isAddMoreCurrency ? (
      <InputGroup>
        <Input
          type="select"
          name="selectedNewCurrency"
          value={value}
          onChange={onInputChange}
        >
          <option value="">Select Currency!</option>
          {options.map(curr => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </Input>
        <InputGroupAddon addonType="append">
          <Button
            color="primary"
            onClick={onSubmitAddCurrency}
            disabled={value === ''}
          >
            Submit
          </Button>
        </InputGroupAddon>
      </InputGroup>
    ) : (
      <Button color="info" block onClick={onClickAddMoreCurrency}>
        (+) Add More Currencies
      </Button>
    )}
  </div>
);

ForexAddCurrency.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmitAddCurrency: PropTypes.func.isRequired,
  onClickAddMoreCurrency: PropTypes.func.isRequired,
  isAddMoreCurrency: PropTypes.bool
};

PropTypes.defaultProps = {
  isAddMoreCurrency: false
};

export default ForexAddCurrency;
