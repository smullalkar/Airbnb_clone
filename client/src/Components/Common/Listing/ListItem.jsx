import React, { Component } from "react";
import { Card, Row, Col, Carousel, CarouselItem } from "react-bootstrap";
import styles from "./Listing.module.css";
import star from "../../../assets/images/star.svg";
import { v4 as uuidv4 } from "uuid";
import Pagination from "@material-ui/lab/Pagination";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      pageNo: 1,
    };
  }
  componentDidMount() {
    let query = window.location.href;
    this.setState({
      url: query,
    });
  }

  handleShow = (page) => {
    this.setState({ pageNo: page }, () => {});
  };

  render() {
    const { url, pageNo } = this.state;
    const { item } = this.props;
    var count = item && item.length;

    let offset = ((pageNo || 1) - 1) * 8;
    var show = item.filter(
      (item, index) => index >= offset && index < offset + 8
    );
    var donePages = Math.ceil(count / 8);
    return (
      <div>
        <Row className="text-center">
          {item && item.length === 0 ? (
            <Row className="text-center p-4">
              <Col>
                <span style={{ color: "red", fontSize: 17 }}>
                  <svg
                    style={{ width: 30 }}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>{" "}
                  <span className="mr-2">Sorry !! No Properties Available</span>
                </span>
              </Col>
            </Row>
          ) : null}
          {show &&
            show.map((home) => (
              <Col key={uuidv4()} lg={4} className="m-3">
                <Card className={styles.card}>
                  <span className={styles.heart}>&#9829;</span>
                  <Card variant="top" className={styles.cardImage}>
                    <Carousel interval={20000}>
                      {home.images.split(",").map((img) => (
                        <CarouselItem key={uuidv4()}>
                          <img
                            src={img.split(" ").join("")}
                            alt=""
                            key={uuidv4()}
                            className={styles.caroselImage}
                          />
                        </CarouselItem>
                      ))}
                    </Carousel>
                  </Card>
                  <Card.Body
                    onClick={() => {
                      window.open(url + "/entity/id_" + home.property_id);
                    }}
                    className={styles.cardBody}
                  >
                    <div className="d-flex align-items-center">
                      <span className={styles.ratingStar}>&#9733;</span>
                      <span className={styles.rating}>{home.rating} </span>
                      <span className={styles.numrated}>(72)</span>
                    </div>
                    <Card.Title className={styles.cardTitle}>
                      {home.propertyType} . {home.cityName}
                    </Card.Title>
                    <Card.Text className={styles.cardDesc}>
                      {home.decription}
                    </Card.Text>
                    <Card.Text className={styles.cardDesc}>
                      {home.amenity}
                    </Card.Text>
                    <Card.Text className={styles.priceCont}>
                      <span className={styles.amountSpan}>{home.price} </span> /
                      night
                    </Card.Text>
                    <Card.Text className={styles.priceCont}>
                      <span className={styles.amountSpan}>
                        ₹{Math.floor((home.price * 18) / 100 + home.price)}{" "}
                      </span>{" "}
                      / night
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
        <Row>
          {count > 8 ? (
            <Pagination
              count={donePages}
              color="secondary"
              style={{ marginTop: 10 }}
              onChange={(event: object, page: number) => this.handleShow(page)}
            />
          ) : null}
        </Row>
      </div>
    );
  }
}
export default ListItem;
