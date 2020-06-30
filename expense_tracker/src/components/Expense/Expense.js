import React, { Component } from "react";
import { Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import "./style.css";

class Expense extends Component {
  addExpense = () => {
    const { income, balance } = this.state;
    this.setState({
      income: income,
      balance: balance - 100,
    });
  };

  render() {
    const { title, balance } = this.props;
    return (
      <>
        <div className="shadow p-3 bg-warning">
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
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </div>
      </>
    );
  }
}

export default Expense;
