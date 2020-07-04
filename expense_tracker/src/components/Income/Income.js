import React, { Component } from "react";
import { Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import FinanceItem from "../Finance/FinanceItem";
import AddAmount from "../AddAmount";

import "./style.css";

class Income extends Component {
  constructor(props) {
    super(props);
    this.state = { incomeItems: [], showModal: false };
  }

  componentDidMount() {
    console.log("income mounted");
    window.document.title = "clicked " + this.state.incomeItems.length;
  }

  componentDidUpdate() {
    window.document.title = "clicked " + this.state.incomeItems.length;
  }

  static getDerivedStateFromProps(props, state) {
    console.log("----------getDerivedStateFromProps--------");
    console.log(props);
    console.log(state);
    console.log("----------getDerivedStateFromProps--------");
  }

  addIncome = () => {
    this.setState({
      showModal: true,
    });
    // const { updateIncome } = this.props;
    // const { incomeItems } = this.state;
    // // add new income in income array
    // incomeItems.push({ income: 100 });
    // this.setState({
    //   incomeItems: incomeItems,
    // });
    // updateIncome(100);
  };

  renderIncomeItems = () => {
    const { incomeItems } = this.state;
    // const currentDate = new Date().toDateString();
    return incomeItems.map((item) => {
      return (
        <ListGroup.Item>
          <FinanceItem title="New Income added" />
        </ListGroup.Item>
      );
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };
  render() {
    // destructing
    const { title, balance } = this.props;
    const { showModal } = this.state;
    console.log("income render called");
    return (
      <>
        <AddAmount showModal={showModal} handleClose={this.handleClose} />
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
