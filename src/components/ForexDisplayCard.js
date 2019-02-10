import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Row, Col, Button } from 'reactstrap';

import { getExchangeRates, currencyFormatter } from '../utils';

const ForexDisplayCard = ({
  currency,
  baseValue,
  exchangeValue,
  onDeleteCurrency
}) => (
  <Card className="forex-card">
    <CardBody>
      <Row>
        <Col sm={10} className="forex-column-left">
          <Row>
            <Col>
              <h4>{currency}</h4>
            </Col>
            <Col>
              <p className="exchange-value">
                {getExchangeRates(baseValue, exchangeValue)}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                1 USD = {currency} {currencyFormatter(exchangeValue)}
              </p>
            </Col>
          </Row>
        </Col>

        <Col sm={2} className="forex-column-right">
          <Button
            className="btn-delete-currency"
            color="default"
            block
            onClick={() => onDeleteCurrency(currency)}
            title="Delete Currency"
          >
            <span>(-)</span>
          </Button>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

ForexDisplayCard.propTypes = {
  currency: PropTypes.string.isRequired,
  baseValue: PropTypes.number.isRequired,
  exchangeValue: PropTypes.number.isRequired,
  onDeleteCurrency: PropTypes.func.isRequired
};

export default ForexDisplayCard;
