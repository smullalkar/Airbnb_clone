import React, { Component } from "react";

import { Nav } from "react-bootstrap"

import styles from './Home.module.css'

class Home extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        // const {} = this.props;

        return (
            <div className={styles.appContainer}>
                <Nav variant="tabs" defaultActiveKey="/home">
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


                <h1 className={styles.herocopy}>
                    You don't need to go far to find <br /> what matters.
                </h1>

                <nav>

                </nav>

            </div>
        );
    }
}

export default Home;