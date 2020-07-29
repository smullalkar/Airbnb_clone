import React, { Component } from "react";
import { Card, Pagination } from "react-bootstrap";
import styles from "./MorePlaceToShow.module.css";
import { connect } from "react-redux";

class MorePlaceToShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      similarity: [],
      recommendation: [],
    };
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.data === 0 && this.props.data.length !== 0) {
  //     this.setState({ data: this.props.data });
  //   }
  // }

  render() {
    // const { data } = this.state;
    const { recommendation, similarProperty } = this.props;
    console.log(similarProperty);
    return (
      <>
        <div className="p-4">
          <div className="d-flex flex-row justify-content-between">
            <div>
              <h4 className="text-left font-weight-bold my-3">
                Nearby Populars{" "}
              </h4>
            </div>
            <div className="d-flex align-items-center">
              <p className={`m-0 mx-2 ${styles.pagerNumber}`}>
                <span>3</span>
                <span>/</span>
                <span>3</span>
              </p>
              <Pagination className="m-0">
                <Pagination.Prev className="prevPage mx-1" />

                <Pagination.Next className="nextPage mx-1" />
              </Pagination>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            {recommendation &&
              recommendation.data &&
              recommendation.data.map((item) => (
                <>
                  <Card className={styles.card}>
                    <span className={styles.heart}>&#9829;</span>
                    <Card.Img
                      variant="top"
                      className={styles.cardImage}
                      src={item.images.split(",")[0].split(" ").join("")}
                    />

                    <Card.Body className={styles.cardBody}>
                      <div className="d-flex justify-content-between">
                        <div>
                          <Card.Title className={styles.cardTitle}>
                            {item.propertyName}{" "}
                          </Card.Title>
                        </div>
                        <div>
                          {" "}
                          <span className={styles.ratingStar}>&#9733;</span>
                          <span className={styles.rating}>{item.rating}</span>
                          <span className={styles.numrated}>
                            ({item.ratingcount})
                          </span>{" "}
                        </div>
                      </div>

                      <Card.Text className={styles.cardDesc}>
                        {item.cityName} . {item.stateName}
                      </Card.Text>
                      <Card.Text className={styles.priceCont}>
                        <span className={styles.amountSpan}>
                          ₹{item.price}{" "}
                        </span>{" "}
                        / night
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </>
              ))}
          </div>
        </div>
        <div className="p-4">
          <div className="d-flex flex-row justify-content-between">
            <div>
              <h4 className="text-left font-weight-bold my-3">
                Similar Peroeprties{" "}
              </h4>
            </div>
            <div className="d-flex align-items-center">
              <p className={`m-0 mx-2 ${styles.pagerNumber}`}>
                <span>3</span>
                <span>/</span>
                <span>3</span>
              </p>
              <Pagination className="m-0">
                <Pagination.Prev className="prevPage mx-1" />

                <Pagination.Next className="nextPage mx-1" />
              </Pagination>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            {similarProperty &&
              similarProperty.data &&
              similarProperty.data.map((item) => (
                <>
                  <Card className={styles.card}>
                    <span className={styles.heart}>&#9829;</span>
                    <Card.Img
                      variant="top"
                      className={styles.cardImage}
                      src={item.images.split(",")[0].split(" ").join("")}
                    />

                    <Card.Body className={styles.cardBody}>
                      <div className="d-flex justify-content-between">
                        <div>
                          <Card.Title className={styles.cardTitle}>
                            {item.propertyName}{" "}
                          </Card.Title>
                        </div>
                        <div>
                          {" "}
                          <span className={styles.ratingStar}>&#9733;</span>
                          <span className={styles.rating}>{item.rating}</span>
                          <span className={styles.numrated}>
                            ({item.ratingcount})
                          </span>{" "}
                        </div>
                      </div>

                      <Card.Text className={styles.cardDesc}>
                        {item.cityName} . {item.stateName}
                      </Card.Text>
                      <Card.Text className={styles.priceCont}>
                        <span className={styles.amountSpan}>
                          ₹{item.price}{" "}
                        </span>{" "}
                        / night
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </>
              ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  similarProperty: state.entityReducer.similarProperty,
  recommendation: state.entityReducer.recommendation,
});

export default connect(mapStateToProps, null)(MorePlaceToShow);

// export default MorePlaceToShow;


