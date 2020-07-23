import React, { Component } from "react";

import { Nav, Card, CardDeck } from "react-bootstrap"

import styles from './Home.module.css'

import img1 from '../../../assets/images/1.webp'

import img2 from '../../../assets/images/2.webp'

import img3 from '../../../assets/images/3.webp'


class Home extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        // const {} = this.props;

        return (
            <div className={styles.appContainer}>
                <Nav variant="tabs" className="mt-5" defaultActiveKey="/home">
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


                <div className="mt-5 ">

                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Online Experiences</Card.Title>
                                <Card.Text>
                                    Unique activities to do from home, including Olympian & Paralympian experiences around the world.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Your Next Gateway</Card.Title>
                                <Card.Text>
                                    Switch off or reconnect on a trip thats's just a short drive away.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Entire homes</Card.Title>
                                <Card.Text>
                                    Comfortable private places,with room for friends or family.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardDeck>
                </div>

                <nav>

                </nav>

            </div>
        );
    }
}

export default Home;