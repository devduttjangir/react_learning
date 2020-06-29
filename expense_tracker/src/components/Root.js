import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Income from "./Income/Income";
import Expense from "./Expense/Expense";

class Root extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="shadow p-3 my-2 bg-danger display-4 text-light">
              Expense Tracker
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Income title="Income Title" description="description" />
          </Col>
          <Col>
            <Expense title="Expense Title" description="description" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Root;
