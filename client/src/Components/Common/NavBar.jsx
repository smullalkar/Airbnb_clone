import React, { Component } from "react";
import Login from "../Auth/Login";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { showLoginModal: false };
  }

  render() {
    // const {} = this.props;

    return (
      <div>
        <Navbar expand="lg" variant="light" bg="light">
          <Container></Container>
        </Navbar>

        <Navbar expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#">ICON</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <NavDropdown title="gloab" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Host Your Home</Nav.Link>
            <Nav.Link href="#">Host an Experience</Nav.Link>
            <Nav.Link href="#">Help</Nav.Link>
            <Nav.Link onClick={() => this.setState({ showLoginModal: true })}>
              Login
            </Nav.Link>
            <Nav.Link href="">SignUP</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        <Login show={this.state.showLoginModal} />
      </div>
    );
  }
}

export default NavBar;
