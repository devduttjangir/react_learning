import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

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
      <>
        <div className="shadow p-4 bg-success">
          {title} - {description}
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
