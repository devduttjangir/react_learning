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
  addIncome = () => {
    const { income, balance } = this.state;
    this.setState({
      income: income + 100,
      balance: balance + 100,
    });
  };

  addExpense = () => {
    const { income, balance } = this.state;
    this.setState({
      income: income,
      balance: balance - 100,
    });
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
                  <Col className="display-4">Expense Tracker {balance}</Col>
                  <Col className="text-right text-light">
                    <Button
                      className="font-weight-bold mx-1"
                      variant="success"
                      onClick={this.addIncome}
                    >
                      +
                    </Button>
                    <Button
                      className="font-weight-bold mx-1"
                      variant="warning"
                      onClick={this.addExpense}
                    >
                      -
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Income title="Income" balance={income} />
          </Col>
          <Col>
            <Expense title="Expense" balance={income - balance} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Root;
