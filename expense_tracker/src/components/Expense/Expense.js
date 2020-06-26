import React, { Component } from "react";
import "./style.css";

class Expense extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <div className="expense-container">
        {title} - {description}
      </div>
    );
  }
}

export default Expense;
