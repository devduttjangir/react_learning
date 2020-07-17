import { Card, Col, Container, Image, Row } from "react-bootstrap";
import React, { Component } from "react";

export default class ToDos extends Component {
  constructor() {
    super();
    this.state = { todos: [] };
  }
  filterCollections = (data) => {
    const todo = data.map((item) => {
      return {
        url: item.url,
        description: item.description,
        avatar_url: item.owner.avatar_url,
        username: item.owner.login,
      };
    });
    this.setState({ todos: todo });
  };
  getCollections = () => {
    const URL = "https://api.github.com/gists/public";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => this.filterCollections(data));
  };

  renderCollections = () => {
    const { todos } = this.state;
    return todos.map((item) => {
      const { url, description, avatar_url, username } = item;
      return (
        // <Col className="col-4 d-flex flex-grow-1 p-2">
        //   <Card style={{ width: "18rem" }}>
        //     <Card.Img variant="top" src={avatar_url} height={"200px"} />

        //     <Card.Body>
        //       <Card.Title>{username}</Card.Title>
        //       <Card.Subtitle>{url}</Card.Subtitle>
        //       <Card.Text>{description}</Card.Text>
        //     </Card.Body>

        //   </Card>
        // </Col>
        <Col className="col-4 d-flex flex-grow-1">
          <Container className="m-1 border border-secondary rounded">
            <Row>
              <Col className="col-2 p-0">
                <Image src={avatar_url} width="100%" />
              </Col>
              <Col className="p-0">
                <Container>
                  <Row>
                    <Col className="font-weight-bold">{username}</Col>
                  </Row>
                  <Row>
                    <Col className="text-wrap font-weight-light">
                      {description}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-wrap font-weight-light ">
                      <a href={url}>Gist Link</a>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      );
    });
  };
  componentDidMount() {
    this.getCollections();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>ToDos</h3>
          </Col>
        </Row>
        <Row>{this.renderCollections()}</Row>
      </Container>
    );
  }
}
