import React, { Component } from "react";
import { Button } from "react-bootstrap";
import sheild from "../../../../assets/images/shield.png";
import styles from "./HostDetails.module.css";
import { connect } from "react-redux";

class HostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidUpdate(prevProps, prevState) {
    const { data } = this.props;
    if (prevState.data.length === 0) {
      data.map((item) => this.setState({ data: item.data.data[0] }, () => { }));
    }
  }
  render() {
    const { data } = this.state;
    const { hostInfo } = this.props;
    return (
      <div className="p-4">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="d-flex flex-row justify-content-start align-items-center">
              <div className={styles.hostAvatarContainer}>
                <img
                  className={styles.hostAvatarImage}
                  src="https://via.placeholder.com/150"
                  alt="host"
                />
              </div>
              <div className="mx-3">
                <div>
                  <h6 className={styles.hostName}>
                    {" "}
                    {hostInfo &&
                      hostInfo.data &&
                      hostInfo.data.map((item) => (
                        <span>
                          Hosted by {item.firstname + " " + item.lastname}
                        </span>
                      ))}
                  </h6>
                </div>
                <div className={styles.hostDate}> Joined in May 2016</div>
              </div>
            </div>
            <div className="d-flex flex-row p-2">
              <div>
                <span className={styles.ratingStar}>&#9733;</span>
                <span className={styles.rating}>{data.rating}</span>
                <span className={styles.numrated}>({data.ratingcount})</span>
              </div>
              <div>
                <span className={styles.ratingStar}></span>&#128737;
                <span className={styles.rating}>Identity verified</span>
              </div>
              <div>
                <span className={styles.ratingStar}>&#10082;</span>
                <span className={styles.rating}>Superhost.</span>
              </div>
            </div>

            <div className={styles.entityDetailPara}>{data.description}</div>
            <div>
              <h6 className="font-weight-bold">During your stay</h6>
              <p className="text-muted">
                Obviously I am there either in person or over phone through your
                stay.
              </p>
            </div>
            <div>
              <h6 className="font-weight-bold">
                {hostInfo && hostInfo.data &&
                  hostInfo.data.map((item) => (
                    <span>{item.firstname + " " + item.lastname} </span>
                  ))}
                is a Superhost
              </h6>
              <p className="text-muted">
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div>
              <span>Response rate </span> <span> &#58; </span> <span>100%</span>
            </div>
            <div>
              <span>Response time </span> <span> &#58; </span>{" "}
              <span>within an hour</span>
            </div>
            <div>
              {" "}
              {hostInfo &&
                hostInfo.data &&
                hostInfo.data.map((item) => (
                  <>
                    <div className="pt-2">
                      {" "}
                      {item.firstname + " " + item.lastname}
                    </div>
                    <div className="pt-2"> {item.email}</div>
                    <div className="pt-2 pb-2"> {item.phone}</div>
                  </>
                ))}{" "}
            </div>

            <div className="d-flex flex-row justify-content-between">
              <div>
                <img
                  className={styles.shieldAvatarContainer}
                  src={sheild}
                  alt=""
                />
              </div>
              <div>
                <p className="text-muted px-2">
                  To protect your payment, never transfer money or communicate
                  outside of the Airbnb website or app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.entityReducer.data,
  hostInfo: state.entityReducer.hostInfo,
});

export default connect(mapStateToProps, null)(HostDetails);

// export default HostDetails;
