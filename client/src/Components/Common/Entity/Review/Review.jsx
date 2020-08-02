import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./Review.module.css";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rates, rateCount, reviews } = this.props;
    console.log(reviews)
    return (
      <div>
        <div className={styles.reviewContainer}>
          <h2 className={styles.entityTitle}>
            <span className={styles.ratingStar}>&#9733;</span>
            <span className="mx-1">{rates && Number(rates).toFixed(2)}</span>
            <span className="mx-1">({rateCount} reviews)</span>
          </h2>
          <Row xs={1} md={2} className="my-3">

            {reviews &&
              reviews.data &&
              reviews.data.map((item) => (
                <Col key={uuidv4()}>
                  <div>
                    <div
                      kye={uuidv4()}
                      className="d-flex flex-row justify-content-start align-items-center"
                    >
                      <div className={styles.reviewerAvatarContainer}>
                        <img
                          className={styles.reviewerAvatarImage}
                          src="https://via.placeholder.com/150"
                          alt="reviewer"
                        />

                      </div>
                      <span className="pl-2 pr-2 font-weight-bold">{ item.firstname +" "+ item.lastname}  </span><br/>
                      <div className={styles.reviewedDate}>
                        {item.createdAt.split(" ")[0]}
                      </div>
                    </div>
                  </div>

                  <p className={styles.reviewText}>{item["review "]}</p>
                </Col>
              ))}

          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.entityReducer.reviews,
});

export default connect(mapStateToProps, null)(Review);

