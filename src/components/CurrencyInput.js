import React, { Fragment } from 'react';
import { Row, Col, Input } from 'reactstrap';

const CurrencyInput = ({ value, onChange }) => (
  <Fragment>
    <Row>
      <Col>
        <p>USD - United States Dollars</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>USD</h4>
      </Col>
      <Col>
        <Input
          type="number"
          name="usdValue"
          value={value}
          onChange={onChange}
          placeholder="Enter Currency Value Here"
        />
      </Col>
    </Row>
  </Fragment>
);

export default CurrencyInput;
