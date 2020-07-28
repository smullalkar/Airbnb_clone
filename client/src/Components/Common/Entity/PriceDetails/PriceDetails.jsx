import React, { Component } from "react";
import {
  Card,
  Button,
  Nav,
  Form,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import styles from "./PriceDetails.module.css";
import { DateRangePicker } from "react-dates";
import AddGuestsEntity from "./AddGuestsEntity";
import { connect } from "react-redux";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

class PriceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: [],
      bookedDateRange: [],
      startDate: null,
      endDate: null,
      focusedInput: null,
      startDate: new Date(),
    };
  }
  componentDidMount() {
    const { data } = this.props;
    console.log(data);
  }
  componentDidUpdate(prevProps, prevState) {
    const { data, bookedDates } = this.props;
    if (prevState.home.length === 0) {
      data.map((item) => this.setState({ home: item.data.data[0] }, () => {}));
    }
    if (prevState.bookedDateRange.length === 0) {
      let arr = [];
      console.log(bookedDates);
      if (bookedDates[0] !== undefined) {
        bookedDates &&
          bookedDates[0].data.map((item) => {
            arr.push(item.bookingDate.split(" ")[0]);
          });
        this.setState({ bookedDateRange: arr }, () => {});
      }
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
    console.log(date);
  };

  render() {
    const { home, bookedDateRange, isOutsideRange, startDate } = this.state;
    console.log(home);
    //  bookedDateRange
    return (
      <div>
        <Card className={styles.pricedetailsCard}>
          <Card.Body>
            <div className="d-flex flex-row justify-content-between">
              <Card.Text className={styles.priceCont}>
                {" "}
                {/* <span
                  className={`${styles.amountSpan} ${styles.discountAmount}`}
                >
                  999{" "}
                </span>{" "} */}
                <span className={styles.amountSpan}>₹{home.price} </span> /
                night
              </Card.Text>
              <Card.Text>
                <div className="d-flex align-items-center">
                  <span className={styles.ratingStar}>&#9733;</span>
                  <span className={styles.rating}>{home.rating}</span>
                  <span className={styles.numrated}>({home.ratingcount})</span>
                </div>
              </Card.Text>
            </div>
            <Card>
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
                    <DayPicker
                      initialMonth={new Date()}
                      selectedDays={[bookedDateRange.forEach(item=>{
                          let day = item.split("-").map(Number)
                          new Date(day[0],day[1],day[2])
                      })]}
                    />
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
            <Button className="mt-2" size="lg" block>
              Reserve{" "}
            </Button>
            <Card.Text className={styles.helperText}>
              You won't be charged yet{" "}
            </Card.Text>
            <div>
              <Card.Text
                className={`d-flex flex-row justify-content-between ${styles.priceListText}`}
              >
                {" "}
                <span> ₹1,650 x 2 nights</span> <span>₹3,300</span>{" "}
              </Card.Text>
              <Card.Text
                className={`d-flex flex-row justify-content-between ${styles.priceListText}`}
              >
                {" "}
                <span> ₹1,650 x 2 nights</span> <span>₹3,300</span>{" "}
              </Card.Text>
              <Card.Text
                className={`d-flex flex-row justify-content-between ${styles.priceListText}`}
              >
                {" "}
                <span> ₹1,650 x 2 nights</span> <span>₹3,300</span>{" "}
              </Card.Text>
              <Card.Text
                className={`d-flex flex-row justify-content-between ${styles.priceListText}`}
              >
                {" "}
                <span> ₹1,650 x 2 nights</span> <span>₹3,300</span>{" "}
              </Card.Text>
            </div>
            <hr />
            <Card.Text className="d-flex flex-row justify-content-between">
              {" "}
              <span className="font-weight-bold"> Total </span>{" "}
              <span className="font-weight-bold">₹3,300</span>{" "}
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
});

// export default PriceDetails;
export default connect(mapStateToProps, null)(PriceDetails);
