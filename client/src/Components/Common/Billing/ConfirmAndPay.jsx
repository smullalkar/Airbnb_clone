import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import {
  Card,
  Row,
  Col,
  Dropdown,
  ButtonGroup,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import Switch from "react-switch";
import AddGuests from "../Search/AddGuests";
import styles from "./Billing.module.css";

class ConfirmAndPay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};

  razorpay = async () => {
    const { history, details } = this.props;
    console.log(details);
    try {
      let order_res = await axios.post(
        "http://ffae7d4d9fa4.ngrok.io/payment/getOrderId",
        {
          amount: Number(details["total_bill"]) * 100,
          currency: "INR",
          receipt:
            details["user_id"] + "#" + details["firstname"] + "#" + Date.now(),
          payment_capture: "1",
        }
      );
      var options = {
        key: "rzp_test_3S2Ud4WlsY59BD", // Enter the Key ID generated from the Dashboard
        amount: Number(details["total_bill"]) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "@ airbnb 2020",
        description: "Test Transaction",
        image:
          "https://static.dezeen.com/uploads/2014/07/Airbnb-rebrand-by-DesignStudio_dezeen_468_8.jpg",
        order_id: order_res["data"]["id"], //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        prefill: {
          name: "Username",
          email: "User email address",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#F37254",
        },
        handler: async (response) => {
          console.log(response);
          let final_res = await axios.post(
            "http://ffae7d4d9fa4.ngrok.io/payment/getValidation",
            {
              ...response,
            }
          );
          if (final_res["data"]["status"] == "success") {
            alert(final_res["data"]["message"]);
          } else {
            alert(final_res["data"]["message"]);
          }
        },
      };
      const rzp_trial = window.Razorpay(options);
      rzp_trial.open();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {} = this.props;
    return (
      <div>
        <Card>
          <Card.Body>
            <h6>Confirm and pay</h6>
            <Card.Text>Pay</Card.Text>
            <hr />
            <Row className={styles.cancelationPolicy}>
              <Col>
                Free cancellation until 3:00 PM on 30 Jul. After that, cancel
                before 3:00 PM on 31 Jul and get a full refund, minus the first
                night and service fee. More details
                <hr />
                By selecting the button below, I agree to the House Rules,
                Cancellation Policy, and the Guest Refund Policy. I also agree
                to pay the total amount shown, which includes Occupancy Taxes
                and Service Fees. Airbnb now collects and remits
                government-imposed Occupancy Taxes in this location.
              </Col>
            </Row>

            <Button onClick={this.razorpay}>ConfirmAndPay</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("bill added?", state);
  return {
    details: state.paymentReducer.bookingDetails,
  };
};

export default connect(mapStateToProps)(ConfirmAndPay);
