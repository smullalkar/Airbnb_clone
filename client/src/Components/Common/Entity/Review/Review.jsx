import React, { Component } from "react";

import { Card } from "react-bootstrap";

import styles from './Review.module.css';





class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (

            <div>

                <div className={styles.reviewContainer}>
                    <h2 className={styles.entityTitle}><span className={styles.ratingStar} >&#9733;</span><span className="mx-1">4.62</span><span className="mx-1">(72 reviews)</span></h2>
                    <Row xs={2} >
                        <Col className="d-flex">
                            <Row className="w-100 my-2">
                                <Col xs={8}>Cleanliness</Col>
                                <Col>
                                    <div className="d-flex align-items-center ">
                                        <div className={styles.progressDiv}>
                                            <span style={{ width: "90%" }} className={styles.progressPercentage}></span>
                                        </div>

                                        <span className={styles.progressRatingNumber}>4.6</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col >
                            <Row className="w-100 my-2">
                                <Col xs={8}>Cleanliness</Col>
                                <Col>
                                    <div className="d-flex align-items-center ">
                                        <div className={styles.progressDiv}>
                                            <span style={{ width: "90%" }} className={styles.progressPercentage}></span>
                                        </div>

                                        <span className={styles.progressRatingNumber}>4.6</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row xs={2} >
                        <Col className="d-flex">
                            <Row className="w-100 my-2">
                                <Col xs={8}>Cleanliness</Col>
                                <Col>
                                    <div className="d-flex align-items-center ">
                                        <div className={styles.progressDiv}>
                                            <span style={{ width: "90%" }} className={styles.progressPercentage}></span>
                                        </div>

                                        <span className={styles.progressRatingNumber}>4.6</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col >
                            <Row className="w-100 my-2">
                                <Col xs={8}>Cleanliness</Col>
                                <Col>
                                    <div className="d-flex align-items-center ">
                                        <div className={styles.progressDiv}>
                                            <span style={{ width: "90%" }} className={styles.progressPercentage}></span>
                                        </div>

                                        <span className={styles.progressRatingNumber}>4.6</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row xs={2} >
                        <Col className="d-flex">
                            <Row className="w-100 my-2">
                                <Col xs={8}>Cleanliness</Col>
                                <Col>
                                    <div className="d-flex align-items-center ">
                                        <div className={styles.progressDiv}>
                                            <span style={{ width: "90%" }} className={styles.progressPercentage}></span>
                                        </div>

                                        <span className={styles.progressRatingNumber}>4.6</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col >
                            <Row className="w-100 my-2">
                                <Col xs={8}>Cleanliness</Col>
                                <Col>
                                    <div className="d-flex align-items-center ">
                                        <div className={styles.progressDiv}>
                                            <span style={{ width: "90%" }} className={styles.progressPercentage}></span>
                                        </div>

                                        <span className={styles.progressRatingNumber}>4.6</span>
                                    </div>


                                </Col>


                            </Row>
                        </Col>
                    </Row>
                    <Row xs={2} className="my-2">
                        <Col >

                            <div className="d-flex flex-row justify-content-start align-items-center">
                                <div className={styles.reviewerAvatarContainer}>
                                    <img className={styles.reviewerAvatarImage} src="https://via.placeholder.com/150" alt="reviewer" />
                                </div>
                                <div className="ml-1">
                                    <div><h6 className={styles.reviewerName}>Vignesh</h6></div>
                                    <div className={styles.reviewedDate}> July 2020</div>
                                </div>
                            </div>
                            <p className={styles.reviewText}>IN MY OPPINION AIRBNB IS A GREAT PLACE TO STAY & HOST WILL HELP ALL GUESTS WHAT THEY WANT AND IN PROPER TIME. AS THIS IS COVID-19 SEASON ALL OVER THE WORLD, I NOTICED THAT ALL THE HELPERS WHO ARE WEARING MASKs </p>
                        </Col>
                        <Col >

                            <div className="d-flex flex-row justify-content-start align-items-center">
                                <div className={styles.reviewerAvatarContainer}>
                                    <img className={styles.reviewerAvatarImage} src="https://via.placeholder.com/150" alt="reviewer" />
                                </div>
                                <div className="ml-1">
                                    <div><h6 className={styles.reviewerName}>Vignesh</h6></div>
                                    <div className={styles.reviewedDate}> July 2020</div>
                                </div>
                            </div>
                            <p className={styles.reviewText}>IN MY OPPINION AIRBNB IS A GREAT PLACE TO STAY & HOST WILL HELP ALL GUESTS WHAT THEY WANT AND IN PROPER TIME. AS THIS IS COVID-19 SEASON ALL OVER THE WORLD, I NOTICED THAT ALL THE HELPERS WHO ARE WEARING MASKs </p>
                        </Col>
                    </Row>


                </div>

            </div>



        );
    }
}

export default Review;