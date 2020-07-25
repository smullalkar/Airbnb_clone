import React, { Component } from "react";

import { Form, Button } from "react-bootstrap"

import styles from './SearchBar.module.css';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';



import 'react-dates/lib/css/_datepicker.css';




class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: ''
        }

    }

    render() {
        // const {} = this.props;

        return (
            <div className="d-flex justify-content-center" >
                <Form className={styles.searchContainer}>
                    <Form.Group className={styles.formGroup}>
                        <Form.Label className={styles.formLabel}>LOCATION</Form.Label>
                        <Form.Control className={styles.formControl} type="password" placeholder="where you are going?" />
                    </Form.Group>
                    <Form.Group className={styles.formGroup} >

                        <div>
                            <Form.Label className={`${styles.formLabel} ${styles.dateLabel}`}>CHECK IN</Form.Label>
                            <Form.Label className={`${styles.formLabel} ${styles.dateLabel} ${styles.checkoutLabel}`}>CHECK OUT</Form.Label></div>



                        <DateRangePicker startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired, 
                            startDatePlaceholderText="Add dates"
                            endDatePlaceholderText="Add dates"

                        >
                        </DateRangePicker>


                    </Form.Group>


                    <Form.Group className={styles.formGroup} >
                        <Form.Label className={styles.formLabel}>GUESTS</Form.Label>
                        <Form.Control className={styles.formControl} type="password" placeholder="Add guests" />
                    </Form.Group>

                    <Form.Group className={styles.formGroup} >
                        <Button className={styles.btn}>Search</Button>
                    </Form.Group>


                </Form>

            </div >
        );
    }
}

export default Search;
// displayFormat="MMM DD"