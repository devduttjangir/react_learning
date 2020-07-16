import { Image, Modal } from "react-bootstrap";
import React, { Component } from "react";

export default class ViewPhoto extends Component {
  render() {
    const { showModal, handleClose, title, imageURL } = this.props;
    return (
      <Modal size="lg" show={showModal} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={imageURL} width="100%" />
        </Modal.Body>
      </Modal>
    );
  }
}
