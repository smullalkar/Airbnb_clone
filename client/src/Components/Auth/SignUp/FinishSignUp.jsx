import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import styles from "./Signup.module.css";
import { connect } from "react-redux";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import {
  facebookLogin,
  googleLogin,
  registerUser,
} from "../../../Redux/authentication/actions";

class FinishSignUp extends Component {
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
      isChecked : false
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
    const { email, password, phone, firstname, lastname, dob, isChecked } = this.state;
    var obj = { email: email, password: password, phone: Number(phone), firstname:firstname, lastname : lastname, dob:dob };
    console.log(obj)
    if (this.validateEmail(email)) {
      registerUser(obj);
    }
    this.setState({ isRedirect: true, isWarning: true });
  };

  validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      return true;
    return false;
  };

  componentWillReceiveProps(){
      const { error , token } = this.props

      console.log(this.props)
      if( error === false){
          console.log("token "+token)
      }
  }
  render() {
    const { show, handleFinishSignUpClose } = this.props;
    console.log(this.props)
    return (
      <div>
        <Modal show={show} animation={false} onHide={handleFinishSignUpClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Signup</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group>
              <Form.Group>
                <Form.Label>First</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Last Name "
                  name="lastname"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Group>
            <Form.Text muted className="my-3">
              Make sure it matches the name on your government ID.
            </Form.Text>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                size="lg"
                type="date"
                placeholder="Data of Birth "
                name="dob"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Text muted className="my-3">
              To sign up, you need to be at least 18. Your birthday won’t be
              shared with other people who use Airbnb.
            </Form.Text>

            <hr />

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control size="lg" type="email" placeholder="Email "  name="email" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Text muted className="my-3">
              We'll email you trip confirmations and receipts.
            </Form.Text>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                size="lg"
                type="password"
                placeholder="Password "
                name="password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                size="lg"
                name="phone"
                type="number"
                placeholder="Enter Phone number "
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Text muted className="my-3">
              We’ll send you marketing promotions, special offers, inspiration
              and policy updates via email.
            </Form.Text>

            <Form.Check
              type="checkbox"
              muted
            onChange ={(e)=>this.setState({isChecked : e.target.checked})}
              className="my-3"
              label=" I don’t want to receive marketing messages from Airbnb. I can also opt out of receiving these at any time in my account settings or via the link in the message."
            />

            <Form.Text muted className="my-3">
              By selecting Agree and continue below, I agree to Airbnb’s Terms
              of Service, Payments Terms of Service, Privacy Policy, and
              Nondiscrimination Policy.
            </Form.Text>

            <Button className={styles.btn} size="lg" block onClick={this.handleContinue}>
              Agree and Continue
            </Button>
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
            </div>
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
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  isLoading: state.authReducer.isLoading,
  payload: state.authReducer.payload,
  error: state.authReducer.error,
  errorMessage: state.authReducer.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  facebookLogin: (payload) => dispatch(facebookLogin(payload)),
  googleLogin: (payload) => dispatch(googleLogin(payload)),
  registerUser: (payload) => dispatch(registerUser(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FinishSignUp);
