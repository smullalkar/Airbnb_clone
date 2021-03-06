import React, { Component } from "react";
import {
  Button,
  Pagination,
  Dropdown,
  ButtonGroup,
  Modal,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import CancellationFlexibility from "../../Common/Filters/CancellationFlexibility";
import TypeOfPlace from "../../Common/Filters/TypeOfPlace";
import PriceFilter from "../../Common/Filters/PriceFilter";
import InstantBook from "../../Common/Filters/InstantBook";
import MoreFilter from "../../Common/Filters/MoreFilter";
import styles from "./Listing.module.css";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import {
  getData,
  closeCancellationFlexibility,
  getTypeOfPlace,
  getAmenities,
  getFacilities,
  getPropertyType,
  showMoreFilters,
} from "../../../Redux/user/actions";
import MapContainer from "../GoogleMap/MapContainer";

class Lisiting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreFilters: false,
      obj: {},
      data: [],
      showMap: true
    };
  }

  componentDidMount() {
    const {
      getData,
      data,
      getTypeOfPlace,
      getAmenities,
      getFacilities,
      getPropertyType,
    } = this.props;
    var query = new URLSearchParams(window.location.href);
    let param = decodeURIComponent(query)
      .split("&")
      .filter((item, index) => index > 0);
    var obj = {};

    param.forEach((item) => {
      let parameter = item.split("=");
      if (parameter[1] !== "") {
        if (!obj[parameter[0]]) {
          obj[parameter[0]] = parameter[1];
        }
        else {
          obj[parameter[0]] += "," + parameter[1];
        }
      }
    });
    console.log(obj)
    getData(obj);
    getTypeOfPlace();
    getAmenities();
    getFacilities();
    getPropertyType();
    this.setState({ data: data }, () => { });
  }

  componentDidUpdate(prevProps, prevState) {
    const { getData } = this.props;
    if (prevProps.location.pathname !== this.props.location.pathname) {
      var query = new URLSearchParams(window.location.href);
      let param = decodeURIComponent(query)
        .split("&")
        .filter((item, index) => index > 0);
      var obj = {};
      param.forEach((item) => {
        let parameter = item.split("=");
        if (!obj[parameter[0]]) {
          obj[parameter[0]] = parameter[1];
        } else {
          obj[parameter[0]] += "," + parameter[1];
        }
      });
      console.log(obj)

      getData(obj);
    }
  }
  closeMap = () => {
    this.setState({ showMap: false })
  }
  openMap = () => {
    this.setState({ showMap: true })
  }

  render() {
    var co_ordinates = [];
    const { isLoading, data, showMoreFilters, showMoreFilter } = this.props;
    if (data && data.length != 0) {
      data.map((item) =>
        co_ordinates.push({ lat: Number(item.lat), lng: Number(item.lng) })
      );
    }
    return (
      <div>
        {!isLoading ? (
          <>
            <div className="flex-row mx-2 d-none d-md-flex">
              <Dropdown as={ButtonGroup} className="m-2">
                <Dropdown.Toggle
                  className={styles.filterButton}
                  variant="outline-secondary"
                >
                  {" "}
                  Cancellation flexibility
                </Dropdown.Toggle>
                <Dropdown.Menu className="border-0">
                  <CancellationFlexibility />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={ButtonGroup} className="m-2">
                <Dropdown.Toggle
                  className={styles.filterButton}
                  variant="outline-secondary"
                >
                  {" "}
                  Type of Place
                </Dropdown.Toggle>
                <Dropdown.Menu className="border-0">
                  <TypeOfPlace />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={ButtonGroup} className="m-2">
                <Dropdown.Toggle
                  className={styles.filterButton}
                  variant="outline-secondary"
                >
                  {" "}
                  Price
                </Dropdown.Toggle>
                <Dropdown.Menu className="border-0">
                  <PriceFilter />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={ButtonGroup} className="m-2">
                <Dropdown.Toggle
                  className={styles.filterButton}
                  variant="outline-secondary"
                >
                  {" "}
                  Instant Book
                </Dropdown.Toggle>
                <Dropdown.Menu className="border-0">
                  <InstantBook />
                </Dropdown.Menu>
              </Dropdown>
              <div className="  m-2">
                <Button
                  className={styles.filterButton}
                  variant="outline-secondary"
                  onClick={showMoreFilters}
                >
                  More Filters
                </Button>
              </div>
              <MoreFilter show={showMoreFilter} />
            </div>

            <div className="d-flex flex-column flex-md-row   pl-5 align-items-center">
              <h6 className={styles.alertHeading}>
                Check travel restrictions before booking.
              </h6>
              <h6 className={`${styles.alertDesc} mx-2`}>
                Please review and follow government travel guidelines.
              </h6>
              <h6 className="mx-2">
                <a className={styles.alertLink}>Learn more</a>
              </h6>
            </div>
            <Row>
              <Col md={8}>
                <div className="mx-5 d-flex justify-content-around">
                  <Col key={uuidv4()} className="m-1">
                    <ListItem item={this.props.data} />
                  </Col>
                </div>
              </Col>
              {this.state.showMap === true ? <Col md={4} style={{ marginLeft: "-200px", marginTop: 10 }}>
                <MapContainer location={co_ordinates} closeMap={this.closeMap} />
              </Col> : ''}

            </Row>
            <div className="mt-3 d-flex justify-content-center"></div>
          </>
        ) : (
            <>
              <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered={true}
                show={true}
              >
                <Modal.Body>
                  <Row className="text-center">
                    <Col>
                      <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
            </>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.userReducer.data,
  isLoading: state.userReducer.isLoading,
  showMoreFilter: state.userReducer.showMoreFilter,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (payload) => dispatch(getData(payload)),
  closeCancellationFlexibility: () => dispatch(closeCancellationFlexibility()),
  getTypeOfPlace: () => dispatch(getTypeOfPlace()),
  getAmenities: () => dispatch(getAmenities()),
  getFacilities: () => dispatch(getFacilities()),
  getPropertyType: () => dispatch(getPropertyType()),
  showMoreFilters: () => dispatch(showMoreFilters()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Lisiting);
