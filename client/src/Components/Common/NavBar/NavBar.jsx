import React, { Component } from "react";
import Login from "../../Auth/Login/Login";
import { Navbar, DropdownButton, Dropdown, Nav } from "react-bootstrap";
import Signup from "../../Auth/SignUp/SignUp";
import {
  closeLoginModal,
  closeRegisterModal,
} from "../../../Redux/authentication/actions";
import { connect } from "react-redux";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      showSignUpModal: false,
      showFinishSignUpModal: false,
    };
  }

  handleLoginClose = () => this.setState({ showLoginModal: false });
  handleSignUpClose = () => this.setState({ showSignUpModal: false });
  handleFinishSignUpClose = () =>
    this.setState({ showFinishSignUpModal: false });

  handleLoginModal = () => {
    const { closeLoginModal } = this.props;
    closeLoginModal();
  };
  handleRegisterModal = () => {
    const { closeRegisterModal } = this.props;
    this.setState({
      showFinishSignUpModal: true,
    });
    closeRegisterModal();
  };

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
<<<<<<< HEAD
            <img src=".././assets/logo.svg" alt="Airbnb" />
=======

            <img src={logo} className="App-logo" alt="Airbnb" />
>>>>>>> Frontend-Design
          </Navbar.Brand>



          <DropdownButton
            alignRight
            id="dropdown-menu-align-right"
            className="nav-dropdown-main"
          >
<<<<<<< HEAD
            <Dropdown.Item onClick={this.handleLoginModal}>Login</Dropdown.Item>
=======


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
>>>>>>> Frontend-Design

            <Dropdown.Item onClick={this.handleRegisterModal}>
              Sign Up
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
          show={this.state.showFinishSignUpModal}
          handleFinishSignUpClose={this.handleFinishSignUpClose}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  closeLoginModal: () => dispatch(closeLoginModal()),
  closeRegisterModal : ()=> dispatch(closeRegisterModal())
});

export default connect(null, mapDispatchToProps)(NavBar);
