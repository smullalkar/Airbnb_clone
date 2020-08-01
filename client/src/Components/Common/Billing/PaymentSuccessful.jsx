import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Modal, Image, Button } from 'react-bootstrap'
import styles from "./Billing.module.css";
import airbnb from "../../../assets/images/airbnb.gif"

import tick from "../../../assets/images/tickPink.png"

class PaymentSuccessful extends Component {
    constructor(props) {
        super(props)
        this.state = { showPaymentSuccessful: true }
    }

    handleClose = () => {
        this.setState({ showPaymentSuccessful: false });
    }



    render() {
        return (

            <div>
                <Modal size="md" show={this.state.showPaymentSuccessful} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <span><Image className={styles.tick} src={tick} alt="" /></span>  <span><h4 className={styles.paymentText}>Payment Successful</h4></span>
                    </Modal.Header>
                    <Modal.Body>
                        <Image className={styles.paymentGif} src={airbnb} alt="" />
                        <h4 className={styles.paymentText}> Booking Confirmed </h4>
                        <h4 className={styles.paymentText}>All Set to Explore !!! </h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to="/">
                            <Button>Back to Home</Button>
                        </Link>
                    </Modal.Footer>

                </Modal>


            </div>
        );
    }
}




export default PaymentSuccessful;