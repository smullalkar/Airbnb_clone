import React, { Component } from "react";
import Login from "../../Auth/Login/Login";
import { Navbar, DropdownButton, Dropdown } from "react-bootstrap";
import Signup from "../../Auth/SignUp/SignUp";
import {
  closeLoginModal,
  closeRegisterModal,
} from "../../../Redux/authentication/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import customer from "../../../assets/images/customer.png"

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
    return (
      <div>
        <Navbar
          expand="lg"
          bg="light"
          variant="light"
          className="d-flex justify-content-between"
        >
          <Link to="/">
            <Navbar.Brand className="pl-4">

              <img src="/main-logo.svg" className="App-logo" alt="Airbnb" />
            </Navbar.Brand>
          </Link>

          <div className="d-flex">
            <div> <img src={customer} className="customerIcon" /> </div>

            <DropdownButton
              alignRight
              title=""
              id="dropdown-menu-align-right"
              className="nav-dropdown-main"

            >

              <Dropdown.Item onClick={this.handleLoginModal}>
                Login
              </Dropdown.Item>

              <Dropdown.Item onClick={this.handleRegisterModal}>
                Sign Up
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item>Host Your Home</Dropdown.Item>
              <Dropdown.Item>Host an Experience</Dropdown.Item>
              <Dropdown.Item>Help</Dropdown.Item>
            </DropdownButton>
          </div>
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
  closeRegisterModal: () => dispatch(closeRegisterModal()),
});

export default connect(null, mapDispatchToProps)(NavBar);
