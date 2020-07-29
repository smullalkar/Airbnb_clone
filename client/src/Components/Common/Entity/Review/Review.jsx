import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./Review.module.css";
import { connect } from "react-redux";

class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rates, rateCount, reviews } = this.props;
    return (
      <div>
        <div className={styles.reviewContainer}>
          <h2 className={styles.entityTitle}>
            <span className={styles.ratingStar}>&#9733;</span>
            <span className="mx-1">{rates}</span>
            <span className="mx-1">({rateCount} reviews)</span>
          </h2>
          <Row xs={2}>
            <Col className="d-flex">
              <Row className="w-100 my-2">
                <Col xs={8}>Cleanliness</Col>
                <Col>
                  <div className="d-flex align-items-center ">
                    <div className={styles.progressDiv}>
                      <span
                        style={{ width: "90%" }}
                        className={styles.progressPercentage}
                      ></span>
                    </div>

                    <span className={styles.progressRatingNumber}>{rates}</span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="w-100 my-2">
                <Col xs={8}>Cleanliness</Col>
                <Col>
                  <div className="d-flex align-items-center ">
                    <div className={styles.progressDiv}>
                      <span
                        style={{ width: "90%" }}
                        className={styles.progressPercentage}
                      ></span>
                    </div>

                    <span className={styles.progressRatingNumber}>{rates}</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row xs={2}>
            <Col className="d-flex">
              <Row className="w-100 my-2">
                <Col xs={8}>Cleanliness</Col>
                <Col>
                  <div className="d-flex align-items-center ">
                    <div className={styles.progressDiv}>
                      <span
                        style={{ width: "90%" }}
                        className={styles.progressPercentage}
                      ></span>
                    </div>

                    <span className={styles.progressRatingNumber}>{rates}</span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="w-100 my-2">
                <Col xs={8}>Cleanliness</Col>
                <Col>
                  <div className="d-flex align-items-center ">
                    <div className={styles.progressDiv}>
                      <span
                        style={{ width: "90%" }}
                        className={styles.progressPercentage}
                      ></span>
                    </div>

                    <span className={styles.progressRatingNumber}>{rates}</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row xs={2}>
            <Col className="d-flex">
              <Row className="w-100 my-2">
                <Col xs={8}>Cleanliness</Col>
                <Col>
                  <div className="d-flex align-items-center ">
                    <div className={styles.progressDiv}>
                      <span
                        style={{ width: "90%" }}
                        className={styles.progressPercentage}
                      ></span>
                    </div>

                    <span className={styles.progressRatingNumber}>{rates}</span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="w-100 my-2">
                <Col xs={8}>Cleanliness</Col>
                <Col>
                  <div className="d-flex align-items-center ">
                    <div className={styles.progressDiv}>
                      <span
                        style={{ width: "90%" }}
                        className={styles.progressPercentage}
                      ></span>
                    </div>

                    <span className={styles.progressRatingNumber}>{rates}</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row xs={2} className="my-2">
            <Col>
              {reviews &&
                reviews.data &&
                reviews.data.map((item) => (
                  <>
                    <div className="d-flex flex-row justify-content-start align-items-center">
                      <div className={styles.reviewerAvatarContainer}>
                        <img
                          className={styles.reviewerAvatarImage}
                          src="https://via.placeholder.com/150"
                          alt="reviewer"
                        />
                      </div>
                      <div className="ml-1">
                        <div>
                          <h6 className={styles.reviewerName}>
                            {item.firstname} {item.lastname}
                          </h6>
                        </div>
                        <div className={styles.reviewedDate}>
                          {item.createdAt.split(" ")[0]}
                        </div>
                      </div>
                    </div>
                    <p className={styles.reviewText}>{item["review "]}</p>
                  </>
                ))}
            </Col>
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

// export default Review;
