import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import styles from "./Filters.module.css";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

class MoreFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      beds: 0,
      bedrooms: 0,
      bathrooms: 0,
      Air_conditioning: false,
      Washer: false,
      Dryer: false,
      Wifi: false,
      Breakfast: false,
      Indoor_fireplace: false,
      Hangers: false,
      Iron: false,
      Hair_dryer: false,
      Laptop_friendly_workspace: false,
      TV: false,
      Crib: false,
      High_chair: false,
      Self_check_in: false,
      Smoke_alarm: false,
      Carbon_monoxide_alarm: false,
      Private_bathroom: false,
      Pets_allowed: false,
      Smoking_allowed: false,
      Free_parking_on_premises: false,
      Gym: false,
      Hot_tub: false,
      Pool: false,
      query: "",
    };
  }

  handleChange = (e) => {
    let { amenities, facilities, propertyTypes } = this.props;
    let query = window.location.href.split("&");
    var queryString = new URLSearchParams("/location?");
    for (let i = 1; i < query.length; i++) {
      let str = query[i].split("=");
      if (str[1] !== "null" && str[1] !== "") {
        queryString.append(str[0], str[1]);
      }
    }
    if (e.target.checked) {
      this.setState({ [e.target.value]: !this.state[e.target.value] }, () => {
        var key;
        for (key in this.state) {
          if (this.state[key] === true) {
            amenities.map((item) => {
              if (
                item.amenityName.split(" ").join("_").split("-").join("") ===
                key
              ) {
                queryString.append("amenities", key);
              }
            });
            facilities.map((item) => {
              if (
                item.facilityName.split(" ").join("_").split("-").join("") ===
                key
              ) {
                queryString.append("facilities", key);
              }
            });
          }
        }
        queryString.append("beds", this.state.beds);
        queryString.append("bedrooms", this.state.bedrooms);
        queryString.append("bathrooms", this.state.bathrooms);
        this.setState({ query: queryString }, () => {});
      });
    } else {
      this.setState({ [e.target.value]: !this.state[e.target.value] }, () => {
        var key;
        for (key in this.state) {
          if (this.state[key] === true) {
            amenities.map((item) => {
              if (
                item.amenityName.split(" ").join("_").split("-").join("") ===
                key
              ) {
                queryString.append("amenities", key);
              }
            });
            facilities.map((item) => {
              if (
                item.facilityName.split(" ").join("_").split("-").join("") ===
                key
              ) {
                queryString.append("facilities", key);
              }
            });
          }
        }
        queryString.append("beds", this.state.beds);
        queryString.append("bedrooms", this.state.bedrooms);
        queryString.append("bathrooms", this.state.bathrooms);
        this.setState({ query: queryString }, () => {});
      });
    }
  };

  render() {
    let {
      show,
      handleMoreFiltersClose,
      amenities,
      facilities,
      propertyTypes,
    } = this.props;
    const { beds, bedrooms, bathrooms, filterArray, query } = this.state;
    console.log("query  ", query);
    return (
      <div>
        <Modal
          size=""
          scrollable={true}
          show={show}
          className={styles.moreFilterModal}
          onHide={handleMoreFiltersClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>More Filters</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              <div className="row">
                <div className=" col-8 mt-3">
                  <h6 className="font-weight-bold">Beds</h6>
                </div>
                <div className=" col-4 mt-3">
                  <div className="d-flex flex-row bd-highlight align-items-center ">
                    <div className=" mx-1 bd-highlight">
                      {" "}
                      <button
                        onClick={() => {
                          this.setState({ beds: Number(beds - 1) || 0 });
                        }}
                        className={styles.guestButton}
                      >
                        -
                      </button>
                    </div>
                    <div className="  mx-1 bd-highlight"> {beds}</div>
                    <div className="  mx-1 bd-highlight">
                      <button
                        onClick={() => {
                          this.setState({ beds: Number(beds + 1) || 0 });
                        }}
                        className={styles.guestButton}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className=" col-8 mt-3">
                  <h6 className="font-weight-bold">Bedrooms</h6>
                </div>
                <div className=" col-4 mt-3">
                  <div className="d-flex flex-row bd-highlight align-items-center ">
                    <div className=" mx-1 bd-highlight">
                      {" "}
                      <button
                        onClick={() => {
                          this.setState({
                            bedrooms: Number(bedrooms - 1) || 0,
                          });
                        }}
                        className={styles.guestButton}
                      >
                        -
                      </button>
                    </div>
                    <div className="  mx-1 bd-highlight">{bedrooms}</div>
                    <div className="  mx-1 bd-highlight">
                      <button
                        onClick={() => {
                          this.setState({
                            bedrooms: Number(bedrooms + 1) || 0,
                          });
                        }}
                        className={styles.guestButton}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className=" col-8 mt-3">
                  <h6 className="font-weight-bold">Bathrooms</h6>
                </div>
                <div className=" col-4 mt-3">
                  <div className="d-flex flex-row bd-highlight d-flex flex-row bd-highlight ">
                    <div className=" mx-1 bd-highlight ">
                      {" "}
                      <button
                        onClick={() => {
                          this.setState({
                            bathrooms: Number(bathrooms - 1) || 1,
                          });
                        }}
                        className={styles.guestButton}
                      >
                        -
                      </button>
                    </div>
                    <div className="  mx-1 bd-highlight">{bathrooms}</div>
                    <div className="  mx-1 bd-highlight">
                      <button
                        onClick={() => {
                          this.setState({
                            bathrooms: Number(bathrooms + 1) || 1,
                          });
                        }}
                        className={styles.guestButton}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <h3 className="font-weight-bold text-left">Amenities</h3>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column col-6 justify-content-start">
                  {amenities &&
                    amenities.map((item, index) =>
                      index < 10 ? (
                        <Form.Check
                          onChange={this.handleChange}
                          key={uuidv4()}
                          name="amenities"
                          className={styles.cancellationCardCheckBox}
                          type="checkbox"
                          checked={
                            this.state[
                              item.amenityName
                                .split(" ")
                                .join("_")
                                .split("-")
                                .join("")
                            ]
                          }
                          value={item.amenityName
                            .split(" ")
                            .join("_")
                            .split("-")
                            .join("_")}
                          label={item.amenityName
                            .split(" ")
                            .join("_")
                            .split("-")
                            .join("_")}
                        />
                      ) : (
                        ""
                      )
                    )}
                </div>
                <div className="d-flex flex-column col-6 ">
                  {amenities &&
                    amenities.map((item, index) =>
                      index >= 10 ? (
                        <Form.Check
                          name="amenities"
                          onChange={this.handleChange}
                          key={uuidv4()}
                          id={item.id}
                          className={styles.cancellationCardCheckBox}
                          type="checkbox"
                          checked={
                            this.state[
                              item.amenityName
                                .split(" ")
                                .join("_")
                                .split("-")
                                .join("")
                            ]
                          }
                          value={item.amenityName
                            .split(" ")
                            .join("_")
                            .split("-")
                            .join("_")}
                          label={item.amenityName
                            .split(" ")
                            .join("_")
                            .split("-")
                            .join("_")}
                        />
                      ) : (
                        ""
                      )
                    )}
                </div>
              </div>
              <hr />
              <div>
                <h3 className="font-weight-bold">Facilities</h3>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column col-6 justify-content-start">
                    {facilities &&
                      facilities.map((item, index) =>
                        index < 2 ? (
                          <Form.Check
                            key={uuidv4()}
                            onChange={this.handleChange}
                            className={styles.cancellationCardCheckBox}
                            type="checkbox"
                            name="facilities"
                            id={item.id}
                            checked={
                              this.state[
                                item.facilityName
                                  .split(" ")
                                  .join("_")
                                  .split("-")
                                  .join("")
                              ]
                            }
                            label={item.facilityName}
                            value={item.facilityName}
                          />
                        ) : (
                          ""
                        )
                      )}
                  </div>
                  <div className="d-flex flex-column col-6 ">
                    {facilities &&
                      facilities.map((item, index) =>
                        index > 1 ? (
                          <Form.Check
                            onChange={this.handleChange}
                            className={styles.cancellationCardCheckBox}
                            type="checkbox"
                            key={uuidv4()}
                            name="facilities"
                            id={item.id}
                            checked={
                              this.state[
                                item.facilityName
                                  .split(" ")
                                  .join("_")
                                  .split("-")
                                  .join("")
                              ]
                            }
                            label={item.facilityName}
                            value={item.facilityName}
                          />
                        ) : (
                          ""
                        )
                      )}
                  </div>
                </div>
              </div>

              <hr />
              <div>
                {/* <h3 className="font-weight-bold">Property type</h3>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column col-6 justify-content-start"> */}
                {/* {propertyTypes &&
                      propertyTypes.map((item, index) =>
                        index > 2 ? (
                          <Form.Check
                            onChange={this.handleChange}
                            className={styles.cancellationCardCheckBox}
                            type="checkbox"
                            name="propertyType"
                            checked={this.state[item.propertyName.split(" ").join("_").split("-").join("")]}
                            label={item.propertyName}
                            value={item.propertyName}
                            id={item.id}
                          />
                        ) : (
                          ""
                        )
                      )} */}
                {/* </div>
                  <div className="d-flex flex-column col-6 "> */}
                {/* {propertyTypes &&
                      propertyTypes.map((item, index) =>
                        index > 2 ? (
                          <Form.Check
                            onChange={this.handleChange}
                            className={styles.cancellationCardCheckBox}
                            type="checkbox"
                            name="propertyType"
                            id={item.id}
                            checked={this.state[item.propertyName.split(" ").join("_").split("-").join("")]}
                            label={item.propertyName}
                            value={item.propertyName}
                          />
                        ) : (
                          ""
                        )
                      )} */}
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              onClick={this.handleChange}
              className={styles.cancellationCardSave}
            >
              {" "}
              {console.log(" query it is", query.toString())}
              <Link
                to={query.toString()}
                style={{ color: "white", textDecoration: "none" }}
              >
                Show Stay
              </Link>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  amenities: state.userReducer.amenities,
  facilities: state.userReducer.facilities,
  propertyTypes: state.userReducer.propertyTypes,
});
export default connect(mapStateToProps, null)(MoreFilter);
