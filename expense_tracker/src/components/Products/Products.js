import { Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";

const Products = () => {
  // this.state = { counter: 0 };
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const handleClick = () => {
    // this.setState({ counter: 1 });
    setCounter(counter + 1);
  };

  const handleUpdateName = () => {
    // this.setState({ counter: 1 });
    setName("React Hooks" + counter);
  };

  return (
    <Container>
      <Row>
        <Col onClick={() => handleClick()}>
          <span className="bg-danger p-2 px-3 text-white">Click Here</span>
        </Col>
        <Col>
          <span className="bg-warning p-2 px-3">{counter}</span>
        </Col>
        <Col onClick={() => handleUpdateName()}>
          <span className="bg-danger p-2 px-3 text-white">Update Name</span>
        </Col>
        <Col>
          <span className="bg-warning p-2 px-3">{name}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
