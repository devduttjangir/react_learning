import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import "./style.css";

class Expense extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <>
        <div className="shadow p-4 bg-warning">
          {title} - {description}
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
