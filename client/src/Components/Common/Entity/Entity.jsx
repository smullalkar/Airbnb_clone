import React, { Component } from "react";

import { Card } from "react-bootstrap";

import styles from './Entity.module.css';
import pic1 from "../../../assets/images/entity7.png"
import pic2 from "../../../assets/images/entity2.jpg"
import pic3 from "../../../assets/images/entity3.png"
import pic4 from "../../../assets/images/entity4.webp"
import pic5 from "../../../assets/images/entity5.webp"
import PriceDetails from "./PriceDetails";



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
                    <div><span className={styles.ratingStar}>&#9733;</span><span className={styles.rating}>Superhost.</span></div>
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
                            icon
                    </div>

                    </div>

                    <hr />

                    <div>
                        <div className="d-flex flex-row justify-content-start">
                            {/* <div>
                            home icon
                        </div> */}
                            <div>
                                <div><h6 className={styles.detailHeading}>Entire home</h6></div>
                                <div><p className={styles.detailDescription}>You’ll have the cabin to yourself.</p></div>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-start">
                            {/* <div>
                            clean icon
                        </div> */}
                            <div>
                                <div><h6 className={styles.detailHeading}>Clean and tidy</h6></div>
                                <div><p className={styles.detailDescription}><span>9</span>recent guests said this place was sparkling clean.</p></div>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-start">
                            {/* <div>
                            superhost icon
                        </div> */}
                            <div>
                                <div><h6 className={styles.detailHeading}>Sharan Deep Singh is a Superhost</h6></div>
                                <div><p className={styles.detailDescription}>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p></div>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-start">

                            {/* <div>
                            location icon
                        </div> */}

                            <div>
                                <div><h6 className={styles.detailHeading}>Great location</h6></div>
                                <div><p className={styles.detailDescription}> <span>95%</span> of recent guests gave the location a 5-star rating.</p></div>
                            </div>
                        </div>

                    </div>
                    <hr />

                    <div>
                        <div className={styles.entityDetailPara}>

                            We are family looking forward to hosting you at a comfortable and cozy house that is set amidst a carpet of green, overlooked by dense forest and the occasional witness to wildlife such as the Indian Gaur and the Barking Deer.

                            With ample space to go on walks, treks and taking in nature, this is an ideal place for a blissful weekend getaway!
                    </div>

                        <div> <h4 className="mx-2"><a className={styles.alertLink}>Contact Host</a></h4></div>
                    </div>
                    <hr />
                    <div>
                        <h3>Amenities</h3>
                        <div></div>
                    </div>

                    <hr />

                    <div>
                        <PriceDetails />
                    </div>
                </div>




            </div>



        );
    }
}

export default Entity;