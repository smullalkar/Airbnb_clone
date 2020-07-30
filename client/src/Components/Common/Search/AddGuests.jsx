import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

import styles from './SearchBar.module.css';



class AddGuests extends Component {
    constructor(props) {
        super(props);
        this.state = ""
    }



    render() {
        const { removeGuest, addGuest, adults, children, infants } = this.props
        if (!this.props.showGuests) {
            return null;
        }
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
                                    <div class=" mx-1 bd-highlight"> <button className={styles.guestButton} onClick={() => removeGuest('adults')} >-</button></div>
                                    <div class="  mx-1 bd-highlight"> <p>{adults} </p></div>
                                    <div class="  mx-1 bd-highlight"><button className={styles.guestButton} onClick={() => addGuest('adults')}>+</button></div>
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
                                    <div class=" mx-1 bd-highlight"> <button className={styles.guestButton} onClick={() => removeGuest('children')}>-</button></div>
                                    <div class="  mx-1 bd-highlight"><p>{children} </p></div>
                                    <div class="  mx-1 bd-highlight"><button className={styles.guestButton} onClick={() => addGuest('children')}>+</button></div>
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
                                    <div class=" mx-1 bd-highlight"> <button className={styles.guestButton} onClick={() => removeGuest('infants')}>-</button></div>
                                    <div class="  mx-1 bd-highlight"><p>{infants}</p></div>
                                    <div class="  mx-1 bd-highlight"><button className={styles.guestButton} onClick={() => addGuest('infants')}>+</button></div>
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
