import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./Billing.module.css";
import cal from "../../../assets/images/cal.png";
import profile from "../../../assets/images/profile.png";
import { connect } from "react-redux";

class PriceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const { data, bookingDetails } = this.props;
    console.log(data && data[0] && data[0].data.data && data[0].data.data[0]);
    console.log(bookingDetails);
    let start = new Date(bookingDetails.checkin);
    let end = new Date(bookingDetails.checkout);
    let diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  render() {
    const {
      data,
      bookingDetails,
      otherDetails,
      childrens,
      adults,
    } = this.props;
    console.log(data && data[0] && data[0].data.data && data[0].data.data[0].ratingcount)
    let start = new Date(bookingDetails.checkin);
    let end = new Date(bookingDetails.checkout);
    let diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return (
      <div>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <Card.Text className={styles.title}>
                  {data &&
                    data[0] &&
                    data[0].data.data &&
                    data[0].data.data[0].propertyName}{" "}
                  in{" "}
                  {data &&
                    data[0] &&
                    data[0].data.data &&
                    data[0].data.data[0].cityName}
                </Card.Text>
                <Card.Text>
                  {data &&
                    data[0] &&
                    data[0].data.data &&
                    data[0].data.data[0].category}{" "}
                  in{" "}
                  {data &&
                    data[0] &&
                    data[0].data.data &&
                    data[0].data.data[0].cityName}
                </Card.Text>
                <Card.Text className="d-flex align-items-center">
                  <span className={styles.ratingStar}>&#9733;</span>
                  <span>
                    {data && data[0] && data[0].data.data && data[0].data.data[0].ratingcount}
                  </span>{" "}
                  <span>Reviews</span>
                </Card.Text>
              </Col>
              <Col>
                <Card.Img
                  variant="top"
                  src={
                    data &&
                    data[0] &&
                    data[0].data.data &&
                    data[0].data.data[0].images
                      .split(",")[0]
                      .split(" ")
                      .join("")
                  }
                />
              </Col>
            </Row>
            <hr />
            <Card.Text className={`d-flex flex-row  ${styles.priceListText}`}>
              {" "}
              <span>
                <img src={cal} alt="" />{" "}
              </span>{" "}
              <span> {Number(childrens) + Number(adults) || 1} &nbsp; guests</span>{" "}
            </Card.Text>
            <Card.Text className={`d-flex flex-row  ${styles.priceListText}`}>
              {" "}
              <span>
                {" "}
                <img src={profile} alt="" />{" "}
              </span>{" "}
              <span>
                {bookingDetails.checkin} &rarr; {bookingDetails.checkout}
              </span>{" "}
            </Card.Text>

            <hr />
            <Card.Text
              className={`d-flex flex-row justify-content-between ${styles.priceListText}`}
            >
              {" "}
              <span>
                {" "}
                ₹{otherDetails && otherDetails.price} x{" "}
                {(diffDays && diffDays) || 1} nights
              </span>{" "}
              <span>
                ₹{(otherDetails && otherDetails.price) * (diffDays && diffDays)}
              </span>{" "}
            </Card.Text>
            <Card.Text
              className={`d-flex flex-row justify-content-between ${styles.priceListText}`}
            >
              {" "}
              <span> Service Fees</span>{" "}
              <span>
                ₹{" "}
                {((otherDetails && otherDetails.price * 18) / 100) * diffDays ||
                  1}{" "}
              </span>{" "}
            </Card.Text>

            <hr />
            <Card.Text className="d-flex flex-row justify-content-between">
              {" "}
              <span className="font-weight-bold"> Total </span>{" "}
              <span className="font-weight-bold">
                ₹{bookingDetails.total_bill || 1}
              </span>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  bookingDetails: state.paymentReducer.bookingDetails,
  otherDetails: state.paymentReducer.otherDetails,
  data: state.entityReducer.data,
  adults: state.entityReducer.adults,
  infants: state.entityReducer.infants,
  childrens: state.entityReducer.childrens,
});


export default connect(mapStateToProps, null)(PriceCard);
