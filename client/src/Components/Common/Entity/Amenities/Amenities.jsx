import React, { Component } from "react";

import { Card, Row, Col, Button } from "react-bootstrap";

import styles from './Amenities.module.css';
import MoreAmeneties from "./MoreAmeneties"

import wifi from "../../../../assets/images/wifi.svg"
import kitchen from "../../../../assets/images/kitchen.png"
import wash from "../../../../assets/images/wash.png"
import ironing from "../../../../assets/images/iron.png"
import workspace from "../../../../assets/images/workspace.png"
import breakfast from "../../../../assets/images/food.png"
import Tv from "../../../../assets/images/tv.png"
import fire from "../../../../assets/images/fire.png"



class Amenities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMoreAmenities: false
        };
    }

    handleMoreAmenitiesClose = () => {
        this.setState({ showMoreAmenities: false })
    }

    render() {
        return (

            <div className="p-4">

                <div>
                    <h4 className="font-weight-bold">Amenities</h4>
                    <div className="d-flex flex-column col-6 justify-content-start">
                        <Row xs={2}>
                            <Col className={styles.amneityItem}> <span> <img className="mx-2" src={kitchen} alt="kitchen" /> </span> Kitchen </Col>
                            <Col className={styles.amneityItem}>  <span> <img className="mx-2" src={wifi} alt="wifi" /> </span> Wifi</Col>
                            <Col className={styles.amneityItem}>  <span> <img className="mx-2" src={wash} alt="washing" /> </span> Washing machine </Col>
                            <Col className={styles.amneityItem}>  <span> <img className="mx-2" src={ironing} alt="essential" /> </span> Ironing </Col>
                            <Col className={styles.amneityItem}>  <span> <img className="mx-2" src={workspace} alt="Laptop-riendly workspace" /> </span>Workspace</Col>
                            <Col className={styles.amneityItem}>  <span> <img className="mx-2" src={breakfast} alt="Breakfast" /> </span> Breakfat</Col>
                            <Col className={styles.amneityItem}>  <span> <img className="mx-2" src={Tv} alt="Tv" /> </span> Tv</Col>
                            <Col className={styles.amneityItem}>  <span> <img className="mx-2" src={fire} alt="Fire" /> </span> Indoor Fire Place</Col>
                        </Row>


                        <Button variant="outline-secondary" className={styles.showAllBtn} size="lg" onClick={() => this.setState({ showMoreAmenities: true })}>Show all amenitis</Button>
                        <MoreAmeneties show={this.state.showMoreAmenities} handleMoreAmenitiesClose={this.handleMoreAmenitiesClose} />
                    </div>
                </div>

            </div>



        );
    }
}

export default Amenities;