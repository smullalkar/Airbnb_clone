import React, { Component } from "react";

import { Card, Row, Col, Button } from "react-bootstrap";
import sheild from "../../../../assets/images/shield.png"
import styles from './HostDetails.module.css';


class HostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="p-4">
                <div className="row">
                    <div className="col-8">
                        <div className="d-flex flex-row justify-content-start align-items-center">
                            <div className={styles.hostAvatarContainer}>
                                <img className={styles.hostAvatarImage} src="https://via.placeholder.com/150" alt="host" />
                            </div>
                            <div className="mx-3">
                                <div><h6 className={styles.hostName}>Hosted by Suresh</h6></div>
                                <div className={styles.hostDate}> Joined in May 2016</div>
                            </div>
                        </div>
                        <div className="d-flex flex-row p-2">
                            <div><span className={styles.ratingStar}>&#9733;</span><span className={styles.rating}>4.62</span><span className={styles.numrated}>(72)</span></div>
                            <div><span className={styles.ratingStar}></span>&#128737;<span className={styles.rating}>Identity verified</span></div>
                            <div><span className={styles.ratingStar}>&#10082;</span><span className={styles.rating}>Superhost.</span></div>
                        </div>


                        <div className={styles.entityDetailPara}>
                            Favourite travel destination is Amsterdam. Like TV shows , browsing, cooking, cleaning and following politics.
                            Motto is to have fun and not taking myself very seriously. Have alway
                                <div><h6 className="mx-1"><a className={styles.alertLink}>Read More</a></h6></div>
                        </div>

                        <div>
                            <h6 className="font-weight-bold">During your stay</h6>
                            <p className="text-muted">Obviously I am there either in person or over phone through your stay.</p>
                        </div>

                        <div>
                            <h6 className="font-weight-bold">Suresh is a Superhost</h6>
                            <p className="text-muted">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                        </div>

                    </div>

                    <div className="col-4">
                        <div><span>Response rate </span> <span>	&#58; </span> <span>100%</span></div>
                        <div><span>Response time </span> <span>	&#58; </span> <span>within an hour</span></div>
                        <Button variant="outline-secondary" className={styles.contactHostBtn} size="lg">Contact Host</Button>

                        <div className="d-flex flex-row justify-content-between">
                            <div><img className={styles.shieldAvatarContainer} src={sheild} alt="" /></div>
                            <div><p className="text-muted px-2">To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p></div>
                        </div>
                    </div>
                </div>


            </div>



        );
    }
}

export default HostDetails;