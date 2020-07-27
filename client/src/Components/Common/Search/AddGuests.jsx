import React, { Component } from "react";
import {Card } from "react-bootstrap";

import styles from './SearchBar.module.css';



class AddGuests extends Component {
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






                    </Card.Body>
                </Card>


            </div >



        );
    }
}

export default AddGuests;
