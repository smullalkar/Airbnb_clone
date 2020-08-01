import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import key from "../../../assets/images/superhost.png";
import parking from "../../../assets/images/parking.png";
import smoking from "../../../assets/images/smoking.png";
import animal from "../../../assets/images/dog.png";
import children from "../../../assets/images/children.png";
import PriceCard from "./PriceCard";
import ConfirmAndPay from "./ConfirmAndPay";

import styles from "./ReviewHouseRules.module.css";

class ReviewHouseRules extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.props;
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item active>1. Review house rules</Breadcrumb.Item>
          <Breadcrumb.Item>2. Confirm and pay</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col md={8} className="pl-5">
            <h4 className={styles.title}>Review House Rules</h4>

            <h6 className="mt-5">2 nights in Puducherry</h6>
            <Row>
              <Col className="d-flex align-items-center">
                <span className={styles.dayWrapper}>
                  <span>JUL</span>
                  <span>31</span>{" "}
                </span>

                <span className={styles.dateText}>
                  Friday check-in
                  <br />
                  After 12:00 pm
                </span>
              </Col>
              <Col className="d-flex align-items-center">
                <span className={styles.dayWrapper}>
                  <span>JUL</span>
                  <span>31</span>{" "}
                </span>

                <span className={styles.dateText}>
                  Sunday checkout
                  <br />
                  11:00 am
                </span>
              </Col>
            </Row>

            <Row>
              <Col>
                <img src={key} alt="" /> Self check-in with building staff{" "}
              </Col>
            </Row>

            <hr />

            <h6>Things to keep in mind</h6>
            <Row className={styles.cancelationPolicy}>
              <Col>
                The host hasn't reported a carbon monoxide detector on the
                property. We suggest bringing a portable detector for your trip.
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <img className={styles.icon} src={children} alt="" />
                <span className={styles.keepInMindText}>
                  Suitable for children and infants
                </span>
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <img className={styles.icon} src={animal} alt="" />
                <span className={styles.keepInMindText}>Pets allowed</span>
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <img className={styles.icon} src={smoking} alt="" />
                <span className={styles.keepInMindText}>Smoking allowed</span>
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <img className={styles.icon} src={parking} alt="" />
                <span className={styles.keepInMindText}>
                  No parking on property
                </span>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <PriceCard />
            <ConfirmAndPay />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReviewHouseRules;
