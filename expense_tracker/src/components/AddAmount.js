import React, { Component } from "react";
import { Button, Container, Row, Col, Form, Modal } from "react-bootstrap";
export default class AddAmount extends Component {
  renderFormBody = () => {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" placeholder="Enter amount" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
  render() {
    const { showModal, handleClose } = this.props;
    return (
      <Modal show={showModal} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.renderFormBody()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
