

import React, { Component } from "react";


import { Modal, Form, Button, Alert } from 'react-bootstrap'
import styles from './Login.module.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { show, handleLoginClose } = this.props
        return (

            <div>

                <Modal show={show} animation={false} onHide={handleLoginClose} >
                    <Modal.Header closeButton>
                        <Modal.Title >Login</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form.Group >
                            <Form.Label>Country/Region</Form.Label>
                            <Form.Control as="select">
                                <option>India (+91)</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control size="lg" type="number" />

                        </Form.Group>
                        <Form.Group>
                            <Form.Text muted className="my-2">
                                We’ll call or text you to confirm your number. Standard message and data rates apply.
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
                                    <i clasName="fab fa-facebook-f blue-text text-center"></i>  Continue with Google
                            </Button>
                                <Button variant="outline-secondary" size="lg" block>
                                    Continue with Apple
                            </Button>

                                <div className="d-flex ">
                                    <Form.Text muted className="mx-2">
                                        Don’t have an account?
                               </Form.Text >

                                    Sign up
                            </div>


                            </div>







                        </Form.Group>
                    </Modal.Body>

                </Modal>




            </div >
        );
    }
}




export default Login;