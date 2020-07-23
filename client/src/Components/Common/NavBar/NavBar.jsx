import React, { Component } from "react";
import Login from "../../Auth/Login/Login";
import { Navbar, DropdownButton, Dropdown, Nav } from "react-bootstrap";
import Signup from "../../Auth/SignUp/Signup";
import FinishSignup from "../../Auth/SignUp/FinishSignUp"



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { showLoginModal: false, showSignUpModal: false, showFinishSignUpModal: false };
  }

  handleLoginClose = () => this.setState({ showLoginModal: false });
  handleSignUpClose = () => this.setState({ showSignUpModal: false });
  handleFinishSignUpClose = () => this.setState({ showFinishSignUpModal: false });

  render() {
    // const {} = this.props;

    return (
      <div>
        <Navbar
          expand="lg"
          bg="light"
          variant="light"
          className="d-flex justify-content-between"
        >
          <Navbar.Brand href="#">

            <img src=".././assets/logo.svg" alt="Airbnb" />
          </Navbar.Brand>



          <DropdownButton
            alignRight
            title="Icon"
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item
              onClick={() => this.setState({ showLoginModal: true })}
            >
              Login
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.setState({ showSignUpModal: true })}
            >
              Sign Up
            </Dropdown.Item>

            <Dropdown.Item
              onClick={() => this.setState({ showFinishSignUpModal: true })}
            >
              Finish  Sign Up
            </Dropdown.Item>



            <Dropdown.Divider />
            <Dropdown.Item>Host Your Home</Dropdown.Item>
            <Dropdown.Item>Host an Experience</Dropdown.Item>
            <Dropdown.Item>Help</Dropdown.Item>
          </DropdownButton>
        </Navbar>
        <Login
          show={this.state.showLoginModal}
          handleLoginClose={this.handleLoginClose}
        />
        <Signup
          show={this.state.showSignUpModal}
          handleSignUpClose={this.handleSignUpClose}
        />
        <FinishSignup
          show={this.state.showFinishSignUpModal}
          handleFinishSignUpClose={this.handleFinishSignUpClose}
        />


      </div>
    );
  }
}

export default NavBar;
