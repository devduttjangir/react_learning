import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Income from "./Income/Income";
import Expense from "./Expense/Expense";
import TimeTable from "./TimeTable/TimeTable";
import Counter from "./Counter/Count";
import AddAmount from "./AddAmount";

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      income: 1000,
      balance: 1000,
      expense: 0,
    };
  }

  updateIncome = (value) => {
    let { income, balance } = this.state;
    income = income + value;
    balance = balance + value;
    this.setState({
      ...this.state,
      income: income,
      balance: balance,
    });
  };

  updateExpense = (value) => {
    let { expense, balance } = this.state;
    expense = expense + value;
    balance = balance - value;
    this.setState({
      ...this.state,
      expense: expense,
      balance: balance,
    });
  };

  calculatePercentage = () => {
    const { income, balance } = this.state;
    let percentage = (balance * 100) / income;
    return percentage;
  };

  expenseBGStyle = () => {
    let percentage = this.calculatePercentage();
    if (percentage > 80) {
      return "bg-success";
    } else if (percentage > 55) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  };

  render() {
    const { income, balance, expense } = this.state;

    const expenseStyle = "shadow p-2 my-2 text-light " + this.expenseBGStyle();
    return (
      <Container>
        <Row>
          <Col>{/* <AddAmount /> */}</Col>
        </Row>
        <Row>
          <Col>
            <div className={expenseStyle}>
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
              updateIncome={this.updateIncome}
            />
          </Col>
          <Col>
            <Expense
              title="Expense"
              balance={expense}
              updateExpense={this.updateExpense}
            />
          </Col>
        </Row>
        <Row className="py-3">
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <TimeTable />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Root;
