import React, { Component } from "react";
import { Card, Form, Dropdown } from "react-bootstrap";
import styles from "./Filters.module.css";
import { Link } from "react-router-dom";

class PriceFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: "",
      maxPrice: "",
      query: "",
    };
  }
  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.handleQuery();
      }
    );
  };
  handleQuery = () => {
    let query = window.location.href.split("&");
    var queryString = new URLSearchParams("/location?");
    for (let i = 1; i < query.length; i++) {
      let str = query[i].split("=");
      if (
        str[1] !== "null" &&
        str[1] !== "" &&
        str[0] !== "maxPrice" &&
        str[0] !== "minPrice"
      ) {
        queryString.append(str[0], str[1]);
      }
    }

    queryString.append("minPrice", this.state.minPrice);
    queryString.append("maxPrice", this.state.maxPrice);
    this.setState({ query: queryString }, () => { });
  };

  render() {
    let { query, minPrice, maxPrice } = this.state;
    let avg = Math.floor((Number(minPrice) + Number(maxPrice)) / 2);
    console.log(query.toString)
    return (
      <div>
        <Card className={styles.priceCard}>
          <Card.Body>
            <Card.Title>The average nightly price is ₹ {avg}</Card.Title>
            <div className="d-flex flex-row justify-content-between">
              <Form>
                <Form.Group>
                  <Form.Control
                    name="minPrice"
                    value={this.state.minPrice}
                    onChange={this.handleChange}
                    className={styles.priceInput}
                    type="number"
                    placeholder="Min Price"
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="maxPrice"
                    value={this.state.maxPrice}
                    onChange={this.handleChange}
                    className={styles.priceInput}
                    type="number"
                    placeholder="Max Price"
                  />
                </Form.Group>
              </Form>
            </div>
          </Card.Body>
          <Card.Footer>
            <div>
              <button
                onClick={() => { }}
                className={styles.cancellationCardSave}
              >
                {" "}
                <Dropdown.Item>
                  <div
                    to={query.toString()}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    Save
                  </div>{" "}
                </Dropdown.Item>
              </button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default PriceFilter;
