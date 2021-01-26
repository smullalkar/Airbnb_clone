import React, { Component } from "react";
import { Card, Form, Dropdown } from "react-bootstrap";
import styles from "./Filters.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TypeOfPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type_of_place: "",
      place_array: [],
      query: "",
    };
  }

  handleChange = (e) => {
    let query = window.location.href.split("&");
    var queryString = new URLSearchParams("/location?");
    for (let i = 1; i < query.length; i++) {
      let str = query[i].split("=");
      if (str[1] !== "null" && str[1] !== "") {
        queryString.append(str[0], str[1]);
      }
    }
    if (e.target.checked) {
      this.setState(
        {
          place_array: [
            ...this.state.place_array,
            e.target.value.split(" ").join("_"),
          ],
        },
        () => {
          this.state.place_array.map((item) => {
            queryString.append("type_of_place", item.split(" ").join("_"));
          });
          this.setState({ query: queryString }, () => {});
        }
      );
    } else {
      this.setState(
        {
          place_array: this.state.place_array.filter(
            (val) => val != e.target.value.split(" ").join("_")
          ),
        },
        () => {
          this.state.place_array.map((item) => {
            queryString.append("type_of_place", item.split(" ").join("_"));
          });
          this.setState({ query: queryString }, () => {});
        }
      );
    }
  };

  render() {
    const { typeOfPlaces } = this.props;
    const { query } = this.state;
    return (
      <div>
        <Card className={styles.placeCard}>
          <Card.Body>
            <div>
              {typeOfPlaces &&
                typeOfPlaces.data &&
                typeOfPlaces.data.map((categories) => (
                  <Form.Check
                    onChange={this.handleChange}
                    className={styles.cancellationCardCheckBox}
                    type="checkbox"
                    key={categories.id}
                    value={categories.type_of_place}
                    label={categories.type_of_place}
                  />
                ))}
            </div>
          </Card.Body>
          <Card.Footer>
            <div>
              <Link
                to={query.toString()}
                style={{ textDecoration: "none", color: "white" }}
              >
                <button
                  className={styles.cancellationCardSave}
                  onClick={this.handleClick}
                >
                  Save
                </button>
              </Link>
            </div>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  typeOfPlaces: state.userReducer.typeOfPlaces,
});
export default connect(mapStateToProps, null)(TypeOfPlace);
