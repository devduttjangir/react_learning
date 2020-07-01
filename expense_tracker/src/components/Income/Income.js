import React, { Component } from "react";
import { Button, Container, Row, Col, ListGroup } from "react-bootstrap";

import "./style.css";

class Income extends Component {
  constructor(props) {
    super(props);
    this.state = { incomeItems: [] };
  }

  addIncome = () => {
    const { updateBalance } = this.props;
    const { incomeItems } = this.state;
    // add new income in income array
    incomeItems.push({ income: 100 });
    this.setState({
      incomeItems: incomeItems,
    });
    updateBalance(100);
  };

  renderIncomeItems = () => {
    const { incomeItems } = this.state;
    const currentDate = new Date().toDateString();
    return incomeItems.map((item) => {
      return (
        <ListGroup.Item>
          New Income Added - {item.income} {currentDate}
        </ListGroup.Item>
      );
    });
  };

  render() {
    // destructing
    const { title, balance } = this.props;

    return (
      <>
        <div className="shadow p-3 bg-success">
          <Container>
            <Row>
              <Col>{title}</Col>
              <Col className="text-right font-weight-bold text-light">
                {balance}
              </Col>
              <Col className="d-flex justify-content-end">
                <Button
                  className="font-weight-bold mx-1  border border-light"
                  variant="success"
                  onClick={this.addIncome}
                >
                  +
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <ListGroup>{this.renderIncomeItems()}</ListGroup>
      </>
    );
  }
}

export default Income;
