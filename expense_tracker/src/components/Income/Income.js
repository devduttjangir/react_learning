import React, { Component } from "react";
import { Button, Container, Row, Col, ListGroup } from "react-bootstrap";

import "./style.css";

class Income extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  addIncome = () => {
    const { income, balance } = this.state;
    this.setState({
      income: income + 100,
      balance: balance + 100,
    });
  };

  increment = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };

  render() {
    // destructing
    const { title, balance } = this.props;
    const { count } = this.state;
    return (
      <>
        <div className="shadow p-4 bg-success">
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
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}

export default Income;
