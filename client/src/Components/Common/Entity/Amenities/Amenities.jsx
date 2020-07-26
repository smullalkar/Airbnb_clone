import React, { Component } from "react";

import { Card, Row, Col } from "react-bootstrap";

import styles from './Amenities.module.css';

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

        };
    }

    render() {
        return (

            <div>

                <div>
                    <h3 class={styles.entityTitle}>Amenities</h3>
                    <div className="d-flex flex-column col-6 justify-content-start">
                        <Row xs={2}>
                            <Col className={styles.amneityItem}> <span> <img src={kitchen} alt="kitchen" /> </span> Kitchen </Col>
                            <Col className={styles.amneityItem}>  <span> <img src={wifi} alt="wifi" /> </span> Wifi</Col>
                            <Col className={styles.amneityItem}>  <span> <img src={wash} alt="washing" /> </span> Washing machine </Col>
                            <Col className={styles.amneityItem}>  <span> <img src={ironing} alt="essential" /> </span> Ironing </Col>
                            <Col className={styles.amneityItem}>  <span> <img src={workspace} alt="Laptop-riendly workspace" /> </span> Laptop-riendly workspace</Col>
                            <Col className={styles.amneityItem}>  <span> <img src={breakfast} alt="Breakfast" /> </span> Breakfat</Col>
                            <Col className={styles.amneityItem}>  <span> <img src={Tv} alt="Tv" /> </span> Tv</Col>
                            <Col className={styles.amneityItem}>  <span> <img src={fire} alt="Fire" /> </span> Indoor Fire Place</Col>
                        </Row>

                        <button>Show all amenitis</button>

                    </div>
                </div>

            </div>



        );
    }
}

export default Amenities;