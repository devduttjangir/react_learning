import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutUS from "./AboutUS/AboutUS";
import Collections from "./Collections/Collections";
import ContactUS from "./ContactUS/ContactUS";
import Details from "./Collections/Details";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
import Header from "./Header/Header";
import Home from "./Home/Home";
import LoginPage from "./LoginPage/LoginPage";
import Products from "./Products/Products";
import React from "react";
import { Routes } from "../Utility/constants";
import ToDos from "./ToDos/ToDos";

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
                  <Products />
                </Route>
                <Route path={Routes.expense}>
                  <ExpenseTracker />
                </Route>
                <Route path={Routes.login}>
                  <LoginPage />
                </Route>
                <Route path={Routes.collectiondetails + "/:collectionId"}>
                  <Details />
                </Route>
                <Route path={Routes.collections}>
                  <Collections />
                </Route>
                <Route exact path={Routes.todos}>
                  <ToDos />
                </Route>

                <Route exact path={Routes.home}>
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
