import React, { Component } from "react";

import { Nav } from "react-bootstrap"

class Home extends Component {
    constructor(props) {
        super(props);
        render() {
            // const {} = this.props;

            return (
                <div>
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
                </div>
            );
        }
    }

    export default Home;
