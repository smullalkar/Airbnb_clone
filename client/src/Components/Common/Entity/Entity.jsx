import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getData,
  getBookedDates,
  getHostInfo,
  getRecommendation,
  getSimilarProperties,
  getReview,
} from "../../../Redux/entity/actions";
import { v4 as uuidv4 } from "uuid";
import Amenities from "./Amenities/Amenities";
import HostDetails from "./HostDeatis/HostDetails";
import MorePlaceToStay from "./MorePlaceToShow/MorePlaceToShow";
import ExploreMore from "./ExploreMore/ExploreMore";
import PriceDetails from "./PriceDetails/PriceDetails";

import "react-day-picker/lib/style.css";
import { Col, Row, Container } from "react-bootstrap";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import styles from "./Entity.module.css";

import clean from "../../../assets/images/clean.png";
import map from "../../../assets/images/map.svg";
import medal from "../../../assets/images/superhost.png";
import homeImage from "../../../assets/images/home.png";
import Review from "./Review/Review";

class Entity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: [],
      obj: {},
      id: "",
      images: [],
      startDate: new Date(),
      bookedDateRange: [],
      disbaleDates: [],
      hostInfo: [],
      id: "",
    };
  }
  componentDidMount() {
    const { getData, getBookedDates, getHostInfo, getReview } = this.props;
    let query = window.location.href.split("&");
    let newQuery = query[query.length - 1].split("/entity/");
    newQuery = newQuery[newQuery.length - 1].split("_")[1];
    this.setState({ id: newQuery });
    getData({ property_id: Number(newQuery) });
    getBookedDates({ propertyId: Number(newQuery) });
    getReview({ propertyId: Number(newQuery) });
    getHostInfo({ owner_id: Number(newQuery) });
    this.setState({ id: newQuery });
  }
  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const {
      data,
      getRecommendation,
      getSimilarProperties,
    } = this.props;
    const { home, id } = this.state;
    var obj = {},
      similiar = {};
    if (prevState.home.length === 0) {
      if (data !== undefined) {
        if (data.length !== 0) {
          this.setState({ home: data.data[0] }, () => {});
          if (home.images) {
            let img = home.images.split(",");
            img = img.map((item) => item.split(" ").join(""));
            this.setState({ images: img });
          }
        }
      }
      let query = window.location.href.split("&");
      obj.location = query[1].split("=")[1].split("/")[0];
      similiar.location = query[1].split("=")[1].split("/")[0]
      query = query[query.length - 1].split("/entity");
      obj.property_id = Number(id);
      getRecommendation(obj);
      similiar.property_id = Number(id);
      similiar.amenities = home && home.amenity && home.amenity.split(" ").join("_");
      console.log(similiar)
      getSimilarProperties(similiar);
    }
  }

  render() {
    const { home, images } = this.state;
    const { hostInfo } = this.props;
    console.log("home ", home)
    return (
      <Container className={styles.entityContainer}>
        <h2>{home.propertyName}</h2>
        <div className="d-flex flex-row ">
          <div>
            <span className={styles.ratingStar}>&#9733;</span>
            <span className={styles.rating}>{home.rating}</span>
            <span className={styles.numrated}>({home.ratingcount})</span>
          </div>
          <div>
            <span className={styles.ratingStar}> &#10082;</span>
            <span className={styles.rating}>Superhost.</span>
          </div>
          <div>
            <h6 className="mx-2 d-none d-md-block">
              <a className={styles.alertLink}>
                {home.cityName}, {home.stateName}, {home.countryName}
              </a>
            </h6>
          </div>
        </div>

        <Row className="my-5">
          <div className="col-12 col-md-6 pb-0">
            <img className={styles.cardMainImage} src={images[0]} alt="image" />
          </div>
          <Col className="col-6 d-none d-lg-block">
            <Row>
              <Col className="col-6 pb-1 px-1 ">
                <img
                  className={styles.cardChildImage}
                  src={images[1]}
                  alt="image"
                />
              </Col>
              <Col className="col-6 pb-1 px-1">
                <img
                  className={`${styles.cardChildImage} top-right-curve`}
                  src={images[2]}
                  alt="image"
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6 pt-1 px-1">
                <img
                  className={styles.cardChildImage}
                  src={images[3]}
                  alt="image"
                />
              </Col>
              <Col className="col-6 pt-1 px-1">
                <img
                  className={`${styles.cardChildImage} bottom-right-curve`}
                  src={images[4]}
                  alt="image"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <hr />
        <Row>
          <div className={`${styles.entityContentContainer} col-12 col-md-8 `}>
            <div className="d-flex flex-row justify-content-between">
              <div>
                <h3 className={styles.listingName}>
                  {hostInfo &&
                    hostInfo.data &&
                    hostInfo.data.map((item) => (
                      <span key={uuidv4()}>
                        Hosted by {item.firstname + " " + item.lastname}
                      </span>
                    ))}
                </h3>
                <div
                  className={`${styles.listingBasicDetails} d-flex flex-row `}
                >
                  <div>
                    <span>{home.accomodatesCount}</span>
                    <span className="mx-2">guests</span>
                  </div>
                  <span className="mx-2">&bull;</span>
                  <div>
                    <span>{home.bedroomCount}</span>
                    <span className="mx-2">bedroom</span>
                  </div>
                  <span className="mx-2">&bull;</span>
                  <div>
                    <span>{home.bedCount}</span>
                    <span className="mx-2">beds</span>
                  </div>
                  <span className="mx-2">&bull;</span>
                  <div>
                    <span>{home.bathroomCount}</span>
                    <span className="mx-2">bathrooms</span>
                  </div>
                </div>
              </div>
              <div className="d-none d-md-block">
                <div className={styles.hostAvatarContainer}>
                  <img
                    className={styles.hostAvatarImage}
                    src="https://via.placeholder.com/150"
                    alt="host"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="p-4">
              <div className="d-flex flex-row justify-content-start">
                <div>
                  <img src={homeImage} alt="" className="m-2" />
                </div>
                <div>
                  <h6 className={styles.detailHeading}>{home.category}</h6>
                  <p className={styles.detailDescription}>
                    You’ll have the cabin to yourself.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start">
                <div>
                  <img src={clean} alt="" className="m-2" />
                </div>
                <div>
                  <h6 className={styles.detailHeading}>Clean and tidy</h6>
                  <p className={styles.detailDescription}>
                    <span>9</span>recent guests said this place was sparkling
                    clean.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start">
                <div>
                  <img src={medal} alt="" className="m-2" />
                </div>
                <div>
                  <h6 className={styles.detailHeading}>
                    {hostInfo.data &&
                      hostInfo.data.map((item) => (
                        <span key={uuidv4()}>
                          {item.firstname + " " + item.lastname + " "}
                        </span>
                      ))}
                    is a Superhost
                  </h6>
                  <p className={styles.detailDescription}>
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start">
                <div>
                  <img src={map} alt="" className="m-2" />
                </div>
                <div>
                  <h6 className={styles.detailHeading}>Great location</h6>
                  <p className={styles.detailDescription}>
                    {" "}
                    <span>95%</span> of recent guests gave the location a 5-star
                    rating.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="p-4">
              <div className={styles.entityDetailPara}>{home.description}</div>
            </div>

            <hr />
            <Amenities />
          </div>
          <div className="col-12 col-md-4">
            <PriceDetails />
          </div>
        </Row>
        <hr />
        <div>
          <Review rates={home.rating} rateCount={home.ratingcount} />
        </div>
        <hr />
        <HostDetails />
        <hr />
        <MorePlaceToStay />
        <hr />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.userReducer.data,
  typeOfPlaces: state.userReducer.typeOfPlaces,
  amenities: state.userReducer.amenities,
  facilities: state.userReducer.facilities,
  bookedDates: state.entityReducer.bookedDates,
  hostInfo: state.entityReducer.hostInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (payload) => dispatch(getData(payload)),
  getBookedDates: (payload) => dispatch(getBookedDates(payload)),
  getHostInfo: (payload) => dispatch(getHostInfo(payload)),
  getRecommendation: (payload) => dispatch(getRecommendation(payload)),
  getSimilarProperties: (payload) => dispatch(getSimilarProperties(payload)),
  getReview: (payload) => dispatch(getReview(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Entity);
