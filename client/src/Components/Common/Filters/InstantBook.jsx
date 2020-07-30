import React, { Component } from "react";
import { Card, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Filters.module.css";

class InstantBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      query: "",
    };
  }
  handleChange = (e) => {
    this.setState({ checked: e.target.checked }, () => {
      this.handleQuery();
    });
  };
  handleQuery = () => {
    let query = window.location.href.split("&");
    var queryString = new URLSearchParams("/location?");
    for (let i = 1; i < query.length; i++) {
      let str = query[i].split("=");
      if (str[1] !== "null" && str[1] !== "" && str[0] !== "instantBook") {
        queryString.append(str[0], str[1]);
      }
    }
    if (this.state.checked) {
      queryString.append("instantBook", this.state.checked);
      this.setState({ query: queryString }, () => { });
    }
    if(!this.state.checked){
      queryString.delete("instantBook");
      this.setState({ query: queryString }, () => {});
    }
  };

  render() {
    let { query, checked } = this.state;
    console.log(query.toString());
    return (
      <div>
        <Card className={styles.cancellationCard}>
          <Card.Body>
            <div className="d-flex flex-row justify-content-between">
              <h6 className="font-weight-bold">Instant Book</h6>
              <Form.Check
                className={styles.cancellationCardCheckBox}
                type="checkbox"
                checked={checked}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <h6>Listings you can book without waiting for host approval</h6>
            </div>
          </Card.Body>
          <Card.Footer>
            <div>
              <span
                className={styles.cancellationCardClear}
                onClick={() => this.setState({ checked: false })}
              >
                Clear
              </span>
              <button className={styles.cancellationCardSave}>
                <Dropdown.Item>
                  <span
                    to={query.toString()}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Save
                  </span>
                </Dropdown.Item>
              </button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default InstantBook;
