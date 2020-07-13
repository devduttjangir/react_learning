import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "../Utility/constants";
import Header from "./Header/Header";
import Home from "./Home/Home";
import LoginPage from "./LoginPage/LoginPage";
import AboutUS from "./AboutUS/AboutUS";
import ContactUS from "./ContactUS/ContactUS";
import Products from "./Products/Products";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";

class Root extends React.Component {
  constructor() {
    super();
    this.state = { loggedIn: false, count: 0 };
  }

  // handleLoggedIn = () => {
  //   this.setState({
  //     loggedIn: true,
  //   });
  // };
  IncrementCounter = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };
  IncrementStorage = () => {
    let value = localStorage.getItem("storagecount");
    if (value) {
      value = parseInt(value) + 1;
    } else {
      value = 0;
    }
    localStorage.setItem("storagecount", value);

    return value;
  };
  getStorageValue = () => {
    let value = localStorage.getItem("storagecount");
    if (!value) {
      return 0;
    }
    return value;
  };

  renderLogin = () => {
    return (
      <div>
        <Button onClick={() => <LoginPage />}>Login</Button>
      </div>
    );
  };
  render() {
    const { count } = this.state;
    const storagecount = this.getStorageValue();
    console.log("root loaded");

    return (
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => this.IncrementCounter()}>
              add counter {count}
            </Button>
          </Col>
          <Col>
            <Button onClick={() => this.IncrementStorage()}>
              storage counter {storagecount}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Router>
              <Switch>
                <Route path={Routes.about}>
                  <AboutUS />
                </Route>
                <Route path={Routes.contact}>
                  <ContactUS />
                </Route>
                <Route path={Routes.product}>
                  {this.state.loggedIn ? <Products /> : this.renderLogin()}
                </Route>
                <Route path={Routes.expense}>
                  <ExpenseTracker />
                </Route>
                <Route path={Routes.login}>
                  <LoginPage />
                </Route>
                <Route path={Routes.home}>
                  <Home />
                </Route>
              </Switch>
            </Router>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Root;
