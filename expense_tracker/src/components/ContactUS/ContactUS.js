import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class ContactUS extends Component {
  constructor() {
    super();
    this.state = {
      redirectHome: false,
      redirectProduct: false,
      redirectExpense: false,
    };
  }

  redirectToHome = () => {
    this.setState({
      redirectHome: true,
    });
  };

  redirectToExpense = () => {
    this.setState({
      redirectExpense: true,
    });
  };

  redirectToProduct = () => {
    this.setState({
      redirectProduct: true,
    });
  };

  render() {
    if (this.state.redirectHome) {
      return <Redirect to="/" />;
    }
    if (this.state.redirectProduct) {
      return <Redirect to="/product" />;
    }
    if (this.state.redirectExpense) {
      return <Redirect to="/expense" />;
    }
    return (
      <div>
        <a href="/">Home</a>
        <Button onClick={() => this.redirectToHome()}>Home</Button>
        <br />
        <Button onClick={() => this.redirectToExpense()}>Expense</Button>
        <br />
        <Button onClick={() => this.redirectToProduct()}>Product</Button>
      </div>
    );
  }
}
