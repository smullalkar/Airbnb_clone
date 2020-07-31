import React, { Component, version } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./SearchBar.module.css";
import { DateRangePicker } from "react-dates";
import { Link } from "react-router-dom";
import { getData } from "../../../Redux/user/actions";
import { connect } from "react-redux";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import "react-google-places-autocomplete/dist/index.min.css";
import AddGuests from "./AddGuests";
import Autocomplete from "react-google-autocomplete";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: "",
      location: "",
      children: "",
      adults: "",
      infants: "",
      page_no: 1,
      query: "",
      showGuests: false,
      guestCount: 0,
      obj:{}
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.handleQuery();
    });
  };

  handleCity = (e) => {
    this.setState({ location: e.target.value }, () => {
      this.handleQuery();
    });
  };

  componentDidMount() {
    let query = window.location.href.split("&");
    var queryString = new URLSearchParams("/location?");
    for (let i = 1; i < query.length; i++) {
      let str = query[i].split("=");
      if (str[1] !== "null" && str[1] !== "") {
        queryString.append(str[0], str[1]);
      }
    }
    this.setState({ query: queryString }, () => {
      console.log(queryString.toString());
    });
  }
  handleQuery = () => {
    let string = new URLSearchParams("/location/?");
    const {
      startDate,
      endDate,
      location,
      children,
      adults,
      infants,
      page_no,
    } = this.state;
    if (location !== "") {
      string.append("location", location);
    }
    if (startDate !== null) {
      string.append(
        "checkin",
        startDate._d
          .toLocaleDateString()
          .split("/")
          .join("-")
          .split("-")
          .reverse()
          .join("-")
      );
      string.append(
        "checkout",
        endDate._d
          .toLocaleDateString()
          .split("/")
          .join("-")
          .split("-")
          .reverse()
          .join("-")
      );
    }
    if (children !== 0) {
      string.append("children", children);
    }
    if (adults !== 0) {
      string.append("adults", adults);
    }
    if (infants !== 0) {
      string.append("infants", infants);
    }
    if (page_no > 1) {
      string.append("page_no", page_no);
    }
    this.setState({ query: string.toString() }, () => {});
  };

  onFormGroupClick = (e) => {
    e.preventDefault();
    this.setState({
      showGuests: !this.state.showGuests,
    });
  };

  updateGuestCount = (key) => {
    const { obj } = this.state
    obj[key] = Number(this.state[key]) + 1;
    obj.guestCount = this.state.guestCount + 1;
    this.setState({ obj: obj }, () => {
      console.log(this.state)
      this.handleQuery();
    });
  };

  removeGuest = (key) => {
    const { obj } = this.state
    obj[key] = Number(this.state[key]) - 1;
    obj.guestCount = this.state.guestCount - 1;
    if (obj.guestCount < 0) {
      obj.guestCount = 0;
    }
    this.setState({ obj: obj }, () => {
      this.handleQuery();
    });
  };

  render() {
    let { query, location } = this.state;
    return (
      <div className="d-flex justify-content-center">
        <Form className={styles.searchContainer}>
          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>LOCATION</Form.Label>
            <Autocomplete
              className="form-control"
              value={location}
              onChange={this.handleCity}
              placeholder="where are you going?"
              style={{ width: "90%", height: "47px", fontSize: 12 }}
              onPlaceSelected={(place) => {
                this.setState(
                  { location: place.formatted_address.split(",")[0] },
                  () => {
                    this.handleQuery();
                  }
                );
              }}
              types={["(regions)"]}
              componentRestrictions={{ country: "in" }}
            />
          </Form.Group>
          <Form.Group className={`${styles.formGroup} d-none d-md-block`}>
            <div>
              <Form.Label className={`${styles.formLabel} ${styles.dateLabel}`}>
                CHECK IN
              </Form.Label>
              <Form.Label
                className={`${styles.formLabel} ${styles.dateLabel} ${styles.checkoutLabel}`}
              >
                CHECK OUT
              </Form.Label>
            </div>

            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="your_unique_start_date_id"
              endDate={this.state.endDate}
              endDateId="your_unique_end_date_id"
              onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              }
              focusedInput={this.state.focusedInput}
              onFocusChange={(focusedInput) => this.setState({ focusedInput })}
              startDatePlaceholderText="Add dates"
              endDatePlaceholderText="Add dates"
            ></DateRangePicker>
          </Form.Group>

          <Form.Group
            className={`${styles.formGroup} d-none d-md-block`}
            onClick={this.onFormGroupClick}
          >
            <Form.Label className={styles.formLabel}>GUESTS</Form.Label>

            <Form.Control
              className={styles.formControl}
              type="text"
              name="adults"
              onChange={this.handleChange}
              placeholder={
                this.state.guestCount === 0
                  ? "add guest"
                  : this.state.guestCount
              }
            />

            <AddGuests
              adults={this.state.adults}
              children={this.state.children}
              infants={this.state.infants}
              showGuests={this.state.showGuests}
              addGuest={this.updateGuestCount}
              removeGuest={this.removeGuest}
            />
          </Form.Group>

          <Form.Group className={styles.formGroup}>
            <Button className={styles.btn} onClick={this.handleSearch}>
              <Link
                to={query.toString()}
                style={{ color: "white", textDecoration: "none" }}
              >
                Search{" "}
              </Link>
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  getData: (payload) => dispatch(getData(payload)),
});

export default connect(null, mapStateToProps)(Search);
