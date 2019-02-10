import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input } from 'reactstrap';

const ForexBaseInput = ({ value, onChange }) => (
  <div className="header">
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
          name="baseValue"
          value={value}
          onChange={onChange}
          placeholder="Enter Currency Value Here"
        />
      </Col>
    </Row>
  </div>
);

ForexBaseInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ForexBaseInput;
