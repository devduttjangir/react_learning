import React, { Component } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./style.css";

class Expense extends Component {
  render() {
    const { title, balance } = this.props;
    return (
      <>
        <div className="shadow p-4 bg-warning">
          <Container>
            <Row>
              <Col>{title}</Col>
              <Col className="text-right font-weight-bold text-dark">
                {balance}
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
