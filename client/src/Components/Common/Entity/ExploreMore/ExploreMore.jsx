import React, { Component } from "react";

//import { Card } from "react-bootstrap";

import styles from './ExploreMore.module.css';


class ExploreMore extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (

            <div className="p-4">
                <div className={styles.destinationList}>
                    <h4 className="text-left font-weight-bold"> Explore other options in and around Coimbatore </h4>

                    <div>
                        <h6 className="font-weight-bold">More places to stay in Coimbatore:</h6>
                        <p className="text-muted">Flats <span className="mx-2">&bull;</span>  Bed and breakfasts <span className="mx-2">&bull;</span> Lofts <span className="mx-2">&bull;</span> Villas <span className="mx-2">&bull;</span> Apartments</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-12 text-left">
                            <a className={styles.aTag} href="www.google.com">
                                Chennai
      </a>
                            <div className="col-md-3 col-12 text-left">
                                {" "}
                                <hr />{" "}
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-left">
                            <a className={styles.aTag} href="www.google.com">
                                Mumbai
      </a>
                            <div className="col-md-3 col-12 text-left">
                                {" "}
                                <hr />{" "}
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-left">
                            <a className={styles.aTag} href="www.google.com">
                                Kolkata
      </a>
                            <div className="col-md-3 col-12 text-left">
                                {" "}
                                <hr />{" "}
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-left">
                            {" "}
                            <a className={styles.aTag} href="www.google.com">
                                {" "}
                                New Delhi
      </a>
                            <div className="col-md-3 col-12 text-left">
                                {" "}
                                <hr />{" "}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 col-12 text-left">
                            <a className={styles.aTag} href="www.google.com">
                                Kochi
      </a><div className="col-md-3 col-12 text-left">
                                {" "}
                                <hr />{" "}
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-left">
                            <a className={styles.aTag} href="www.google.com">
                                Lucknow
      </a><div className="col-md-3 col-12 text-left">
                                {" "}
                                <hr />{" "}
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-left">
                            <a className={styles.aTag} href="www.google.com">
                                Jaipur
      </a><div className="col-md-3 col-12 text-left">
                                {" "}
                                <hr />{" "}
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-left">
                            <a className={styles.aTag} href="www.google.com">
                                Goa
      </a><div className="col-md-3 col-12 text-left">
                                {" "}
                                <hr />{" "}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 col-12 text-left">
                            <a className={styles.aTag} href="www.google.com">
                                Amritsar
      </a><div className="col-md-3 col-12 text-left">
                                {" "}
                                <hr />{" "}
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-left">
                            <a className={styles.aTag} href="www.google.com">
                                Hyderabad
      </a><div className="col-md-3 col-12 text-left">
                                {" "}
                                <hr />{" "}
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-left">
                            <a className={styles.aTag} href="www.google.com">
                                Andamans
      </a><div className="col-md-3 col-12 text-left">
                                {" "}
                                <hr />{" "}
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-left">
                            <a className={styles.aTag} href="www.google.com">
                                Assam
      </a><div className="col-md-3 col-12 text-left">
                                {" "}
                                <hr />{" "}
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

export default ExploreMore;