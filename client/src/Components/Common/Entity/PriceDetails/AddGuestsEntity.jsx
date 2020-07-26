import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

import styles from './PriceDetails';



class AddGuestsEntity extends Component {
    constructor(props) {
        super(props);
        this.state = ""
    }
    render() {


        return (
            <div>

                <Card className={styles.guestCard}>
                    <Card.Body >

                        <div className="row">
                            <div className=" col-8 mt-3">
                                <h6 className="font-weight-bold">Adults</h6>
                                <h6 className="text-muted ">Ages 13 or above</h6>
                            </div>
                            <div className=" col-4 mt-3">
                                <div className="d-flex flex-row bd-highlight ">
                                    <div class=" mx-1 bd-highlight"> <button className={styles.guestButton}>-</button></div>
                                    <div class="  mx-1 bd-highlight"> <p>0 </p></div>
                                    <div class="  mx-1 bd-highlight"><button className={styles.guestButton}>+</button></div>
                                </div>
                            </div>

                        </div>

                        <hr />
                        <div className="row">
                            <div className=" col-8 mt-3">
                                <h6 className="font-weight-bold">Children</h6>
                                <h6 className="text-muted ">Ages 2–12</h6>
                            </div>
                            <div className=" col-4 mt-3">
                                <div className="d-flex flex-row bd-highlight ">
                                    <div class=" mx-1 bd-highlight"> <button className={styles.guestButton}>-</button></div>
                                    <div class="  mx-1 bd-highlight"><p>0 </p></div>
                                    <div class="  mx-1 bd-highlight"><button className={styles.guestButton}>+</button></div>
                                </div>

                            </div>

                        </div>

                        <hr />
                        <div className="row">
                            <div className=" col-8 mt-3">
                                <h6 className="font-weight-bold">Infants</h6>
                                <h6 className="text-muted ">Under 2</h6>
                            </div>
                            <div className=" col-4 mt-3">
                                <div className="d-flex flex-row bd-highlight ">
                                    <div class=" mx-1 bd-highlight"> <button className={styles.guestButton}>-</button></div>
                                    <div class="  mx-1 bd-highlight"><p>0</p></div>
                                    <div class="  mx-1 bd-highlight"><button className={styles.guestButton}>+</button></div>
                                </div>

                            </div>

                        </div>
                        <h6 className="text-muted">5 guests maximum. Infants don’t count toward the number of guests.</h6>
                        <hr />
                        <a className={styles.close} href="">close</a>
                    </Card.Body>
                </Card>


            </div >



        );
    }
}

export default AddGuestsEntity;
