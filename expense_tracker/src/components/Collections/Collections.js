import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = { collections: [], record: {} };
  }

  renderCollections = () => {
    const { collections } = this.state;
    return collections.map((collection) => {
      const { title, description, thumbnail, username } = collection;
      return (
        <Col className="col-4 d-flex flex-grow-1 p-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={thumbnail} height={"200px"} />
            <Card.Header>{title}</Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle>{username}</Card.Subtitle>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="#">View Collection</Card.Link>
            </Card.Footer>
          </Card>
        </Col>
      );
    });
  };

  filterCollections = (data) => {
    const filterCollection = data.map((item) => {
      return {
        title: item.title,
        description: item.description,
        thumbnail: item.cover_photo.urls.small,
        username: item.cover_photo.user.name,
      };
    });
    this.setState({
      collections: filterCollection,
    });
  };

  getCollections = () => {
    const URL =
      "https://api.unsplash.com/collections/?per_page=10&client_id=M_Z2h_9jkKhv_ECTqs8hY3BmOSwZZYovtqJtd-A_J7k";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => this.filterCollections(data));
  };

  componentDidMount() {
    this.getCollections();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>Collections</h3>
          </Col>
        </Row>
        <Row>{this.renderCollections()}</Row>
      </Container>
    );
  }
}
