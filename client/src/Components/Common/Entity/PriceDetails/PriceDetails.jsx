import React, { Component } from "react";
import {
  Card,
  Button,
  Form,
  Dropdown,
  ButtonGroup,
  Row,
  Col,
} from "react-bootstrap";
import styles from "./PriceDetails.module.css";
import { DateRangePicker } from "react-dates";
import AddGuestsEntity from "./AddGuestsEntity";
import { connect } from "react-redux";
import "react-dates/lib/css/_datepicker.css";

import { calculateTotalPrice } from "../../../../Redux/entity/actions";
import { getDetailsOfBooking } from "../../../../Redux/payment/actions";
import {
  tokenValidateUser,
  closeLoginModal,
} from "../../../../Redux/authentication/actions";
import { Link } from "react-router-dom";

class PriceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: [],
      bookedDateRange: [],
      startDate: null,
      endDate: null,
      focusedInput: "",
      showWarning: false,
      noOfDays: 1,
    };
  }

  componentDidMount() {
    const { tokenValidateUser } = this.props;
    let token = localStorage.getItem("token");
    tokenValidateUser(token);
    const { data } = this.props;
    console.log(data);
    this.setState({ showWarning: false });
  }

  handleReserve = () => { };

  handleChange = ({ startDate, endDate }) => {
    this.setState({
      startDate,
      endDate,
      showWarning: false,
    });
    const { bookedDates, user, isAuth, closeLoginModal } = this.props;
    const { data } = this.props;
    let token = localStorage.getItem("token")
    if (!isAuth || token === "" || token === undefined) {
      closeLoginModal();
    }

    if (startDate && endDate) {
      if (bookedDates.length !== 0 && bookedDates[0].data[0] !== undefined) {
        if (
          bookedDates[0].data[0].bookingDate.split(" ")[0] <=
          startDate._d.toLocaleDateString().split("/").join("-") &&
          bookedDates[0].data[0].bookingDate.split(" ")[0] >=
          endDate._d.toLocaleDateString().split("/").join("-")
        ) {
          let start = new Date(startDate._d);
          let end = new Date(endDate._d);
          let diffTime = Math.abs(end - start);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          this.setState({ showWarning: true, noOfDays: diffDays }, () => { });
        } else {
          let start = new Date(startDate._d);
          let end = new Date(endDate._d);
          let diffTime = Math.abs(end - start);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          this.setState({ showWarning: false, noOfDays: diffDays || 1 }, () => {
            var total =
              Math.floor(
                (this.state.home.price * 18) / 100 + this.state.home.price
              ) * this.state.noOfDays;

            this.setState(
              {
                total_bill: total,
                total_per_day:
                  (this.state.home.price * 18) / 100 + this.state.home.price,
                user_id: user.user_id,
                gst: 18,
                checkin: startDate._d
                  .toLocaleDateString()
                  .split("/")
                  .reverse()
                  .join("-"),
                checkout: endDate._d
                  .toLocaleDateString()
                  .split("/")
                  .reverse()
                  .join("-"),
              },
              () => {
                console.log(this.state);
                this.props.getDetailsOfBooking({
                  total_bill: this.state.total_bill || 1,
                  total_per_day: this.state.total_per_day,
                  user_id: user.user_id,
                  firstname: user.firstname,
                  lastname: user.lastname,
                  email: user.email,
                  phone: user.phone,
                  gst: 18,
                  checkin: startDate._d
                    .toLocaleDateString()
                    .split("/")
                    .reverse()
                    .join("-"),
                  checkout: endDate._d
                    .toLocaleDateString()
                    .split("/")
                    .reverse()
                    .join("-"),
                  property_id: data[0].data.data[0].property_id,
                });
              }
            );
          });
        }
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.props;
    if (prevState.home.length === 0) {
      data.map((item) =>
        this.setState({ home: item.data.data[0] }, () => {
          var total =
            Math.floor((this.state.home.price * 18) / 100) +
            this.state.home.price;
          this.props.calculateTotalPrice(total);
        })
      );
    }
  }

  render() {
    const { home, showWarning, noOfDays } = this.state;
    const { totalPrice } = this.props;
    return (
      <div>
        <Card className={styles.priceDetailsCard}>
          <Card.Body>
            <div className="d-flex flex-row justify-content-between">
              <Card.Text className={styles.priceCont}>
                <span className={styles.amountSpan}>₹{home.price} </span> /
                night
              </Card.Text>
              <Card.Text >
                <div className="d-flex align-items-center">
                  <span className={styles.ratingStar}>&#9733;</span>
                  <span className={styles.rating}>{home.rating}</span>
                  <span className={styles.numrated}>({home.ratingcount})</span>
                </div>
              </Card.Text>
            </div>
            <Card className={styles.addDateCard} >
              <Card.Body>
                <div>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label
                      className={`${styles.formLabel} ${styles.dateLabel}`}
                    >
                      CHECK IN
                    </Form.Label>
                    <Form.Label
                      className={`${styles.formLabel} ${styles.dateLabel} ${styles.checkoutLabel}`}
                    >
                      CHECK OUT
                    </Form.Label>
                    <DateRangePicker
                      startDate={this.state.startDate}
                      startDateId="your_unique_start_date_id"
                      endDate={this.state.endDate}
                      endDateId="your_unique_end_date_id"
                      onDatesChange={this.handleChange}
                      focusedInput={this.state.focusedInput}
                      onFocusChange={(focusedInput) =>
                        this.setState({ focusedInput })
                      }
                      startDatePlaceholderText="Add dates"
                      endDatePlaceholderText="Add dates"
                    ></DateRangePicker>
                  </Form.Group>
                </div>
                <div>
                  <Dropdown as={ButtonGroup} className="m-2 w-100">
                    <Dropdown.Toggle
                      className={styles.addButton}
                      variant="outline-secondary"
                    >
                      Add Guest
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={styles.guestDropdown}>
                      <AddGuestsEntity />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
            </Card>
            <Row>
              <Col>
                {showWarning ? "Sorry !! These dates are not available" : null}{" "}
              </Col>
            </Row>
            <Button
              className="my-3"
              size="md"
              block
              onClick={this.handleReserve}
            >
              {!showWarning ? (
                <Link
                  to="/entity/entity_page/billing"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Reserve
                </Link>
              ) : (
                  <span>Reserve</span>
                )}
            </Button>
            <Card.Text className={styles.helperText}>
              You won't be charged yet{" "}
            </Card.Text>
            <div>
              <Card.Text
                className={`d-flex flex-row justify-content-between ${styles.priceListText}`}
              >
                {" "}
                <span> Base price </span>{" "}
                <span>₹{this.state.home.price * noOfDays}</span>{" "}
              </Card.Text>
              <Card.Text
                className={`d-flex flex-row justify-content-between ${styles.priceListText}`}
              >
                {" "}
                <span> 18% GST inclusive</span>{" "}
                <span>
                  ₹{Math.floor((this.state.home.price * 18) / 100) * noOfDays}
                </span>{" "}
              </Card.Text>
            </div>
            <hr />
            <Card.Text className="d-flex flex-row justify-content-between">
              {" "}
              <span className="font-weight-bold"> Total </span>{" "}
              <span className="font-weight-bold">
                ₹
                {Math.floor(
                  (this.state.home.price * 18) / 100 + this.state.home.price
                ) * noOfDays}
              </span>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.entityReducer.data,
  bookedDates: state.entityReducer.bookedDates,
  totalPrice: state.entityReducer.totalPrice,
  user: state.authReducer.user,
  isAuth: state.authReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  calculateTotalPrice: (payload) => dispatch(calculateTotalPrice(payload)),
  getDetailsOfBooking: (payload) => dispatch(getDetailsOfBooking(payload)),
  tokenValidateUser: (payload) => dispatch(tokenValidateUser(payload)),
  closeLoginModal: () => dispatch(closeLoginModal()),
});
// export default PriceDetails;
export default connect(mapStateToProps, mapDispatchToProps)(PriceDetails);
