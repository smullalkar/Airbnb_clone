import React, { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";

import styles from './Filters.module.css';



class TypeOfPlace extends Component {
    constructor(props) {
        super(props);
        this.state = ""
    }



    render() {


        return (
            <div>

                <Card className={styles.placeCard}>
                    <Card.Body>

                        <div>
                            <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Entire place" />
                            <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Private room" />
                            <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Hotel room" />
                            <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Shared room" />
                        </div>
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

export default TypeOfPlace;
