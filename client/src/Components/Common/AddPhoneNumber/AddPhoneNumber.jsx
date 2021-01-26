import React, { Component } from "react";

import styles from "./AddPhoneNumber.module.css";
import { Button, Form, Col, Dropdown, ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
// import { LoadingBar } from "react-redux-loading-bar";


class AddPhoneNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={styles.container}>
                {/* <LoadingBar /> */}
                <Form className={styles.form}>
                    <h4>Add Your Phone Number</h4>
                    <p className="text-muted my-2">This is so your host and Airbnb can reach you</p>



                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle variant="outline-secondary">Country</Dropdown.Toggle>

                        <Dropdown.Menu> </Dropdown.Menu>
                    </Dropdown>

                    <p className="my-2">Phone Number</p>
                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>+</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="Number"
                                aria-describedby="inputGroupPrepend"
                                required
                            />

                        </InputGroup>
                    </Form.Group>
                    <p className="text-muted my-2">I Authorize Phone/text messages to this number</p>
                    <Button alignRight >Next <span>&#8250;</span></Button>
                </Form>


            </div>
        );
    }
}

export default AddPhoneNumber;