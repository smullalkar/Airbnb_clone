import React, { Component } from "react";
import { Button, Card, Modal, Form, ModalDialog } from "react-bootstrap";
import styles from "./Filters.module.css";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

class MoreFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      beds: 0,
      bedrooms: 0,
      bathrooms: 0,
      amenityArr: [],
      facilityArr: [],
      propertYarr: [],
    };
  }
  handleChange = (e) => {
    const { amenities, propertyTypes, facilities } = this.props;
    const { amenityArr, facilityArr, propertYarr } = this.state;
    let query = window.location.href.split("&");
    var queryString = new URLSearchParams("/location?");
    for (let i = 1; i < query.length; i++) {
      let str = query[i].split("=");
      if (str[1] !== "null" && str[1] !== "") {
        queryString.append(str[0], str[1]);
      }
    }
    if (e.target.checked) {
      var aValue = amenities.find(
        (item) => item.amenityName === e.target.value
      );
      if (aValue !== undefined) {
        this.setState({
          amenityArr: [...amenityArr, aValue.amenityName],
        });
      }
      let fValue = facilities.find(
        (item) => item.facilityName === e.target.value
      );
      if (fValue !== undefined) {
        this.setState(
          { facilityArr: [...this.state.facilityArr, fValue.facilityName] },
          () => {}
        );
      }
      let pValue = propertyTypes.find(
        (item) => item.propertName === e.target.value
      );
      if (pValue !== undefined) {
        this.setState(
          { propertYarr: [...this.state.propertYarr, pValue.propertName] },
          () => {}
        );
      }
    }
  };
  handleClick = () => {};
  render() {
    const {
      show,
      handleMoreFiltersClose,
      amenities,
      facilities,
      propertyTypes,
    } = this.props;
    const { beds, bedrooms, bathrooms } = this.state;
    return (
      <div>
        <Modal
          size="lg"
          show={show}
          className={styles.moreFilterModal}
          onHide={handleMoreFiltersClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>More Filters</Modal.Title>
          </Modal.Header>
          <ModalDialog scrollable={true} size="lg">
            <Modal.Body>
              <div>
                <div className="row">
                  <div className=" col-8 mt-3">
                    <h6 className="font-weight-bold">Beds</h6>
                  </div>
                  <div className=" col-4 mt-3">
                    <div className="d-flex flex-row bd-highlight ">
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
                      <div className="  mx-1 bd-highlight">
                        {" "}
                        <p> {beds} </p>
                      </div>
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
                    <div className="d-flex flex-row bd-highlight ">
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
                      <div className="  mx-1 bd-highlight">
                        <p> {bedrooms}</p>
                      </div>
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
                    <div className="d-flex flex-row bd-highlight ">
                      <div className=" mx-1 bd-highlight">
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
                      <div className="  mx-1 bd-highlight">
                        <p>{bathrooms}</p>
                      </div>
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
                            className={styles.cancellationCardCheckBox}
                            type="checkbox"
                            value={item.amenityName}
                            label={item.amenityName}
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
                            onChange={this.handleChange}
                            key={uuidv4()}
                            className={styles.cancellationCardCheckBox}
                            type="checkbox"
                            value={item.amenityName}
                            label={item.amenityName}
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
                <h3 className="font-weight-bold">Facilities</h3>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column col-6 justify-content-start">
                    {facilities &&
                      facilities.map((item, index) =>
                        index < 2 ? (
                          <Form.Check
                            onChange={this.handleChange}
                            className={styles.cancellationCardCheckBox}
                            type="checkbox"
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
                        index > 2 ? (
                          <Form.Check
                            onChange={this.handleChange}
                            className={styles.cancellationCardCheckBox}
                            type="checkbox"
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
                <h3 className="font-weight-bold">Property type</h3>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column col-6 justify-content-start">
                    <Form.Check
                      className={styles.cancellationCardCheckBox}
                      type="checkbox"
                      label="House"
                    />
                  </div>
                  <div className="d-flex flex-column col-6 ">
                    <Form.Check
                      className={styles.cancellationCardCheckBox}
                      type="checkbox"
                      label="Guest suite"
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
          </ModalDialog>
          <Modal.Footer>
            {/* <a className={styles.cancellationCardClear} href="">
              Clear
            </a> */}
            <Button className={styles.cancellationCardSave}>Show Stay</Button>
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
// export default MoreFilter;
