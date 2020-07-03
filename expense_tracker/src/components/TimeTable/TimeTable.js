import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

class TimeTable extends Component {
  constructor() {
    super();
    this.state = {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    };
  }

  renderDays = () => {
    return this.state.days.map((day) => {
      return (
        <Row>
          <Col className="period border border-primary col-1">{day}</Col>
          <Col>
            <Container>
              <Row>
                <Col className="period border border-primary"></Col>
                <Col className="period border border-primary"></Col>
                <Col className="period border border-primary"></Col>
                <Col className="period border border-primary"></Col>
                <Col className="period border border-primary"></Col>
                <Col className="period border border-primary"></Col>
                <Col className="period border border-primary"></Col>
                <Col className="period border border-primary"></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      );
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col className="period col-1"></Col>
          <Col>
            <Container>
              <Row>
                <Col>1st Period</Col>
                <Col>2nd Period</Col>
                <Col>3rd Period</Col>
                <Col>4th Period</Col>
                <Col>5th Period</Col>
                <Col>6th Period</Col>
                <Col>7th Period</Col>
                <Col>8th Period</Col>
              </Row>
            </Container>
          </Col>
        </Row>
        {this.renderDays()}
      </Container>
    );
  }
}

export default TimeTable;
