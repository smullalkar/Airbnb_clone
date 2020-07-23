import React, { Component } from "react";

import { Nav } from "react-bootstrap"

import styles from './Home.module.css'

class Search extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        // const {} = this.props;

        return (
            <div pill variant="light" className={styles.appContainer}>
                <Nav variant="tabs" defaultActiveKey="/Search" >
                    <Nav.Item>
                        <Nav.Link href="/Search">Location</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Checkin</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Checkou</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Guests</Nav.Link>
                    </Nav.Item>

                    <button type="search">Search</button>

                </Nav>




                <nav>

                </nav>

            </div>
        );
    }
}

export default Search;