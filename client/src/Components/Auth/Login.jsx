import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { show } = this.props;
    return (
      <div>
        <Modal show={show} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
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
              />
              <Form.Text muted>
                We’ll call or text you to confirm your number. Standard message
                and data rates apply.
              </Form.Text>
              <Button variant="primary" size="lg" block>
                Continue
              </Button>
              <Button variant="" size="lg" block>
                <i clasName="fab fa-facebook-f blue-text text-center"></i>{" "}
                Continue with Email
              </Button>
              <Button variant="" size="lg" block>
                <i clasName="fab fa-facebook-f blue-text text-center"></i>{" "}
                Continue with Facebook
              </Button>
              <Button variant="" size="lg" block>
                <i clasName="fab fa-facebook-f blue-text text-center"></i>{" "}
                Continue with Google
              </Button>
              <Button variant="" size="lg" block>
                <i clasName="fab fa-facebook-f blue-text text-center"></i>{" "}
                Continue with Apple
              </Button>
              <Form.Text muted>Don’t have an account?</Form.Text>
              Sign up
            </Form.Group>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Login;
