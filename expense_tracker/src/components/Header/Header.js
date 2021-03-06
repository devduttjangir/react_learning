import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Routes} from "../../Utility/constants";
export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">React Router</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/expense">ExpenseTracker</Nav.Link>
           <Nav.Link href={Routes.collections}>Collections</Nav.Link>
           <Nav.Link href={Routes.todos}>ToDos</Nav.Link>
 
           <Nav.Link href="/login">Login</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
