import React, { Component } from "react";
import Login from "../../Auth/Login/Login";
import { Navbar, DropdownButton, Dropdown } from "react-bootstrap";
import Signup from "../../Auth/SignUp/SignUp";
import ForgetPassword from "../../Auth/Login/ForgetPassword"
import {
  closeLoginModal,
  closeRegisterModal,
  logoutUser,
} from "../../../Redux/authentication/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
  handleLogout =()=>{
    const { logoutUser } = this.props
    logoutUser()
  }

  render() {
    const { isAuth} = this.props;
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
            <i
              className="fa fa-bars mt-3 px-2 fa-lg"
              style={{ cursor: "pointer" }}
              aria-hidden="true"
            ></i>
            <DropdownButton
              alignRight
              title=""
              id="dropdown-menu-align-right"
              className="nav-dropdown-main"
            >
              {!isAuth ? (
                <>
                  <Dropdown.Item onClick={this.handleLoginModal}>
                    Login
                  </Dropdown.Item>

                  <Dropdown.Item onClick={this.handleRegisterModal}>
                    Sign Up
                  </Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item>Name of user</Dropdown.Item>
                  <Dropdown.Item onClick={this.handleLogout}>
                    Logout
                  </Dropdown.Item>
                </>
              )}
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
        <ForgetPassword />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  payload: state.authReducer.payload,
});

const mapDispatchToProps = (dispatch) => ({
  closeLoginModal: () => dispatch(closeLoginModal()),
  closeRegisterModal: () => dispatch(closeRegisterModal()),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
