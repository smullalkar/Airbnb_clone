import React, { Component } from "react";

import { Card, Row, Col, Button } from "react-bootstrap";
import { connnect, connect } from "react-redux";
import styles from "./Amenities.module.css";
import MoreAmeneties from "./MoreAmeneties";

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
      var kitchenA = {},
        wifiA = {},
        washingA = {},
        workSpaceA = {},
        TvA = {},
        ironingA = {},
        breakfastA = {},
        indoorFirePlaceA = {};
      var amenities = data[0].data.data[0].amenity.split(",");
      for (var i = 0; i < amenities.length; i++) {
        if (amenities[i] != "Kitchen") {
          kitchenA.textDecoration = "line-through";

        }
        if (amenities[i] != "Wifi") {
          wifiA.textDecoration = "line-through";
        }
        if (amenities[i] != "Washing machine") {
          washingA.textDecoration = "line-through";
        }
        if (amenities[i] != "Tv") {
          TvA.textDecoration = "line-through";
        }
        if (amenities[i] != "Workspace") {
          workSpaceA.textDecoration = "line-through";
        }
        if (amenities[i] != "Breakfast") {
          breakfastA.textDecoration = "line-through";
        }
        if (amenities[i] != "Indoor Fire Place") {
          indoorFirePlaceA.textDecoration = "line-through";
        }
        if (amenities[i] != "Ironing") {
          ironingA.textDecoration = "line-through";
        }
      }
    }
    return (
      <div className="p-4">
        <div>
          <h4 className="font-weight-bold">Amenities</h4>
          <div className="d-flex flex-column col-6 justify-content-start">
            <Row xs={1} md={2}>
              <Col className={styles.amneityItem} sm={12} md={12} lg={6} >
                {" "}
                <span>
                  {" "}
                  <img className="mx-2" src={kitchen} alt="kitchen" />{" "}
                </span>{" "}
                {/* {console.log(kitchen)} */}
                <span style={kitchenA}>Kitchen</span>
              </Col>
              <Col className={styles.amneityItem} sm={12} md={12} lg={6}  >
                {" "}
                <span>
                  {" "}
                  <img className="mx-2" src={wifi} alt="wifi" />{" "}
                </span>{" "}
                <span style={wifiA}>Wifi</span>
              </Col>
              <Col className={styles.amneityItem} sm={12} md={12} lg={6}>
                {" "}
                <span>
                  {" "}
                  <img className="mx-2" src={wash} alt="washing" />{" "}
                </span>{" "}
                <span style={washingA}>Washing machine</span>{" "}
              </Col>
              <Col className={styles.amneityItem} sm={12} md={12} lg={6}>
                {" "}
                <span>
                  {" "}
                  <img className="mx-2" src={ironing} alt="essential" />{" "}
                </span>{" "}
                <span style={ironingA}>Ironing</span>{" "}
              </Col>
              <Col className={styles.amneityItem} sm={12} md={12} lg={6}>
                {" "}
                <span>
                  {" "}
                  <img
                    className="mx-2"
                    src={workspace}
                    alt="Laptop-riendly workspace"
                  />{" "}
                </span>
                <span style={workSpaceA}> Workspace </span>
              </Col>
              <Col className={styles.amneityItem} sm={12} md={12} lg={6}>
                {" "}
                <span>
                  {" "}
                  <img className="mx-2" src={breakfast} alt="Breakfast" />{" "}
                </span>{" "}
                <span style={breakfastA}>Breakfast</span>
              </Col>
              <Col className={styles.amneityItem} sm={12} md={12} lg={6}>
                {" "}
                <span>
                  {" "}
                  <img className="mx-2" src={Tv} alt="Tv" />{" "}
                </span>{" "}
                <span style={TvA}>Tv</span>
              </Col>
              <Col className={styles.amneityItem} sm={12} md={12} lg={6}>
                {" "}
                <span>
                  {" "}
                  <img className="mx-2" src={fire} alt="Fire" />{" "}
                </span>{" "}
                <span style={indoorFirePlaceA}>Indoor Fire Place</span>
              </Col>
            </Row>
            {/* <Button
              variant="outline-secondary"
              className={styles.showAllBtn}
              size="lg"
              onClick={() => this.setState({ showMoreAmenities: true })}


            >
              Show all amenitis
            </Button> */}
            <MoreAmeneties
              show={this.state.showMoreAmenities}
              handleMoreAmenitiesClose={this.handleMoreAmenitiesClose}
            />
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

// export default Amenities;
