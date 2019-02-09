import React, { Component, Fragment } from 'react';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

class CurrencyAdd extends Component {
  render() {
    const { options, value, onInputChange, onAddCurrency } = this.props;

    return (
      <Fragment>
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
            <Button onClick={onAddCurrency}>Submit</Button>
          </InputGroupAddon>
        </InputGroup>
      </Fragment>
    );
  }
}

export default CurrencyAdd;
