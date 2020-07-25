import React, { Component } from "react";
import { Button, Card, Modal, Form, ModalDialog } from "react-bootstrap";
import styles from './Filters.module.css';
import Switch from "react-switch";



class MoreFilter extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
    }
    handleChange = (checked) => {
        this.setState({ checked });
    }


    render() {

        const { show, handleMoreFiltersClose } = this.props
        return (
            <div>

                <Modal size="lg" show={show} className={styles.moreFilterModal} onHide={handleMoreFiltersClose} >

                    <Modal.Header closeButton>
                        <Modal.Title>More Filters</Modal.Title>
                    </Modal.Header>
                    <ModalDialog scrollable={true} size="lg" >
                        <Modal.Body >

                            <div>
                                <div className="row">
                                    <div className=" col-8 mt-3">
                                        <h6 className="font-weight-bold">Beds</h6>
                                    </div>
                                    <div className=" col-4 mt-3">
                                        <div className="d-flex flex-row bd-highlight ">
                                            <div class=" mx-1 bd-highlight"> <button className={styles.guestButton}>-</button></div>
                                            <div class="  mx-1 bd-highlight"> <p>0 </p></div>
                                            <div class="  mx-1 bd-highlight"><button className={styles.guestButton}>+</button></div>
                                        </div>

                                    </div>

                                </div>

                                <hr />
                                <div className="row">
                                    <div className=" col-8 mt-3">
                                        <h6 className="font-weight-bold">Bedrooms</h6>
                                    </div>
                                    <div className=" col-4 mt-3">
                                        <div className="d-flex flex-row bd-highlight ">
                                            <div class=" mx-1 bd-highlight"> <button className={styles.guestButton}>-</button></div>
                                            <div class="  mx-1 bd-highlight"><p>0 </p></div>
                                            <div class="  mx-1 bd-highlight"><button className={styles.guestButton}>+</button></div>
                                        </div>

                                    </div>

                                </div>

                                <hr />
                                <div className="row">
                                    <div className=" col-8 mt-3">
                                        <h6 className="font-weight-bold">Bathrooms</h6>
                                    </div>
                                    <div className=" col-4 mt-3">
                                        <div className="d-flex flex-row bd-highlight ">
                                            <div class=" mx-1 bd-highlight"> <button className={styles.guestButton}>-</button></div>
                                            <div class="  mx-1 bd-highlight"><p>0</p></div>
                                            <div class="  mx-1 bd-highlight"><button className={styles.guestButton}>+</button></div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className="d-flex flex-row justify-content-between">
                                    <div>
                                        <span>  <h5 className="text-left">Travelling for work?</h5></span><br />
                                        <span>  <p className="text-left">Explore homes and boutique hotels with 5-star ratings from business travellers</p> </span>
                                    </div>

                                    <div> <Switch onChange={this.handleChange} checked={this.state.checked} /></div>
                                </div>
                            </div>

                            <hr />


                            <div>
                                <h3 className="font-weight-bold text-left">More options</h3>
                                <div className="d-flex  justify-content-between">
                                    <div>
                                        <div>
                                            <h6 className="text-left">Superhost</h6>
                                            <h6 className="text-left">Stay with recognised hosts</h6>
                                            <div className="text-left"><a href="" >Learn more</a></div>
                                        </div> <br />

                                        <div>
                                            <h6 className="text-left">Accessibility</h6>
                                            <h6 className="text-left">Find a place to stay that meets your mobility needs</h6>
                                            <div className="text-left"><a href="" >Choose features of your place to stay</a></div>
                                        </div>
                                    </div>
                                    <div > <Switch onChange={this.handleChange} checked={this.state.checked} /></div>
                                </div>


                            </div>
                            <hr />
                            <div>
                                <h3 className="font-weight-bold text-left">Amenities</h3>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-column col-6 justify-content-start">
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Kitchen" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Heating" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Washing machine" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Dryer" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Wifi" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Breakfast" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Indoor fireplace" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Hangers" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Iron" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Hair dryer" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Laptop-friendly workspace" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="TV" />

                                    </div>

                                    <div className="d-flex flex-column col-6 ">
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Shampoo" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Air conditioning" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="check-in Smoke" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="alarmCarbon monoxide " />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="alarmPrivate " />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="bathroomBeachfront" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Waterfront" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Ski-in/ski-out" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Cot" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="High chair Self " />
                                    </div>

                                </div>

                            </div>

                            <hr />

                            <div>
                                <h3 className="font-weight-bold">Facilities</h3>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-column col-6 justify-content-start">

                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Free parking on premises" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Hot tub" />
                                    </div>
                                    <div className="d-flex flex-column col-6 ">
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Gym" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Pool" />
                                    </div>

                                </div>


                            </div>

                            <hr />

                            <div>
                                <h3 className="font-weight-bold">Property type</h3>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-column col-6 justify-content-start">

                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="House" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Flat" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Bed and breakfast" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Boutique hotel" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Bungalow" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Chalet" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Cottage" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Guest house" />
                                    </div>
                                    <div className="d-flex flex-column col-6 ">
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Guest suite" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Hostel" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Hotel" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Loft" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Resort" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Serviced apartment" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Townhouse" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Villa" />
                                    </div>

                                </div>
                            </div>
                            <hr />

                            <div>
                                <h3 className="font-weight-bold">Unique stays</h3>
                                <div className="d-flex justify-content-between">

                                    <div className="d-flex flex-column col-6 justify-content-start">
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label=" Earth house" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Farm stay" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Heritagehotel(India) " />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="HutNature" />
                                    </div>
                                    <div className="d-flex flex-column col-6 ">
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="lodge" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Tent" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Tiny house" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Treehouse" />
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div>
                                <h3 className="font-weight-bold">House rules</h3>
                                <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Pets allowed" />
                                <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Smoking allowed" />
                            </div>

                            <hr />
                            <div>
                                <h3 className="font-weight-bold">Host language</h3>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-column col-6 justify-content-start">
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label=" English" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Arabic" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Hindi" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Portuguese" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Korean" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="French" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="German" />
                                    </div>
                                    <div className="d-flex flex-column col-6 ">
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Italian" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Spanish" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Chinese (Simplified)" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Bengali" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Punjabi" />
                                        <Form.Check className={styles.cancellationCardCheckBox} type="checkbox" label="Tagalog" />

                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </ModalDialog>
                    <Modal.Footer>
                        <a className={styles.cancellationCardClear} href="">Clear</a>
                        <Button className={styles.cancellationCardSave}>Show 3000+ Stay</Button>
                    </Modal.Footer>
                </Modal>
            </div >



        );
    }
}

export default MoreFilter;
