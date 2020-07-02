import React, { Component } from "react";
import { Alert, Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import "./style.css";

class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseItems: [],
      showAlert: false,
    };
  }

  addExpense = () => {
    const { updateExpense } = this.props;
    const { expenseItems } = this.state;
    expenseItems.push({
      expenseTitle: "New Expense Created " + new Date().toDateString(),
    });
    this.setState({
      expenseItems: expenseItems,
      // showAlert: true,
    });
    updateExpense(100);
  };

  renderExpenses = () => {
    const { expenseItems } = this.state;
    return expenseItems.map((item) => {
      return <ListGroup.Item>{item.expenseTitle}</ListGroup.Item>;
    });
  };

  hideAlert = () => {
    this.setState({
      ...this.state,
      showAlert: false,
    });
  };
  render() {
    const { title, balance } = this.props;
    const { showAlert } = this.state;
    return (
      <>
        <div className="shadow p-3 bg-warning">
          {showAlert && (
            <Alert
              key={1}
              variant={"primary"}
              onClose={() => this.hideAlert()}
              dismissible
            >
              This is a alert—check it out!
            </Alert>
          )}
          <Container>
            <Row>
              <Col className="align-middle">{title}</Col>
              <Col className="text-right font-weight-bold text-dark">
                {balance}
              </Col>
              <Col className="d-flex justify-content-end">
                <Button
                  className="font-weight-bold mx-1 border border-danger"
                  variant="warning"
                  onClick={this.addExpense}
                >
                  -
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <ListGroup>{this.renderExpenses()}</ListGroup>
        </div>
      </>
    );
  }
}

export default Expense;
