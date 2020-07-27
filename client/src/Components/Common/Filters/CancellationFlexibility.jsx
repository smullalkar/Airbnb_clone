import React, { Component } from "react";
import { Card, Dropdown } from "react-bootstrap";
import Switch from "react-switch";
import styles from "./Filters.module.css";
import { connect } from "react-redux";
import { closeCancellationFlexibility } from "../../../Redux/user/actions";
import { Link } from "react-router-dom";

class CancellationFlexibility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      isShow: true,
      query: "",
    };
  }
  handleChange = (checked) => {
    this.setState({ checked }, () => {
      this.handleQuery();
    });
  };

  handleCheck = () => {
    this.setState({ checked: false });
  };

  componentDidMount() {
    this.setState({ isShow: true });
  }
  handleSave = () => {
    const { closeCancellationFlexibility } = this.props;
    this.setState({ isShow: false }, () => {
      this.handleQuery();
    });
    closeCancellationFlexibility();
  };

  handleQuery = () => {
    let query = window.location.href.split("&");
    var queryString = new URLSearchParams("/location?");
    for (let i = 1; i < query.length; i++) {
      let str = query[i].split("=");
      if (str[1] !== "null" && str[1] !== "" && str[0] !== "is_cancel") {
        queryString.append(str[0], str[1]);
      }
    }
    this.setState({ query: queryString }, () => {});
    if (this.state.checked) {
      queryString.append("is_cancel", true);
      console.log(queryString.toString());
      this.setState({ query: queryString }, () => {});
    }
  };

  render() {
    const { query } = this.state;
    const { showCancellationFlexibility } = this.props;
    let url = query.toString();
    return (
      <div>
        <>
          <Card className={styles.cancellationCard}>
            <Card.Body>
              <div className="d-flex flex-row justify-content-between">
                <h6>Only show stays that offer cancellation flexibility</h6>
                <Switch
                  onChange={this.handleChange}
                  checked={this.state.checked}
                />
              </div>
            </Card.Body>
            <Card.Footer>
              <div>
                <span
                  className={styles.cancellationCardClear}
                  onClick={this.handleCheck}
                >
                  Clear
                </span>
                <button
                  onClick={this.handleSave}
                  className={styles.cancellationCardSave}
                >
                  {" "}
                  <Dropdown.Item>
                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to={url}
                    >
                      Save{" "}
                    </Link>
                  </Dropdown.Item>
                </button>
              </div>
            </Card.Footer>
          </Card>
        </>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showCancellationFlexibility: state.userReducer.showCancellationFlexibility,
});

const mapDispatchToProps = (dispatch) => ({
  closeCancellationFlexibility: () => dispatch(closeCancellationFlexibility()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CancellationFlexibility);
