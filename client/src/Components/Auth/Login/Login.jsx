import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
import {
  facebookLogin,
  googleLogin,
  loginUser,
} from "../../../Redux/authentication/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    const { loginUser } = this.props;
    const { email, password } = this.state;
    var obj = { email: email, passowrd: password };
    loginUser(obj);
  };
  render() {
    const { show, handleLoginClose } = this.props;

    return (
      <div>
        <Modal show={show} animation={false} onHide={handleLoginClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Login</Modal.Title>
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
              <Form.Text muted className="my-2">
                We’ll call or text you to confirm your number. Standard message
                and data rates apply.
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
                      <button className="google"
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
                    Don’t have an account?
                  </Form.Text>
                  Sign up
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
  loginUser: (payload) => dispatch(loginUser(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
