import React, { Component } from "react";
import { Form, Button, Modal, Nav, ButtonGroup } from "react-bootstrap";
import { DateRangePicker } from "react-dates";
import search from "../../../assets/images/search.png"
import SearchBar from "../Search/SearchBar"



class ListingSearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { showSearchBar: false }
    }

    handleMoreAmenitiesClose = () => {
        this.setState({ showSearchBar: false })
    }
    render() {
        const { show, handleSearchModalClose } = this.props
        return (
            <div>

                <Modal size="lg" show={show} onHide={handleSearchModalClose} >
                    <Modal.Header closeButton >

                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/home">Places to stay </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Experiences</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>

                            </Nav.Item>
                        </Nav>


                    </Modal.Header>



                    <Modal.Body >

                        < SearchBar />
                    </Modal.Body>

                </Modal>
            </div>
        );
    }
}

export default ListingSearchBar;




