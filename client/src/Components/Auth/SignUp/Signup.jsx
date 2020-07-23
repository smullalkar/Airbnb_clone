import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import styles from "./Signup.module.css";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FinishSignUp from "./FinishSignUp";

import {
  facebookLogin,
  googleLogin,
  registerUser,
} from "../../../Redux/authentication/actions";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phone: "",
      isRedirect: false,
      isWarning : false
    };
  }
  responseFacebook = (response) => {
    const { facebookLogin } = this.props;
    facebookLogin(response);
  };
  responseGoogle = (response) => {
    const { googleLogin } = this.props;
    googleLogin(response);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleContinue = () => {
    const { registerUser } = this.props;
    const { email, password, phone } = this.state;
    var obj = { email: email, passowrd: password, phone: Number(phone) };
    if(this.validateEmail(email)){
      registerUser(obj);
    }
    this.setState({ isRedirect: true, isWarning : true });
  };

  validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
    return false;
  };


  componentWillUnmount() {
    this.setState({ isRedirect: false });
  }
  render() {
    const { show, handleLoginClose } = this.props;
    // if (redirect) {
    //   return <Redirect to='/somewhere'/>;
    // }

    return (
      <div>
        <Modal show={show} animation={false} onHide={handleLoginClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Signup</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group>
              <Form.Control
                name="email"
                type="email"
                size="lg"
                placeholder="Enter email"
                onChange={this.handleChange}
              ></Form.Control>
              <Form.Control
                name="password"
                size="lg"
                type="password"
                placeholder="Enter password"
                onChange={this.handleChange}
              />
              <Form.Control
                name="number"
                size="lg"
                type="number"
                placeholder="Enter phone number"
                onChange={this.handleChange}
              />
              <Form.Text muted className="my-2">
                <small>
                  We’ll call or text you to confirm your number. Standard
                  message and data rates apply.
                </small>
              </Form.Text>

              <Button
                className={styles.btn}
                size="lg"
                block
                onClick={this.handleContinue}
              >
                Continue
              </Button>

              <hr />

              <div className="my-2">
                <FacebookLogin
                  appId="990031718084542"
                  fields="name,email,picture"
                  scope="email, public_profile, user_birthday"
                  callback={this.responseFacebook}
                  icon="fa-facebook"
                  render={(renderProps) => (
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      block
                      onClick={renderProps.onClick}
                    >
                      {" "}
                      Continue with Facebook
                    </Button>
                  )}
                />
                ,
                <div variant="outline-secondary" size="lg">
                  <i className="fab fa-facebook-f blue-text text-center"></i>{" "}
                  <GoogleLogin
                    clientId="304743879385-hes3s6fpp9ijfvi74odg20d4nu5aoudc.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <button
                        className="google"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        This is my custom Google button
                      </button>
                    )}
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                  ,
                </div>
                <div className="d-flex ">
                  <Form.Text muted className="mx-2">
                    Already have an account ?
                  </Form.Text>
                  Login
                </div>
              </div>
            </Form.Group>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  isLoading: state.authReducer.isLoading,
  payload: state.authReducer.payload,
  error: state.authReducer.error,
  errorMessage: state.authReducer.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  facebookLogin: (payload) => dispatch(facebookLogin(payload)),
  googleLogin: (payload) => dispatch(googleLogin(payload)),
  registerUser: (payload) => dispatch(registerUser(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
