import React, { Component } from "react";

import { Card } from "react-bootstrap";

import styles from "./SleepingArrangement.module.css";

import bed from "../../../../assets/images/bed.png";

import singlebed from "../../../../assets/images/singlebed.png";
import { connnect, connect } from "react-redux";

class SleepingArrangement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    if (data && data[0]) {
      var bedroom = data[0].data.data[0].bedroomCount;
      var beds = data[0].data.data[0].bedCount;
    }
    return (
      <div className="p-4">
        <h4 className="font-weight-bold">Sleeping arrangements</h4>
        <div className="d-flex flex-row">
          <Card className={styles.bedArrangement}>
            <Card.Body>
              <div className="d-flex flex-row justify-content-between">
                <div>
                  <img src={bed} alt="" srcSet="" className="m-2" />
                </div>
              </div>
              <div>
                <span>Beedroom</span> <span>{bedroom && bedroom}</span>
              </div>
              <div>
                <span>{beds && beds}</span> <span>queen size</span>
              </div>
            </Card.Body>
          </Card>
          {/* <Card className={styles.bedArrangement}>
            <Card.Body>
              <div className="d-flex flex-row justify-content-between">
                <div>
                  <img src={singlebed} alt="" className="m-2" />
                </div>
              </div>
              <div>
                <span>Beedroom</span> <span>2</span>
              </div>
              <div>
                <span>1</span> <span>single bed</span>
              </div>
            </Card.Body>
          </Card> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.entityReducer.data,
});

export default connect(mapStateToProps)(SleepingArrangement);

// export default SleepingArrangement;
