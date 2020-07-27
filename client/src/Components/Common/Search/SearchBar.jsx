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
      children: "",
      adults: "",
      infants: "",
      page_no: 1,
      query: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
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
    if (children !== "") {
      string.append("children", children);
    }
    if (adults !== "") {
      string.append("adults", adults);
    }
    if (infants !== "") {
      string.append("infants", infants);
    }
    if (page_no > 1) {
      string.append("page_no", page_no);
    }
    this.setState({ query: string.toString() }, () => { });
  };

  handleSearch = () => {
    const { getData } = this.props;
    localStorage.setItem('searchParams', JSON.stringify(this.state))
  };

  render() {
    let { query } = this.state;
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
              <GooglePlacesAutocomplete
                onSelect={(suggestions) => console.log(suggestions)}
              />
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

// export default Search;
const mapStateToProps = (dispatch) => ({
  getData: (payload) => dispatch(getData(payload)),
});

export default connect(null, mapStateToProps)(Search);
