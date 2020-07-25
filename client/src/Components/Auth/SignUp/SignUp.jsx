import React, { Component } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import styles from "./Signup.module.css";
import { connect } from "react-redux";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import {
  facebookLogin,
  googleLogin,
  registerUser,
  closeRegisterModal,
} from "../../../Redux/authentication/actions";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phone: "",
      dob: "",
      firstname: "",
      lastname: "",
      isRedirect: false,
      isWarning: false,
      isChecked: false,
      show: true,
      isSignup: false,
      isErrorName: false,
      isErrorDOB: false,
      isErrorEmail: false,
      isErrorPassword: false,
      isErrorPhone: false,
      isAgreeTerms: false,
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
      isErrorName: false,
      isErrorDOB: false,
      isErrorEmail: false,
      isErrorPassword: false,
      isErrorPhone: false,
      isAgreeTerms: false,
    });
  };

  handleContinue = () => {
    const { registerUser } = this.props;
    const {
      email,
      password,
      phone,
      firstname,
      lastname,
      dob,
      isChecked,
    } = this.state;
    var obj = {
      email: email,
      password: password,
      phone: Number(phone),
      firstname: firstname,
      lastname: lastname,
      dob: dob,
    };
    if (firstname === "") {
      this.setState({ isErrorName: true });
      return;
    }
    if (dob === "") {
      this.setState({ isErrorDOB: true });
      return;
    }
    if (!this.validateEmail(email)) {
      this.setState({ isErrorEmail: true });
      return;
    }
    if (password === "") {
      this.setState({ isErrorPassword: true });
      return;
    }
    if (phone === "" || phone.length < 10) {
      this.setState({ isErrorPhone: true });
      return;
    }
    if (isChecked === false) {
      this.setState({ isAgreeTerms: true });
      return;
    }
    if (isChecked === true) {
      this.setState({ isAgreeTerms: false });
      return;
    }
    if (this.validateEmail(email) && isChecked) {
      registerUser(obj);
    }
    this.setState({ isRedirect: true, isWarning: true });
  };

  validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      return true;
    return false;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isSignup === this.state.isSignup) {
      if (this.props.payload) {
        const { error, token } = this.props.payload;
        const { closeLoginModal } = this.props;
        if (error === false) {
          localStorage.setItem("token", token);
          this.setState({ isSignup: true })
          closeLoginModal();
        }
      }
    }
  }

  handleClose = () => {
    const { closeRegisterModal, closeLoginModal } = this.props;
    closeRegisterModal();
    closeLoginModal();
  };

  render() {
    const { handleFinishSignUpClose, isShowRegisterModal } = this.props;
    const {
      isErrorName,
      isErrorEmail,
      isErrorDOB,
      isErrorPassword,
      isErrorPhone,
      isAgreeTerms,
    } = this.state;
    return (
      <div>
        <Modal
          show={isShowRegisterModal}
          animation={true}
          onHide={handleFinishSignUpClose}
          size={"lg"}
        >
          <Modal.Header closeButton onClick={this.handleClose}>
            <Modal.Title className="text-center">Signup</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group>
              <Form.Group>
                <div className="border mt-1" style={{ borderRadius: 5 }}>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    onChange={this.handleChange}
                  />
                </div>
              </Form.Group>
              <Form.Group>
                <div className="border mt-1" style={{ borderRadius: 5 }}>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Last Name "
                    name="lastname"
                    onChange={this.handleChange}
                  />
                </div>
              </Form.Group>
            </Form.Group>
            <Form.Text muted className="my-3">
              {isErrorName ? (
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
                  <span className="mr-2">Name Can't be Empty !!</span>
                </span>
              ) : (
                <span>
                  Make sure it matches the name on your government ID.
                </span>
              )}
            </Form.Text>
            <Form.Group>
              <div className="border mt-1" style={{ borderRadius: 5 }}>
                <Form.Control
                  size="lg"
                  type="date"
                  placeholder="Data of Birth "
                  name="dob"
                  onChange={this.handleChange}
                />
              </div>
            </Form.Group>
            <Form.Text muted className="my-3">
              {isErrorDOB ? (
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
                  <span className="mr-2">Date of birth Can't be Empty !!</span>
                </span>
              ) : (
                <span>
                  Fill your date of birth here. To sign up, you need to be at
                  least 18. Your birthday won't be shared with other people who
                  use Airbnb.
                </span>
              )}
            </Form.Text>

            <hr />

            <Form.Group>
              <div className="border mt-1" style={{ borderRadius: 5 }}>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Email "
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
            </Form.Group>
            <Form.Text muted className="my-3">
              {isErrorEmail ? (
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
                  <span className="mr-2">Email Can't be Empty !!</span>
                </span>
              ) : (
                <span>We'll email you trip confirmations and receipts.</span>
              )}
            </Form.Text>
            <Form.Group>
              <div className="border mt-1" style={{ borderRadius: 5 }}>
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Password "
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              {isErrorPassword ? (
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
                  <span className="mr-2">Password Can't be Empty !!</span>
                </span>
              ) : null}
            </Form.Group>
            <Form.Group>
              <div className="border mt-1" style={{ borderRadius: 5 }}>
                <Form.Control
                  size="lg"
                  name="phone"
                  type="number"
                  placeholder="Enter Phone number "
                  onChange={this.handleChange}
                />
              </div>
            </Form.Group>
            <Form.Text muted className="my-3">
              {isErrorPhone ? (
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
                  <span className="mr-2">Enter valid phone number !!</span>
                </span>
              ) : (
                <span>
                  We’ll send you marketing promotions, special offers,
                  inspiration and policy updates via email.
                </span>
              )}
            </Form.Text>

            <Form.Check
              type="checkbox"
              muted
              onChange={(e) => this.setState({ isChecked: e.target.checked })}
              className="my-3"
              style={{ fontSize: 15 }}
              label=" I don’t want to receive marketing messages from Airbnb. I can also opt out of receiving these at any time in my account settings or via the link in the message."
            />

            <Form.Text muted className="my-3">
              By selecting Agree and continue below, I agree to Airbnb’s{" "}
              <span style={{ textDecoration: "underline", color: "blue" }}>
                Terms of Service
              </span>
              ,{" "}
              <span style={{ textDecoration: "underline", color: "blue" }}>
                Payments Terms of Service
              </span>
              ,
              <span style={{ textDecoration: "underline", color: "blue" }}>
                {" "}
                Privacy Policy
              </span>
              , and{" "}
              <span style={{ textDecoration: "underline", color: "blue" }}>
                Nondiscrimination Policy.
              </span>
            </Form.Text>
            {isAgreeTerms ? (
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
                <span className="mr-2 mb-2">
                  Please Agree to our Terms and Conditions !!
                </span>
              </span>
            ) : null}

            <Button
              className={styles.btn}
              size="lg"
              block
              onClick={this.handleContinue}
            >
              Agree and Continue
            </Button>
            <div className="d-flex">
              {" "}
              <hr style={{ width: "47%" }} /> <span className="pt-1">or</span>
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
                      width: "5%",
                      marginLeft: "-34%",
                      marginRight: "38%",
                    }}
                  />
                }
              />
            </div>
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
                      marginTop: "6px",
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
  isShowRegisterModal: state.authReducer.isShowRegisterModal,
  isShowLoginModal: state.authReducer.isShowLoginModal,
});

const mapDispatchToProps = (dispatch) => ({
  facebookLogin: (payload) => dispatch(facebookLogin(payload)),
  googleLogin: (payload) => dispatch(googleLogin(payload)),
  registerUser: (payload) => dispatch(registerUser(payload)),
  closeRegisterModal: () => dispatch(closeRegisterModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
