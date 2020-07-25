import React, { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";

import styles from './Filters.module.css';



class InstantBook extends Component {
    constructor(props) {
        super(props);
        this.state = ""
    }



    render() {


        return (
            <div>

                <Card className={styles.cancellationCard}>
                    <Card.Body>

                        <div className="d-flex flex-row justify-content-between">
                            <h6 className="font-weight-bold">Instant Book</h6>
                            <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" />
                        </div>
                        <div><h6>Listings you can book without waiting for host approval</h6></div>
                    </Card.Body>
                    <Card.Footer>
                        <div>
                            <a className={styles.cancellationCardClear} href="">Clear</a>
                            <button className={styles.cancellationCardSave} >Save</button>
                        </div>
                    </Card.Footer>
                </Card>


            </div >



        );
    }
}

export default InstantBook;
