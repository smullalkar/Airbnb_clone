import React, { Component } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import styles from "./Signup.module.css";
import { connect } from "react-redux";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { show, handleSignUpClose } = this.props;
    return (
      <div>
        <Modal show={show} animation={false} onHide={handleSignUpClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">SignUp</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group>
              <Form.Control as="select" size="lg">
                <option>Country/Region</option>
              </Form.Control>
              <Form.Control
                size="lg"
                type="number"
                placeholder="Phone Number"
                value={""}
              />
              <Form.Text muted className="my-2">
                We’ll call or text you to confirm your number. Standard message
                and data rates apply.
              </Form.Text>

              <Button className={styles.btn} size="lg" block>
                Continue
              </Button>

              <hr />

              <div className="my-2">
                <Button variant="outline-secondary" size="lg" block>
                  Continue with Email
                </Button>

                <Button variant="outline-secondary" size="lg" block>
                  Continue with Facebook
                </Button>
                <Button variant="outline-secondary" size="lg" block>
                  <i clasName="fab fa-facebook-f blue-text text-center"></i>{" "}
                  Continue with Google
                </Button>
                <Button variant="outline-secondary" size="lg" block>
                  Continue with Apple
                </Button>

                <div className="d-flex ">
                  <Form.Text muted className="mx-2">
                    Don’t have an account?
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

const mapStateToProps=state=>({

})

const mapDispatchToProps = dispatch=>({

})

export default connect(
    null,
    null
)(Signup);
