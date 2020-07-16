import { Col, Container, Image, Row } from "react-bootstrap";
import React, { Component } from "react";

import ViewPhoto from "./ViewPhoto";
import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor() {
    super();
    this.state = { data: [], showModal: false, imageURL: "" };
  }

  filterCollections = (data) => {
    this.setState({
      data: data,
    });
  };

  getCollectionDetails = () => {
    const id = this.props.match.params.collectionId;
    const URL =
      "https://api.unsplash.com/collections/" +
      id +
      "/photos?client_id=M_Z2h_9jkKhv_ECTqs8hY3BmOSwZZYovtqJtd-A_J7k";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => this.filterCollections(data));
  };

  componentDidMount() {
    this.getCollectionDetails();
  }
  handleViewImage = (event) => {
    this.setState({
      showModal: true,
      imageURL: event.target.name,
    });
  };
  renderPhotos = () => {
    const { data } = this.state;
    return data.map((item) => {
      return (
        <Col className="col-4 p-1">
          <Image
            src={item.urls.regular}
            width="100%"
            name={item.urls.regular}
            onClick={(event) => this.handleViewImage(event)}
          />
        </Col>
      );
    });
  };
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { showModal, imageURL } = this.state;
    return (
      <Container>
        <ViewPhoto
          showModal={showModal}
          imageURL={imageURL}
          handleClose={this.handleClose}
          title={"Image View"}
        />
        <Row>{this.renderPhotos()}</Row>
      </Container>
    );
  }
}
export default withRouter(Details);
