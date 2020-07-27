import React, { Component } from "react";

import { Card } from "react-bootstrap";

import styles from './SleepingArrangement.module.css';

import bed from "../../../../assets/images/bed.png"

import singlebed from "../../../../assets/images/singlebed.png"





class SleepingArrangement extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (

            <div className="p-4">

                <h4 className="font-weight-bold">Sleeping arrangements</h4>
                <div className="d-flex flex-row">
                    <Card className={styles.bedArrangement}>
                        <Card.Body>
                            <div className="d-flex flex-row justify-content-between">
                                <div><img src={bed} alt="" srcset="" className="m-2" /></div>
                            </div>
                            <div><span>Beedroom</span> <span>1</span></div>
                            <div><span>1</span> <span>queen size</span></div>

                        </Card.Body>
                    </Card>
                    <Card className={styles.bedArrangement}>
                        <Card.Body>
                            <div className="d-flex flex-row justify-content-between">
                                <div><img src={singlebed} alt="" className="m-2" /></div>
                            </div>
                            <div><span>Beedroom</span> <span>2</span></div>
                            <div><span>1</span> <span>single bed</span></div>

                        </Card.Body>
                    </Card>
                </div>
            </div>



        );
    }
}

export default SleepingArrangement;