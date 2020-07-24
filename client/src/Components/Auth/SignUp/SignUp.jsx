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
      isSignup:false
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
    console.log(obj);
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
    if(prevState.isSignup === this.state.isSignup){
      if (this.props.payload) {
        const { error, token } = this.props.payload;
        const { closeLoginModal } = this.props;
        if ( error === false) {
          localStorage.setItem("token", token);
          this.setState({isSignup : true})
          closeLoginModal();
        }
      }
    }
  }


  handleClose = () => {
    const { closeRegisterModal } = this.props;
    closeRegisterModal();
  };
  render() {
    const { show, handleFinishSignUpClose, isShowRegisterModal } = this.props;

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
              Make sure it matches the name on your government ID.
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
              To sign up, you need to be at least 18. Your birthday won’t be
              shared with other people who use Airbnb.
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
              We'll email you trip confirmations and receipts.
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
              We’ll send you marketing promotions, special offers, inspiration
              and policy updates via email.
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

            <Button
              className={styles.btn}
              size="lg"
              block
              onClick={this.handleContinue}
            >
              Agree and Continue
            </Button>

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
                clientId="304743879385-hes3s6fpp9ijfvi74odg20d4nu5aoudc.apps.googleusercontent.com"
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
});

const mapDispatchToProps = (dispatch) => ({
  facebookLogin: (payload) => dispatch(facebookLogin(payload)),
  googleLogin: (payload) => dispatch(googleLogin(payload)),
  registerUser: (payload) => dispatch(registerUser(payload)),
  closeRegisterModal: () => dispatch(closeRegisterModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
