import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./SearchBar.module.css";
import { DateRangePicker } from "react-dates";
import { Link } from "react-router-dom";
import { getData } from "../../../Redux/user/actions";
import { connect } from "react-redux";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import "react-google-places-autocomplete/dist/index.min.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: "",
      location: "",
      windowSLocation: "",
      children: "",
      adults: "",
      infants: "",
      page_no: 1,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSearch = () => {
    const { getData } = this.props;
    const {
      startDate,
      endDate,
      location,
      children,
      infants,
      adults,
      page_no,
    } = this.state;

    if (startDate && endDate) {
      var object = {
        location: location,
        checkin: startDate._d
          .toLocaleDateString()
          .split("/")
          .join("-")
          .split("-")
          .reverse()
          .join("-"),
        checkout: endDate._d
          .toLocaleDateString()
          .split("/")
          .join("-")
          .split("-")
          .reverse()
          .join("-"),
        children: children || 0,
        adults: adults || 0,
        infants: infants || 0,
        page_no: page_no || 1,
      };
      getData(object);
    }
  };
  componentDidMount() {
    this.setState({ windowSLocation: window.location.href });
  }

  render() {
    const { match } = this.props;
    let {
      startDate,
      endDate,
      location,
      children,
      adults,
      infants,
      page_no,
      windowSLocation,
    } = this.state;
    if (startDate && endDate) {
      startDate = startDate._d
        .toLocaleDateString()
        .split("/")
        .join("-")
        .split("-")
        .reverse()
        .join("-");
      endDate = endDate._d
        .toLocaleDateString()
        .split("/")
        .join("-")
        .split("-")
        .reverse()
        .join("-");
    }
    return (
      <div className="d-flex justify-content-center">
        <Form className={styles.searchContainer}>
          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>LOCATION</Form.Label>
            <Form.Control
              className={styles.formControl}
              type="text"
              name="location"
              onChange={this.handleChange}
              value={this.state.location}
              placeholder="where you are going?"
            />

            {/* <div>
              <GooglePlacesAutocomplete onSelect={console.log} />
            </div> */}
          </Form.Group>
          <Form.Group className={styles.formGroup}>
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

          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>GUESTS</Form.Label>
            <Form.Control
              className={styles.formControl}
              type="text"
              name="adults"
              value={this.state.adults}
              onChange={this.handleChange}
              placeholder="Add guests"
            />
          </Form.Group>

          <Form.Group className={styles.formGroup}>
            <Button className={styles.btn} onClick={this.handleSearch}>
              <Link
                to={`/location?&query=${location}&checkin=${startDate}&checkout=${endDate}&children=${children}&adults=${adults}&infants=${infants}&per_page=${20}&page_no=${page_no}`}
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

// export default Search;
const mapStateToProps = (dispatch) => ({
  getData: (payload) => dispatch(getData(payload)),
});

export default connect(null, mapStateToProps)(Search);
