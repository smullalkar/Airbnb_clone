import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

import styles from './SearchBar.module.css';



class NearByGateWay extends Component {
    constructor(props) {
        super(props);
        this.state = ""
    }



    render() {


        return (
            <div>

                <Card className={styles.locationCard}>
                    <Card.Body >
                        <h3 className=" text-left m-2 font">NearByGateWays</h3>
                        <div className="row">
                            <div className=" col-3 mt-3"><Button className={styles.locationButton} variant="outline-secondary">Puducherry</Button></div>
                            <div className=" col-3 mt-3"><Button className={styles.locationButton} variant="outline-secondary">Bengaluru</Button></div>
                            <div className=" col-3 mt-3"><Button className={styles.locationButton} variant="outline-secondary">Kodaikanal</Button></div>

                        </div>

                        <div className="row">
                            <div className=" col-3 mt-3"><Button className={styles.locationButton} variant="outline-secondary">Ooty</Button></div>
                            <div className=" col-3 mt-3"><Button className={styles.locationButton} variant="outline-secondary">Coimbatore</Button></div>
                            <div className=" col-3 mt-3"><Button className={styles.locationButton} variant="outline-secondary">Kotagari</Button></div>
                            <div className=" col-3 mt-3"><Button className={styles.locationButton} variant="outline-secondary">Madurai</Button></div>

                        </div>

                        <div className="row">
                            <div className="col-4 mt-3"><Button className={styles.locationButton} variant="outline-secondary">Bommayapalayam</Button ></div>

                        </div>
                    </Card.Body>
                </Card>


            </div >



        );
    }
}

export default NearByGateWay;
