import React, { Component } from "react";
import "./style.css";

class Income extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };

  render() {
    // destructing
    const { title, description } = this.props;
    const { count } = this.state;
    return (
      <div>
        <div className="income-container">
          {title} - {description}
        </div>
        <div className="counterStyle">
          {count} <b onClick={this.increment}>Increment</b>
        </div>
      </div>
    );
  }
}

export default Income;
