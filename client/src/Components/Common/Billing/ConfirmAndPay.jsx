import React, { Component } from "react";

import { Card, Row, Col, Dropdown, ButtonGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import Switch from "react-switch";
import AddGuests from "../Search/AddGuests";
import styles from "./Billing.module.css";



class ConfirmAndPay extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { } = this.props
        return (

            <div>
                <Card>
                    <Card.Body>
                        <h6>Confirm and pay</h6>
                        <Card.Text>Pay</Card.Text>

                        <Dropdown as={ButtonGroup} className="m-2">
                            <Dropdown.Toggle variant="outline-secondary"> Credit Card or Debit card</Dropdown.Toggle>

                            <Dropdown.Menu className={`${styles.guestDropdown} border-0`} >
                                Credit Card
                            </Dropdown.Menu>
                            <Dropdown.Menu className={`${styles.guestDropdown} border-0`} >
                                Debit Card
                            </Dropdown.Menu>
                        </Dropdown>

                        <hr />

                        <Row className={styles.cancelationPolicy}>
                            <Col>
                                Free cancellation until 3:00 PM on 30 Jul. After that, cancel before 3:00 PM on 31 Jul and get a full refund, minus the first night and service fee. More details
    
                            <hr />

                                By selecting the button below, I agree to the House Rules, Cancellation Policy, and the Guest Refund Policy. I also agree to pay the total amount shown, which includes Occupancy Taxes and Service Fees. Airbnb now collects and remits government-imposed Occupancy Taxes in this location.
                            </Col>

                        </Row>

                        <Button>ConfirmAndPay</Button>

                    </Card.Body>

                </Card>


            </div >
        );
    }
}
export default ConfirmAndPay;