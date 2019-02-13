import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input } from 'reactstrap';

const ForexBaseInput = ({ value, onInputChange }) => (
  <div className="header">
    <Row>
      <Col>
        <p>
          <em>USD - United States Dollars</em>
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3>USD</h3>
      </Col>
      <Col>
        <Input
          id="baseValueInput"
          type="number"
          name="baseValue"
          step="any"
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
