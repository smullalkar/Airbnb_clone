import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import { Card, Row, Col } from "react-bootstrap";

import Amenities from "./Amenities/Amenities"
import HostDetails from "./HostDeatis/HostDetails"
import MorePlaceToStay from "./MorePlaceToShow/MorePlaceToShow"
import ExploreMore from "./ExploreMore/ExploreMore"
import PriceDetails from "./PriceDetails/PriceDetails"
import SleepingArrangement from "./SleepingArrangement/SleepingArrangement"

import styles from './Entity.module.css'
import pic1 from "../../../assets/images/entity7.png"
import pic2 from "../../../assets/images/entity2.jpg"
import pic3 from "../../../assets/images/pic3.webp"
import pic4 from "../../../assets/images/entity4.webp"
import pic5 from "../../../assets/images/entity5.webp"


import clean from "../../../assets/images/clean.png"
import map from "../../../assets/images/map.svg"
import medal from "../../../assets/images/superhost.png"
import home from "../../../assets/images/home.svg"



class Entity extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (

            <div className={styles.entityContainer}>
                <h2>Ivy Cottage at Stumpfields</h2>

                <div className="d-flex flex-row ">
                    <div><span className={styles.ratingStar}>&#9733;</span><span className={styles.rating}>4.62</span><span className={styles.numrated}>(72)</span></div>
                    <div><span className={styles.ratingStar}> &#10082;</span><span className={styles.rating}>Superhost.</span></div>
                    <div><h6 className="mx-2"><a className={styles.alertLink}>Kotagiri, Tamil Nadu, India</a></h6></div>
                </div>

                <div className="row ">
                    <div className={`col-6 ${styles.cardMainImageContainer}`}>
                        <img className={`${styles.cardMainImage} ${styles.mainImage}`} src={pic1} alt="imgage" />
                    </div>

                    <div className="col-6 p-0">
                        <div className="col-12 d-flex flex-wrap p-0">
                            <div className={`col-6 ${styles.cardChildImageContainer}`}>
                                <img className={styles.cardChildImage} src={pic2} alt="imgage" />
                            </div>
                            <div className={`col-6 ${styles.cardChildImageContainer}`}>
                                <img className={`${styles.cardChildImage} top-right-curve`} src={pic3} alt="imgage" />
                            </div>
                            <div className={`col-6 ${styles.cardChildImageContainer}`}>
                                <img className={styles.cardChildImage} src={pic4} alt="imgage" />
                            </div>
                            <div className={`col-6 ${styles.cardChildImageContainer}`}>
                                <img className={`${styles.cardChildImage} bottom-right-curve`} src={pic5} alt="imgage" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className={`${styles.entityContentContainer} col-8 `}>

                        <div className="d-flex flex-row justify-content-between">
                            <div>
                                <h3 className={styles.listingName}>Entire cabin hosted by Sharan Deep Singh</h3>

                                <div className={`${styles.listingBasicDetails} d-flex flex-row `}>
                                    <div><span>2</span><span className="mx-2">guests</span></div>
                                    <span className="mx-2">&bull;</span>
                                    <div><span>1</span><span className="mx-2">bedroom</span></div>
                                    <span className="mx-2">&bull;</span>
                                    <div><span>0</span><span className="mx-2">beds</span></div>
                                    <span className="mx-2">&bull;</span>
                                    <div><span>0</span><span className="mx-2">bathrooms</span></div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.hostAvatarContainer}>
                                    <img className={styles.hostAvatarImage} src="https://via.placeholder.com/150" alt="host" />
                                </div>
                            </div>

                        </div>

                        <hr />

                        <div className="p-4">
                            <div className="d-flex flex-row justify-content-start">
                                <div>
                                    <img src={home} alt="" className="m-2" />
                                </div>
                                <div>
                                    <h6 className={styles.detailHeading}>Entire home</h6>
                                    <p className={styles.detailDescription}>You’ll have the cabin to yourself.</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-start">
                                <div>
                                    <img src={clean} alt="" className="m-2" />
                                </div>
                                <div>
                                    <h6 className={styles.detailHeading}>Clean and tidy</h6>
                                    <p className={styles.detailDescription}><span>9</span>recent guests said this place was sparkling clean.</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-start">
                                <div>
                                    <img src={medal} alt="" className="m-2" />
                                </div>
                                <div>
                                    <h6 className={styles.detailHeading}>Sharan Deep Singh is a Superhost</h6>
                                    <p className={styles.detailDescription}>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-start">

                                <div>
                                    <img src={map} alt="" className="m-2" />
                                </div>

                                <div>
                                    <h6 className={styles.detailHeading}>Great location</h6>
                                    <p className={styles.detailDescription}> <span>95%</span> of recent guests gave the location a 5-star rating.</p>
                                </div>
                            </div>

                        </div>
                        <hr />

                        <div className="p-4">
                            <div className={styles.entityDetailPara}>

                                We are family looking forward to hosting you at a comfortable and cozy house that is set amidst a carpet of green, overlooked by dense forest and the occasional witness to wildlife such as the Indian Gaur and the Barking Deer.

                                With ample space to go on walks, treks and taking in nature, this is an ideal place for a blissful weekend getaway!
                    </div>

                            <div> <h4 ><a className={styles.alertLink}>Contact Host</a></h4></div>
                        </div>
                        <hr />
                        <div className="p-4">
                            <h3 className={styles.entityTitle}>2 nights in Coimbatore</h3>

                            <div className={`${styles.listingBasicDetails} d-flex flex-row `}>
                                <div><span>21</span><span className="mx-1">June 2020</span></div>
                                <span className="mx-1">&#x2D;</span>
                                <div><span></span><span className="mx-1">2 Aug 2020</span></div>
                            </div>

                            <DateRangePicker
                                startDate={this.state.startDate}
                                startDateId="your_unique_start_date_id"
                                endDate={this.state.endDate}
                                endDateId="your_unique_end_date_id"
                                onDatesChange={({ startDate, endDate }) =>
                                    this.setState({ startDate, endDate })
                                }
                                focusedInput={this.state.focusedInput}
                                onFocusChange={(focusedInput) => this.setState({ focusedInput })}
                                startDatePlaceholderText="startDate"
                                endDatePlaceholderText="endDate"
                            ></DateRangePicker>
                        </div>

                        <hr />
                        <SleepingArrangement />
                        <hr />

                        <Amenities />

                    </div>

                    <div className="col-4">
                        <PriceDetails />
                    </div>

                </div>

                <hr />
                <HostDetails />


                <hr />
                <MorePlaceToStay />

                <hr />

                <ExploreMore />



                <hr />

            </div >






        );
    }
}

export default Entity;