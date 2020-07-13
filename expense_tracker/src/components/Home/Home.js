import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

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
    return data.map((item, index) => {
      return (
        <Row>
          <Col>
            <Image src={item.urls["regular"]} rounded />
          </Col>
        </Row>
      );
    });
  };

  render() {
    return (
      <div>
        <div
          className="btn bg-primary mx-2"
          onClick={() => this.navigateToAbout()}
        >
          AboutUS
        </div>
        <Container>{this.renderPhotos()}</Container>
      </div>
    );
  }
}
// HOC (High Order Component)
export default withRouter(Home);
