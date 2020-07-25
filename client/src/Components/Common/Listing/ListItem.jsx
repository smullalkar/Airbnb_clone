import React, { Component } from "react";

import { Card } from "react-bootstrap";

import styles from './Listing.module.css';
import heart from "../../../assets/images/heart.svg"
import star from "../../../assets/images/star.svg"


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (

            <div>
                <Card className={styles.card}>

                    <span className={styles.heart}>&#9829;</span>
                    <Card.Img variant="top" className={styles.cardImage} src="https://a0.muscache.com/im/pictures/81be2793-77d4-439f-bed6-1b2b22693828.jpg" />

                    <Card.Body className={styles.cardBody}>
                        {/* <h6 className="rating">
                            <img className={styles.star} src={star} alt="" />
                        </h6> */}
                        <div className="d-flex align-items-center"><span className={styles.ratingStar}>&#9733;</span><span className={styles.rating}>4.62</span><span className={styles.numrated}>(72)</span></div>
                        <Card.Title className={styles.cardTitle}>Entire flat hosted by Nahid</Card.Title>
                        <Card.Text className={styles.cardDesc}>Near airport, chennai</Card.Text>
                        <Card.Text className={styles.priceCont}><span className={styles.amountSpan}>₹855 </span> / night</Card.Text>
                    </Card.Body>
                </Card>
            </div>

        );
    }
}

export default ListItem;
