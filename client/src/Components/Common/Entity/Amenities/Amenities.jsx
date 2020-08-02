import React, { Component } from "react";

import { Card, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import styles from "./Amenities.module.css";
import { v4 as uuidv4 } from "uuid";
import wifi from "../../../../assets/images/wifi.svg";
import kitchen from "../../../../assets/images/kitchen.png";
import wash from "../../../../assets/images/wash.png";
import ironing from "../../../../assets/images/iron.png";
import workspace from "../../../../assets/images/workspace.png";
import breakfast from "../../../../assets/images/food.png";
import Tv from "../../../../assets/images/tv.png";
import fire from "../../../../assets/images/fire.png";

class Amenities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreAmenities: false,
    };
  }

  handleMoreAmenitiesClose = () => {
    this.setState({ showMoreAmenities: false });
  };

  render() {
    const { data } = this.props;
    if (data.length !== 0) {
      var amenities = data[0].data.data[0].amenity.split(",");
      let amenityArr = [
        "Kitchen",
        "Wifi",
        "Washer",
        "TV",
        "Laptop-friendly workspace",
        "Breakfast",
        "Indoor fireplace",
        "Shampoo",
        "Heating",
        "Air conditioning",
        "Dryer",
        "Hangers",
        "Iron",
        "Hair dryer",
        "Crib",
        "High chair",
        "Self check-in",
        "Smoke alarm",
        "Carbon monoxide alarm",
        "Private bathroom",
        "Pets allowed",
        "Smoking allowed",
      ];
      var available = [];
      var notAvaiable = [];
      for (var j = 0; j < amenityArr.length; j++) {
        var flag = false;
        for (var i = 0; i < amenities.length; i++) {
          if (amenities[i] === amenityArr[j]) {
            flag = true;
            available.push(amenityArr[j]);
            break;
          }
        }
        if (!flag) {
          notAvaiable.push(amenityArr[j]);
        }
      }
    }
    return (
      <div className="p-4">
        <div>
          <h4 className="font-weight-bold">Amenities</h4>
          <div className="d-flex flex-column">
            <Row>
              {available &&
                available.map((item) => (
                  <Col
                    key={uuidv4()}
                    className={styles.amneityItem}
                    sm={12}
                    md={6}
                    lg={4}
                  >
                    {" "}
                    <i className="fa fa-check pr-1" aria-hidden="true"></i>{" "}
                    <span>{item}</span>
                  </Col>
                ))}
              {notAvaiable &&
                notAvaiable.map((item) => (
                  <Col
                    key={uuidv4()}
                    className={styles.amneityItem}
                    sm={12}
                    md={6}
                    lg={4}
                  >
                    {" "}
                    <i className="fa fa-times" aria-hidden="true"></i>{" "}
                    <span>{item}</span>
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.entityReducer.data,
});

export default connect(mapStateToProps, null)(Amenities);
