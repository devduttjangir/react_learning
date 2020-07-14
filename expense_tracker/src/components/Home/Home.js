import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

class Home extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  navigateToAbout = () => {
    const { history } = this.props;
    history.push("/about");
  };
  componentDidMount() {
    fetch(
      "https://api.unsplash.com/photos/?client_id=M_Z2h_9jkKhv_ECTqs8hY3BmOSwZZYovtqJtd-A_J7k"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .catch((error) => console.error("eeeee" + error));
  }

  renderPhotos = () => {
    const { data } = this.state;
    return data.map((item) => {
      const username = item.user.name;
      const likes = item.likes;
      const thumbnail = item.urls.thumb;
      const description = item.description || item.alt_description;
      return (
        <Col className="col-4 py-1">
          <Card>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
              <Card.Title>{username}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <i class="fa fa-thumbs-up" aria-hidden="true"></i> {likes}
            </Card.Footer>
          </Card>
          {/* <Image src={item.urls["regular"]} rounded width="100%" /> */}
        </Col>
      );
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>{this.renderPhotos()}</Row>
        </Container>
      </div>
    );
  }
}
// HOC (High Order Component)
export default withRouter(Home);
