import React, { Component } from "react";
import { Button, Container, Row, Col, Form, Modal } from "react-bootstrap";
export default class AddAmount extends Component {
  constructor(props)
  {
    super(props);
  this.state={amount:0,description:" "};
  }
  renderFormBody = () => {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" placeholder="Enter amount" onChange={(event)=>this.setState({amount:event.target.value})} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" onChange={(event)=>this.setState({description:event.target.value})}/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
  render() {
    const { showModal, handleClose,handleAdd,title } = this.props;
    const {amount,description}=this.state;
   
    return (
      <Modal show={showModal} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.renderFormBody()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd(amount,description)}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
