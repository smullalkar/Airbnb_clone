import React, { Component } from "react";
import { Card, Pagination } from "react-bootstrap";
import styles from "./MorePlaceToShow.module.css";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Recommendation } from "../../../../Redux/user/actions";

class MorePlaceToShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      similarCount: 1,
      recommendationCount: 1,
    };
  }
  handleDecreaseSimilar = () => {
    this.setState({ similarCount: this.state.similarCount - 1 || 1 });
  };
  handleIncreaseSimilar = () => {
    this.setState({ similarCount: this.state.similarCount + 1 || 1 });
  };
  handleDecreaseRec = () => {
    this.setState({
      recommendationCount: this.state.recommendationCount - 1 || 1,
    });
  };
  handleIncreaseRec = () => {
    this.setState({
      recommendationCount: this.state.recommendationCount + 1 || 1,
    });
  };
  render() {
    const { similarCount, recommendationCount } = this.state;
    const { recommendation, similarProperty } = this.props;
    if (similarProperty && similarProperty.data) {
      let count = similarProperty.data.length;
      let offset = ((similarCount || 1) - 1) * 4;
      var doneSimilarArr = similarProperty.data.filter(
        (item, index) => index >= offset && index < offset + 4
      );
      var doneSimilar = Math.ceil(count / 4);
    }
    if (recommendation && recommendation.data) {
      let count = recommendation.data.length;
      let offset = ((recommendationCount || 1) - 1) * 4;
      var doneRecArr = recommendation.data.filter(
        (item, index) => index >= offset && index < offset + 4
      );
      var doneRec = Math.ceil(count / 4);
    }
    return (
      <>
        <div className="p-4">
          <div className="d-flex flex-row justify-content-between">
            <div>
              <h4 className="text-left font-weight-bold my-3">
                Similar Properties{" "}
              </h4>
            </div>
            <div className="d-flex align-items-center">
              <p className={`m-0 mx-2 ${styles.pagerNumber}`}>
                <span>{similarCount}</span>
                <span>/</span>
                <span>{doneSimilar}</span>
              </p>
              <Pagination className="m-0">
                <Pagination.Prev
                  onClick={this.handleDecreaseSimilar}
                  className="prevPage mx-1"
                />

                {similarCount >= doneSimilar ? (
                  <Pagination.Next className="nextPage mx-1" />
                ) : (
                    <Pagination.Next
                      onClick={this.handleIncreaseSimilar}
                      className="nextPage mx-1"
                    />
                  )}
              </Pagination>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between overflow-auto">
            {doneSimilarArr &&
              doneSimilarArr.map((item) => (
                <>
                  <Card key={uuidv4()} className={styles.card}>
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
                          <span className={styles.rating}>
                            {Number(item.rating).toFixed(2)}
                          </span>
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
                Populars in your city{" "}
              </h4>
            </div>
            <div className="d-flex align-items-center">
              <p className={`m-0 mx-2 ${styles.pagerNumber}`}>
                <span>{recommendationCount}</span>
                <span>/</span>
                <span>{doneRec}</span>
              </p>
              <Pagination className="m-0">
                <Pagination.Prev
                  onClick={this.handleDecreaseRec}
                  className="prevPage mx-1"
                />
                {recommendationCount >= doneRec ? (
                  <Pagination.Next className="nextPage mx-1" />
                ) : (
                    <Pagination.Next
                      onClick={this.handleIncreaseRec}
                      className="nextPage mx-1"
                    />
                  )}
              </Pagination>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between overflow-auto">
            {doneRecArr &&
              doneRecArr.map((item) => (
                <>
                  <Card key={uuidv4()} className={styles.card}>
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
                          <span className={styles.rating}>
                            {Number(item.rating).toFixed(2)}
                          </span>
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


