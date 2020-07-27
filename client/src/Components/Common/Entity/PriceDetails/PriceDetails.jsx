import React, { Component } from "react";

import { Card, Button, Nav, Form, Dropdown, ButtonGroup } from "react-bootstrap";

import styles from './PriceDetails.module.css';

import { DateRangePicker } from "react-dates";

import AddGuestsEntity from "./AddGuestsEntity"




class PriceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (

            <div>

                <Card className={styles.pricedetailsCard}>
                    <Card.Body>
                        <div className="d-flex flex-row justify-content-between">
                            <Card.Text className={styles.priceCont}> <span className={`${styles.amountSpan} ${styles.discountAmount}`}>999 </span>  <span className={styles.amountSpan}>₹855 </span> / night</Card.Text>
                            <Card.Text>
                                <div className="d-flex align-items-center"><span className={styles.ratingStar}>&#9733;</span><span className={styles.rating}>4.62</span><span className={styles.numrated}>(72)</span></div>
                            </Card.Text>
                        </div>

                        <Card>
                            <Card.Body>
                                <div>
                                    <Form.Group className={styles.formGroup}>

                                        <Form.Label className={`${styles.formLabel} ${styles.dateLabel}`}>
                                            CHECK IN
              </Form.Label>
                                        <Form.Label
                                            className={`${styles.formLabel} ${styles.dateLabel} ${styles.checkoutLabel}`}
                                        >
                                            CHECK OUT
              </Form.Label>


                                        <DateRangePicker
                                            startDate={this.state.startDate}
                                            startDateId="your_unique_start_date_id"
                                            endDate={this.state.endDate}
                                            endDateId="your_unique_end_date_id"
                                            onDatesChange={({ startDate, endDate }) =>
                                                this.setState({ startDate, endDate })
                                            }
                                            focusedInput={this.state.focusedInput}
                                            onFocusChange={(focusedInput) => this.setState({ focusedInput })}
                                            startDatePlaceholderText="Add dates"
                                            endDatePlaceholderText="Add dates"
                                        ></DateRangePicker>


                                    </Form.Group>

                                </div>
                                <div>
                                    <Dropdown as={ButtonGroup} className="m-2 w-100">
                                        <Dropdown.Toggle className={styles.addButton} variant="outline-secondary">Add Guest</Dropdown.Toggle>

                                        <Dropdown.Menu className={styles.guestDropdown}>
                                            <AddGuestsEntity />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                            </Card.Body>
                        </Card>

                        <Button className="mt-2" size="lg" block>Reserve </Button>

                        <Card.Text className={styles.helperText}>You won't be charged yet </Card.Text>

                        <div>
                            <Card.Text className={`d-flex flex-row justify-content-between ${styles.priceListText}`}> <span> ₹1,650 x 2 nights</span> <span>₹3,300</span> </Card.Text>
                            <Card.Text className={`d-flex flex-row justify-content-between ${styles.priceListText}`}> <span> ₹1,650 x 2 nights</span> <span>₹3,300</span> </Card.Text><Card.Text className={`d-flex flex-row justify-content-between ${styles.priceListText}`}> <span> ₹1,650 x 2 nights</span> <span>₹3,300</span> </Card.Text><Card.Text className={`d-flex flex-row justify-content-between ${styles.priceListText}`}> <span> ₹1,650 x 2 nights</span> <span>₹3,300</span> </Card.Text>
                        </div>
                        <hr />
                        <Card.Text className="d-flex flex-row justify-content-between"> <span className="font-weight-bold"> Total </span> <span className="font-weight-bold">₹3,300</span> </Card.Text>
                    </Card.Body>
                </Card>
            </div>



        );
    }
}

export default PriceDetails;