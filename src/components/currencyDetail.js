import React from 'react';
import { Card, CardBody, Row, Col, Button } from 'reactstrap';

import { getExchangeRates, currencyFormatter } from '../utils';

const CurrencyDetail = ({
  currency,
  usdValue,
  value,
  handleDeleteCurrency
}) => {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col sm={10}>
            <Row>
              <Col>
                <h4>{currency}</h4>
              </Col>
              <Col>
                <p>{getExchangeRates(usdValue, value)}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  1 USD = {currency} {currencyFormatter(value)}
                </p>
              </Col>
            </Row>
          </Col>
          <Col sm={2}>
            <Button onClick={() => handleDeleteCurrency(currency)}>
              Delete
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default CurrencyDetail;
