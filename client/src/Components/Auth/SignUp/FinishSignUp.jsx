import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import styles from "./Signup.module.css";
import { connect } from "react-redux";

class FinishSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { show, handleFinishSignUpClose } = this.props;
        return (
            <div>
                <Modal show={show} animation={false} onHide={handleFinishSignUpClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-center">Finish Signing Up</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group>
                            <Form.Group>
                                <Form.Label>First</Form.Label>
                                <Form.Control size="lg" type="text" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Last</Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    placeholder="Last Name "

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

                            />
                        </Form.Group>
                        <Form.Text muted className="my-3">
                            To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.
                             </Form.Text>

                        <hr />

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                size="lg"
                                type="email"
                                placeholder="Email "

                            />
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

                            />

                        </Form.Group>

                        <Form.Text muted className="my-3">
                            We’ll send you marketing promotions, special offers, inspiration and policy updates via email.
                            </Form.Text>

                        <Form.Check type="checkbox" muted className="my-3" label=" I don’t want to receive marketing messages from Airbnb. I can also opt out of receiving these at any time in my account settings or via the link in the message." />

                        <Form.Text muted className="my-3">
                            By selecting Agree and continue below, I agree to Airbnb’s Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.
                            </Form.Text>

                        <Button className={styles.btn} size="lg" block>
                            Agree and Continue
                             </Button>


                    </Modal.Body>
                </Modal>
            </div >
        );
    }
}

export default FinishSignUp;

