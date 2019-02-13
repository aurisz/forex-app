import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Row, Col, Button } from 'reactstrap';

import { getExchangeRates, currencyFormatter } from '../utils';

const ForexDisplayCard = ({
  currency,
  currencyName,
  baseValue,
  exchangeValue,
  onDeleteCurrency
}) => (
  <Card className="forex-card">
    <Row>
      <Col sm={11} xs={9} className="forex-column-left">
        <CardBody>
          <Row>
            <Col>
              <h4>{currency}</h4>
            </Col>
            <Col>
              <h4 className="exchange-value">
                {getExchangeRates(baseValue, exchangeValue)}
              </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>
                <em>
                  {currency} - {currencyName}
                </em>
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <span>
                1 USD = {currency} {currencyFormatter(exchangeValue)}
              </span>
            </Col>
          </Row>
        </CardBody>
      </Col>

      <Col sm={1} xs={3} className="forex-column-right">
        <Button
          id="deleteCurrency"
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
  </Card>
);

ForexDisplayCard.propTypes = {
  currency: PropTypes.string.isRequired,
  currencyName: PropTypes.string.isRequired,
  baseValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  exchangeValue: PropTypes.number.isRequired,
  onDeleteCurrency: PropTypes.func.isRequired
};

export default ForexDisplayCard;
