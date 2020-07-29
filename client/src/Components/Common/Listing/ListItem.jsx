import React, { Component } from "react";
import { Card, Row, Col, Carousel, CarouselItem } from "react-bootstrap";
import styles from "./Listing.module.css";
import heart from "../../../assets/images/heart.svg";
import star from "../../../assets/images/star.svg";
import { v4 as uuidv4 } from "uuid";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }
  componentDidMount() {
    let query = window.location.href;
    this.setState({
      url: query,
    });
  }

  render() {
    const { url } = this.state;
    const { item } = this.props;
    console.log(item)
    console.log("Hello")
    return (
      <div>
        <Row className="text-center">
          {item.data &&
            item.data.map((home) => (
              <Col
                key={uuidv4()}
                lg={2}
                className="m-3"
                onClick={() => {
                  window.open(url + "/entity/id_" + home.property_id);
                }}
              >
                <Card className={styles.card}>
                  <span className={styles.heart}>&#9829;</span>
                  <Card variant="top" className={styles.cardImage}>
                    <Carousel interval={20000}>
                      {home.images.split(",").map((img) => (
                        <CarouselItem>
                          <img
                            src={img.split(" ").join("")}
                            alt=""
                            key={uuidv4()}
                            width="280px"
                            height="150px"
                          />
                        </CarouselItem>
                      ))}
                    </Carousel>
                  </Card>
                  <Card.Body className={styles.cardBody}>
                    <div className="d-flex align-items-center">
                      <span className={styles.ratingStar}>&#9733;</span>
                      <span className={styles.rating}>
                        {home.rating }{" "}
                      </span>
                      <span className={styles.numrated}>(72)</span>
                    </div>
                    <Card.Title className={styles.cardTitle}>
                      {home.propertyType} . {home.cityName}
                    </Card.Title>
                    <Card.Text className={styles.cardDesc}>
                      {home.decription}
                    </Card.Text>
                    <Card.Text className={styles.priceCont}>
                      <span className={styles.amountSpan}>{home.price} </span> /
                      night
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    );
  }
}
export default ListItem;
