import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import styles from "./PriceDetails.module.css";
import {
  addAdults,
  subtractAdults,
  addChildrens,
  subtractChildrens,
  addInfants,
  subtractInfants,
} from "../../../../Redux/entity/actions";

class AddGuestsEntity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      adults,
      childrens,
      infants,
      addAdults,
      subtractAdults,
      addChildrens,
      subtractChildrens,
      addInfants,
      subtractInfants,
    } = this.props;
    return (
      <div>
        <Card className={styles.guestCard}>
          <Card.Body>
            <div className="row">
              <div className=" col-8 mt-3">
                <h6 className="font-weight-bold">Adults</h6>
                <h6 className="text-muted ">Ages 13 or above</h6>
              </div>
              <div className=" col-4 mt-3">
                <div className="d-flex flex-row bd-highlight ">
                  <div className=" mx-1 bd-highlight">
                    {" "}
                    <button
                      onClick={subtractAdults}
                      className={styles.guestButton}
                    >
                      -
                    </button>
                  </div>
                  <div className="  mx-1 bd-highlight">
                    {" "}
                    <p>{adults} </p>
                  </div>
                  <div className="  mx-1 bd-highlight">
                    <button onClick={addAdults} className={styles.guestButton}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div className="row">
              <div className=" col-8 mt-3">
                <h6 className="font-weight-bold">Children</h6>
                <h6 className="text-muted ">Ages 2–12</h6>
              </div>
              <div className=" col-4 mt-3">
                <div className="d-flex flex-row bd-highlight ">
                  <div class=" mx-1 bd-highlight">
                    {" "}
                    <button
                      onClick={subtractChildrens}
                      className={styles.guestButton}
                    >
                      -
                    </button>
                  </div>
                  <div class="  mx-1 bd-highlight">
                    <p>{childrens} </p>
                  </div>
                  <div class="  mx-1 bd-highlight">
                    <button
                      onClick={addChildrens}
                      className={styles.guestButton}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div className="row">
              <div className=" col-8 mt-3">
                <h6 className="font-weight-bold">Infants</h6>
                <h6 className="text-muted ">Under 2</h6>
              </div>
              <div className=" col-4 mt-3">
                <div className="d-flex flex-row bd-highlight ">
                  <div class=" mx-1 bd-highlight">
                    {" "}
                    <button
                      onClick={subtractInfants}
                      className={styles.guestButton}
                    >
                      -
                    </button>
                  </div>
                  <div class="  mx-1 bd-highlight">
                    <p>{infants}</p>
                  </div>
                  <div class="  mx-1 bd-highlight">
                    <button onClick={addInfants} className={styles.guestButton}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <span className={styles.close}>close</span>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  adults: state.entityReducer.adults,
  infants: state.entityReducer.infants,
  childrens: state.entityReducer.childrens,
});

const mapDispatchToProps = (dispatch) => ({
  addAdults: () => dispatch(addAdults()),
  subtractAdults: () => dispatch(subtractAdults()),
  addChildrens: () => dispatch(addChildrens()),
  subtractChildrens: () => dispatch(subtractChildrens()),
  addInfants: () => dispatch(addInfants()),
  subtractInfants: () => dispatch(subtractInfants()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGuestsEntity);
// export default AddGuestsEntity;
