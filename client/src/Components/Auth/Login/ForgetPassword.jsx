import React, { Component } from "react";
import { Modal, Form, Button, Col, Row } from "react-bootstrap";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  facebookLogin,
  googleLogin,
  loginUser,
  closeLoginModal,
  closeRegisterModal,
  closeForgetPassword,
} from "../../../Redux/authentication/actions";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isError: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
handleClose=()=>{
    const { closeForgetPassword } = this.props
    closeForgetPassword()
}
  handleContinue = () => {
    const { loginUser } = this.props;
    const { email, isError } = this.state;
    if (email === undefined || email === "") {
      this.setState({ isError: true });
      return;
    }
  };

  render() {
    const { handleLoginClose, forgetPassword } = this.props;
    const { isError } = this.state;
    console.log(forgetPassword);
    return (
      <>
        <div>
          <Modal
            show={forgetPassword}
            animation={true}
            // onHide={handleLoginClose}
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
                    <span> We’ll Email you the password reset link</span>
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
  forgetPassword: state.authReducer.forgetPassword,
});

const mapDispatchToProps = (dispatch) => ({
  closeLoginModal: () => dispatch(closeLoginModal()),
  closeForgetPassword: () => dispatch(closeForgetPassword()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
