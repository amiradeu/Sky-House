import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand href="/signup">Sky House</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav>
            <Nav.Link href="/map">Map</Nav.Link>
            <Nav.Link href="/houses">Houses</Nav.Link>
            <Nav.Link href="/owners">Owners</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
