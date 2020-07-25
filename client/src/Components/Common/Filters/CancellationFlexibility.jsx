import React, { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Switch from "react-switch";
import styles from './Filters.module.css';

class CancellationFlexibility extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
    }
    handleChange = (checked) => {
        this.setState({ checked });
    }

    render() {

        return (
            <div>

                <Card className={styles.cancellationCard}>
                    <Card.Body>

                        <div className="d-flex flex-row justify-content-between">
                            <h6>Only show stays that offer cancellation flexibility</h6>
                            <Switch onChange={this.handleChange} checked={this.state.checked} />

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

export default CancellationFlexibility;
