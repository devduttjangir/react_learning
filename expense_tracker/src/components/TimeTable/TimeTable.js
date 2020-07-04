import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Period from "./Period";
import "./style.css";

class TimeTable extends Component {
  constructor() {
    super();
    this.state = {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      periods: [
        "1st Period",
        "2nd Period",
        "3rd Period",
        "4th Period",
        "5th Period",
        "6th Period",
        "7th Period",
        "8th Period",
      ],
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

  renderPeriods = () => {
    const { periods } = this.state;
    return periods.map((period, index) => {
      return (
        <Col className="p-0">
          <Period>
            {index % 2 === 0 ? (
              <div className="bg-danger py-2 px-3 mx-1">{period}</div>
            ) : (
              <div className="bg-warning py-2 px-3 mx-1">{period}</div>
            )}
          </Period>
        </Col>
      );
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col className="period col-1"></Col>
          <Col>
            <Container fluid>
              <Row>{this.renderPeriods()}</Row>
            </Container>
          </Col>
        </Row>
        {this.renderDays()}
      </Container>
    );
  }
}

export default TimeTable;
