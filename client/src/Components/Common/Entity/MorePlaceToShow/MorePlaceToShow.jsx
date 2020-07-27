import React, { Component } from "react";

import { Card, Pagination } from "react-bootstrap";

import styles from './MorePlaceToShow.module.css';





class MorePlaceToShow extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (

            <div className="p-4">
                <div className="d-flex flex-row justify-content-between">
                    <div><h4 className="text-left font-weight-bold my-3">More places to stay </h4></div>
                    <div className="d-flex align-items-center">
                        <p className={`m-0 mx-2 ${styles.pagerNumber}`}><span>3</span><span>/</span><span>3</span></p>
                        <Pagination className="m-0">
                            <Pagination.Prev className="prevPage mx-1" />

                            <Pagination.Next className="nextPage mx-1" />
                        </Pagination>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <Card className={styles.card}>

                            <span className={styles.heart}>&#9829;</span>
                            <Card.Img variant="top" className={styles.cardImage} src="https://a0.muscache.com/im/pictures/81be2793-77d4-439f-bed6-1b2b22693828.jpg" />

                            <Card.Body className={styles.cardBody}>

                                <div className="d-flex justify-content-between">
                                    <div><Card.Title className={styles.cardTitle}>Entire flat </Card.Title></div>
                                    <div> <span className={styles.ratingStar}>&#9733;</span><span className={styles.rating}>4.62</span><span className={styles.numrated}>(72)</span> </div></div>

                                <Card.Text className={styles.cardDesc}>Near airport, chennai</Card.Text>
                                <Card.Text className={styles.priceCont}><span className={styles.amountSpan}>₹855 </span> / night</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card className={styles.card}>

                            <span className={styles.heart}>&#9829;</span>
                            <Card.Img variant="top" className={styles.cardImage} src="https://a0.muscache.com/im/pictures/81be2793-77d4-439f-bed6-1b2b22693828.jpg" />

                            <Card.Body className={styles.cardBody}>

                                <div className="d-flex justify-content-between">
                                    <div><Card.Title className={styles.cardTitle}>Entire flat </Card.Title></div>
                                    <div> <span className={styles.ratingStar}>&#9733;</span><span className={styles.rating}>4.62</span><span className={styles.numrated}>(72)</span> </div></div>

                                <Card.Text className={styles.cardDesc}>Near airport, chennai</Card.Text>
                                <Card.Text className={styles.priceCont}><span className={styles.amountSpan}>₹855 </span> / night</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className={styles.card}>

                            <span className={styles.heart}>&#9829;</span>
                            <Card.Img variant="top" className={styles.cardImage} src="https://a0.muscache.com/im/pictures/81be2793-77d4-439f-bed6-1b2b22693828.jpg" />

                            <Card.Body className={styles.cardBody}>

                                <div className="d-flex justify-content-between">
                                    <div><Card.Title className={styles.cardTitle}>Entire flat </Card.Title></div>
                                    <div> <span className={styles.ratingStar}>&#9733;</span><span className={styles.rating}>4.62</span><span className={styles.numrated}>(72)</span> </div></div>

                                <Card.Text className={styles.cardDesc}>Near airport, chennai</Card.Text>
                                <Card.Text className={styles.priceCont}><span className={styles.amountSpan}>₹855 </span> / night</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className={styles.card}>

                            <span className={styles.heart}>&#9829;</span>
                            <Card.Img variant="top" className={styles.cardImage} src="https://a0.muscache.com/im/pictures/81be2793-77d4-439f-bed6-1b2b22693828.jpg" />

                            <Card.Body className={styles.cardBody}>

                                <div className="d-flex justify-content-between">
                                    <div><Card.Title className={styles.cardTitle}>Entire flat </Card.Title></div>
                                    <div> <span className={styles.ratingStar}>&#9733;</span><span className={styles.rating}>4.62</span><span className={styles.numrated}>(72)</span> </div></div>

                                <Card.Text className={styles.cardDesc}>Near airport, chennai</Card.Text>
                                <Card.Text className={styles.priceCont}><span className={styles.amountSpan}>₹855 </span> / night</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>



        );
    }
}

export default MorePlaceToShow;