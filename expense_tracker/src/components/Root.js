import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Income from "./Income/Income";
import Expense from "./Expense/Expense";

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      income: 1000,
      balance: 1000,
    };
  }

  updateBalance = (value) => {
    const { balance, income } = this.state;
    if (value < 0) {
      this.setState({ ...this.state, balance: balance + value });
    } else {
      this.setState({ income: income + value, balance: balance + value });
    }
  };

  render() {
    const { income, balance } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <div className="shadow p-2 my-2 bg-danger text-light">
              <Container>
                <Row>
                  <Col className="display-4">Expense Tracker </Col>
                  <Col className="text-right text-light">{balance}</Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Income
              title="Income"
              balance={income}
              updateBalance={this.updateBalance}
            />
          </Col>
          <Col>
            <Expense
              title="Expense"
              balance={income - balance}
              updateBalance={this.updateBalance}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Root;
