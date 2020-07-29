import React, { Component } from "react";

import { Card, Row, Col } from 'react-bootstrap'

import styles from "./Billing.module.css"

import cal from "../../../assets/images/cal.png"
import profile from "../../../assets/images/profile.png"

class PriceCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { } = this.props
        return (

            <div>
                <Card>
                    <Card.Body>

                        <Row>
                            <Col>
                                <Card.Text className={styles.title}>Cozy apartment with AC in Pondicherry</Card.Text>
                                <Card.Text>Entire flat in Puducherry</Card.Text>
                                <Card.Text className="d-flex align-items-center"><span className={styles.ratingStar}>&#9733;</span><span>52</span> <span>Reviews</span></Card.Text>

                            </Col>
                            <Col><Card.Img variant="top" src="https://a0.muscache.com/im/pictures/77551937-d300-4162-9f16-920e8c81ae12.jpg?im_w=1200" /></Col>
                        </Row>
                        <hr />

                        <Card.Text className={`d-flex flex-row  ${styles.priceListText}`}> <span><img src={cal} alt="" /> </span> <span> 2 guests</span> </Card.Text>
                        <Card.Text className={`d-flex flex-row  ${styles.priceListText}`}> <span> <img src={profile} alt="" /> </span> <span>Jul 31, 2020 &rarr; Aug 2, 2020</span> </Card.Text>

                        <hr />
                        <Card.Text className={`d-flex flex-row justify-content-between ${styles.priceListText}`}> <span> ₹1,650 x 2 nights</span> <span>₹3,300</span> </Card.Text>
                        <Card.Text className={`d-flex flex-row justify-content-between ${styles.priceListText}`}> <span> Service Fees</span> <span>₹3,300</span> </Card.Text>

                        <hr />
                        <Card.Text className="d-flex flex-row justify-content-between"> <span className="font-weight-bold"> Total </span> <span className="font-weight-bold">₹3,300</span> </Card.Text>
                    </Card.Body>
                </Card>


            </div >
        );
    }
}
export default PriceCard;