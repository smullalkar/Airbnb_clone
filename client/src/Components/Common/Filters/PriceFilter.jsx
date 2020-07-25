import React, { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";

import styles from './Filters.module.css';



class PriceFilter extends Component {
    constructor(props) {
        super(props);
        this.state = ""
    }



    render() {


        return (
            <div>

                <Card className={styles.priceCard}>
                    <Card.Body>

                        <Card.Title>The average nightly price is ₹2,073</Card.Title>
                        <div className="d-flex flex-row justify-content-between">
                            <Form>
                                <Form.Group >
                                    <Form.Control className={styles.priceInput} type="number" placeholder="Min Price" />
                                </Form.Group>
                            </Form>

                            <Form>
                                <Form.Group >
                                    <Form.Control className={styles.priceInput} type="number" placeholder="Max Price" />
                                </Form.Group>
                            </Form>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <div>
                            <button className={styles.cancellationCardSave} >Save</button>
                        </div>
                    </Card.Footer>
                </Card>



            </div >



        );
    }
}

export default PriceFilter;
