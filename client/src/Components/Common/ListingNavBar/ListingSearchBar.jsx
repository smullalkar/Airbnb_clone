import React, { Component } from "react";
import { Form, Button, Modal, Nav } from "react-bootstrap";
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
                        <div variant="tabs" className="d-flex flex-row mx-2">
                            <div>
                                <div>Places to stay</div>
                            </div>
                            <div>
                                <div>Experiences</div>
                            </div>

                        </div>
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




