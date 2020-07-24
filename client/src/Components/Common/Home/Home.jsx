import React, { Component } from "react";

import { Nav, Card, CardDeck, Alert } from "react-bootstrap"

import styles from './Home.module.css'

import img1 from '../../../assets/images/1.webp'

import img2 from '../../../assets/images/2.webp'

import img3 from '../../../assets/images/3.webp'

import heroImage from '../../../assets/images/hero-image.webp'

import SearchBar from "../Search/SearchBar"

import NearByGateWay from "../Search/NearByGateWay"


class Home extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        // const {} = this.props;

        return (
            <div className={styles.appContainer}>


                <div className={styles.heroContainer}>
                    <Nav variant="tabs" className=" mb-5" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Places to stay</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Experiences</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Online Experiences</Nav.Link>
                        </Nav.Item>

                    </Nav>
                    <SearchBar />

                    {/* <NearByGateWay /> */}

                    <img className={styles.heroImage} src={heroImage} />
                    <div className={styles.heroContent}>
                        <h6 className={styles.title}>
                            INTRODUCING
                        </h6>
                        <h6 className={styles.mainPara}>Olympian & Paralympian Online Experiences</h6>
                        <h6 className={styles.desc}>Join medallist Allyson Felix, and a team of world-className athletes</h6>

                    </div>



                </div>


                <div className="mt-5 mb-5">

                    <CardDeck className={styles.cardContainer}>
                        <Card className={styles.card}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title className={styles.cardTitle}>Online Experiences</Card.Title>
                                <Card.Text className={styles.cardText}>
                                    Unique activities to do from home, including Olympian & Paralympian experiences around the world.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className={styles.card}>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title className={styles.cardTitle} >Your Next Gateway</Card.Title>
                                <Card.Text className={styles.cardText}>
                                    Switch off or reconnect on a trip thats's just a short drive away.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className={styles.card}>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title className={styles.cardTitle}>Entire homes</Card.Title>
                                <Card.Text className={styles.cardText}>
                                    Comfortable private places,with room for friends or family.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardDeck>
                </div>

                <div className={styles.destinationList}>
                    <h4 className="text-left font-weight-bold m-5">Destinations for future trips</h4>

                    <div className="row">
                        <div className="col-3"><a className={styles.aTag} href="#">San Francisco</a></div>
                        <div className="col-3"><a className={styles.aTag} href="#">New York</a></div>
                        <div className="col-3"><a className={styles.aTag} href="#">Seattle</a></div>
                        <div className="col-3"> <a className={styles.aTag} href="#"> Los Angeles</a></div>
                    </div>
                    <div className="row">
                        <div className="col-3"> <hr /> </div>
                        <div className="col-3"> <hr /></div>
                        <div className="col-3"><hr /></div>
                        <div className="col-3"><hr /></div>
                    </div>
                    <div className="row">
                        <div className="col-3"><a className={styles.aTag} href="#">Denver</a></div>
                        <div className="col-3"><a className={styles.aTag} href="#">Washington Dc</a></div>
                        <div className="col-3"><a className={styles.aTag} href="#">Phoenix</a></div>
                        <div className="col-3"><a className={styles.aTag} href="#">Austin</a></div>
                    </div>
                    <div className="row">
                        <div className="col-3"> <hr /> </div>
                        <div className="col-3"> <hr /></div>
                        <div className="col-3"><hr /></div>
                        <div className="col-3"><hr /></div>
                    </div>
                    <div className="row">
                        <div className="col-3 text-dark"><a className={styles.aTag} href="#">Houston</a></div>
                        <div className="col-3"><a className={styles.aTag} href="#">New orieans</a></div>
                        <div className="col-3"><a className={styles.aTag} href="#">Boston</a></div>
                        <div className="col-3"><a className={styles.aTag} href="#">Miami</a></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;