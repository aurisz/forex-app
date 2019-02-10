import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input } from 'reactstrap';

const ForexBaseInput = ({ value, onInputChange }) => (
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
          step="any"
          min="0"
          value={value}
          onChange={onInputChange}
          placeholder="Enter Base Currency Value Here"
        />
      </Col>
    </Row>
  </div>
);

ForexBaseInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default ForexBaseInput;
