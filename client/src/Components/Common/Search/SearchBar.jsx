import React, { Component } from "react";

import { Form, Button } from "react-bootstrap"

import styles from './SearchBar.module.css';


class Search extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        // const {} = this.props;

        return (
            <div pill variant="light" >
                <Form>
                    <Form.Group >
                        <Form.Label>LOCATION</Form.Label>
                        <Form.Control type="password" placeholder="where you are going?" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>CHECK IN</Form.Label>
                        <Form.Control type="password" placeholder="Add Dates" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>CHECK OUT</Form.Label>
                        <Form.Control type="password" placeholder="Add Dates" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>GUESTS</Form.Label>
                        <Form.Control type="password" placeholder="Add guests" />
                    </Form.Group>

                    <Form.Group >
                        <Button className={styles.btn}>Search</Button>
                    </Form.Group>


                </Form>

            </div>
        );
    }
}

export default Search;