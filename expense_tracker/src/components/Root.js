import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";

import Home from "./Home/Home";
import AboutUS from "./AboutUS/AboutUS";
import ContactUS from "./ContactUS/ContactUS";
import Products from "./Products/Products";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";

class Root extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Router>
              <Switch>
                <Route path="/about">
                  <AboutUS />
                </Route>
                <Route path="/contact">
                  <ContactUS />
                </Route>
                <Route path="/product">
                  <Products />
                </Route>
                <Route path="/expense">
                  <ExpenseTracker />
                </Route>
                <Route path="/">
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
