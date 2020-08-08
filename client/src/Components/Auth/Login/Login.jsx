import React, { Component } from "react";
import { Modal, Form, Button, Col, Row } from "react-bootstrap";
import styles from "./Login.module.css";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  facebookLogin,
  googleLogin,
  loginUser,
  closeLoginModal,
  closeRegisterModal,
  closeForgetPassword
} from "../../../Redux/authentication/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isSignup: false,
      isError: false,
      isWarn: false,
    };
  }
  responseFacebook = (response) => {
    const { facebookLogin } = this.props;
    console.log("response", response)
    facebookLogin(response);
  };
  responseGoogle = (response) => {
    console.log("response", response)
    const { googleLogin } = this.props;
    googleLogin(response);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      isError: false,
    });
  };

  handleContinue = () => {
    const { loginUser } = this.props;
    const { email, password } = this.state;
    if (
      email === undefined ||
      email === "" ||
      password === undefined ||
      password === ""
    ) {
      this.setState({ isError: true });
      return;
    }
    var obj = { email: email, password: password };
    loginUser(obj);
  };

  componentDidUpdate(prevProps, prevState) {
    const { closeLoginModal } = this.props;
    if (prevState.isSignup === this.state.isSignup) {
      if (this.props.payload) {
        const { error } = this.props.payload;
        if (error === true) {
          this.setState({ isWarn: true });
        }
        const { isSignup } = this.state;
        if (isSignup === false) {
          this.setState({ isSignup: true });
          closeLoginModal();
        }
      }
    }
  }
  handleForgetPassword=()=>{
    const { closeLoginModal , closeForgetPassword } = this.props
    closeLoginModal();
    closeForgetPassword();
  }

  handleClose = () => {
    const { closeLoginModal } = this.props;
    closeLoginModal();
  };

  handleSignup = () => {
    const { closeLoginModal, closeRegisterModal } = this.props;
    closeLoginModal();
    closeRegisterModal();
  };
  render() {
    const { handleLoginClose, isShowLoginModal, forgetPassword } = this.props;
    const { isError } = this.state;
    console.log(forgetPassword)
    return (
      <>
        <div>
          <Modal
            show={isShowLoginModal}
            animation={true}
            onHide={handleLoginClose}
          >
            <Modal.Header closeButton onClick={this.handleClose}>
              <Modal.Title className="text-center">Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Group>
                <div className="border mt-1" style={{ borderRadius: 5 }}>
                  <Form.Control
                    name="email"
                    type="email"
                    size="lg"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                  ></Form.Control>
                </div>
                <div className="border mt-3" style={{ borderRadius: 5 }}>
                  <Form.Control
                    name="password"
                    size="lg"
                    type="password"
                    placeholder="Enter password"
                    onChange={this.handleChange}
                  />
                </div>
                <Form.Text muted className="my-2" style={{ fontSize: 12 }}>
                  {isError ? (
                    <span style={{ color: "red", fontSize: 15 }}>
                      <svg
                        style={{ width: 20 }}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>{" "}
                      <span className="mr-2">
                        Please Enter required fields !!
                      </span>
                    </span>
                  ) : (
                    <span>
                      {" "}
                      We’ll call or text you to confirm your number. Standard
                      message and data rates apply.
                    </span>
                  )}
                </Form.Text>

                <Button
                  className={styles.btn}
                  size="lg"
                  block
                  onClick={this.handleContinue}
                >
                  Continue
                </Button>

                <div className="d-flex">
                  {" "}
                  <hr style={{ width: "47%" }} />{" "}
                  <span className="pt-1">or</span>
                  <hr style={{ width: "47%" }} />{" "}
                </div>

                <div className="my-2">
                  <FacebookLogin
                    appId="990031718084542"
                    fields="name,email,picture"
                    scope="email, public_profile, user_birthday"
                    callback={this.responseFacebook}
                    cssClass="border mg-1 btn-lg google bg-light"
                    style={{ border: "1px solid black" }}
                    icon={
                      <img
                        src="/facebook-3.svg"
                        alt=""
                        width="10px"
                        style={{
                          width: "6%",
                          marginLeft: "-118px",
                          marginRight: "116px",
                        }}
                      />
                    }
                  />

                  <div variant="outline-secondary" size="lg">
                    <GoogleLogin
                      clientId="491118482543-i2uipslim2cgt2e0ivpn94qom9tkppop.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                          className="google btn bg-light btn-lg"
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          style={{
                            width: " 100%",
                            border: "1px solid #dee2e6",
                            marginTop: "10px",
                            paddingTop: 4,
                            paddingBottom: 4,
                          }}
                        >
                          <Row>
                            <Col md={1}>
                              <img
                                src="/google-icon.svg"
                                alt=""
                                width="20px"
                                style={{}}
                              />
                            </Col>
                            <Col style={{ color: "black", fontSize: "20px" }}>
                              Continue with Google
                            </Col>
                          </Row>
                        </button>
                      )}
                      buttonText="Login"
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                  <div className="d-flex mt-4">
                    <Form.Text muted className="mx-2">
                      Don’t have an account?
                    </Form.Text>
                    <Link
                      to="/"
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                        cursor: "pointer",
                        color: "black",
                      }}
                      onClick={this.handleSignup}
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </Form.Group>
            </Modal.Body>
          </Modal>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  isLoading: state.authReducer.isLoading,
  payload: state.authReducer.payload,
  error: state.authReducer.error,
  errorMessage: state.authReducer.errorMessage,
  isShowLoginModal: state.authReducer.isShowLoginModal,
  forgetPassword:state.authReducer.forgetPassword
});

const mapDispatchToProps = (dispatch) => ({
  facebookLogin: (payload) => dispatch(facebookLogin(payload)),
  googleLogin: (payload) => dispatch(googleLogin(payload)),
  loginUser: (payload) => dispatch(loginUser(payload)),
  closeLoginModal: () => dispatch(closeLoginModal()),
  closeRegisterModal: () => dispatch(closeRegisterModal()),
  closeForgetPassword: ()=> dispatch(closeForgetPassword())
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
