import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className={styles.box} fluid>
        <Container className="text-left py-5">
          <Row >
            <Col xs={12} className="py">
              <Col className="py-2 font-weight-bold">ABOUT</Col>
              <Col className="py-2">How Airbnb works</Col>
              <Col className="py-2"> Diversity & Belonging </Col>
              <Col className="py-2">Accessibility </Col>
              <Col className="py-2">Trust & Safety</Col>
              <Col className="py-2">Airbnb Citizen</Col>
              <Col className="py-2"> Olympics </Col>
              <Col className="py-2">Newsroom</Col>
            </Col>
            <Col xs={12}>

              <Col className="py-2 font-weight-bold">COMMUNITY</Col>
              <Col className="py-2">Airbnb Magazine</Col>
              <Col className="py-2">Airbnb Associates</Col>
              <Col className="py-2">Airbnb for Work</Col>
              <Col className="py-2">Invite friends</Col>
              <Col className="py-2">Careers</Col>
            </Col>

            <Col xs={12}>

              <Col className="py-2 font-weight-bold">HOST</Col>
              <Col className="py-2">Host your home</Col>
              <Col className="py-2">Host an online experience</Col>
              <Col className="py-2">Message from CEO Brian Chesky</Col>
              <Col className="py-2">Responsible hosting</Col>
              <Col className="py-2">Open Homes</Col>
              <Col className="py-2">Resource Centre</Col>
              <Col className="py-2">Community Centre</Col>

            </Col>
            <Col xs={12}>

              <Col className="py-2 font-weight-bold">SUPPORT</Col>
              <Col className="py-2">Updates for COVID-19</Col>
              <Col className="py-2">Help Centre</Col>
              <Col className="py-2">Cancellation options</Col>
              <Col className="py-2">Neighbourhood Support</Col>

            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="py-3 mt-5 border-top">
                <Col xs={12} className="d-flex flex-col">
                  <Col lg={6}>© 2020 Airbnb, Inc. All rights reserved</Col>
                  <Col lg={2}>· Privacy </Col>
                  <Col lg={2}>· Terms </Col>
                  <Col lg={2}>· Sitemap</Col>
                </Col>
                <Col xs={12} className="font-weight-bold">
                  <Col className="d-flex flex-right">
                    <Col xs={6} lg={3}>
                      <img
                        src="/globe-grid.svg"
                        width="23px"
                        alt=""
                        className="pr-2"
                      />
                      English(IN)
                    </Col>
                    <Col xs={3} lg={2}>₹INR</Col>
                    <Col lg={1}>
                      <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                    </Col>
                    <Col lg={1}>
                      <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
                    </Col>
                    <Col lg={1}>
                      <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                    </Col>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Footer;
