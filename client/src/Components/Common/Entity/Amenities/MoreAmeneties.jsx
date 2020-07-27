import React, { Component } from "react";

import { Modal, ModalDialog } from "react-bootstrap";

import styles from './Amenities';






class MoreAmeneties extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { show, handleMoreAmenitiesClose } = this.props
        return (

            <div>
                <Modal show={show} onHide={handleMoreAmenitiesClose} >

                    <Modal.Header closeButton>
                        <Modal.Title>More Amenities</Modal.Title>
                    </Modal.Header>
                    <ModalDialog scrollable={true} className="m-0"  >
                        <Modal.Body >
                            <h4>Amenities</h4>
                            <h6 className="font-weight-bold">Basic</h6>
                            <p>Wifi</p>
                            <hr />
                            <p>Hot water</p>
                            <hr />
                            <p>TV</p>
                            <hr />
                            <p>Essentials</p>
                            <hr />
                            <p>Laptop-friendly workspace</p>

                            <hr />

                            <h6 className="font-weight-bold">Facilities</h6>
                            <p>Free parking on premises</p>
                            <hr />
                            <h6 className="font-weight-bold">Dining</h6>
                            <p>Microwave</p>
                            <p>Refrigerator</p>
                            <hr />

                            <h6 className="font-weight-bold">Guest access</h6>
                            <p>Private entrance</p>

                            <h6 className="font-weight-bold">Bed and bath</h6>

                            <p>Extra pillows and blankets</p>
                            <hr />
                            <p>
                                Shampoo
                            <hr />
                                Hair dryerh <hr />
                                Hangers <hr />
                            </p>
                            <hr />
                            <h6 className="font-weight-bold">Outdoor</h6>
                            <p>Garden or backyard</p>
                            <hr />
                            <p>Patio or balcony</p>
                            <hr />

                            <h6 className="font-weight-bold">Safety features</h6>

                            <p>Fire extinguisher</p>

                            <hr />
                            <h6 className="font-weight-bold">Not included</h6>

                            <p>Air conditioning</p>
                            <hr />
                            <p>
                                Carbon monoxide alarm
</p>

                        </Modal.Body>
                    </ModalDialog>

                </Modal>
            </div>



        );
    }
}

export default MoreAmeneties;